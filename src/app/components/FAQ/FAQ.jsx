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
    return <p>{answer}</p>;
  };

  return (
    <div className={styles.faqContainer}>
      <section className={styles.faqSection}>
        <h2>Frequently Asked Questions</h2>
        {faqData.map((item, index) => (
          <div key={index} className={styles.faqItem}>
            <div
              className={styles.question}
              onClick={() => toggleAnswer(index)}
            >
              {item.question}
              <span className={styles.toggleIcon}>
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <div className={styles.answer}>{renderAnswer(item.answer)}</div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default FAQ;
