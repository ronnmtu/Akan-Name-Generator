//Array of names, weekdays and meanings
const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const meanings = {
  Kwasi: "Traditionally given to boys born on Sunday.",
  Kwadwo: "Given to boys born on Monday and associated with peace and calmness.",
  Kwabena: "Traditionally given to boys born on Tuesday.",
  Kwaku: "Given to boys born on Wednesday.",
  Yaw: "Traditionally given to boys born on Thursday.",
  Kofi: "One of the most well-known Akan names, traditionally given to boys born on Friday.",
  Kwame: "Given to boys born on Saturday.",
  Akosua: "Traditionally given to girls born on Sunday.",
  Adwoa: "Traditionally given to girls born on Monday.",
  Abenaa: "Traditionally given to girls born on Tuesday.",
  Akua: "Traditionally given to girls born on Wednesday.",
  Yaa: "Traditionally given to girls born on Thursday.",
  Afua: "Traditionally given to girls born on Friday.",
  Ama: "Traditionally given to girls born on Saturday."
};

const form = document.getElementById("akanForm");
const output = document.getElementById("output");

function isValidDate(day, month, year) {
  const date = new Date(year, month - 1, day);
  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
}

function showOutput(html) {
  if (!output) {
    return;
  }

  output.innerHTML = html;
  output.classList.remove("show");
  void output.offsetWidth;
  output.classList.add("show");
  output.scrollIntoView({ behavior: "smooth", block: "start" });
}

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    //Reading inputs
    const day = Number(document.getElementById("day").value);
    const month = Number(document.getElementById("month").value);
    const year = Number(document.getElementById("year").value);
    const gender = document.querySelector('input[name="gender"]:checked');

    //Validating inputs
    if (
      day < 1 ||
      day > 31 ||
      month < 1 ||
      month > 12 ||
      year <= 0 ||
      gender === null
    ) {
      alert("Please put a valid date and select your gender.");

      return;
    }

    //Splitting the year
    const CC = Math.floor(year / 100);
    const YY = year % 100;

    //calculating the day
    const dayNumber = Math.floor(

      (
        (4 * CC) -
        (2 * CC - 1) +
        ((5 * YY) / 4) +
        ((26 * (month + 1)) / 10) +
        day
      ) % 7
    );

    const akanName = gender.value === "male" ? maleNames[dayNumber] : femaleNames[dayNumber];
    const weekday = weekDays[dayNumber];

    showOutput(`
      <h3>${akanName}</h3>
      <p><strong>Day of birth:</strong> ${weekday}</p>
      <p>You were born on <strong>${weekday}</strong>, so your Akan name is <strong>${akanName}</strong>.</p>
      <p>Every Akan day name reflects an important cultural tradition passed down through generations in Ghana.</p>
      <p>${meanings[akanName]}</p>
    `);
  });
}



