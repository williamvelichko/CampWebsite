import React from "react";
import styles from "./styling/MainSection.module.scss";
import Image from "next/image";
import Link from "next/link";

export const MainSection = () => {
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
        {/* <h1 className={styles.title}>Bible Camp 2025</h1> */}
        <h3 className={styles.topic}>Glory Of God</h3>
        <p className={styles.titleSub}>Join us on an unforgettable Camp</p>
        <Link
          href="/registration"
          // href="https://buy.stripe.com/6oE4hJaxT010bFCfYY"
          className={styles.registerButton}
        >
          Register
        </Link>
      </div>
      <div className={styles.bounceArrow}>
        <span>&#8595;</span>
      </div>
    </div>
  );
};
