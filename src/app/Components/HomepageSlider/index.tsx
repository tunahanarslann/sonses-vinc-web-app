"use client";
import React from "react";
import styles from "./HomepageSlider.module.scss";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Vinc6 from "../../../../public/HomepageSlider/vinc1.webp";
import Vinc7 from "../../../../public/HomepageSlider/vinc2.webp";
import Vinc8 from "../../../../public/HomepageSlider/vinc3.webp";
import Vinc9 from "../../../../public/HomepageSlider/vinc4.webp";
import Vinc10 from "../../../../public/HomepageSlider/vinc5.webp";
import Vinc11 from "../../../../public/HomepageSlider/vinc6.webp";
import Vinc12 from "../../../../public/HomepageSlider/vinc7.webp";
import forkliftImg from "../../../../public/HomepageSlider/forklift_image.webp";
import Link from "next/link";

const sliderData = [
  {
    id: "1",
    image: Vinc7,
    title: "Güçlü ve Güvenilir Vinç Kiralama",
    desc: "Her türlü yükünüz için modern ve bakımlı vinç filomuzla hizmetinizdeyiz.",
    cta: "Hemen Teklif Al",
    ctaLink: "/iletisim",
  },
  {
    id: "2",
    image: Vinc9,
    title: "Endüstriyel Çözümler",
    desc: "B2B ve bireysel projelerinizde profesyonel destek.",
    cta: "Detaylı Bilgi",
    ctaLink: "/hizmetlerimiz",
  },
  {
    id: "3",
    image: Vinc6,
    title: "7/24 Destek ve Hızlı Servis",
    desc: "Acil işlerinizde hızlı çözüm, güvenli operasyon.",
    cta: "İletişime Geç",
    ctaLink: "/iletisim",
  },
  {
    id: "4",
    image: Vinc8,
    title: "Fark Yaratan Referanslar",
    desc: "Bizi tercih eden mutlu müşterilerimize katılın.",
    cta: "Referanslar",
    ctaLink: "/referanslar",
  },
  {
    id: "5",
    image: Vinc10,
    title: "Her Yükte Yanınızdayız",
    desc: "Ağır ve hassas yükler için özel çözümler.",
    cta: "Hizmetlerimiz",
    ctaLink: "/hizmetlerimiz",
  },
  {
    id: "6",
    image: forkliftImg,
    title: "Forklift ve Vinç Kiralama",
    desc: "Farklı kapasite ve özelliklerde araçlarımızla hizmetinizdeyiz.",
    cta: "Teklif Al",
    ctaLink: "/iletisim",
  },
  {
    id: "7",
    image: Vinc11,
    title: "Uzman Operatör Kadrosu",
    desc: "Deneyimli ekibimizle güvenli ve hızlı çözümler.",
    cta: "Hakkımızda",
    ctaLink: "/hakkimizda",
  },
  {
    id: "8",
    image: Vinc12,
    title: "Samsun ve Çevresine Hizmet",
    desc: "Yerel işletmelere ve büyük projelere uygun çözümler.",
    cta: "İletişim",
    ctaLink: "/iletisim",
  },
];

const HomepageSlider = () => {
  return (
    <div className={styles.sliderContainer}>
      <Swiper
        className={styles.slider}
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop
      >
        {sliderData.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className={styles.slideContentWrapper}>
              <Image
                className={styles.sliderImg}
                src={slide.image}
                alt={slide.title}
                fill
                loading={index === 0 ? "eager" : "lazy"}
                priority={index === 0}
                style={{ objectFit: "cover" }}
              />
              <div className={styles.slideOverlay}>
                <div className={styles.slideTextBox}>
                  <h2 className={styles.slideTitle}>{slide.title}</h2>
                  <p className={styles.slideDesc}>{slide.desc}</p>
                  <Link href={slide.ctaLink} className={styles.slideCtaBtn}>
                    <span>{slide.cta}</span>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomepageSlider;
