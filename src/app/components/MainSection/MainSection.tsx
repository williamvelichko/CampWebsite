import React from "react";
import styles from "./styling/MainSection.module.scss";
import Image from "next/image";
import Link from "next/link";

export const MainSection = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.imageWrapper}>
        <Image
          src="/GloryOfGod.jpg"
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
