import React from "react";
import styles from "./Hakkimizda.module.scss";
import Image from "next/image";
import aboutImg from "../../../public/HomepageSlider/vinc_kirmizi_1.webp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda | Sonses Vinç İstanbul & Samsun Vinç Kiralama",
  description: "Sonses Vinç, İstanbul ve Samsun'da yılların deneyimiyle vinç kiralama hizmeti veren güvenilir firma. Mobil vinç, sepetli platform ve ağır yük taşıma çözümleri.",
  keywords: "Sonses Vinç hakkında, İstanbul vinç kiralama firması, Samsun vinç kiralama, mobil vinç kiralama, sepetli platform kiralama",
  alternates: {
    canonical: "https://www.sonsesvinc.com/hakkimizda",
  },
  openGraph: {
    title: "Hakkımızda | Sonses Vinç İstanbul & Samsun",
    description: "İstanbul ve Samsun'da yılların deneyimiyle vinç kiralama hizmeti veren güvenilir firma.",
    type: "website",
    locale: "tr_TR",
  },
};

const Hakkimizda = () => {
  return (
    <section className={styles.aboutUsPageSection}>
      <div className={styles.aboutUsPageContainer}>
        <h1 className={styles.pageTitle}>Sonses Vinç Hakkında</h1>
        <div className={styles.contentWrapper}>
          <div className={styles.imageBox}>
            <Image
              src={aboutImg}
              alt="Sonses Vinç İstanbul ve Samsun Vinç Kiralama Hakkımızda"
              fill
              className={styles.aboutImg}
            />
          </div>
          <div className={styles.textBox}>
            <h2 className={styles.sectionTitle}>İstanbul ve Samsun'da Güvenilir Vinç Kiralama</h2>
            <p className={styles.text}>
              Sonses Vinç, İstanbul ve Samsun'da vinç kiralama ve ağır yük taşıma alanında yılların deneyimiyle hizmet vermektedir.
              Modern mobil vinç filomuz ve uzman vinç operatörü kadromuzla güvenli, hızlı ve ekonomik çözümler sunuyoruz.
            </p>
            <p className={styles.text}>
              Her iki şehirde de 7/24 vinç kiralama hizmeti veriyoruz.
              Müşteri memnuniyetini ve iş güvenliğini her zaman ön planda tutar, sepetli platform kiralama ve ağır yük taşıma projelerinizde
              profesyonel destek sağlarız.
            </p>
            <p className={styles.text}>
              2008'de kendi firmamızda kullanmak üzere aldığımız vinçle başlayan işlerimiz zamanla bu sektöre yönelmiştir. Araçlarımızın her yıl makine mühendisi onaylı periyodik kontrolü yapılamaktadır. İş güvenliklerinin istediği evraklar tamdır.
            </p>
            <p className={styles.text}>
              Deneyimli ekibimiz ve modern ekipmanlarımızla İstanbul ve Samsun'da inşaat, endüstriyel tesisler, şantiyeler ve özel projeler
              için kapsamlı vinç kiralama çözümleri sunuyoruz. Her projenin kendine özgü gereksinimlerini anlayarak en uygun vinç ve
              operatör seçimini yapıyoruz.
            </p>
            <div className={styles.features}>
              <div className={styles.feature}>
                <h3 className={styles.featuresTitle}>İstanbul Vinç Kiralama</h3>
                <p>Başakşehir bölgesinde merkezi konumumuzla İstanbul'un tüm bölgelerine hızlı hizmet.</p>
              </div>
              <div className={styles.feature}>
                <h3 className={styles.featuresTitle}>Samsun Vinç Kiralama</h3>
                <p>Samsun ve çevresinde yerel deneyimimizle güvenilir vinç kiralama hizmeti.</p>
              </div>
              <div className={styles.feature}>
                <h3 className={styles.featuresTitle}>7/24 Hizmet</h3>
                <p>Acil durumlarınızda her zaman yanınızda, hızlı ve güvenilir çözümler.</p>
              </div>
              <div className={styles.feature}>
                <h3 className={styles.featuresTitle}>Uzman Ekip</h3>
                <p>Deneyimli vinç operatörleri ve teknik personel ile profesyonel hizmet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hakkimizda;
