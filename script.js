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

//Splitting the year
const CC = Math.floor(year / 100);
const YY = year % 100;

//calculating the day
const dayNumber = Math.floor(

  (
    (4 * CC)
    -
    (2 * CC - 1)
    +
    ((5 * YY) / 4)
    +
    ((26 *(month + 1)) /10)
    +
    day
  )
  % 7
);


