import React from "react";
import styles from "./Referanslar.module.scss";
import Image from "next/image";
import Link from "next/link";
import ref1 from "../../../../public/HomepageSlider/vinc1.webp";
import ref2 from "../../../../public/HomepageSlider/vinc2.webp";
import ref3 from "../../../../public/HomepageSlider/vinc3.webp";
import ref4 from "../../../../public/HomepageSlider/vinc4.webp";

const references = [
  {
    id: 1,
    logo: ref1,
    name: "1915 Çanakkale Köprüsü",
    company: "Siemens-Yunex Traffic",
    location: "Çanakkale",
    year: "2022",
    comment: "Büyük ölçekli projelerde güvenilir ve profesyonel hizmet aldık.",
  },
  {
    id: 2,
    logo: ref2,
    name: "Samsun-Kalın Demiryolu",
    company: "SIEMENS-MOBILITY",
    location: "Samsun",
    year: "2020",
    comment: "Demiryolu modernizasyonunda uzman ekip ve kaliteli hizmet.",
  },
  {
    id: 3,
    logo: ref4,
    name: "Osmangazi Köprüsü",
    company: "SIEMENS",
    location: "Kocaeli - Yalova",
    year: "2017",
    comment: "Büyük ölçekli projelerde güvenilir ve profesyonel hizmet aldık.",
  },
];

const Referanslar = () => {
  return (
    <section className={styles.referencesSection}>
      <div className={styles.referencesContainer}>
        <h2 className={styles.title}>Referanslar</h2>
        <p className={styles.subtitle}>
          Büyük ölçekli projelerde güvenilir ve profesyonel hizmet verdiğimiz bazı referanslarımız.
        </p>
        <div className={styles.referencesGrid}>
          {references.map((ref) => (
            <div key={ref.id} className={styles.referenceCard}>
              <div className={styles.logoBox}>
                <Image src={ref.logo} alt={ref.name} fill className={styles.logoImg} />
              </div>
              <div className={styles.refTextBox}>
                <h4 className={styles.refName}>{ref.name}</h4>
                <div className={styles.refDetails}>
                  <span className={styles.refCompany}>{ref.company}</span>
                  <span className={styles.refLocation}>{ref.location}</span>
                </div>
                <p className={styles.refYear}>{ref.year}</p>
                <p className={styles.refComment}>{ref.comment}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.viewAllContainer}>
          <a
            href="https://www.sonsestrafo.com.tr/kategori/referanslar"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.viewAllBtn}
          >
            <span>Tüm Referanslarımızı Görüntüle</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Referanslar; 