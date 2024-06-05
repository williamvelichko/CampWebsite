import React from "react";
import styles from "./styling/About.module.scss";

const About = () => {
  return (
    <section className={styles.about}>
      <div>
        <h3>Matthew 13:44</h3>
        <p>
          &quot;The kingdom of heaven is like treasure hidden in a field, which
          a man found and covered up. Then in his joy he goes and sells all that
          he has and buys that field.&quot;
        </p>
      </div>
    </section>
  );
};

export default About;
