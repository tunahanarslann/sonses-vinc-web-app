import React from "react";
import styles from "./AboutUs.module.scss";
import Image from "next/image";
import aboutImg from "../../../../public/HomepageSlider/vinc_kirmizi_1.webp";
import Link from "next/link";

const AboutUs = () => {
  return (
    <section className={styles.aboutUsSection}>
      <div className={styles.aboutUsContainer}>
        <div className={styles.imageBox}>
          <Image src={aboutImg} alt="Sonses Vinç İstanbul ve Samsun Vinç Kiralama Hakkımızda" fill className={styles.aboutImg} />
        </div>
        <div className={styles.textBox}>
          <h2 className={styles.title}>Hakkımızda</h2>
          <p className={styles.text}>
            Sonses Vinç, İstanbul ve Samsun'da vinç kiralama ve ağır yük taşıma alanında yılların deneyimiyle hizmet vermektedir. 
            Modern mobil vinç filomuz ve uzman vinç operatörü kadromuzla güvenli, hızlı ve ekonomik çözümler sunar. 
            İstanbul'da Başakşehir bölgesinde, Samsun'da ise merkezi konumumuzla her iki şehirde de 7/24 vinç kiralama hizmeti veriyoruz. 
            Müşteri memnuniyetini ve iş güvenliğini her zaman ön planda tutar, sepetli platform kiralama ve ağır yük taşıma projelerinizde 
            profesyonel destek sağlarız.
          </p>
          <Link href="/hakkimizda" className={styles.moreBtn}><span>Daha Fazla</span></Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
