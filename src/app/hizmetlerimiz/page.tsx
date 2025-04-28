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
      <OurServices/>
    </div>
  );
};

export default Hizmetlerimiz;
