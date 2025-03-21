import React from "react";
import styles from "../styles/Navbar.module.scss";

// Define the props interface for Navbar
interface NavbarProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, toggleMenu }) => {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`${styles.backdrop} ${isMenuOpen ? styles.open : ""}`}
        onClick={toggleMenu}
      ></div>

      {/* Navigation Menu */}
      <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}>
        <button className={styles.closeButton} onClick={toggleMenu}>
          ✕
        </button>
        <ul>
          <li>
            <a href="#home" onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={toggleMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#schedule" onClick={toggleMenu}>
              Schedule
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
