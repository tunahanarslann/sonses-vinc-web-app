"use client";
import React from "react";
import styles from "./VincCard.module.scss";
import Image, { StaticImageData } from "next/image";

interface CardProps {
  id: string;
  image: StaticImageData;
  description: string;
  location: string;
  diagramImage?: StaticImageData | null;
}

const VincCard = ({
  id,
  image,
  description,
  location,
  diagramImage,
}: CardProps) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imgBox}>
        <Image className={styles.img} src={image} alt={id} />
      </div>
      <div className={styles.contentBox}>
        <div className={styles.descriptionBox}>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.locationBox}>
          <h5 className={styles.locationTitle}>KONUM:</h5>
          <p className={styles.location}>{location}</p>
        </div>
        {diagramImage && (
          <div className={styles.diagramBox}>
            <h5 className={styles.diagramTitle}>KALDIRMA DİYAGRAMI:</h5>
            <Image className={styles.diagramImg} src={diagramImage} alt={id} />
          </div>
        )}
      </div>
    </div>
  );
};

export default VincCard;
