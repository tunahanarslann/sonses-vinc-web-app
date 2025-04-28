import React from "react";
import "./not-found.scss"
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="not-found-page-container">
      <h2>Sayfa Bulunamadı</h2>
      <p>Bu sayfa mevcut değil gibi görünüyor.</p>
      <Link href="/" className="go-to-home-btn">Anasayfaya Dön</Link>
    </div>
  );
};

export default NotFound;
