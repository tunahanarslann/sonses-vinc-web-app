"use client";
import React from "react";
import styles from "./HomepageSlider.module.scss";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import Vinc6 from "../../../../public/HomepageSlider/vinc1.webp";
import Vinc7 from "../../../../public/HomepageSlider/vinc2.webp";
import Vinc8 from "../../../../public/HomepageSlider/vinc3.webp";
import Vinc9 from "../../../../public/HomepageSlider/vinc4.webp";
import Vinc10 from "../../../../public/HomepageSlider/vinc5.webp";
import Vinc11 from "../../../../public/HomepageSlider/vinc6.webp";
import Vinc12 from "../../../../public/HomepageSlider/vinc7.webp";
import forkliftImg from "../../../../public/HomepageSlider/forklift_image.webp";

const sliderData = [
  { id: "1", image: Vinc7, title: "vinc7" },
  { id: "2", image: Vinc9, title: "vinc8" },
  { id: "3", image: Vinc6, title: "vinc9" },
  { id: "4", image: Vinc8, title: "vinc6" },
  { id: "5", image: Vinc10, title: "vinc10" },
  { id: "6", image: forkliftImg, title: "forklift_img" },
  { id: "7", image: Vinc11, title: "vinc11" },
  { id: "8", image: Vinc12, title: "vinc12" },
];

const HomepageSlider = () => {
  return (
    <div className={styles.sliderContainer}>
      <Swiper
        className={styles.slider}
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {sliderData.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <Image
              className={styles.sliderImg}
              src={slide.image}
              alt={slide.title}
              fill
              loading={index === 0 ? "eager" : "lazy"}
              priority={index === 0}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomepageSlider;
