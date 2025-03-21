"use client";
import React, { useState, useEffect } from "react";
import styles from "./styles/Header.module.scss";
import Navbar from "./components/Navbar";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); // State for menu open/close

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Add the "scrolled" class
      } else {
        setIsScrolled(false); // Remove the "scrolled" class
      }
    };

    window.addEventListener("scroll", handleScroll); // Add scroll event listener
    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up the listener
    };
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo}>BibleCamp</div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        ☰
      </div>

      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </header>
  );
};

export default Header;
