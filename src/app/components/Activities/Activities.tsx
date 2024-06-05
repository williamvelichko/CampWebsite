import React from "react";
import styles from "../../page.module.scss";
import Expectations from "./components/Expectations";

const Activities = () => {
  return (
    <section className={styles.activities}>
      <ul>
        <li>
          <h3>What to Expect</h3>
          <p>
            At our camp, you can expect a safe and inclusive environment,
            delicious meals, comfortable accommodations, and a chance to make
            lifelong friendships. Get ready for an amazing adventure!
          </p>
        </li>
      </ul>
      <Expectations />
    </section>
  );
};

export default Activities;
