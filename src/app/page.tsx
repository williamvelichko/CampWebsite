// pages/index.js

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <img
          src="/camp-hero.jpg"
          alt="Camp Adventure"
          className={styles.heroImage}
        />
        <div className={styles.overlay}>
          <h1 className={styles.title}>Kingdom Of God</h1>
          <a
            href="https://buy.stripe.com/test_3cs1783Fx4HZ6iccMM"
            className={styles.registerButton}
          >
            Register
          </a>
        </div>
      </div>
      <main className={styles.main}>
        <section className={styles.about}>
          <h2>About Camp Adventure</h2>
          <p>
            Camp Adventure offers an unforgettable outdoor experience for
            children and teens. Located in the heart of nature, our camp
            provides a safe and exciting environment for campers to explore,
            learn, and make lifelong memories.
          </p>
          <p>
            Our diverse range of activities includes hiking, swimming, arts and
            crafts, team sports, and more. Our experienced staff are dedicated
            to ensuring every camper has a rewarding and enriching experience.
          </p>
        </section>
        <section className={styles.activities}>
          <h2>Activities</h2>
          <ul>
            <li>Hiking</li>
            <li>Swimming</li>
            <li>Arts and Crafts</li>
            <li>Team Sports</li>
            {/* Add more activities as needed */}
          </ul>
        </section>
        <section className={styles.registration}>
          <h2>Register Now!</h2>
          <p>
            Don't miss out on the adventure of a lifetime. Reserve your spot
            today!
          </p>
          <a
            href="https://buy.stripe.com/test_3cs1783Fx4HZ6iccMM"
            className={styles.registerButton}
          >
            Register
          </a>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2024 Camp Adventure. All rights reserved.</p>
      </footer>
    </div>
  );
}
