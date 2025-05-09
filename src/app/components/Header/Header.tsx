"use client";
import React, { useState, useEffect } from "react";
import styles from "./styles/Header.module.scss";
import { usePathname } from "next/navigation";
import DesktopNavbar from "./components/DesktopNavbar";
import MobileNavbar from "./components/MobileNavbar";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const pathname = usePathname();
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const isHomepage = pathname === "/";

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

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

  useEffect(() => {
    const checkMobileView = () => {
      const mobile = window.innerWidth < 800;
      setIsMobileView(mobile);
      if (!mobile) setIsMenuOpen(false);
    };

    checkMobileView();
    window.addEventListener("resize", checkMobileView);
    return () => window.removeEventListener("resize", checkMobileView);
  }, []);

  return (
    <header className={`${styles.header} ${!isAtTop ? styles.scrolled : ""}`}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            alt="Bible Camp Logo"
            width={120}
            height={120}
            priority
            src="/NewBibleCampLogo.png"
            className={styles.logoImage}
          />
        </Link>
      </div>

      {isMobileView ? (
        <>
          <div className={styles.hamburger} onClick={toggleMenu}>
            ☰
          </div>
          <MobileNavbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </>
      ) : (
        <DesktopNavbar isAtTop={isAtTop} />
      )}
    </header>
  );
};

export default Header;
