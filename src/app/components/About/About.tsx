import React from "react";
import styles from "../../page.module.scss";

const About = () => {
  return (
    <section className={styles.about}>
      <div>
        <h2>
          Experience spiritual growth, build community, and have fun at our
          youth camp!
        </h2>
        <p>
          Our church youth camp offers a unique opportunity for young
          individuals to deepen their faith, forge lasting friendships, and
          engage in exciting activities. Join us for an unforgettable
          experience!
        </p>
      </div>
      {/* <img src="/psalmsbiblepic.jpg" alt="test" className={styles.testPhoto} /> */}
    </section>
  );
};

export default About;
