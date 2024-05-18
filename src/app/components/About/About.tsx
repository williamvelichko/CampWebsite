import React from "react";
import styles from "../../page.module.scss";

const About = () => {
  return (
    <section className={styles.about}>
      <div>
        <h3>Matthew 13:44</h3>
        <p>
          "The kingdom of heaven is like treasure hidden in a field, which a man
          found and covered up. Then in his joy he goes and sells all that he
          has and buys that field."
        </p>
        {/* <h2>
          Experience spiritual growth, build community, and have fun at our
          youth camp!
        </h2>
        <p>
          Our church youth camp offers a unique opportunity for young
          individuals to deepen their faith, forge lasting friendships, and
          engage in exciting activities. Join us for an unforgettable
          experience!
        </p> */}
      </div>
      {/* <div className={styles.secondaryPic}>
        <img
          src="/psalmsbiblepic.jpg"
          alt="test"
          className={styles.testPhoto}
        />
        <div className={styles.overlay}>
          <p>
            Matthew 13:44 The kingdom of heaven is like treasure hidden in a
            field, which a man found and covered up. Then in his joy he goes and
            sells all that he has and buys that field.
          </p>
        </div>
      </div> */}
    </section>
  );
};

export default About;
