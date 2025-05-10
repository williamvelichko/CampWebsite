"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles/Video.module.scss";

export const Video = () => {
  const [videoSrc, setVideoSrc] = useState({
    webm: "/camp_invite_vertical.webm",
    mp4: "/camp_invite_vertical.mp4",
  });

  useEffect(() => {
    const updateVideoSource = () => {
      if (window.innerWidth < 600) {
        setVideoSrc({
          webm: "/campvideo2025V.webm",
          mp4: "/campvideo2025V.mp4",
        });
      } else {
        setVideoSrc({
          webm: "/campvideo2025H.webm",
          mp4: "/campvideo2025H.mp4",
        });
      }
    };

    updateVideoSource();
    window.addEventListener("resize", updateVideoSource);

    return () => window.removeEventListener("resize", updateVideoSource);
  }, []);
  return (
    <section className={styles.videoSection}>
      <video
        key={videoSrc.mp4}
        controls
        autoPlay
        loop
        playsInline
        preload="auto"
        className={styles.video}
      >
        <source src={videoSrc.webm} type="video/webm" />
        <source src={videoSrc.mp4} type="video/mp4" />
        <track
          src="/path/to/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};
