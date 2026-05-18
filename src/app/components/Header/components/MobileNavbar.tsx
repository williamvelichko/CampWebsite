"use client";
import React, { useEffect } from "react";
import styles from "../styles/MobileNavbar.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNavLinks } from "../../../config/site";

interface MobileNavbarProps {
  id?: string;
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({
  id = "mobile-navigation",
  isMenuOpen,
  toggleMenu,
}) => {
  const pathname = usePathname();

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  return (
    <>
      <div
        className={`${styles.backdrop} ${isMenuOpen ? styles.open : ""}`}
        aria-hidden="true"
        onClick={toggleMenu}
      ></div>

      <nav
        id={id}
        className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}
        aria-hidden={!isMenuOpen}
        aria-label="Mobile navigation"
      >
        <button
          className={styles.closeButton}
          onClick={toggleMenu}
          aria-label="Close navigation menu"
          type="button"
        >
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
