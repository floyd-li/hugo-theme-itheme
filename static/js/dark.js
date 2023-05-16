var themeLink = document.getElementById("theme-link");
var darkModeFile = "/css/dark.css";
var lightModeFile = "/css/global.css";
var darkModeIcon = document.getElementById("dark-mode-icon");

// Function to toggle between dark mode and light mode
function toggleMode() {
  var currentTheme = themeLink.getAttribute("href");
  if (currentTheme === lightModeFile) {
    themeLink.setAttribute("href", darkModeFile);
    darkModeIcon.classList.remove("fa-moon");
    darkModeIcon.classList.add("fa-sun");
    localStorage.setItem("theme", "dark"); // Store selected theme in localStorage
  } else {
    themeLink.setAttribute("href", lightModeFile);
    darkModeIcon.classList.remove("fa-sun");
    darkModeIcon.classList.add("fa-moon");
    localStorage.setItem("theme", "light"); // Store selected theme in localStorage
  }
}

// Function to detect system theme and set mode accordingly
function detectSystemTheme() {
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    themeLink.setAttribute("href", darkModeFile);
    darkModeIcon.classList.remove("fa-moon");
    darkModeIcon.classList.add("fa-sun");
    localStorage.setItem("theme", "dark"); // Store selected theme in localStorage
  } else {
    themeLink.setAttribute("href", lightModeFile);
    darkModeIcon.classList.remove("fa-sun");
    darkModeIcon.classList.add("fa-moon");
    localStorage.setItem("theme", "light"); // Store selected theme in localStorage
  }
}

// Add event listener to the icon element for toggling mode
darkModeIcon.addEventListener("click", function() {
  toggleMode();
});

// Retrieve stored theme from localStorage and set initial mode accordingly
var storedTheme = localStorage.getItem("theme");
if (storedTheme) {
  if (storedTheme === "dark") {
    themeLink.setAttribute("href", darkModeFile);
    darkModeIcon.classList.remove("fa-moon");
    darkModeIcon.classList.add("fa-sun");
  } else {
    themeLink.setAttribute("href", lightModeFile);
    darkModeIcon.classList.remove("fa-sun");
    darkModeIcon.classList.add("fa-moon");
  }
} else {
  // If no stored theme, detect system theme and set mode accordingly
  detectSystemTheme();
}
