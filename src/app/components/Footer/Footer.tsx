import React from "react";
import styles from "./styles/Footer.module.scss";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.leftColumn}>
          <Image
            src={"/NewBibleCampLogo.png"}
            alt="Bible Camp Logo"
            className={styles.logoImage}
            width={120}
            height={120}
            priority
          />

          <p>Bible Camp is a ministry of Bible Baptist Church</p>
          <address>2495 Kings Hill Rd, Colfax, CA 95713</address>
          <p>Phone: (916) 882-6630</p>
        </div>

        <div className={styles.rightColumn}>
          <h4>Follow Us</h4>
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
        <p>&copy; 2025 BibleCamp. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
