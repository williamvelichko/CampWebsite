import React from "react";
import styles from "./styles/Registration.module.scss";
import {
  isRegistrationPaymentLinkVisible,
  registrationFormUrl,
  registrationPaymentLinkClosedMessage,
} from "../../config/site";

const Registration = () => {
  return (
    <div className={styles.divContainer}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>August 12 – 16, 2026</p>
        <h1 className={styles.title}>Register for Bible Camp 2026</h1>
        <p className={styles.subtitle}>
          Reserve your place for a week centered on the gospel, worship,
          fellowship, and prayer.
        </p>
        <div className={styles.headerRule} aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className={styles.content}>
        <section className={styles.deadlineSection} aria-labelledby="important-dates">
          <h2 className={styles.deadlineTitle} id="important-dates">
            Important Dates
          </h2>
          <ul className={styles.deadlineList}>
            <li>
              <strong>Registration Deadline</strong>
              <span>July 1, 2026</span>
            </li>
            <li>
              <strong>No Refunds After</strong>
              <span>August 1, 2026</span>
            </li>
          </ul>
        </section>

        <section
          className={styles.ctaSection}
          aria-label={
            isRegistrationPaymentLinkVisible
              ? "Registration form"
              : "Registration status"
          }
        >
          {isRegistrationPaymentLinkVisible ? (
            <>
              <iframe
                src={registrationFormUrl}
                title="Bible Camp 2026 Registration Form"
                className={styles.iframe}
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <p className={styles.formHelp}>
                If the form does not load, refresh this page or{" "}
                <a href={registrationFormUrl}>open registration directly</a>.
              </p>
            </>
          ) : (
            <div className={styles.closedNotice}>
              <p className={styles.closedEyebrow}>Registration Status</p>
              <h2 className={styles.closedTitle}>
                {registrationPaymentLinkClosedMessage.title}
              </h2>
              <p className={styles.closedDescription}>
                {registrationPaymentLinkClosedMessage.description}
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Registration;
