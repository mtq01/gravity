// play/pause controls on video backgrounds

document.querySelectorAll('.video-toggle').forEach((toggle) => {
  const video = toggle.closest('section').querySelector('[data-video-toggle]');

  if (!video) return; // safety check in case markup is missing a video

  const icon = toggle.querySelector('span img'); // grab the actual <img>

  toggle.addEventListener('click', () => {
    const isPlaying = !video.paused;

    if (isPlaying) {
      video.pause();
      toggle.setAttribute('aria-pressed', 'true');
      toggle.setAttribute('aria-label', 'Play background video');
      // play icon
      icon.src = 'assets/icons/play.svg';
    } else {
      video.play();
      toggle.setAttribute('aria-pressed', 'false');
      toggle.setAttribute('aria-label', 'Pause background video');
      // pause icon
      icon.src = 'assets/icons/pause.svg';
    }
  });
});


// lazy loading for BG videos
const lazyVideos = document.querySelectorAll('video[data-video-toggle]');

const videoObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    const video = entry.target;
    const source = video.querySelector('source[data-src]');

    if (source) {
      source.src = source.dataset.src;
      video.load();
      video.play();
    }

    observer.unobserve(video); // only need to do this once per video
  });
}, {
  rootMargin: '200px'
});

lazyVideos.forEach((video) => videoObserver.observe(video));