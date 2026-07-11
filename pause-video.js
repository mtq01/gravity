document.querySelectorAll('.video-toggle').forEach((toggle) => {
  const video = toggle.closest('section').querySelector('[data-video-toggle]');

  if (!video) return; // safety check in case markup is missing a video

  toggle.addEventListener('click', () => {
    const isPlaying = !video.paused;

    if (isPlaying) {
      video.pause();
      toggle.setAttribute('aria-pressed', 'true');
      toggle.setAttribute('aria-label', 'Play background video');
      toggle.querySelector('span').textContent = '▶';
    } else {
      video.play();
      toggle.setAttribute('aria-pressed', 'false');
      toggle.setAttribute('aria-label', 'Pause background video');
      toggle.querySelector('span').textContent = '⏸';
    }
  });
});