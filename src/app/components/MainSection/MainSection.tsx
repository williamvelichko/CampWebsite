"use client";

import React, { useEffect, useState } from "react";
import styles from "./styling/MainSection.module.scss";
import Image from "next/image";
import Link from "next/link";

export const MainSection = () => {
  const [imageSrc, setImageSrc] = useState("/GloryOfGodVert.webp");

  useEffect(() => {
    const updateImageSrc = () => {
      const isMobile = window.innerWidth <= 800;

      const webpSupported =
        document
          .createElement("canvas")
          .toDataURL("image/webp")
          .indexOf("data:image/webp") === 0;

      if (webpSupported) {
        setImageSrc(
          isMobile ? "/GloryOfGodVert.webp" : "/GloryOfGodHorizontal.webp"
        );
      } else {
        setImageSrc(
          isMobile ? "/GloryOfGodVert.jpg" : "/GloryOfGodHorizontal.jpg"
        );
      }
    };

    updateImageSrc();
    window.addEventListener("resize", updateImageSrc);

    return () => window.removeEventListener("resize", updateImageSrc);
  }, []);

  return (
    <div className={styles.hero}>
      <div className={styles.imageWrapper}>
        <Image
          src={imageSrc}
          alt="Camp Adventure"
          layout="fill"
          className={styles.image}
          objectFit="cover"
          priority
        />
      </div>
      <div className={styles.overlay}>
        <div className={styles.textContainer}>
          <Link href="/registration" className={styles.registerButton}>
            Register
          </Link>
          <div className={styles.bounceArrow}>
            <span>&#8595;</span>
          </div>
        </div>
      </div>
    </div>
  );
};
