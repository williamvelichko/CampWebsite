import React from "react";
import styles from "./styling/About.module.scss";

const About = () => {
  return (
    <section className={styles.about} id="home-scripture">
      <div className={styles.content}>
        <p className={styles.eyebrow}>Our Theme Verse</p>
        <blockquote>
          For I am not ashamed of the gospel, for it is the power of God for
          salvation to everyone who believes.
        </blockquote>
        <p className={styles.reference}>Romans 1:16</p>
        <div className={styles.rule} aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>
    </section>
  );
};

export default About;
