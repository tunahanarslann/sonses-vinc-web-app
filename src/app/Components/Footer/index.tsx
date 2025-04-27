"use client";
import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <h5 className={styles.title}>Copyright © Sonses Vinç, 2025</h5>
      <div className={styles.footerDescBox}>
        <h5 className={styles.desc}>Tüm hakları saklıdır.</h5>
        <div className={styles.footerTextBox}>
          <h5 className={styles.footerText}>Powered by</h5>
          <a href="https://github.com/tunahanarslann" target="_blank" rel="noopener noreferrer">TUNAHAN ARSLAN</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
