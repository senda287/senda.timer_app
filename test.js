var salarySum=0;
function displayBtn(){
  const finDate = document.getElementById("inputStartDate").value; //YYYY-MM-DD
  const finTime = document.getElementById("inputStartTime").value; //HH-MM-SS
  const salary = document.getElementById("inputSalary").value;

  document.getElementById("outputStartDate").textContent = finDate;
  document.getElementById("outputStartTime").textContent = finTime;
  document.getElementById("outputSalary").textContent = salary;
  setInterval(countSalary,10000);
}

function countSalary(){
  let salary = Number(document.getElementById("inputSalary").value);
  salary = Math.floor(salary / 360);
  salarySum += salary;

  document.getElementById("outputSalary").textContent = salarySum;
}
