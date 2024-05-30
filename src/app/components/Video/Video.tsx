import React from "react";
import styles from "../../page.module.scss";

export const Video = () => {
  return (
    <section className={styles.videoSection}>
      <video autoPlay loop playsInline preload="auto" className={styles.video}>
        <source src="/campVideo.webm" type="video/webm" />
        <source src="/campVideo.mp4" type="video/mp4" />
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
