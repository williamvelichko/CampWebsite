import React from "react";
import styles from "./styles/Video.module.scss";

export const Video = () => {
  return (
    <section className={styles.videoSection}>
      <video
        controls
        autoPlay
        loop
        playsInline
        preload="auto"
        className={styles.video}
      >
        <source src="/camp_invite_4.webm" type="video/webm" />
        <source src="/camp_invite_4.mp4" type="video/mp4" />
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
