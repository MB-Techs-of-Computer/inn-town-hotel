"use client";
import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/components/nearbyplaces.css";

export default function NearbyPlaces() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageSliderRef, setImageSliderRef] = useState<Slider | null>(null);
  const [contentSliderRef, setContentSliderRef] = useState<Slider | null>(null);
  const [sliderReady, setSliderReady] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(3); // 👈 dinamik kontrol
  const sliderContainerRef = useRef<HTMLDivElement>(null);

  const nearbyPlaces = [
    {
      title: "Anadolu Üniversitesi",
      desc: "Anadolu Üniversitesi Ana Giriş Kapısına 300 metre mesafededir. Yürüme mesafesi 5 dakikadır.",
      image: "/yonetim/resimler/haberresim/142022161245.jpg",
    },
    {
      title: "Hava Müzesi",
      desc: "Eskişehir Havacılık Müzesine 400 metre mesafededir. Yürüme mesafesi 5 dakikadır.",
      image: "/yonetim/resimler/haberresim/142022161321.jpg",
    },
    {
      title: "Espark",
      desc: "Eskişehir Espark AVM'ye 400 metre mesafededir. Yürüme mesafesi 5 dakikadır.",
      image: "/yonetim/resimler/haberresim/142022161350.jpg",
    },
    {
      title: "Porsuk Çayı",
      desc: "Porsuk Çayına 700 metre mesafededir. Yürüme mesafesi 7 dakikadır.",
      image: "/yonetim/resimler/haberresim/142022161455.jpg",
    },
    {
      title: "Barlar Sokağı",
      desc: "Barlar Sokağına 700 metre mesafededir. Yürüme mesafesi 7 dakikadır.",
      image: "/yonetim/resimler/haberresim/142022161528.jpg",
    },
    {
      title: "Sazova",
      desc: "Eskişehir Sazova Bilim Kültür Parkına 3 km mesafededir. Araç ile mesafesi 5 dakikadır.",
      image: "/yonetim/resimler/haberresim/142022161427.jpg",
    },
    {
      title: "Odunpazarı Evleri",
      desc: "Tarihi Odunpazarı Evlerine 3 km mesafededir. Araç ile mesafesi 5 dakikadır.",
      image: "/yonetim/resimler/haberresim/142022161558.jpg",
    },
    {
      title: "Müzeler",
      desc: "Müzelere (Odunpazarı Modern Müze, Cam Sanatları Müzesi, Kurtuluş Müzesi, Bal Mumu Müzesi vs.) 3 km mesafededir. Araç ile mesafesi 5 dakikadır.",
      image: "/yonetim/resimler/haberresim/142022161622.jpg",
    },
  ];

  // ✅ Ekran genişliğine göre slide sayısını ayarlıyoruz
  useEffect(() => {
    const updateSlides = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(3);
      }
    };
    updateSlides(); // ilk yükleme
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  // Slider yüklenmesi
  useEffect(() => {
    setSliderReady(false);
    const initTimer = setTimeout(() => {
      setSliderReady(true);
    }, 100);
    return () => clearTimeout(initTimer);
  }, []);

  // Slider ref hazırsa yeniden boyutlandır
  useEffect(() => {
    if (imageSliderRef && contentSliderRef && sliderReady) {
      const timers = [150, 300, 500].map((delay) =>
        setTimeout(() => {
          window.dispatchEvent(new Event("resize"));
          if (imageSliderRef?.slickGoTo) {
            imageSliderRef.slickGoTo(currentSlide, true);
          }
        }, delay)
      );
      return () => timers.forEach((timer) => clearTimeout(timer));
    }
  }, [imageSliderRef, contentSliderRef, sliderReady, currentSlide]);

  // Container gözlemi
  useEffect(() => {
    if (!sliderContainerRef.current || !sliderReady) return;
    const observer = new ResizeObserver(() => {
      window.dispatchEvent(new Event("resize"));
    });
    observer.observe(sliderContainerRef.current);
    return () => observer.disconnect();
  }, [sliderReady]);

  const handleSlideChange = (current: number, next: number) => {
    setCurrentSlide(next);
  };

  // ✅ slidesToShow artık dinamik
  const imageSliderSettings = {
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    fade: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: false,
    centerMode: slidesToShow > 1, // mobilde kapalı
    centerPadding: slidesToShow > 1 ? "6%" : "0",
    asNavFor: contentSliderRef || undefined,
    beforeChange: handleSlideChange,
    lazyLoad: "ondemand" as const,
  };

  const contentSliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: true,
    asNavFor: imageSliderRef || undefined,
    beforeChange: handleSlideChange,
  };

  const formatSlideCount = (current: number, total: number) => {
    const currentFormatted = current < 9 ? `0${current + 1}` : `${current + 1}`;
    return `${currentFormatted}/${total}`;
  };

  return (
    <>
      <section className="room-slider pt-100 pb-100">
        <div className="container-fluid p-0">
          <div className="section-title mb-100 text-center">
            <span className="title-tag">Yakın Çevre</span>
            <h2>Merkezlere Olan Mesafe</h2>
          </div>

          {/* Görsel Slider */}
          <div
            className="row rooms-slider-one"
            ref={sliderContainerRef}
            style={{
              opacity: sliderReady ? 1 : 0,
              transition: "opacity 0.3s ease",
            }}
          >
            {sliderReady && (
              <Slider
                {...imageSliderSettings}
                ref={(slider) => setImageSliderRef(slider)}
              >
                {nearbyPlaces.map((place, index) => (
                  <div key={index} className="col">
                    <div
                      className="slider-img"
                      style={{ backgroundImage: `url(${place.image})` }}
                    />
                  </div>
                ))}
              </Slider>
            )}
          </div>
        </div>

        {/* İçerik Slider */}
        <div className="rooms-content-wrap">
          <div className="container">
            <div className="row justify-content-center justify-content-md-start">
              <div className="col-xl-4 col-lg-5 col-sm-8">
                <div className="room-content-box">
                  <div className="slider-count">
                    <span className="current">
                      {formatSlideCount(currentSlide, nearbyPlaces.length)}
                    </span>
                  </div>
                  <div className="slider-count-big">
                    {currentSlide < 9 ? `0${currentSlide + 1}` : currentSlide + 1}
                  </div>

                  <div className="room-content-slider">
                    {sliderReady && (
                      <Slider
                        {...contentSliderSettings}
                        ref={(slider) => setContentSliderRef(slider)}
                      >
                        {nearbyPlaces.map((place, index) => (
                          <div key={index} className="single-content">
                            <div className="icon">
                              <i className="flaticon-hotel"></i>
                            </div>
                            <h3>
                              <Link href="#">{place.title}</Link>
                            </h3>
                            <p>{place.desc}</p>
                          </div>
                        ))}
                      </Slider>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
