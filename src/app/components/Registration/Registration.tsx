import React from "react";
import Head from "next/head";
import styles from "./styles/Registration.module.scss";

const Registration = () => {
  const REGISTRATION_URL =
    "https://subsplash.com/bbc-ca/lb/ev/+pfw5ftp/register";

  return (
    <div className={styles.divContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}> Register Today for Bible Camp 2025!</h1>
      </div>
      <div className={styles.deadlineSection}>
        <h2 className={styles.deadlineTitle}>Important Dates</h2>
        <ul className={styles.deadlineList}>
          <li>
            <strong>Registration Deadline:</strong> July 1, 2025
          </li>
          <li>
            <strong>No Refunds After:</strong> August 1, 2025
          </li>
        </ul>
      </div>

      <div className={styles.ctaSection}>
        <iframe
          src={REGISTRATION_URL}
          title="Camp Registration Form"
          className={styles.iframe}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Registration;
