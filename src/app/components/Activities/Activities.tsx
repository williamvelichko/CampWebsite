import React from "react";
import styles from "./styles/Expectations.module.scss";
import Expectations from "./components/Expectations";

const Activities = () => {
  return (
    <section className={styles.activities}>
      <div className={styles.inner}>
        <div className={styles.activityContent}>
          <p className={styles.eyebrow}>At Camp</p>
          <h3>What to Expect</h3>
          <p>
            Everything we do is centered on Jesus Christ — the preaching of His
            gospel, joyful worship, deep fellowship, and devoted prayer.
          </p>
        </div>
        <Expectations />
      </div>
    </section>
  );
};

export default Activities;
