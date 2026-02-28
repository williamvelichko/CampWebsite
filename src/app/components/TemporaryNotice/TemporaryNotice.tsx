import styles from "./styles/TemporaryNotice.module.scss";

interface TemporaryNoticeProps {
  title?: string;
  description?: string;
}

export default function TemporaryNotice({
  title = "Content is being updated",
  description = "Please check back later while we finish publishing the next camp update.",
}: TemporaryNoticeProps) {
  return (
    <section className={styles.noticeSection}>
      <div className={styles.noticeCard}>
        <p className={styles.eyebrow}>Temporary Update</p>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
    </section>
  );
}
