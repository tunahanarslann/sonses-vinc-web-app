import React from "react";
import styles from "./LayoutWrapper.module.scss";
import Navbar from "../Navbar";
import TopBar from "../TopBar";
import Footer from "../Footer";

const LayoutWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className={styles.layoutContainer}>
      {/* TopBar — normal akış, sayfayla birlikte kayar */}
      <TopBar />

      {/* Navbar — sticky, üstte sabit kalır */}
      <nav className={styles.navContainer}>
        <Navbar />
      </nav>

      <main className={styles.mainContainer}>{children}</main>
      <footer className={styles.footerContainer}>
        <Footer />
      </footer>
    </div>
  );
};

export default LayoutWrapper;
