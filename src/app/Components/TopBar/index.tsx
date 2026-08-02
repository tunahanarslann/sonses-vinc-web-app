import React from "react";
import styles from "./TopBar.module.scss";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";

const CONTACT_INFO = {
  phone: "0 535 108 51 70",
  email: "sonsesvinc@gmail.com",
  address: "Ladik, Sanayi, 55760 Ladik/Samsun",
};

const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <div className={styles.topBarInner}>
        <div className={styles.topBarContacts}>
          <a
            href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
            className={styles.topBarItem}
          >
            <FaPhoneAlt className={styles.topBarIcon} />
            <span>{CONTACT_INFO.phone}</span>
          </a>
          <span className={styles.topBarDivider} />
          <a
            href={`mailto:sonsesvinc@gmail.com?subject=${encodeURIComponent('Vinç Kiralama Bilgi Talebi')}&body=${encodeURIComponent('Merhaba,\n\nSonses Vinç web sitesi üzerinden iletişim kuruyorum.\n\nAd Soyad: \nTelefon: \n\nMesaj:\n\n\nSaygılarımla.')}`}
            className={styles.topBarItem}
          >
            <FaEnvelope className={styles.topBarIcon} />
            <span>{CONTACT_INFO.email}</span>
          </a>
          <span className={styles.topBarDivider} />
          <a
            href="https://maps.google.com/?q=40.923056,35.896876"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.topBarItem}
          >
            <FaMapMarkerAlt className={styles.topBarIcon} />
            <span>{CONTACT_INFO.address}</span>
          </a>
        </div>

        <div className={styles.topBarSocial}>
          <a href={`https://wa.me/905351085170?text=${encodeURIComponent('Merhaba, Sonses Vinç web sitenizden ulaşıyorum. Vinç kiralama hakkında bilgi almak istiyorum.')}`} aria-label="WhatsApp" className={styles.socialIcon}>
            <FaWhatsapp />
          </a>
          <a href="#" aria-label="Instagram" className={styles.socialIcon}>
            <FaInstagram />
          </a>
          <a href="#" aria-label="Facebook" className={styles.socialIcon}>
            <FaFacebookF />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
