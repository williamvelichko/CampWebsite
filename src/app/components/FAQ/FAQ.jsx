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
        <p className={styles.eyebrow}>Camp Details</p>
        <h3 className={styles.faqTitle}>Frequently Asked Questions</h3>
        <p className={styles.faqDescription}>
          Answers for families and campers preparing for Bible Camp 2026.
        </p>
        <div className={styles.headerRule} aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </section>
      <div className={styles.faqContainer}>
        {faqData.map((item, index) => (
          <div key={index} className={styles.faqSection}>
            <h3 className={styles.questionHeading}>
              <button
                className={styles.questionContainer}
                type="button"
                aria-expanded={activeIndex === index}
                onClick={() => toggleAnswer(index)}
              >
                <span className={styles.question}>{item.question}</span>
                <span className={styles.toggleIcon} aria-hidden="true">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>
            </h3>
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
