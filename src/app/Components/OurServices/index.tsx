import React from "react";
import styles from "./OurServices.module.scss";
import VincCard from "../VincCard";
import Vinc1 from "../../../../public/HomepageSlider/vinc_kirmizi_1.webp";
import Vinc2 from "../../../../public/HomepageSlider/vinc_sari_1.webp";
import Vinc3 from "../../../../public/HomepageSlider/vinc_yesil.webp";
import Vinc4 from "../../../../public/HomepageSlider/vinc_sari_2.webp";
import Diagram1 from "../../../../public/OurServices/kirmizi_vinc_diyagram.png";
import Diagram2 from "../../../../public/OurServices/sari_vinc_diyagram.png";
import Diagram3 from "../../../../public/OurServices/yesil_vinc_diyagram.png";

const cardData = [
  {
    id: "1",
    image: Vinc1,
    description: "35 TON ÇİFT KIRMA",
    location: "İstanbul/Başakşehir",
    diagramImage: Diagram1,
  },
  {
    id: "2",
    image: Vinc2,
    description: "30 TON ÇİFT KIRMA",
    location: "İstanbul/Başakşehir",
    diagramImage: Diagram2,
  },
  {
    id: "3",
    image: Vinc3,
    description: "30 METRE SEPETLİ PLATFORM",
    location: "İstanbul/Başakşehir",
    diagramImage: Diagram3,
  },
  {
    id: "4",
    image: Vinc4,
    description: "30 TON TEK KIRMA",
    location: "Samsun",
    diagramImage: null,
  },
];

const OurServices = () => {
  return (
    <div className={styles.ourServicesContainer}>
      <h2 className={styles.title}>Hizmetlerimiz</h2>
      <div className={styles.textBox}>
        <h2>İstanbul vinç kiralama | Samsun vinç kiralama</h2>
        <p>
          Sonses Vinç olarak İstanbul ve Samsun genelinde sepetli vinç ve mobil
          vinç hizmetleri veriyoruz. Hemen bizimle iletişime geçerek
          ihtiyaçlarınıza özel çözümler alabilirsiniz.
        </p>
      </div>
      <div className={styles.cardContainer}>
        {cardData.map((card) => (
          <VincCard
            key={card.id}
            id={card.id}
            image={card.image}
            description={card.description}
            location={card.location}
            diagramImage={card.diagramImage}
          />
        ))}
      </div>
    </div>
  );
};

export default OurServices;
