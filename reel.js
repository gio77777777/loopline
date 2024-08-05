let currentReel = 0;
const reels = document.querySelectorAll('.reel');
const totalReels = reels.length;

function showReel(index) {
    reels.forEach((reel, i) => {
        const video = reel.querySelector('video');
        if (i === index) {
            reel.style.transform = 'translateY(0)';
            video.play();
        } else {
            reel.style.transform = `translateY(${100 * (i - index)}%)`;
            video.pause();
            video.currentTime = 0;
        }
    });
}

showReel(currentReel);

window.addEventListener('wheel', function(event) {
    if (event.deltaY > 0) {
        currentReel = (currentReel + 1) % totalReels;
    } else {
        currentReel = (currentReel - 1 + totalReels) % totalReels;
    }
    showReel(currentReel);
});

const likeButtons = document.querySelectorAll('.like-button');
likeButtons.forEach(button => {
    button.addEventListener('click', function() {
        const likeCountSpan = this.querySelector('.like-count');
        let likeCount = parseInt(likeCountSpan.textContent, 10);
        likeCount++;
        likeCountSpan.textContent = likeCount;
    });
});
