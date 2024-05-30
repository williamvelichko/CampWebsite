import React from "react";
import styles from "../../page.module.scss";
import Header from "../Header/Header";
import Image from "next/image";

export const MainSection = () => {
  return (
    <div className={styles.hero}>
      {/* <Header /> */}
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
        <h1 className={styles.title}>Bible Camp 2024</h1>
        <h3 className={styles.topic}>Kingdom Of God</h3>
        <p className={styles.titleSub}>Join us on an unforgettable Camp</p>
        <a
          href="https://buy.stripe.com/test_3cs1783Fx4HZ6iccMM"
          className={styles.registerButton}
        >
          Register
        </a>
      </div>
    </div>
  );
};
