import React from "react";
import styles from "./styles/Video.module.scss";

const PROMO_VIDEO_SRC = "/BibleCamp2026PromoV3.mp4";

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
        <source src={PROMO_VIDEO_SRC} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};
