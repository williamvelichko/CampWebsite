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
            At our camp, you can expect a safe and inclusive environment,
            delicious meals, comfortable accommodations, and a chance to make
            lifelong friendships. Get ready for an amazing adventure!
          </p>
        </div>
      </section>
      <Expectations />
    </div>
  );
};

export default Activities;
