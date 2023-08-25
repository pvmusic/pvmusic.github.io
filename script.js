const themeToggle = document.querySelector('.theme-toggle');
const chooseMusicBtn = document.querySelector('.choose-music');
const body = document.body;
const audioPlayer = document.querySelector('audio');
const songTitle = document.querySelector('.song-title');
const artistName = document.querySelector('.artist');
const musicFileInput = document.getElementById('music-file');

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
});

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
    artistName.textContent = 'Unknown Artist'; // You can update this based on your data
}

// You can continue to add more functionality to control the music player and update the UI.
