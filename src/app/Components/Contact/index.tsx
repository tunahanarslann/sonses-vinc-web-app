"use client";
import React from "react";
import styles from "./Contact.module.scss";
import PhoneIcon from "../../../../public/Contact/phone.svg";

const contactData = [
  { id: "1", phoneNumber: "+90 (533) 717 5704", name: "Arslan Sonses" },
  { id: "2", phoneNumber: "+90 (533) 514 9264", name: "Adnan Sonses" },
];

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactHeader}>
        <h2 className={styles.title}>İletişim</h2>
        <p className={styles.text}>
          Aşağıdaki numaralardan bizimle iletişime geçebilirsiniz.
        </p>
      </div>
      <div className={styles.contactCards}>
        {contactData.map((data) => (
          <div key={data.id} className={styles.contactCard}>
            <PhoneIcon className={styles.phoneIcon} width={72} height={72} />
            <div className={styles.contactInfo}>
              <a href={`tel:${data.phoneNumber}`} className={styles.phoneNumber}>{data.phoneNumber}</a>
              <p className={styles.name}>{data.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
