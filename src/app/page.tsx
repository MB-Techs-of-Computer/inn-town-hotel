'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

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


  // Banner auto slider effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 9000); // 5 saniyede bir değiş

    return () => clearInterval(timer);
  }, [slides.length]);

  // Galeri otomatik kayma
  useEffect(() => {
    if (!galleryPlaying) return;

    const timer = setInterval(() => {
      setGallerySlide(prev => (prev + 1) % 3); // 13 resim / 5 = yaklaşık 3 slide
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

  const rooms = [
    {
      title: 'Suite Oda',
      href: '/odalar/suite',
      img: '/yonetim/resimler/sayfaresim/3132022215741.jpg',
      desc: `7 ve 8. katlarda bulunan 70 metre karelik kullanım alanı, şehir manzaralı süit odalarımızda, oturma odası ve yatak odası olmak üzere iki ayrı alandan oluşmaktadır.
Dilerseniz iş yemeği, dilerseniz sevdiklerinizle romantik bir akşam deneyimi için suit odalarımız size gerekli tüm imkanı sağlamaktadır. 2 kişilik yatak kapasitesi, küvet/duş kabin, merkezi ısıtma sistemi, ses yalıtımı, çalışma masası, ütü olanakları, LED ekran TV, kablolu yayın kanalları, telefon, kablosuz internet, mini bar, çay/kahve seti.`
    },
    {
      title: 'Junior Suite Oda',
      href: '/odalar/junior-suite',
      img: '/yonetim/resimler/sayfaresim/3132022215652.jpg',
      desc: `Şehir manzaralı 47 metre karelik kullanım alanı, güneş gören ferah ve huzurlu odalarımızda güne enerjik başlayın. 3 kişilik yatak kapasitesi ile Junior Suite odalarımızda dilerseniz romantik bir akşam yemeği yiyebilir, sevdiklerinizle güzel ve konforlu bir akşam geçirebilirsiniz.
Anti alerjik parke, merkezi ısıtma sistemi, ses yalıtımı, çalışma masası, ütü olanakları, LED ekran TV, kablolu yayın kanalları, telefon, kablosuz internet, mini bar, çay/kahve seti.`
    },
    {
      title: 'Standart Oda',
      href: '/odalar/standart',
      img: '/yonetim/resimler/sayfaresim/3132022215519.jpg',
      desc: `Şehir manzaralı 34 metre karelik geniş kullanım alanı ile; 2, 3 ve 4 kişilik yatak kapasiteleri ile anti alerjik parke ve halı kaplı zemin olmak üzere iki ayrı oda tipi mevcuttur.
Merkezi ısıtma sistemi, ses yalıtımı, çalışma masası, ütü olanakları, LED ekran TV, kablolu yayın kanalları, telefon, kablosuz internet, mini bar, çay/kahve seti.`
    }
  ];

  const nearbyPlaces = [
    { title: 'Anadolu Üniversitesi', desc: 'Ana Giriş Kapısına 300 metre mesafededir. Yürüme mesafesi 5 dakikadır.' },
    { title: 'Hava Müzesi', desc: 'Eskişehir Havacılık Müzesine 400 metre mesafededir. Yürüme mesafesi 5 dakikadır.' },
    { title: 'Espark', desc: 'Eskişehir Espark AVMye 400 metre mesafededir. Yürüme mesafesi 5 dakikadır.' },
    { title: 'Porsuk Çayı', desc: 'Porsuk Çayına 700 metre mesafededir. Yürüme mesafesi 7 dakikadır.' },
    { title: 'Barlar Sokağı', desc: 'Barlar Sokağına 700 metre mesafededir. Yürüme mesafesi 7 dakikadır.' },
    { title: 'Sazova', desc: 'Eskişehir Sazova Bilim Kültür Parkına 3 km mesafededir. Araç ile mesafesi 5 dakikadır.' },
    { title: 'Odunpazarı Evleri', desc: 'Tarihi Odunpazarı Evlerine 3 km mesafededir. Araç ile mesafesi 5 dakikadır.' },
    { title: 'Müzeler', desc: 'Müzelere (Odunpazarı Modern Müze, Cam Sanatları Müzesi, Kurtuluş Müzesi, Bal Mumu Müzesi vs.) 3 km mesafededir. Araç ile mesafesi 5 dakikadır.' }
  ];

  const nearbyImages = [
    '/yonetim/resimler/haberresim/142022161245.jpg',
    '/yonetim/resimler/haberresim/142022161321.jpg',
    '/yonetim/resimler/haberresim/142022161350.jpg',
    '/yonetim/resimler/haberresim/142022161455.jpg',
    '/yonetim/resimler/haberresim/142022161528.jpg',
    '/yonetim/resimler/haberresim/142022161427.jpg',
    '/yonetim/resimler/haberresim/142022161558.jpg',
    '/yonetim/resimler/haberresim/142022161622.jpg'
  ];

  const features = [
    { icon: 'flaticon-teamwork', title: 'Toplantı Salonları', count: '01' },
    { icon: 'fal fa-wheelchair', title: 'Fiziksel Engelliler İçin Olanaklar', count: '02' },
    { icon: 'fal fa-smoking-ban', title: 'Sigara İçilmeyen Kat ve Odalar', count: '03' },
    { icon: 'flaticon-wifi', title: 'Ücretsiz İnternet', count: '04' },
    { icon: 'fal fa-handshake', title: 'Anlaşmalı Kuaför', count: '05' },
    { icon: 'flaticon-location-pin', title: 'Merkezi Konum', count: '06' }
  ];

  return (
    <>
      <Header />

      {/* Banner Slider Section */}
      <section className="banner-area banner-style-three" id="bannerSlider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`single-banner d-flex align-items-center justify-content-center ${currentSlide === index ? 'active' : ''
              }`}
            style={{
              position: currentSlide === index ? 'relative' : 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              zIndex: currentSlide === index ? 1 : 0
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="banner-content">
                    <span
                      className={`promo-tag ${currentSlide === index ? 'fadeInDown' : ''}`}
                      style={{
                        animationDelay: currentSlide === index ? '0.6s' : '0s',
                        opacity: currentSlide === index ? 1 : 0
                      }}
                    >
                      ÜST DÜZEY LÜKS KONAKLAMA DENEYİMİ
                    </span>
                    <h1
                      className={`title ${currentSlide === index ? 'fadeInLeft' : ''}`}
                      style={{
                        animationDelay: currentSlide === index ? '0.9s' : '0s',
                        opacity: currentSlide === index ? 1 : 0
                      }}
                    >
                      Beklentilerinizi <br /> karşılıyoruz
                    </h1>
                    <ul>
                      <li
                        style={{
                          animationDelay: currentSlide === index ? '1.1s' : '0s',
                          opacity: currentSlide === index ? 1 : 0
                        }}
                        className={currentSlide === index ? 'fadeInUp' : ''}
                      >
                        <Link className="main-btn btn-filled" href={slide.link1.href}>
                          {slide.link1.text}
                        </Link>
                      </li>
                      <li
                        style={{
                          animationDelay: currentSlide === index ? '1.3s' : '0s',
                          opacity: currentSlide === index ? 1 : 0
                        }}
                        className={currentSlide === index ? 'fadeInUp' : ''}
                      >
                        <Link className="main-btn btn-border" href={slide.link2.href}>
                          {slide.link2.text}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="banner-bg" style={{ backgroundImage: `url(${slide.bg})` }}></div>
            <div className="banner-overly"></div>
          </div>
        ))}
      </section>

      {/* HopenAPI Search Form - Bu kısmı ekleyin */}
      <div id="block-search">
        <div id="be-search-form" className="be-container container">
          {/* Bu div'e HopenAPI tarafından rezervasyon formu yüklenecek */}
        </div>
      </div>

      {/* About Section */}
      <section className="about-section pt-115 pb-115">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-10">
              <div className="row about-features-boxes">
                <div className="col-sm-6">
                  <div className="single-feature-box">
                    <div className="icon">
                      <Image
                        src="/img/guvenli-turizm-logo.png"
                        alt="Güvenli Turizm"
                        width={100}
                        height={100}
                        style={{
                          width: '100px',
                          height: 'auto',
                          maxWidth: '100px'
                        }}
                      />
                    </div>
                    <h4><Link href="#">Güvenli Turizm</Link></h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div
                    className="single-feature-box only-bg mt-30"
                    style={{
                      backgroundImage: 'url(/img/ab2.jpg)'
                    }}
                  ></div>
                </div>
                <div className="col-sm-6">
                  <div
                    className="single-feature-box only-bg mt-30"
                    style={{
                      backgroundImage: 'url(/img/ab1.jpg)'
                    }}
                  ></div>
                </div>
                <div className="col-sm-6">
                  <div className="single-feature-box dark mt-30">
                    <div className="icon">
                      <i className="flaticon-hotel"></i>
                    </div>
                    <h4><Link href="#">Lüks Odalar</Link></h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-8 col-sm-10">
              <div className="abour-text pl-50 pr-50">
                <div className="section-title mb-30">
                  <span className="title-tag">HAKKIMIZDA</span>
                  <h2>Şehrin cazibe merkezinde</h2>
                </div>
                <p>
                  Ocak 2022 itibariyle, tecrübeli yönetim anlayışı ile misafirlerini ağırlamaya başlayan Inn
                  Town Hotel 75 Deluxe, 5 Junior Suite, 2 Suite olmak üzere toplamda 82 odaya sahiptir.
                </p>
                <p>
                  Ek olarak; 30 kişilik ve 80 kişilik 2 adet çok amaçlı toplantı salonu ve otelin 9. katında
                  bulunan 120 kişilik A la Carte Restaurant bulunmaktadır.
                </p>
                <Link href="/hakkimizda" className="main-btn btn-filled mt-40">
                  DAHA FAZLASI
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="about-right-bottom">
          <div className="about-bottom-img">
            <Image
              src="/img/abbg.jpg"
              alt="Hotel Background"
              fill
              style={{
                objectFit: 'cover',
                objectPosition: 'center'
              }}
              priority
              sizes="(max-width: 768px) 0px, 60vw"
            />
          </div>
        </div>
      </section>

      {/* Room Section */}
      <section className="room-slider bg-white pb-100 pt-115">
        <div className="container-fluid p-0">
          <div className="section-title mb-80 text-center">
            <span className="title-tag">Odalar</span>
            <h2>Özenle Tasarlanmış Odalar</h2>
          </div>
          <div className="row rooms-slider-two justify-content-center">
            {rooms.map((room, index) => (
              <div key={index} className="col-lg-6">
                <div className="single-rooms-box">
                  <div className="room-img">
                    <div className="img" style={{ backgroundImage: `url(${room.img})` }}></div>
                  </div>
                  <ul className="icons">
                    {['bed', 'wifi', 'car', 'coffee', 'concierge-bell', 'compress-arrows-alt'].map((icon, idx) => (
                      <li key={idx}><i className={`fal fa-${icon}`}></i></li>
                    ))}
                  </ul>
                  <div className="room-desc">
                    <div className="row align-items-center">
                      <div className="col-sm-8">
                        <h3><Link href={room.href}>{room.title}</Link></h3>
                        <div className="otext"><p>{room.desc}</p></div>
                      </div>
                      <div className="col-sm-4">
                        <div className="price"><span><Link href={room.href}>Detaylar &raquo;</Link></span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Section */}
      <section className="room-slider pt-100 pb-100">
        <div className="container-fluid p-0">
          <div className="section-title mb-100 text-center">
            <span className="title-tag">Yakın Çevre</span>
            <h2>Merkezlere Olan Mesafe</h2>
          </div>
          <div className="row rooms-slider-one">
            {nearbyImages.map((img, index) => (
              <div key={index} className="col">
                <div className="slider-img" style={{ backgroundImage: `url(${img})` }}></div>
              </div>
            ))}
          </div>
          <div className="rooms-content-wrap">
            <div className="container">
              <div className="row justify-content-center justify-content-md-start">
                <div className="col-xl-4 col-lg-5 col-sm-8">
                  <div className="room-content-box">
                    <div className="room-content-slider">
                      {nearbyPlaces.map((item, index) => (
                        <div key={index} className="single-content">
                          <div className="icon"><i className="flaticon-hotel"></i></div>
                          <h3><Link href="#">{item.title}</Link></h3>
                          <p>{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="core-feature-section bg-white pt-115 pb-115">
        <div className="container">
          <div className="section-title text-center mb-50">
            <span className="title-tag">SERVİSLER</span>
            <h2>Otel Özellikleri</h2>
          </div>
          <div className="row features-loop">
            {features.map((feature, index) => (
              <div key={index} className={`col-lg-4 col-sm-6 order-${index}`}>
                <div className="feature-box">
                  <div className="icon"><i className={feature.icon}></i></div>
                  <h3><Link href="#">{feature.title}</Link></h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna..</p>
                  <span className="count">{feature.count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="instagram-feed-section">
        <div className="container-fluid p-0">

          {/* Gallery Slider */}
          <div
            className="instagram-slider"
            onMouseEnter={() => setGalleryPlaying(false)}
            onMouseLeave={() => setGalleryPlaying(true)}
          >
            <div
              className="slider-track"
              style={{ transform: `translateX(-${gallerySlide * 100}%)` }}
            >
              {/* Slide 1 */}
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

              {/* Slide 2 */}
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

              {/* Slide 3 */}
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

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button className="lightbox-close" onClick={closeLightbox}>
              <i className="fas fa-times"></i>
            </button>

            {/* Main Image */}
            <div className="lightbox-image">
              <Image
                src={`/img/galeri/${lightboxIndex + 1}.jpg`}
                alt="Galeri"
                width={1200}
                height={800}
                style={{ objectFit: 'contain' }}
              />
            </div>

            {/* Navigation Arrows */}
            <button className="lightbox-arrow lightbox-prev" onClick={prevLightboxImage}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="lightbox-arrow lightbox-next" onClick={nextLightboxImage}>
              <i className="fas fa-chevron-right"></i>
            </button>

            {/* Image Counter */}
            <div className="lightbox-counter">
              {lightboxIndex + 1} / 13
            </div>

            {/* Thumbnail Navigation */}
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
      )}

      <Footer />
    </>
  );
}