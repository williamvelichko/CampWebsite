import React from "react";
import Image from "next/image";
import styles from "./styles/Disclaimer.module.scss";

export const Disclaimer = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.imageWrapper}>
        <Image
          src="/mountainExample.jpg"
          alt="Camp Adventure"
          layout="fill"
          objectFit="cover"
          loading="eager"
        />
      </div>
      <div className={styles.overlay}>
        <h1 className={styles.title}>BibleCamp 2025</h1>
        <p className={styles.titleSub}>
          Information for BibleCamp 2025 has not yet been released. Stay tuned
          for updates!
        </p>
      </div>
    </div>
  );
};
