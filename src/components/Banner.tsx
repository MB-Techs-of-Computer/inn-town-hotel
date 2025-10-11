'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import '@/styles/components/banner.css';

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { image: '/img/s1.jpg' },
    { image: '/img/s2.jpg' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="banner-section">
      <div className="banner-container">
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`banner-slide ${currentSlide === index ? 'active' : ''}`}
          >
            <div className="banner-wrapper">
              <div className="banner-image-container">
                <div className="image-wrapper">
                  <Image
                    src={slide.image}
                    alt="Hotel Banner"
                    fill
                    className="banner-image"
                    priority={index === 0}
                  />
                </div>
              </div>

              <div className="banner-content">
                <h1 className="main-title">Beklentilerinizi karşılıyoruz</h1>
                <div className="subtitle">Üst Düzey Lüks Konaklama Deneyimi</div>
                <div className="offer-text">
                  Seçili odalarda özel fiyatlar | Hemen rezervasyon yapın
                </div>
                <p className="description">
                  Konforun ve kalitenin buluştuğu otelimizde unutulmaz anılar biriktirin.
                </p>

                <div className="cta-section">
                  <Link href="/rooms" className="book-now-btn">
                    ODALARIMIZ
                  </Link>
                  <Link href="/contact" className="secondary-btn">
                    İLETİŞİM
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}