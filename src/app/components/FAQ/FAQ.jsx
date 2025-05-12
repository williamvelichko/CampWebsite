"use client";
import React, { useState } from "react";
import styles from "./styles/FAQ.module.scss";
import faqData from "./data/faqData.json";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const renderAnswer = (answer) => {
    if (Array.isArray(answer)) {
      return (
        <ul>
          {answer.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      );
    }

    return <p dangerouslySetInnerHTML={{ __html: answer }} />;
  };

  return (
    <div className={styles.mainContainer}>
      <section className={styles.titleSection}>
        <h3 className={styles.faqTitle}>Frequently Asked Questions</h3>
        <p className={styles.faqDescription}>
          Find answers to the most common questions about our camp.
        </p>
      </section>
      <div className={styles.faqContainer}>
        {faqData.map((item, index) => (
          <div key={index} className={styles.faqSection}>
            <div className={styles.questionContainer}>
              <h3
                className={styles.question}
                onClick={() => toggleAnswer(index)}
              >
                {item.question}
              </h3>
              <span className={styles.toggleIcon}>
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <div className={styles.answer}>{renderAnswer(item.answer)}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
