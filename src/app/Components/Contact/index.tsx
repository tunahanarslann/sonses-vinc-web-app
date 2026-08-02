import React from "react";
import styles from "./Contact.module.scss";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import ContactForm from "../ContactForm";

const Contact = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <div className={styles.leftBox}>
          <div className={styles.leftContent}>
            <h2 className={styles.title}>İletişim</h2>
            <p className={styles.text}>
              Hemen iletişim formunu doldurun, en kısa sürede size dönüş yapalım. Dilerseniz WhatsApp veya telefon ile de ulaşabilirsiniz.
            </p>
          </div>
          <ContactForm />
        </div>
        <div className={styles.rightBox}>
          {/* <div className={styles.mapBox}>
            <FaMapMarkerAlt className={styles.mapIcon} />
            <span>Harita burada görünecek (Google Maps embed veya görsel)</span>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
