"use client";
import React, { useState } from "react";
import styles from "./Contact/Contact.module.scss";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

type FormStatus = "idle" | "sending" | "success" | "error";

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Bir hata oluştu.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });

      // 5 saniye sonra başarı mesajını kaldır
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Bir hata oluştu. Lütfen tekrar deneyin."
      );
    }
  };

  return (
    <>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Adınız Soyadınız"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={status === "sending"}
        />
        <input
          type="email"
          name="email"
          placeholder="E-posta"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={status === "sending"}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Telefon"
          value={formData.phone}
          onChange={handleChange}
          required
          disabled={status === "sending"}
        />
        <textarea
          name="message"
          placeholder="Mesajınız"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          disabled={status === "sending"}
        />
        <button type="submit" disabled={status === "sending"}>
          <span>
            {status === "sending" ? "Gönderiliyor..." : "Gönder"}
          </span>
        </button>

        {status === "success" && (
          <p className={styles.successMessage}>
            ✅ Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
          </p>
        )}
        {status === "error" && (
          <p className={styles.errorMessage}>
            ❌ {errorMessage}
          </p>
        )}
      </form>
      <div className={styles.quickLinks}>
        <a href="tel:05351085170" className={styles.quickBtn}>
          <FaPhoneAlt /> Ara
        </a>
        <a
          href={`mailto:sonsesvinc@gmail.com?subject=${encodeURIComponent('Vinç Kiralama Bilgi Talebi')}&body=${encodeURIComponent('Merhaba,\n\nSonses Vinç web sitesi üzerinden iletişim kuruyorum.\n\nAd Soyad: \nTelefon: \n\nMesaj:\n\n\nSaygılarımla.')}`}
          className={styles.quickBtn}
        >
          <FaEnvelope /> Mail
        </a>
        <a
          href={`https://wa.me/905351085170?text=${encodeURIComponent('Merhaba, Sonses Vinç web sitenizden ulaşıyorum. Vinç kiralama hakkında bilgi almak istiyorum.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.quickBtn}
        >
          <FaWhatsapp /> WhatsApp
        </a>
      </div>
    </>
  );
};

export default ContactForm;