"use client";

import React, { useEffect, useState } from "react";
import styles from "./styling/MainSection.module.scss";
import Image from "next/image";
import Link from "next/link";

export const MainSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const imageSrc = isMobile
    ? "/GloryOfGodVert.jpg"
    : "/GloryOfGodHorizontal.jpg";

  return (
    <div className={styles.hero}>
      <div className={styles.imageWrapper}>
        <Image
          src={imageSrc}
          alt="Camp Adventure"
          layout="fill"
          className={styles.image}
          objectFit="cover"
          loading="eager"
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
