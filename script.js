const themeToggle = document.querySelector('.theme-toggle');
const chooseMusicBtn = document.querySelector('.choose-music');
const body = document.body;
const audioPlayer = document.querySelector('audio');
const songTitle = document.querySelector('.song-title');
const artistName = document.querySelector('.artist');
const musicFileInput = document.getElementById('music-file');



themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const isDarkTheme = body.classList.contains('dark-theme');
    updateTheme(isDarkTheme);
});

function updateTheme(isDarkTheme) {
    if (isDarkTheme) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Check user's theme preference from localStorage
function checkThemePreference() {
    const themePreference = localStorage.getItem('theme');
    if (themePreference === 'dark') {
        body.classList.add('dark-theme');
    }
}

// Initialize theme preference on page load
checkThemePreference();



chooseMusicBtn.addEventListener('click', () => {
    musicFileInput.click();
});

musicFileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        loadMusic(file);
    }
});

function loadMusic(file) {
    const musicURL = URL.createObjectURL(file);
    audioPlayer.src = musicURL;
    songTitle.textContent = file.name;
    artistName.textContent = 'Unknown Artist'; 
}

