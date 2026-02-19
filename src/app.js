document.addEventListener('DOMContentLoaded', () => {
    console.log("%c STOP! ", "background: red; color: white; font-size: 24px; font-weight: bold;");
    console.log("%c This area is for authorized agents only. If you found this by mistake, close the window immediately.", "color: red; font-size: 16px;");
    console.log("Agent, your first clue might be hidden in plain sight... or in the source.");

    const landingPage = document.getElementById('landing-page');
    const mainContent = document.getElementById('main-content');
    const startBtn = document.getElementById('start-mission-btn');
    const landingVideo = document.getElementById('landing-video');

    const VIDEO_LOOP_END = 58;
    if (landingVideo) {
        landingVideo.addEventListener('timeupdate', () => {
            if (landingVideo.currentTime >= VIDEO_LOOP_END) {
                landingVideo.currentTime = 0;
            }
        });
    }

    if (startBtn) {
        startBtn.addEventListener('click', () => {
            landingPage.style.opacity = '1';
            landingPage.style.transition = 'opacity 0.8s ease';
            setTimeout(() => {
                landingPage.style.opacity = '0';
            }, 50);
            setTimeout(() => {
                landingPage.classList.add('hidden');
                mainContent.classList.remove('hidden');
                mainContent.style.opacity = '0';
                mainContent.style.transition = 'opacity 0.6s ease';
                setTimeout(() => { mainContent.style.opacity = '1'; }, 30);
            }, 850);
        });
    }

    const missionCards = document.querySelectorAll('.mission-card');
    missionCards.forEach(card => {
        card.addEventListener('click', () => {
            console.log(`Analyzing mission: ${card.id}`);
        });
    });
});
