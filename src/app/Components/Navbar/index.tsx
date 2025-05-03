"use client";
import { useState } from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import NavLink from "../NavLink";
import Image from "next/image";
import MobileMenuIcon from "../../../../public/Navbar/hamburger-menu.svg";
import MobileMenuCloseIcon from "../../../../public/Navbar/close-menu.svg";
import Logo from "../../../../public/Navbar/sonses_vinc_logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ToggleMenu = () => {
    setIsOpen((open) => !open);
  };
  const CloseMenu = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <div className={styles.navbarContainer}>
      <Link href="/" className={styles.logoLink}>
        <div className={styles.navbarLogo}>
          <Image
            className={styles.logoImg}
            src={Logo}
            alt="sonses_vinc_logo"
          />
        </div>
      </Link>

      <div className={styles.navbarMenuBox}>
        <div className={`${styles.navbarMenu} ${isOpen ? styles.mobile : ""}`}>
          <NavLink href="/" onClick={CloseMenu}>
            Anasayfa
          </NavLink>
          <NavLink href="/hizmetlerimiz" onClick={CloseMenu}>
            Hizmetlerimiz
          </NavLink>
          <NavLink href="/hakkimizda" onClick={CloseMenu}>
            Hakkımızda
          </NavLink>
          <NavLink href="/iletisim" onClick={CloseMenu}>
            İletişim
          </NavLink>
        </div>
      </div>

      <div className={styles.mobileMenuBtnBox}>
        <button className={styles.mobileMenuBtn} aria-label="menu-btn" onClick={ToggleMenu}>
          {!isOpen ? (
            <MobileMenuIcon width={32} height={32} />
          ) : (
            <MobileMenuCloseIcon width={32} height={32} />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
