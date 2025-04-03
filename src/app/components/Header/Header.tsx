"use client";
import React, { useState, useEffect } from "react";
import styles from "./styles/Header.module.scss";
import Navbar from "./components/Navbar";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isAtTop, setIsAtTop] = useState<boolean>(true);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const isHomepage = pathname === "/";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (!isHomepage) {
      setIsAtTop(false);
      return;
    }

    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomepage]);

  return (
    <header className={`${styles.header} ${!isAtTop ? styles.scrolled : ""}`}>
      <div className={styles.logo}>BibleCamp</div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        ☰
      </div>

      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </header>
  );
};

export default Header;
