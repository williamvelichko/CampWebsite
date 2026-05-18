"use client";

import styles from "./styling/MainSection.module.scss";
import Image from "next/image";
import Link from "next/link";
import { isTemporaryModeEnabled } from "../../config/site";

const HERO_IMAGE_SRC = "/Auburn-Camp-Banner.jpg";

export const MainSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.imageWrapper} aria-hidden="true">
        <Image
          src={HERO_IMAGE_SRC}
          alt="Bible camp banner artwork"
          fill
          className={styles.image}
          sizes="100vw"
          priority
        />
      </div>
      <div className={styles.tintOverlay} />
      <div className={styles.engraveOverlay} />
      <div className={styles.vignetteOverlay} />
      <div className={styles.glowOverlay} />

      <div className={styles.overlay}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Bible Camp 2026 · August 12 – 16</p>
          <h1 className={styles.heroTitle}>
            <span className={styles.heroThe}>The</span>
            <span className={styles.heroWord}>Gospel</span>
            <span className={styles.heroOf}>of</span>
            <span className={styles.heroWord}>God</span>
          </h1>
          <div className={styles.heroRule} aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <p className={styles.subtitle}>
            A week in the Word, in worship, in fellowship
          </p>
        </div>

        <div className={styles.ctaContainer}>
          {isTemporaryModeEnabled ? (
            <div className={styles.comingSoonBadge}>Registration opens later</div>
          ) : (
            <>
              <Link href="/registration" className={styles.registerButton}>
                Register Now
              </Link>
              <Link href="/schedule" className={styles.scheduleButton}>
                View Schedule
              </Link>
            </>
          )}
        </div>

        <div className={styles.scrollCue}>
          <Link href="#home-scripture" aria-label="Scroll to theme verse">
            <span>Scroll</span>
            <span className={styles.scrollArrow} />
          </Link>
        </div>
      </div>
    </section>
  );
};
