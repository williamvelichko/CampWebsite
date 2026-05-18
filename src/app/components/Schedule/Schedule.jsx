import React from "react";
import styles from "./styles/schedule.module.scss";
import ScheduleData from "./data/ScheduleData.json";

const Schedule = () => {
  return (
    <div className={styles.mainContainer}>
      <header className={styles.pageHeader}>
        <p className={styles.eyebrow}>{ScheduleData.dateRange}</p>
        <h1 className={styles.scheduleTitle}>Camp Schedule</h1>
        <p className={styles.subtitle}>{ScheduleData.subtitle}</p>
        <div className={styles.headerRule} aria-hidden="true">
          <span className={styles.ruleLine} />
          <span className={styles.ruleDiamond} />
          <span className={styles.ruleLine} />
        </div>
      </header>

      <main className={styles.scheduleContainer} aria-label="Camp schedule timeline">
        {ScheduleData.sections.map((section) => (
          <section className={styles.scheduleSection} key={section.title}>
            <div className={styles.sectionHeader}>
              <span className={styles.dayBadge}>{section.badge}</span>
              <h2 className={styles.scheduleSectionTitle}>{section.title}</h2>
              <span className={styles.sectionRule} aria-hidden="true" />
            </div>
            <ol className={styles.scheduleList}>
              {section.events.map((item) => (
                <li
                  key={`${section.title}-${item.time}-${item.activity}`}
                  className={
                    item.highlight
                      ? `${styles.scheduleItem} ${styles.highlight}`
                      : styles.scheduleItem
                  }
                  data-highlighted={item.highlight ? "true" : undefined}
                >
                  <time className={styles.scheduleTime}>{item.time}</time>
                  <span className={styles.scheduleActivity}>{item.activity}</span>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </main>
    </div>
  );
};

export default Schedule;
