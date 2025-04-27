"use client";
import React from "react";
import styles from "./Hakkimizda.module.scss";
import AboutUs from "../Components/AboutUs";

const Hakkımızda = () => {
  return (
    <div className={styles.aboutUsPageContainer}>
      <AboutUs />
    </div>
  );
};

export default Hakkımızda;
