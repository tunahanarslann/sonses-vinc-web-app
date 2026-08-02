import React from "react";
import styles from "./Iletisim.module.scss";
import ContactForm from "../Components/ContactForm";
import { FaPhoneAlt } from "react-icons/fa";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim | Sonses Vinç İstanbul & Samsun Vinç Kiralama",
  description: "İstanbul ve Samsun'da vinç kiralama için iletişime geçin. Mobil vinç, sepetli platform kiralama ve ağır yük taşıma hizmetleri için teklif alın.",
  keywords: "vinç kiralama iletişim İstanbul, vinç kiralama iletişim Samsun, mobil vinç kiralama teklif, sepetli platform kiralama fiyat",
  alternates: {
    canonical: "https://www.sonsesvinc.com/iletisim",
  },
  openGraph: {
    title: "İletişim | Sonses Vinç İstanbul & Samsun",
    description: "İstanbul ve Samsun'da vinç kiralama için iletişime geçin. Hızlı teklif alın.",
    type: "website",
    locale: "tr_TR",
  },
};

const Iletisim = () => {
  return (
    <section className={styles.contactPageSection}>
      <div className={styles.contactPageContainer}>
        <h1 className={styles.pageTitle}>İstanbul ve Samsun Vinç Kiralama İletişim</h1>
        <p className={styles.pageDesc}>
          İstanbul ve Samsun'da vinç kiralama, mobil vinç, sepetli platform kiralama ve ağır yük taşıma hizmetleri için bizimle iletişime geçin.
          Hızlı teklif alın ve projeleriniz için en uygun çözümü bulun.
        </p>
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <h2 className={styles.sectionTitle}>İletişim Bilgilerimiz</h2>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <h3>Telefon</h3>
                <a href="tel:+905337175704" className={styles.phoneLink}>
                  <FaPhoneAlt className={styles.phoneIcon} />
                  <span>+90 533 717 57 04</span>
                  <span className={styles.phoneName}>Arslan Sonses</span>
                </a>
                <a href="tel:+905335149264" className={styles.phoneLink}>
                  <FaPhoneAlt className={styles.phoneIcon} />
                  <span>+90 533 514 92 64</span>
                  <span className={styles.phoneName}>Adnan Sonses</span>
                </a>
                <a href="tel:+905351085170" className={styles.phoneLink}>
                  <FaPhoneAlt className={styles.phoneIcon} />
                  <span>+90 535 108 51 70</span>
                  <span className={styles.phoneName}>Baran Sonses</span>
                </a>
              </div>
              <div className={styles.infoItem}>
                <h3>E-posta</h3>
                <p>sonsesvinc@gmail.com</p>
                <p>Hızlı yanıt garantisi</p>
              </div>
            </div>
            <div className={styles.serviceAreas}>
              <h2>Hizmet Bölgelerimiz</h2>
              <div className={styles.areasGrid}>
                <div className={styles.area}>
                  <h3>İstanbul Vinç Kiralama</h3>
                  <p>Başakşehir, Esenyurt, Avcılar, Küçükçekmece, Büyükçekmece, Beylikdüzü, Fatih, Şişli, Beşiktaş, Kadıköy ve tüm İstanbul</p>
                </div>
                <div className={styles.area}>
                  <h3>Samsun Vinç Kiralama</h3>
                  <p>Ladik, Vezirköprü, Merkez, Atakum, İlkadım, Canik, Tekkeköy, Çarşamba, Bafra, Terme ve tüm Samsun</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.contactFormSection}>
            <div className={styles.sectionContent}>
              <h2 className={styles.sectionTitle}>Vinç Kiralama Teklif Formu</h2>
              <p className={styles.formDesc}>
                İstanbul veya Samsun'da vinç kiralama ihtiyacınız için aşağıdaki formu doldurun.
                Mobil vinç, sepetli platform kiralama veya ağır yük taşıma hizmetlerimiz hakkında detaylı bilgi alın.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Iletisim;
