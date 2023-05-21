function addDarkmodeWidget() {
  // Check if the current page meets the condition for enabling Darkmode.js
  if (!document.body.classList.contains('theme-dark')) {
    const options = {
      bottom: '64px',
      right: 'unset',
      left: '32px',
      time: '0.5s',
      mixColor: '#fff',
      backgroundColor: '#fff',
      buttonColorDark: '#100f2c',
      buttonColorLight: '#fff',
      saveInCookies: true,
      label: '',
      autoMatchOsTheme: true
    };

    const darkmode = new Darkmode(options);

    // Replace the default button with your own button
    const myButton = document.getElementById('my-darkmode-button');
    const darkModeIcon = document.getElementById('dark-mode-icon');

    myButton.addEventListener('click', () => {
      darkmode.toggle();
      toggleDarkModeIcon(darkModeIcon, darkmode.isActivated());
    });
  }
}

function toggleDarkModeIcon(iconElement, isDarkMode) {
  if (isDarkMode) {
    iconElement.classList.remove('fa-sun');
    iconElement.classList.add('fa-moon');
    iconElement.style.color = '#fff'; // Set the icon color to white in dark mode
  } else {
    iconElement.classList.remove('fa-moon');
    iconElement.classList.add('fa-sun');
    iconElement.style.color = '#000'; // Set the icon color to black in light mode
  }
}

window.addEventListener('load', addDarkmodeWidget);
