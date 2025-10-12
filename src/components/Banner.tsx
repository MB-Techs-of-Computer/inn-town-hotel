"use client";
import Link from "next/link";
import "@/styles/components/banner.css";

export default function Banner() {
  return (
    <section className="banner-section">
      <div className="banner-container">
        <div className="banner-content">
          <h1 className="main-title">Beklentilerinizi</h1>
          <h1 className="main-title-right">karşılıyoruz</h1>
          <div className="subtitle">Her anınız özel, her detay kusursuz</div>
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