"use client";
import React from "react";
import styles from "../styles/DesktopNavbar.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface DesktopNavbarProps {
  isAtTop: boolean;
}

const DesktopNavbar: React.FC<DesktopNavbarProps> = ({ isAtTop }) => {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/schedule", label: "Schedule" },
    { href: "/faq", label: "FAQ" },
    { href: "/registration", label: "Register" },
  ];

  return (
    <nav className={`${styles.nav} ${!isAtTop ? styles.scrolled : ""}`}>
      <ul className={styles.navList}>
        {links.map((link) => (
          <li key={link.href} className={styles.navItem}>
            <Link
              href={link.href}
              className={`${styles.navLink} ${
                pathname === link.href ? styles.active : ""
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopNavbar;
