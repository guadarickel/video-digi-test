function playGif(card) {
    const video = card.querySelector('.hover-video');
    video.play();
}

function pauseGif(card) {
    const video = card.querySelector('.hover-video');
    video.pause();
    video.currentTime = 0; // Reinicia el video
}
