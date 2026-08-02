"use client";
import { useState } from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import NavLink from "../NavLink";
import Image from "next/image";
import Logo from "../../../../public/Navbar/sonses_vinc_logo.png";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

const NAV_LINKS = [
  { href: "/", label: "Anasayfa" },
  { href: "/hizmetlerimiz", label: "Hizmetlerimiz" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/referanslar", label: "Referanslar" },
  { href: "/iletisim", label: "İletişim" },
];

const PHONE = "0 535 108 51 70";

const CONTACT_INFO = {
  phone: "0 535 108 51 70",
  email: "sonsesvinc@gmail.com",
  address: "Ladik, Sanayi, 55760 Ladik/Samsun",
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((open) => !open);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* ── Ana Navbar Çubuğu ── */}
      <div className={styles.navbarContainer}>
        <Link href="/" className={styles.logoLink} onClick={closeMenu}>
          <Image
            className={styles.logoImg}
            src={Logo}
            alt="Sonses Vinç Logo"
            priority
          />
        </Link>

        {/* Desktop menü */}
        <nav className={styles.desktopMenu}>
          {NAV_LINKS.map((link) => (
            <NavLink key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </NavLink>
          ))}
          <a
            href={`tel:${PHONE.replace(/\s/g, "")}`}
            className={styles.ctaBtn}
          >
            <FaPhoneAlt className={styles.ctaBtnIcon} />
            <span>Hemen Ara</span>
          </a>
        </nav>

        {/* Mobil hamburger */}
        <button
          className={styles.menuToggle}
          aria-label="Menüyü Aç/Kapat"
          onClick={toggleMenu}
        >
          {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      {/* ── Mobil Drawer ── */}
      <div
        className={`${styles.mobileDrawer} ${isOpen ? styles.drawerOpen : ""}`}
      >
        {/* Drawer Başlık + Kapat Butonu */}
        <div className={styles.drawerHeader}>
          <Link href="/" className={styles.drawerLogoLink} onClick={closeMenu}>
            <Image src={Logo} alt="Sonses Vinç Logo" className={styles.drawerLogo} />
          </Link>
          <button
            className={styles.drawerCloseBtn}
            aria-label="Menüyü Kapat"
            onClick={closeMenu}
          >
            <FiX size={22} />
          </button>
        </div>

        {/* Navigasyon Linkleri */}
        <nav className={styles.mobileNav}>
          {NAV_LINKS.map((link) => (
            <NavLink key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA Telefon Butonu */}
        <a
          href={`tel:${PHONE.replace(/\s/g, "")}`}
          className={styles.mobileCtaBtn}
          onClick={closeMenu}
        >
          <FaPhoneAlt />
          <span>{PHONE}</span>
        </a>

        {/* TopBar Bilgileri */}
        <div className={styles.drawerContactInfo}>
          <a
            href={`mailto:sonsesvinc@gmail.com?subject=${encodeURIComponent('Vinç Kiralama Bilgi Talebi')}&body=${encodeURIComponent('Merhaba,\n\nSonses Vinç web sitesi üzerinden iletişim kuruyorum.\n\nAd Soyad: \nTelefon: \n\nMesaj:\n\n\nSaygılarımla.')}`}
            className={styles.drawerContactItem}
          >
            <FaEnvelope className={styles.drawerContactIcon} />
            <span>{CONTACT_INFO.email}</span>
          </a>
          <a
            href="https://maps.google.com/?q=40.923056,35.896876"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.drawerContactItem}
          >
            <FaMapMarkerAlt className={styles.drawerContactIcon} />
            <span>{CONTACT_INFO.address}</span>
          </a>
        </div>

        {/* Sosyal Medya */}
        <div className={styles.drawerSocials}>
          <a href={`https://wa.me/905351085170?text=${encodeURIComponent('Merhaba, Sonses Vinç web sitenizden ulaşıyorum. Vinç kiralama hakkında bilgi almak istiyorum.')}`} aria-label="Whatsapp" className={styles.drawerSocialIcon}>
            <FaWhatsapp />
          </a>
          <a href="#" aria-label="Instagram" className={styles.drawerSocialIcon}>
            <FaInstagram />
          </a>
          <a href="#" aria-label="Facebook" className={styles.drawerSocialIcon}>
            <FaFacebookF />
          </a>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className={styles.overlay}
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Navbar;
