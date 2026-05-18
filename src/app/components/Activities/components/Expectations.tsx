import React from "react";
import styles from "../styles/Expectations.module.scss";
import Image from "next/image";
import expectData from "../data/expectData.json";

const Expectations = () => {
  return (
    <div className={styles.expectationsContainer}>
      <div className={styles.expectations}>
        {expectData.map((item, index) => (
          <div className={styles.expectationItem} key={index}>
            <Image
              src={item.image}
              alt={item.activity}
              fill
              loading="eager"
              sizes="(min-width: 960px) 25vw, (min-width: 640px) 50vw, 100vw"
              className={styles.image}
            />
            <div className={styles.overlay}>
              <div className={styles.description}>
                <p className={styles.cardNumber}>
                  {["I.", "II.", "III.", "IV."][index]}
                </p>
                <h5 className={styles.activity}>{item.activity}</h5>
                <div className={styles.cardRule} aria-hidden="true" />
                <p className={styles.descriptionText}>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expectations;
