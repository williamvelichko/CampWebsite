import React from "react";
import Head from "next/head";
import styles from "./styles/Registration.module.scss";

const Registration = () => {
  // External URL for registration
  const REGISTRATION_URL = "https://supersplash.com/your-camp-registration";

  return (
    <>
      <Head>
        <title>Camp Registration</title>
        <meta name="description" content="Register for our upcoming camp" />
      </Head>

      <main className={styles.mainContainer}>
        <header className={styles.header}>
          <h1 className={styles.title}>Camp Registration</h1>
          <p className={styles.subtitle}>
            Join us for an unforgettable experience!
          </p>
        </header>

        <section className={styles.pricingSection}>
          <h2 className={styles.price}>$100 General Registration</h2>
          <p className={styles.priceDescription}>
            Includes all activities and meals
          </p>
        </section>

        <section className={styles.ctaSection}>
          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.registerButton}
            aria-label="Register for camp on Supersplash"
          >
            Register Now
          </a>
        </section>
      </main>
    </>
  );
};

export default Registration;
