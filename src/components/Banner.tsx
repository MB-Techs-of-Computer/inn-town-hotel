"use client";
import Link from "next/link";
import "@/styles/components/banner.css";

export default function Banner() {
  return (
    <section className="banner-section">
      <div className="banner-container">
        <div className="banner-content">
          <h1 className="main-title">Beklentilerinizi karşılıyoruz</h1>
          <div className="subtitle">Üst Düzey Lüks Konaklama Deneyimi</div>
          <div className="offer-text">Seçili odalarda özel fiyatlar | Hemen rezervasyon yapın</div>
          <p className="description">Konforun ve kalitenin buluştuğu otelimizde unutulmaz anılar biriktirin.</p>

          <div className="cta-section">
            <Link href="/rooms" className="book-now-btn">
              ODALARIMIZ
            </Link>
            <Link href="/contact" className="secondary-btn">
              İLETİŞİM
            </Link>
          </div>
        </div>
        <div className="banner-bg"></div>
      </div>
    </section>
  );
}
