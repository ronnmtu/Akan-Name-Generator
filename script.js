//array of male, female names and dates
const maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];

const femaleNames= ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//form submission
const form = document.getElementById("akanForm");

form.addEventListener("submit", function(event){
  event.preventDefault();
});

//Reading Inputs
const day = Number(document.getElementById("day").value);

const month = Number(document.getElementById("month").value);

const year = Number(document.getElementById("year").value);

const gender = document.querySelector('input[name="gender"]:checked');

//Validating inputs
if(
  day < 1 ||
  day > 31 ||
  month < 1 ||
  month > 12 || 
  year <=0 || 
  gender === null
){
  alert("Please put a valid date and select your gender.");

  return;
}