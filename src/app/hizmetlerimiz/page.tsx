import React from "react";
import styles from "./Hizmetlerimiz.module.scss"
import OurServices from "../Components/OurServices";
import { Metadata } from "next";

export const metadata: Metadata ={
  title: "Hizmetlerimiz"
}

const Hizmetlerimiz = () => {
  return (
    <div className={styles.ourServicesPageContainer}>
      <h1 style={{position: "absolute", left:"-9999px"}}>Hizmetlerimiz</h1>
      <OurServices/>
    </div>
  );
};

export default Hizmetlerimiz;
