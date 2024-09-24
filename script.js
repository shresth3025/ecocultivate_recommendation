let vantaEffect;

function initVanta() {
  vantaEffect = VANTA.NET({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    //minHeight: 200.00,
    //minWidth: 200.00,
    color: 0x4455CC,
    backgroundColor: 0x111111,
    maxDistance: 20.,
    netSpeed: 8.,
    points: 20.,
    scale: 1.,
    scaleMobile: 1.,
    spacing: 15.,
  });
}

function changeEffect(effect) {
  switch(effect) {
    case 'net':
      vantaEffect.setOptions({
        color: Math.random() * 0xffffff,
        backgroundColor:  Math.random() * 0x000040,
        maxDistance: Math.random() * 30 + 1.0,
      });
      break;
  }
}

document.addEventListener("DOMContentLoaded", initVanta);

// Fullscreen toggle functionality
const fullscreenToggle = document.getElementById('fullscreen-toggle');

fullscreenToggle.addEventListener('click', () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch((err) => {
      console.log(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
    });
  } else {
    document.exitFullscreen();
  }
});

document.addEventListener('fullscreenchange', () => {
  if (document.fullscreenElement) {
    fullscreenToggle.textContent = 'Exit Fullscreen';
  } else {
    fullscreenToggle.textContent = 'Toggle Fullscreen';
  }
});