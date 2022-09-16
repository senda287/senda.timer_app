var salarySum=0;
var salary=0;
var startYear;
var startMonth;
var startDay;
var startHour;
var startMinute;
var start;
var nowTime;
function displayBtn(){
  getStartTime();
  calcSalary();

  displaySalary();
  setInterval(displaySalary,1000);
}

function getStartTime(){
  //入力内容の取得
  const startDate = document.getElementById("inputStartDate").value; //YYYY-MM-DD
  const startTime = document.getElementById("inputStartTime").value; //HH-MM-SS
  
  //開始時間を取得
  startYear = Number(startDate.substr(0,4));
  startMonth = Number(startDate.substr(5,2));
  startDay = Number(startDate.substr(8,2));
  startHour = Number(startTime.substr(0,2));
  startMinute = Number(startTime.substr(3,2));
  start = new Date(startYear,startMonth-1,startDay,startHour,startMinute);
}

function calcSalary(){
  salary = Number(document.getElementById("inputSalary").value);
  salary = Math.round((salary/3600) * 100) / 100;
  salary = Math.floor(salary * 100) / 100;
}

function displaySalary(){
  const nowTime = new Date(); //現在時間の取得
  const diff =  nowTime.getTime() - start.getTime(); // 開始時間からの経過を取得（ミリ秒）

  // ミリ秒から単位を修正
  const calcHour = Math.floor(diff / 1000 / 60 / 60);
  const calcMin = Math.floor(diff / 1000 / 60) % 60;
  const calcSec = Math.floor(diff / 1000) % 60;
  const sec = Math.floor(diff / 1000);

  document.getElementById("outputHour").textContent = calcHour;
  document.getElementById("outputMin").textContent = calcMin;
  document.getElementById("outputSec").textContent = calcSec;
  document.getElementById("outputSalary").textContent = sec * salary;
}
