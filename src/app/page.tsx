import React from "react";
import "./page.scss";
import HomepageSlider from "./Components/HomepageSlider";
import OurServices from "./Components/OurServices";
import AboutUs from "./Components/AboutUs";
import Referanslar from "./Components/Referanslar";
import Contact from "./Components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vinç Kiralama İstanbul & Samsun | Sonses Vinç - Mobil Vinç ve Sepetli Platform",
  description: "İstanbul ve Samsun'da profesyonel vinç kiralama hizmeti. Mobil vinç, sepetli platform, ağır yük taşıma ve vinç operatörü hizmetleri. 7/24 hızlı ve güvenli çözümler.",
  keywords: "vinç kiralama İstanbul, vinç kiralama Samsun, mobil vinç kiralama, sepetli platform kiralama, ağır yük taşıma, vinç operatörü",
  alternates: {
    canonical: "https://www.sonsesvinc.com",
  },
  openGraph: {
    title: "Vinç Kiralama İstanbul & Samsun | Sonses Vinç",
    description: "İstanbul ve Samsun'da profesyonel vinç kiralama hizmeti. Mobil vinç, sepetli platform ve ağır yük taşıma çözümleri.",
    type: "website",
    locale: "tr_TR",
  },
};

const HomePage = () => {
  return (
    <main className="homepageContainer">
      <h1 style={{position: "absolute", left:"-9999px"}}>İstanbul vinç kiralama hizmeti | Samsun vinç kiralama hizmeti | Sonses Vinç</h1>
      <HomepageSlider />
      <OurServices />
      <AboutUs />
      <Referanslar />
      <Contact />
    </main>
  );
};

export default HomePage;
