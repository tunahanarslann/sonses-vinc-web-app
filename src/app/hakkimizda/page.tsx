import React from "react";
import styles from "./Hakkimizda.module.scss";
import AboutUs from "../Components/AboutUs";
import Head from "next/head";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: "İstanbul ve Samsun'da vinç kiralama hizmetleri için bizimle iletişime geçebilirsiniz. Sonses Vinç - Hakkımızda",
};

const Hakkımızda = () => {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.sonsesvinc.com/hakkimizda" />
      </Head>
      <div className={styles.aboutUsPageContainer}>
        <h1 style={{ position: "absolute", left: "-9999px" }}>Hakkımızda</h1>
        <AboutUs />
      </div>
    </>
  );
};

export default Hakkımızda;
