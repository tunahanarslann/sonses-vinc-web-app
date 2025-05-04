import React from "react";
import styles from "./Iletisim.module.scss";
import Contact from "../Components/Contact";
import Head from "next/head";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim",
  description: "İstanbul ve Samsun'da vinç kiralama hizmetleri için bizimle iletişime geçebilirsiniz. Sonses Vinç - İletişim",
};

const İletişim = () => {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.sonsesvinc.com/iletisim" />
      </Head>
      <div className={styles.contactPageContainer}>
        <h1 style={{ position: "absolute", left: "-9999px" }}>İletişim</h1>
        <Contact />
      </div>
    </>
  );
};

export default İletişim;
