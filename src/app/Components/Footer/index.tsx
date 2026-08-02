import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../../public/Navbar/sonses_vinc_logo.png";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogoCol}>
          <Link href="/" className={styles.footerLogoLink}>
            <Image
              src={Logo}
              alt="Sonses Vinç Logo"
              className={styles.footerLogo}
              quality={85}
            />
          </Link>
        </div>
        <div className={styles.footerCol}>
          <h4 className={styles.footerTitle}>Sosyal Medya</h4>
          <div className={styles.socialLinks}>
            <a href={`https://wa.me/905351085170?text=${encodeURIComponent('Merhaba, Sonses Vinç web sitenizden ulaşıyorum. Vinç kiralama hakkında bilgi almak istiyorum.')}`} aria-label="WhatsApp"><FaWhatsapp /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          </div>
        </div>
        <div className={styles.footerCol}>
          <h4 className={styles.footerTitle}>İletişim</h4>
          <div className={styles.contactInfo}>
            <div><FaPhoneAlt /> <a href="tel:+905337175704">0 533 717 57 04</a></div>
            <div><FaPhoneAlt /> <a href="tel:+905335149264">0 533 514 92 64</a></div>
            <div><FaPhoneAlt /> <a href="tel:+905351085170">0 535 108 51 70</a></div>
            <div><FaEnvelope /> <a
              href={`mailto:sonsesvinc@gmail.com?subject=${encodeURIComponent('Vinç Kiralama Bilgi Talebi')}&body=${encodeURIComponent('Merhaba,\n\nSonses Vinç web sitesi üzerinden iletişim kuruyorum.\n\nAd Soyad: \nTelefon: \n\nMesaj:\n\n\nSaygılarımla.')}`}
            >sonsesvinc@gmail.com</a></div>
          </div>
        </div>
        <div className={styles.footerCol}>
          <h4 className={styles.footerTitle}>Adres</h4>
          <div className={styles.addressInfo}>
            <a
              href="https://maps.google.com/?q=40.923056,35.896876"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.addressLink}
            >
              <FaMapMarkerAlt /> <span>Ladik, Sanayi, 55760 Ladik/Samsun</span>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <span>© 2026, Sonses Vinç. Tüm hakları saklıdır.</span>
        {/* <span className={styles.poweredBy}>Powered by <a href="https://github.com/tunahanarslann" target="_blank" rel="noopener noreferrer">Tunahan Arslan</a></span>  */}
      </div>
    </footer>
  );
};

export default Footer;
