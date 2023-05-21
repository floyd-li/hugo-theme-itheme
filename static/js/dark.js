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
        label: '🌓',
        autoMatchOsTheme: true
      };
    
      const darkmode = new Darkmode(options);
      darkmode.showWidget();
    } else {
      console.log('Darkmode.js is excluded for pages with theme-dark class');
    }
  }
  
  window.addEventListener('load', addDarkmodeWidget);
  