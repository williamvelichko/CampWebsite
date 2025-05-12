import React from "react";
import styles from "./styling/About.module.scss";

const About = () => {
  return (
    <section className={styles.about}>
      <div>
        <h3>Psalm 72:19</h3>
        <p>
          &quot;Blessed be his glorious name forever; may the whole earth be
          filled with his glory! Amen and Amen!&quot;
        </p>
      </div>
    </section>
  );
};

export default About;
