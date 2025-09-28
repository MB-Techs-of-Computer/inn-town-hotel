'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import '@/styles/components/banner.css';

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/img/s1.jpg',
      title: 'Beklentilerinizi karşılıyoruz',
      subtitle: 'Üst Düzey Lüks Konaklama Deneyimi',
      offer: 'Seçili odalarda özel fiyatlar | Hemen rezervasyon yapın',
      description: 'Konforun ve kalitenin buluştuğu otelimizde unutulmaz anılar biriktirin.',
      primaryBtn: { href: '/odalar', text: 'ODALAR' },
      secondaryBtn: { href: '/iletisim', text: 'İLETİŞİM' },
      contact: 'İletişim: (212) 555 0123'
    },
    {
      image: '/img/s2.jpg',
      title: 'Kaliteli hizmet anlayışı',
      subtitle: 'Modern konfor ve geleneksel misafirperverlik',
      offer: 'Erken rezervasyon indirimleri | Özel paket fırsatları',
      description: 'Şehrin merkezinde, size özel tasarlanmış konforlu odalarımızda kalın.',
      primaryBtn: { href: '/galeri', text: 'GALERİ' },
      secondaryBtn: { href: '/hakkimizda', text: 'HAKKIMIZDA' },
      contact: 'Rezervasyon: (212) 555 0124'
    }
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
          <div key={index} className={`banner-slide ${currentSlide === index ? 'active' : ''}`}>
            {/* Sol: Fotoğraf */}
            <div className="banner-image-side">
              <div className="image-wrapper">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={1000}
                  height={800}
                  className="banner-image"
                />
              </div>
            </div>

            {/* Sağ: İçerik */}
            <div className="banner-content-side">
              <h1 className="main-title">{slide.title}</h1>
              <div className="subtitle">{slide.subtitle}</div>
              <div className="offer-text">{slide.offer}</div>
              <p className="description">{slide.description}</p>

              <div className="cta-section">
                <Link href={slide.primaryBtn.href} className="book-now-btn">
                  {slide.primaryBtn.text}
                </Link>
                <Link href={slide.secondaryBtn.href} className="secondary-btn">
                  {slide.secondaryBtn.text}
                </Link>
              </div>
              <div className="contact-info">{slide.contact}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}