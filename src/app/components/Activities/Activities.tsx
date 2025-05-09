import React from "react";
import styles from "./styles/Expectations.module.scss";
import Expectations from "./components/Expectations";

const Activities = () => {
  return (
    <div>
      <section className={styles.activities}>
        <div className={styles.activityContent}>
          <h3>What to Expect</h3>
          <p>
            At our camp, everything we do is centered around worshiping God in
            Spirit and in Truth. You can expect to be equipped and encouraged
            through the preaching of God&apos;s Word, joyful worship through
            singing, meaningful fellowship, and devoted prayer.
          </p>
        </div>
      </section>
      <Expectations />
    </div>
  );
};

export default Activities;
