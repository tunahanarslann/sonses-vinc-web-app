import React from "react";
import styles from "./AboutUs.module.scss";

const AboutUs = () => {
  return (
    <div className={styles.aboutUsContainer}>
      <div className={styles.title}>Hakkımızda</div>
      <p className={styles.text}>
        2008&apos;de kendi firmamızda kullanmak üzere aldığımız vinçle başlayan
        işlerimiz zamanla bu sektöre yönelmiştir. Araçlarımızın her yıl makine
        mühendisi onaylı periyodik kontrolü yapılamaktadır. İş güvenliklerinin
        istediği evraklar tamdır.
      </p>
    </div>
  );
};

export default AboutUs;
