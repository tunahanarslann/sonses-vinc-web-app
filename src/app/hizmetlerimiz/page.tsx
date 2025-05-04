import React from "react";
import styles from "./Hizmetlerimiz.module.scss";
import OurServices from "../Components/OurServices";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hizmetlerimiz",
  description:
    "İstanbul ve Samsun'da vinç kiralama hizmetleri için bizimle iletişime geçebilirsiniz. Sonses Vinç - Hizmetlerimiz",
  alternates: {
    canonical: "https://www.sonsesvinc.com/hizmetlerimiz",
  },
};

const Hizmetlerimiz = () => {
  return (
    <div className={styles.ourServicesPageContainer}>
      <h1 style={{ position: "absolute", left: "-9999px" }}>Hizmetlerimiz</h1>
      <OurServices />
    </div>
  );
};

export default Hizmetlerimiz;
