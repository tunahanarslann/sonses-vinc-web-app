import React from "react";
import styles from "./OurServices.module.scss";
import { FaTruckMoving, FaCogs, FaTools, FaIndustry, FaHardHat, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import vinc1 from "../../../../public/HomepageSlider/vinc_sari_2.webp"
import vinc2 from "../../../../public/HomepageSlider/vinc_kirmizi_1.webp";
import vinc3 from "../../../../public/HomepageSlider/vinc_sari_1.webp";
import vinc4 from "../../../../public/HomepageSlider/vinc_yesil.webp";
import forklift from "../../../../public/HomepageSlider/forklift_image.webp";

const services = [
  {
    id: "1",
    icon: <FaTruckMoving />,
    title: "Mobil Vinç Kiralama İstanbul & Samsun",
    desc: "İstanbul ve Samsun'da farklı tonajlarda modern mobil vinçler ile güvenli ve hızlı kaldırma çözümleri.",
  },
  {
    id: "2",
    icon: <FaCogs />,
    title: "Sepetli Platform Kiralama",
    desc: "İstanbul ve Samsun'da yüksek ve ulaşılması zor alanlar için güvenli sepetli platform hizmeti.",
  },
  {
    id: "3",
    icon: <FaTools />,
    title: "Ağır Yük Taşıma",
    desc: "İstanbul ve Samsun'da endüstriyel tesisler ve şantiyeler için ağır yüklerin taşınması ve montajı.",
  },
  {
    id: "4",
    icon: <FaIndustry />,
    title: "Endüstriyel Montaj",
    desc: "İstanbul ve Samsun'da fabrika, depo ve tesislerde makine ve ekipman montajı.",
  },
  {
    id: "5",
    icon: <FaHardHat />,
    title: "Vinç Operatörü Hizmeti",
    desc: "İstanbul ve Samsun'da inşaat ve altyapı projelerinde profesyonel vinç operatörü desteği.",
  },
  {
    id: "6",
    icon: <FaMapMarkerAlt />,
    title: "Yerinde Keşif ve Danışmanlık",
    desc: "İstanbul ve Samsun'da ihtiyacınıza özel en uygun vinç ve ekipman seçimi için ücretsiz keşif.",
  },
];

const cranes = [
  {
    id: "1",
    image: vinc1,
    name: "30 Ton Tek Kırma Mobil Vinç",
    capacity: "30 Ton",
    boomLength: "30 Metre",
    features: ["Tek Kırma", "Orta Bom", "Modern Kabin"],
    location: "Samsun",
  },
  {
    id: "2",
    image: vinc2,
    name: "35 Ton Çift Kırma Mobil Vinç",
    capacity: "35 Ton",
    boomLength: "30 Metre",
    features: ["Çift Kırma", "Orta Bom", "Modern Kabin"],
    location: "İstanbul/Başakşehir",
  },
  {
    id: "3",
    image: vinc3,
    name: "30 Ton Çift Kırma Mobil Vinç",
    capacity: "30 Ton",
    boomLength: "38 Metre",
    features: ["Çift Kırma", "Uzun Bom", "Güvenli Operasyon"],
    location: "İstanbul/Başakşehir",
  },
  {
    id: "4",
    image: vinc4,
    name: "30 Metre Sepetli Platform",
    capacity: "250 KG",
    boomLength: "30 Metre",
    features: ["Sepetli Platform", "Yüksek Erişim", "Güvenli"],
    location: "İstanbul/Başakşehir",
  },
  {
    id: "5",
    image: forklift,
    name: "Forklift Kiralama Samsun",
    capacity: "3-5 Ton",
    boomLength: "Standart",
    features: ["Forklift", "Depo Hizmeti", "Çok Amaçlı"],
    location: "Samsun",
  },
];

const OurServices = () => {
  return (
    <section className={styles.ourServicesSection}>
      <div className={styles.ourServicesContainer}>
        {/* Hizmetler Bölümü */}
        <div className={styles.servicesSection}>
          <h2 className={styles.title}>İstanbul ve Samsun Vinç Kiralama Hizmetlerimiz</h2>
          <p className={styles.subtitle}>
            İstanbul ve Samsun'da vinç kiralama, ağır yük taşıma ve endüstriyel çözümler için profesyonel hizmetler sunuyoruz. 
            Mobil vinç, sepetli platform kiralama ve vinç operatörü hizmetlerimizle her türlü projenizde yanınızdayız.
          </p>
          <div className={styles.servicesGrid}>
            {services.map((service) => (
              <div key={service.id} className={styles.serviceCard}>
                <div className={styles.iconBox}>{service.icon}</div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vinçlerimiz Bölümü */}
        <div className={styles.cranesSection}>
          <h2 className={styles.sectionTitle}>İstanbul ve Samsun Vinç Filomuz</h2>
          <p className={styles.sectionDesc}>
            İstanbul Başakşehir ve Samsun'da konumlu modern ve bakımlı vinç filomuzla her türlü yükünüz için güvenli çözümler sunuyoruz.
          </p>
          <div className={styles.cranesGrid}>
            {cranes.map((crane) => (
              <div key={crane.id} className={styles.craneCard}>
                <div className={styles.craneImageBox}>
                  <Image src={crane.image} alt={`${crane.name} - ${crane.location} Vinç Kiralama`} fill className={styles.craneImage} />
                </div>
                <div className={styles.craneInfo}>
                  <h3 className={styles.craneName}>{crane.name}</h3>
                  <div className={styles.craneSpecs}>
                    <div className={styles.specItem}>
                      <span className={styles.specLabel}>Kapasite:</span>
                      <span className={styles.specValue}>{crane.capacity}</span>
                    </div>
                    <div className={styles.specItem}>
                      <span className={styles.specLabel}>Bom Uzunluğu:</span>
                      <span className={styles.specValue}>{crane.boomLength}</span>
                    </div>
                    <div className={styles.specItem}>
                      <span className={styles.specLabel}>Konum:</span>
                      <span className={styles.specValue}>{crane.location}</span>
                    </div>
                  </div>
                  <div className={styles.craneFeatures}>
                    {crane.features.map((feature, index) => (
                      <span key={index} className={styles.featureTag}>{feature}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.viewAllContainer}>
            <Link href="/hizmetlerimiz" className={styles.viewAllBtn}>
              <span>İstanbul ve Samsun Vinç Kiralama Hizmetlerimizi Görüntüle</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
