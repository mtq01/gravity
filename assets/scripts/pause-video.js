// ++++++ play/pause controls on video backgrounds ++++++++++++++++++++++++++++++++++++

document.querySelectorAll('.video-toggle').forEach((toggle) => {
  const video = toggle.closest('section').querySelector('[data-video-toggle]');

  if (!video) return; // safety check in case markup is missing a video

  // grab the actual <img> (set icon)
  const icon = toggle.querySelector('span img'); 

  toggle.addEventListener('click', () => {
    const isPlaying = !video.paused;

    if (isPlaying) {
      video.pause();
      // SR announces "Pause background video, pressed" (video paused)
      toggle.setAttribute('aria-pressed', 'true');
      // play icon
      icon.src = 'assets/icons/play.svg';
    } else {
      video.play();
      // SR announces "Pause background video, not pressed" (video playing)
      toggle.setAttribute('aria-pressed', 'false');

      /* pause icon (checks for null - required bcuz of how icon is set above)
         - without this check, if the icon was null, a runtime error would throw. 
         - with it, no error throws & the toggle state logic continues to work fine. */
      if (icon) icon.src = 'assets/icons/pause.svg';
    }
  });
});


// ++++++ lazy loading for BG videos ++++++++++++++++++++++++++++++++++++

// get all background videos on the page
const lazyVideos = document.querySelectorAll('video[data-video-toggle]');

// create an observer that watches videos & says when one scrolls into view
const videoObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    // isIntersecting is true when the video is visible.
    // if it's not visible yet, stop here and do nothing.
    if (!entry.isIntersecting) return;

    const video = entry.target;
    const source = video.querySelector('source[data-src]');

    if (source) {
      // move the real video URL from 'data-src' into 'src', so it starts loading.
      source.src = source.dataset.src;
      video.load();
      video.play();
    }

    // stop watching this video (its loaded now)
    observer.unobserve(video); 
  });
}, {
  // start loading before the video actually comes into view
  rootMargin: '200px'
});

// start watching each video for when it comes into view
lazyVideos.forEach((video) => videoObserver.observe(video));