import React from "react";
import styles from "../../page.module.scss";
import Expectations from "./components/Expectations";

const Activities = () => {
  return (
    <section className={styles.activities}>
      <ul>
        <li>
          {" "}
          <h3>Camp Dates and Schedule</h3>
          <p>
            Our camp runs from August 14th to August 18th. We have a jam-packed
            schedule filled with exciting activities and a great oppurtunity to
            build great friendships!
          </p>
        </li>
        <li>
          {" "}
          <h3>What to Expect</h3>
          <p>
            At our camp, you can expect a safe and inclusive environment,
            delicious meals, comfortable accommodations, and a chance to make
            lifelong friendships. Get ready for an amazing adventure!
          </p>
        </li>

        <Expectations />
      </ul>
    </section>
  );
};

export default Activities;
