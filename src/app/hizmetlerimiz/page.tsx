import React from "react";
import styles from "./Hizmetlerimiz.module.scss";
import OurServices from "../Components/OurServices";
import Head from "next/head";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hizmetlerimiz",
  description: "İstanbul ve Samsun'da vinç kiralama hizmetleri için bizimle iletişime geçebilirsiniz. Sonses Vinç - Hizmetlerimiz",
};

const Hizmetlerimiz = () => {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.sonsesvinc.com/hizmetlerimiz" />
      </Head>
      <div className={styles.ourServicesPageContainer}>
        <h1 style={{ position: "absolute", left: "-9999px" }}>Hizmetlerimiz</h1>
        <OurServices />
      </div>
    </>
  );
};

export default Hizmetlerimiz;
