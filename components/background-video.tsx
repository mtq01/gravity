"use client";

/*
  Background video.
  Plays a muted, looping video behind a section. On top of the video we
  place a dark see-through layer (the "scrim") so white text stays easy
  to read.

  Three things this component handles:
    1. Lazy loading. The video file only downloads when the section is
       close to the screen, which saves data on first load.
    2. A pause button. Moving backgrounds must be stoppable (WCAG 2.2.2).
    3. Reduced motion. If the visitor asks their device for less motion,
       we do not play the video at all and the section falls back to a
       solid dark color.
*/

import { useEffect, useRef, useState } from "react";

type BackgroundVideoProps = {
  /* Path to the .mp4 file, for example "/videos/orbit-video.mp4" */
  videoSource: string;
  /* Still image shown before the video loads */
  posterImage: string;
};

export function BackgroundVideo({
  videoSource,
  posterImage,
}: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  /* True while the visitor has the video paused. Starts playing. */
  const [isPaused, setIsPaused] = useState(false);

  /* True when the device asks for less motion. Then we skip the video. */
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  /* Check the reduced motion setting and keep watching for changes. */
  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    function handleMotionPreferenceChange() {
      setPrefersReducedMotion(motionQuery.matches);
    }

    handleMotionPreferenceChange();
    motionQuery.addEventListener("change", handleMotionPreferenceChange);

    return () => {
      motionQuery.removeEventListener("change", handleMotionPreferenceChange);
    };
  }, []);

  /*
    Load and start the video only when it scrolls near the viewport.
    We start a little early (rootMargin) so it is ready in time.
  */
  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const videoElement = videoRef.current;
    if (!videoElement) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          /* Set the source now so the browser starts downloading it. */
          if (!videoElement.src) {
            videoElement.src = videoSource;
            videoElement.load();
          }

          const playAttempt = videoElement.play();
          if (playAttempt) {
            playAttempt.catch(() => {
              /* Some browsers block autoplay. That is fine, the poster shows. */
            });
          }

          observer.unobserve(videoElement);
        });
      },
      { rootMargin: "200px" }
    );

    observer.observe(videoElement);

    return () => {
      observer.disconnect();
    };
  }, [prefersReducedMotion, videoSource]);

  /* Flip between play and pause when the button is pressed. */
  function handleToggleClick() {
    const videoElement = videoRef.current;
    if (!videoElement) {
      return;
    }

    if (videoElement.paused) {
      videoElement.play().catch(() => {
        /* ignore autoplay errors */
      });
      setIsPaused(false);
    } else {
      videoElement.pause();
      setIsPaused(true);
    }
  }

  return (
    <>
      <video
        ref={videoRef}
        className="background-video absolute inset-0 -z-10 h-full w-full object-cover"
        poster={posterImage}
        muted
        loop
        playsInline
        /* No autoPlay attribute: playback is started by the observer above. */
      />

      {/* Dark layer that keeps the text readable. Hidden from screen readers. */}
      <div className="video-scrim" aria-hidden="true" />

      {/*
        Pause / play control.
        aria-pressed is true when the visitor has paused the video.
      */}
      {!prefersReducedMotion && (
        <button
          type="button"
          onClick={handleToggleClick}
          aria-pressed={isPaused}
          aria-label="Pause background video"
          className="absolute bottom-0 right-0 z-10 cursor-pointer border-0 bg-transparent px-4 py-2"
        >
          <span aria-hidden="true">
            <img
              src={isPaused ? "/icons/play.svg" : "/icons/pause.svg"}
              alt=""
              width={48}
              height={48}
              className="w-6"
            />
          </span>
        </button>
      )}
    </>
  );
}
