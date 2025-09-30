'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RoomSlider from '../components/RoomSlider';
import NearbyPlaces from '@/components/NearbyPlaces';
import AboutSection from '@/components/AboutSection';
import Banner from '@/components/Banner';

export default function HomePage() {
  // Banner slider state
  const [currentSlide, setCurrentSlide] = useState(0);

  // Instagram Gallery States
  const [gallerySlide, setGallerySlide] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [galleryPlaying, setGalleryPlaying] = useState(true);

  // Banner slider data
  const slides = [
    {
      bg: '/img/s1.jpg',
      link1: { href: '/odalar', text: 'odalar' },
      link2: { href: '/iletisim', text: 'iletişim' },
    },
    {
      bg: '/img/s2.jpg',
      link1: { href: '/galeri', text: 'Galeri' },
      link2: { href: '/hakkimizda', text: 'Hakkımızda' },
    },
  ];

  useEffect(() => {
    // HopenAPI Booking Engine script'ini yükle
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      !function (e, n) {
        var t = "bookingengine", o = "integration", i = e[t] = e[t] || {}, a = i[o] = i[o] || {}, r = "__cq", c = "__loader", d = "getElementsByTagName";
        if (n = n || [], a[r] = a[r] ? a[r].concat(n) : n, !a[c]) {
          a[c] = !0; var l = e.document, g = l[d]("head")[0] || l[d]("body")[0];
          !function n(i) {
            if (0 !== i.length) {
              var a = l.createElement("script"); a.type = "text/javascript", a.async = !0, a.src = "https://" + i[0] + "/integration/loader.js",
                a.onerror = a.onload = function (n, i) { return function () { e[t] && e[t][o] && e[t][o].loaded || (g.removeChild(n), i()) } }(a, (function () { n(i.slice(1, i.length)) })), g.appendChild(a)
            }
          }(
            ["tr-ibe.hopenapi.com", "ibe.hopenapi.com", "ibe.behopenapi.com"])
        }
      }(window, [
        ["setContext", "BE-INT-inntownhotel_2023-05-25", "tr"],
        ["embed", "booking-form", {
          container: "be-booking-form"
        }],
        ["embed", "search-form", {
          container: "be-search-form"
        }]
      ]);
    `;
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      // Script'i kaldır
      const scripts = document.head.querySelectorAll('script');
      scripts.forEach(s => {
        if (s.innerHTML.includes('bookingengine')) {
          document.head.removeChild(s);
        }
      });
    };
  }, []);

  useEffect(() => {
    // WOW.js'i başlat
    if (typeof window !== 'undefined') {
      const { WOW } = require('wowjs');
      new WOW({
        live: false,
        mobile: true,
        offset: 100,
      }).init();
    }
  }, []);

  // Banner auto slider effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 9000);

    return () => clearInterval(timer);
  }, [slides.length]);

  // Galeri otomatik kayma
  useEffect(() => {
    if (!galleryPlaying) return;

    const timer = setInterval(() => {
      setGallerySlide(prev => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(timer);
  }, [galleryPlaying]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;

      if (e.key === 'ArrowRight') {
        setLightboxIndex(prev => (prev + 1) % 13);
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex(prev => (prev - 1 + 13) % 13);
      } else if (e.key === 'Escape') {
        closeLightbox();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [lightboxOpen]);

  // Gallery Functions
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    setGalleryPlaying(false);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setGalleryPlaying(true);
    document.body.style.overflow = 'auto';
  };

  const nextLightboxImage = () => {
    setLightboxIndex(prev => (prev + 1) % 13);
  };

  const prevLightboxImage = () => {
    setLightboxIndex(prev => (prev - 1 + 13) % 13);
  };

  return (
    <>
      <Header />

      {/* Banner Slider Section */}
      <Banner/>

      {/* HopenAPI Search Form */}
      <div id="block-search">
        <div id="be-search-form" className="be-container container">
          {/* Bu div'e HopenAPI tarafından rezervasyon formu yüklenecek */}
        </div>
      </div>

      <AboutSection/>

      {/* Room Slider Section */}
      <RoomSlider />
      {/* Nearby Section */}
      <NearbyPlaces />

      {/* Core Features Section */}
      <section className="core-feature-section bg-white pt-115 pb-115">
        <div className="container">
          <div className="section-title text-center mb-50">
            <span className="title-tag">SERVİSLER</span>
            <h2>Otel Özellikleri</h2>
          </div>
          <div className="row features-loop">
            <div className="col-lg-4 col-sm-6 order-1">
              <div className="feature-box wow fadeInLeft" data-wow-delay=".3s">
                <div className="icon"><i className="flaticon-teamwork"></i></div>
                <h3><Link href="#">Toplantı<br /> Salonları</Link></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna..</p>
                <span className="count">01</span>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 order-2">
              <div className="feature-box wow fadeInDown" data-wow-delay=".4s">
                <div className="icon"><i className="fal fa-wheelchair"></i></div>
                <h3><Link href="#">Fiziksel Engelliler İçin Olanaklar</Link></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna..</p>
                <span className="count">02</span>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 order-3 order-sm-4 order-lg-3">
              <div className="feature-box wow fadeInRight" data-wow-delay=".5s">
                <div className="icon"><i className="fal fa-smoking-ban"></i></div>
                <h3><Link href="#">Sigara İçilmeyen Kat ve Odalar</Link></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna..</p>
                <span className="count">03</span>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 order-4 order-sm-3 order-lg-4">
              <div className="feature-box wow fadeInLeft" data-wow-delay=".6s">
                <div className="icon"><i className="flaticon-wifi"></i></div>
                <h3><Link href="#">Ücretsiz İnternet</Link></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna..</p>
                <span className="count">04</span>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 order-5">
              <div className="feature-box wow fadeInUp" data-wow-delay=".7s">
                <div className="icon"><i className="fal fa-handshake"></i></div>
                <h3><Link href="#">Anlaşmalı Kuaför</Link></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna..</p>
                <span className="count">05</span>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 order-6">
              <div className="feature-box wow fadeInRight" data-wow-delay=".8s">
                <div className="icon"><i className="flaticon-location-pin"></i></div>
                <h3><Link href="#">Merkezi Konum</Link></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna..</p>
                <span className="count">06</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      {/* <section className="instagram-feed-section">
        <div className="container-fluid p-0">
          <div
            className="instagram-slider"
            onMouseEnter={() => setGalleryPlaying(false)}
            onMouseLeave={() => setGalleryPlaying(true)}
          >
            <div
              className="slider-track"
              style={{ transform: `translateX(-${gallerySlide * 100}%)` }}
            >
             
              <div className="image-slide">
                {[1, 2, 3, 4, 5].map(num => (
                  <div key={num} className="image">
                    <div
                      className="image-wrapper"
                      onClick={() => openLightbox(num - 1)}
                    >
                      <Image
                        src={`/img/galeri/${num}.jpg`}
                        alt="Galeri"
                        width={300}
                        height={300}
                      />
                      <div className="image-overlay">
                        <div className="overlay-icon"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              
              <div className="image-slide">
                {[6, 7, 8, 9, 10].map(num => (
                  <div key={num} className="image">
                    <div
                      className="image-wrapper"
                      onClick={() => openLightbox(num - 1)}
                    >
                      <Image
                        src={`/img/galeri/${num}.jpg`}
                        alt="Galeri"
                        width={300}
                        height={300}
                      />
                      <div className="image-overlay">
                        <div className="overlay-icon"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              
              <div className="image-slide">
                {[11, 12, 13, 1, 2].map((num, index) => (
                  <div key={`${num}-${index}`} className="image">
                    <div
                      className="image-wrapper"
                      onClick={() => openLightbox(num > 13 ? num - 13 : num - 1)}
                    >
                      <Image
                        src={`/img/galeri/${num > 13 ? num - 13 : num}.jpg`}
                        alt="Galeri"
                        width={300}
                        height={300}
                      />
                      <div className="image-overlay">
                        <div className="overlay-icon"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              <i className="fas fa-times"></i>
            </button>

            <div className="lightbox-image">
              <Image
                src={`/img/galeri/${lightboxIndex + 1}.jpg`}
                alt="Galeri"
                width={1200}
                height={800}
                style={{ objectFit: 'contain' }}
              />
            </div>

            <button className="lightbox-arrow lightbox-prev" onClick={prevLightboxImage}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="lightbox-arrow lightbox-next" onClick={nextLightboxImage}>
              <i className="fas fa-chevron-right"></i>
            </button>

            <div className="lightbox-counter">
              {lightboxIndex + 1} / 13
            </div>

            <div className="lightbox-thumbnails">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((num, index) => (
                <div
                  key={num}
                  className={`thumbnail ${index === lightboxIndex ? 'active' : ''}`}
                  onClick={() => setLightboxIndex(index)}
                >
                  <Image
                    src={`/img/galeri/${num}.jpg`}
                    alt="Galeri"
                    width={60}
                    height={60}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )} */}

      <Footer />
    </>
  );
}