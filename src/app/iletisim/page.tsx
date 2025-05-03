import React from "react";
import styles from "./Iletisim.module.scss";
import Contact from "../Components/Contact";
import { Metadata } from "next";

export const metadata: Metadata ={
  title: "İletişim"
}

const İletişim = () => {
  return (
    <div className={styles.contactPageContainer}>
      <h1 style={{position: "absolute", left:"-9999px"}}>İletişim</h1>
      <Contact />
    </div>
  );
};

export default İletişim;
