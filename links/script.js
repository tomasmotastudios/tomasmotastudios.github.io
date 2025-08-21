        document.addEventListener("DOMContentLoaded", function() {
            // Show loading screen
            document.getElementById('loading-screen').style.display = 'flex';

            // Simulate loading delay
            setTimeout(function() {
                // Hide loading screen
                document.getElementById('loading-screen').style.display = 'none';

                // Small delay to ensure the loading screen is completely hidden
                setTimeout(function() {
                    // Show main content
                    document.getElementById('main-content').style.display = 'block';
                }, 100); // 100ms delay to ensure the loading screen is completely hidden
            }, 2000); // 2 seconds delay for demonstration purposes
        });
    
    // main js
    const body = document.body;
    const themeBtn = document.querySelector('.theme-toggle');

    // Carregar tema salvo
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      body.classList.add('dark');
      themeBtn.textContent = '☀️ White Mode';
    }

    function toggleTheme() {
      const isDark = body.classList.toggle('dark');
      if (isDark) {
        localStorage.setItem('theme', 'dark');
        themeBtn.textContent = '☀️ White Mode';
      } else {
        localStorage.setItem('theme', 'light');
        themeBtn.textContent = '🌙 Dark Mode';
      }
    }
