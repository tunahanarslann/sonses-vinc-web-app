import React from "react";
import styles from "./Hakkimizda.module.scss";
import AboutUs from "../Components/AboutUs";
import { Metadata } from "next";

export const metadata: Metadata ={
  title: "Hakkımızda"
}
const Hakkımızda = () => {
  return (
    <div className={styles.aboutUsPageContainer}>
      <h1 style={{position: "absolute", left:"-9999px"}}>Hakkımızda</h1>
      <AboutUs />
    </div>
  );
};

export default Hakkımızda;
