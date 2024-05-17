import React from "react";
import styles from "../../page.module.scss";
import Header from "../Header/Header";

export const MainSection = () => {
  return (
    <div className={styles.hero}>
      <Header />
      <img
        src="/mountainExample.jpg"
        alt="Camp Adventure"
        className={styles.heroImage}
      />
      <div className={styles.overlay}>
        <h1 className={styles.title}>Kingdom Of God</h1>
        <p>Join us on an unforgettable Camp</p>
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
