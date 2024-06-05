import React from "react";
import styles from "./styles/Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>BibleCamp</div>
      <div className={styles.hamburger}>☰</div>
    </header>
  );
};

export default Header;
