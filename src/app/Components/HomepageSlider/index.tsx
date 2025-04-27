"use client";
import React from "react";
import styles from "./HomepageSlider.module.scss";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import Vinc1 from "../../../../public/HomepageSlider/vinc_kirmizi_1.png";
import Vinc2 from "../../../../public/HomepageSlider/vinc_kirmizi_2.png";
import Vinc3 from "../../../../public/HomepageSlider/vinc_sari_1.png";
import Vinc4 from "../../../../public/HomepageSlider/vinc_yesil.png";
import Vinc5 from "../../../../public/HomepageSlider/vinc_sari_2.png"

const sliderData = [
  { id: "1", image: Vinc1, title: "vinc_kirmizi_1" },
  { id: "2", image: Vinc2, title: "vinc_kirmizi_2" },
  { id: "3", image: Vinc3, title: "vinc_sari" },
  { id: "4", image: Vinc4, title: "vinc_yesil" },
  { id: "5", image: Vinc5, title: "vinc_sari_2" },
];

const HomepageSlider = () => {
  return (
    <div className={styles.sliderContainer}>
      <Swiper
        className={styles.slider}
        modules={[ Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {sliderData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Image
              className={styles.sliderImg}
              src={slide.image}
              alt={slide.title}
              fill
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomepageSlider;
