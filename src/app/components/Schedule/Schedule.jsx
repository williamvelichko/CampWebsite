import React from "react";
import styles from "./styles/schedule.module.scss";
import ScheduleData from "./data/ScheduleData.json";

const Schedule = () => {
  return (
    <div className={styles.mainContainer}>
      <section className={styles.titleSection}>
        <h3 className={styles.scheduleTitle}>Camp Dates and Schedule</h3>
        <p>
          Our camp runs from August 14th untill August 18th. We have a
          jam-packed schedule filled with exciting activities and a great
          oppurtunity to build great friendships!
        </p>
      </section>
      <div className={styles.scheduleContainer}>
        <div className={styles.scheduleSection}>
          <h3 className={styles.scheduleSectionTitle}>
            Arrival Day (August 14)
          </h3>
          <ul className={styles.scheduleList}>
            {ScheduleData.arrival.map((item, index) => (
              <li key={index} className={styles.scheduleItem}>
                <span className={styles.scheduleTime}>{item.time}</span>
                <span className={styles.scheduleActivity}>{item.activity}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.scheduleSection}>
          <h3 className={styles.scheduleSectionTitle}>
            Full Days (August 15 - 17)
          </h3>
          <ul className={styles.scheduleList}>
            {ScheduleData.regular.map((item, index) => (
              <li key={index} className={styles.scheduleItem}>
                <span className={styles.scheduleTime}>{item.time}</span>
                <span className={styles.scheduleActivity}>{item.activity}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.scheduleSection}>
          <h3 className={styles.scheduleSectionTitle}>
            Departure Day (August 18)
          </h3>
          <ul className={styles.scheduleList}>
            {ScheduleData.departure.map((item, index) => (
              <li key={index} className={styles.scheduleItem}>
                <span className={styles.scheduleTime}>{item.time}</span>
                <span className={styles.scheduleActivity}>{item.activity}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
