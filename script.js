// Clock Elements
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const day = document.getElementById("day");
const dateEl = document.getElementById("date");
const ampm = document.getElementById("ampm");
const tickSound = document.getElementById("tickSound");

// Play tick sound function
function playTick() {
  tickSound.currentTime = 0;
  tickSound.play();
}

// Clock Function
setInterval(() => {
  const currentTime = new Date();
  let hour = currentTime.getHours();
  const ampmText = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12;

  hours.textContent = hour.toString().padStart(2, "0");
  minutes.textContent = currentTime.getMinutes().toString().padStart(2, "0");
  seconds.textContent = currentTime.getSeconds().toString().padStart(2, "0");
  ampm.textContent = ampmText;

  playTick();

  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  day.textContent = days[currentTime.getDay()];
  dateEl.textContent = `${currentTime.getDate()} ${months[currentTime.getMonth()]} ${currentTime.getFullYear()}`;
}, 1000);

// Calendar Generation
const monthYear = document.getElementById("monthYear");
const calendarBody = document.getElementById("calendarBody");

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function generateCalendar(month, year) {
  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();
  const today = new Date();

  const months = ["January","February","March","April","May","June",
                  "July","August","September","October","November","December"];
  const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

  monthYear.textContent = `${months[month]} ${year}`;
  let table = `<table><thead><tr>${days.map(d=>`<th>${d}</th>`).join('')}</tr></thead><tbody><tr>`;

  for (let i = 0; i < firstDay; i++) table += `<td></td>`;

  for (let date = 1; date <= lastDate; date++) {
    const isToday = date === today.getDate() && month === today.getMonth() && year === today.getFullYear()
      ? 'class="today"' : '';
    table += `<td ${isToday}>${date}</td>`;
    if ((firstDay + date) % 7 === 0) table += `</tr><tr>`;
  }

  table += "</tr></tbody></table>";
  calendarBody.innerHTML = table;
}
generateCalendar(currentMonth, currentYear);

// Month Navigation
document.getElementById("nextMonth").addEventListener("click", () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  generateCalendar(currentMonth, currentYear);
});

document.getElementById("prevMonth").addEventListener("click", () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  generateCalendar(currentMonth, currentYear);
});

// Buttons
const seeCalendarBtn = document.getElementById("seeCalendarBtn");
const settingsBtn = document.getElementById("settingsBtn");
const settingsPanel = document.getElementById("settingsPanel");
const calendarBox = document.getElementById("calendarBox");

seeCalendarBtn.addEventListener("click", () => {
  calendarBox.classList.toggle("hidden");
  seeCalendarBtn.textContent = calendarBox.classList.contains("hidden")
    ? "📅 See Calendar"
    : "📅 Hide Calendar";
});

settingsBtn.addEventListener("click", () => {
  settingsPanel.classList.toggle("hidden");
});

// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  localStorage.setItem("theme", document.body.classList.contains("light") ? "light" : "dark");
});

// Background Customization
const bgColorPicker = document.getElementById("bgColorPicker");
const bgImagePicker = document.getElementById("bgImagePicker");

bgColorPicker.addEventListener("input", (e) => {
  document.body.style.background = e.target.value;
  localStorage.setItem("bgColor", e.target.value);
});

bgImagePicker.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      document.body.style.backgroundImage = `url(${reader.result})`;
      document.body.style.backgroundSize = "cover";
      localStorage.setItem("bgImage", reader.result);
    };
    reader.readAsDataURL(file);
  }
});

// Load Saved Preferences
window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");
  const savedColor = localStorage.getItem("bgColor");
  const savedImage = localStorage.getItem("bgImage");

  if (savedTheme === "light") document.body.classList.add("light");
  if (savedColor) document.body.style.background = savedColor;
  if (savedImage) {
    document.body.style.backgroundImage = `url(${savedImage})`;
    document.body.style.backgroundSize = "cover";
  }
});
