"use client";
import React from "react";
import styles from "./Hizmetlerimiz.module.scss"
import OurServices from "../Components/OurServices";

const Hizmetlerimiz = () => {
  return (
    <div className={styles.ourServicesPageContainer}>
      <OurServices/>
    </div>
  );
};

export default Hizmetlerimiz;
