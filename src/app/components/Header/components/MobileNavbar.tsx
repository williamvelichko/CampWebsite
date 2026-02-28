"use client";
import React from "react";
import styles from "../styles/MobileNavbar.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNavLinks } from "../../../config/site";

interface MobileNavbarProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({
  isMenuOpen,
  toggleMenu,
}) => {
  const pathname = usePathname();
  return (
    <>
      <div
        className={`${styles.backdrop} ${isMenuOpen ? styles.open : ""}`}
        onClick={toggleMenu}
      ></div>

      <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}>
        <button className={styles.closeButton} onClick={toggleMenu}>
          ✕
        </button>
        <ul>
          {primaryNavLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${styles.navLink} ${
                  pathname === link.href ? styles.active : ""
                }`}
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default MobileNavbar;
