import React from "react";
import styles from "./styles/Footer.module.scss";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.brandColumn}>
          <Image
            src={"/NewBibleCampLogo.png"}
            alt="Bible Camp Logo"
            className={styles.logoImage}
            width={120}
            height={120}
            priority
          />
          <span className={styles.ornament} aria-hidden="true" />
          <h2>The Gospel of God</h2>
          <p className={styles.verse}>
            For I am not ashamed of the gospel, for it is the power of God for
            salvation to everyone who believes.
          </p>
        </div>

        <div className={styles.infoColumn}>
          <h3>Bible Camp</h3>
          <p>Bible Camp is a ministry of Bible Baptist Church</p>
          <address>2495 Kings Hill Rd, Colfax, CA 95713</address>
          <p>Phone: (916) 882-6630</p>
        </div>

        <div className={styles.navColumn}>
          <h3>Explore</h3>
          <nav className={styles.footerNav} aria-label="Footer navigation">
            <Link href="/">Home</Link>
            <Link href="/schedule">Schedule</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/registration">Register</Link>
          </nav>
          <h3>Follow Us</h3>
          <div className={styles.socialIcons}>
            <a
              href="https://www.instagram.com/biblebaptist.youth/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className={styles.icon} />
            </a>
            <a
              href="https://www.youtube.com/@BibleBaptistChurch_CA"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube className={styles.icon} />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottomFooter}>
        <p>&copy; 2026 Bible Camp. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
