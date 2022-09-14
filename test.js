var salarySum=0;
var salary=0;
function displayBtn(){
  const finDate = document.getElementById("inputStartDate").value; //YYYY-MM-DD
  const finTime = document.getElementById("inputStartTime").value; //HH-MM-SS
  const salary = document.getElementById("inputSalary").value;

  document.getElementById("outputStartDate").textContent = finDate;
  document.getElementById("outputStartTime").textContent = finTime;
  document.getElementById("outputSalary").textContent = salary;
  calcSalary();
  setInterval(countSalary,1000);
}

function calcSalary(){
  salary = Number(document.getElementById("inputSalary").value);
  salary = Math.round((salary/3600) * 100) / 100;
  salary = Math.floor(salary * 100) / 100;
}

function countSalary(){
  salarySum += salary;

  document.getElementById("outputSalary").textContent = salarySum;
}
