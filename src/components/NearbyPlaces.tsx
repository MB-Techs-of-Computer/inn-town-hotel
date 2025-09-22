"use client";
import { useState, useEffect } from 'react';
import Slider from "react-slick";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function NearbyPlaces() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [imageSliderRef, setImageSliderRef] = useState<any>(null);
    const [contentSliderRef, setContentSliderRef] = useState<any>(null);

    const nearbyPlaces = [
        {
            title: 'Anadolu Üniversitesi',
            desc: 'Anadolu Üniversitesi Ana Giriş Kapısına 300 metre mesafededir. Yürüme mesafesi 5 dakikadır.',
            image: '/yonetim/resimler/haberresim/142022161245.jpg'
        },
        {
            title: 'Hava Müzesi',
            desc: 'Eskişehir Havacılık Müzesine 400 metre mesafededir. Yürüme mesafesi 5 dakikadır.',
            image: '/yonetim/resimler/haberresim/142022161321.jpg'
        },
        {
            title: 'Espark',
            desc: 'Eskişehir Espark AVMye 400 metre mesafededir. Yürüme mesafesi 5 dakikadır.',
            image: '/yonetim/resimler/haberresim/142022161350.jpg'
        },
        {
            title: 'Porsuk Çayı',
            desc: 'Porsuk Çayına 700 metre mesafededir. Yürüme mesafesi 7 dakikadır.',
            image: '/yonetim/resimler/haberresim/142022161455.jpg'
        },
        {
            title: 'Barlar Sokağı',
            desc: 'Barlar Sokağına 700 metre mesafededir. Yürüme mesafesi 7 dakikadır.',
            image: '/yonetim/resimler/haberresim/142022161528.jpg'
        },
        {
            title: 'Sazova',
            desc: 'Eskişehir Sazova Bilim Kültür Parkına 3 km mesafededir. Araç ile mesafesi 5 dakikadır.',
            image: '/yonetim/resimler/haberresim/142022161427.jpg'
        },
        {
            title: 'Odunpazarı Evleri',
            desc: 'Tarihi Odunpazarı Evlerine 3 km mesafededir. Araç ile mesafesi 5 dakikadır.',
            image: '/yonetim/resimler/haberresim/142022161558.jpg'
        },
        {
            title: 'Müzeler',
            desc: 'Müzelere (Odunpazarı Modern Müze, Cam Sanatları Müzesi, Kurtuluş Müzesi, Bal Mumu Müzesi vs.) 3 km mesafededir. Araç ile mesafesi 5 dakikadır.',
            image: '/yonetim/resimler/haberresim/142022161622.jpg'
        },
    ];

    // Handle slide change - both sliders will sync
    const handleSlideChange = (current: number, next: number) => {
        setCurrentSlide(next);
    };

    // Slider settings for images
    const imageSliderSettings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        fade: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        dots: false,
        centerMode: true,
        centerPadding: '6%',
        asNavFor: contentSliderRef,
        beforeChange: handleSlideChange,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '15%',
                },
            },
        ],
    };

    // Content slider settings
    const contentSliderSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        dots: true,
        asNavFor: imageSliderRef,
        beforeChange: handleSlideChange,
    };

    // Format slide count
    const formatSlideCount = (current: number, total: number) => {
        const currentFormatted = current < 9 ? `0${current + 1}` : `${current + 1}`;
        return `${currentFormatted}/${total}`;
    };

    return (
        <>
            {/* <style jsx>{`
        .room-slider {
          position: relative;
          z-index: 1;
        }

        .room-slider .rooms-slider-one.row {
          margin-left: -20px;
          margin-right: -20px;
        }

        .room-slider .rooms-slider-one.row > .col {
          padding-left: 20px;
          padding-right: 20px;
        }

        .room-slider .rooms-slider-one .slider-img {
          width: 100%;
          height: 350px;
          background-size: cover;
          background-position: center;
        }

        @media only screen and (min-width: 992px) and (max-width: 1199px) {
          .room-slider .rooms-slider-one .slider-img {
            height: 500px;
          }
        }

        @media (max-width: 767px) {
          .room-slider .rooms-slider-one .slider-img {
            height: 450px;
          }
        }

        @media (max-width: 575px) {
          .room-slider .rooms-slider-one .slider-img {
            height: 400px;
          }
        }

        .room-slider .rooms-content-wrap {
          margin-bottom: 0;
        }

        @media (max-width: 767px) {
          .room-slider .rooms-content-wrap {
            margin-bottom: 100px;
          }
        }

        .room-slider .rooms-content-wrap .room-content-box {
          background-color: #1a3f48;
          color: #d4d4d4;
          font-size: 14px;
          padding: 60px 50px;
          position: relative;
          z-index: 2;
          margin-top: -400px;
          left: -25px;
        }

        @media only screen and (min-width: 992px) and (max-width: 1199px) {
          .room-slider .rooms-content-wrap .room-content-box {
            margin-top: -445px;
          }
        }

        @media (max-width: 767px) {
          .room-slider .rooms-content-wrap .room-content-box {
            margin-top: -100px;
            padding: 50px 30px;
          }
        }

        @media (max-width: 575px) {
          .room-slider .rooms-content-wrap .room-content-box {
            margin-top: -50px;
            padding: 50px 30px;
          }
        }

        .room-slider .rooms-content-wrap .room-content-box .slider-count {
          position: absolute;
          right: 50px;
          font-size: 14px;
          font-weight: 700;
          top: 90px;
          color: #4c4c4c;
          z-index: 3;
          letter-spacing: 2px;
        }

        .room-slider .rooms-content-wrap .room-content-box .slider-count .current {
          color: #87847b;
        }

        .room-slider .rooms-content-wrap .room-content-box .slider-count-big {
          position: absolute;
          bottom: -30px;
          right: 0;
          line-height: 1;
          font-size: 200px;
          z-index: -1;
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.6);
          opacity: 0.1;
        }

        @media (max-width: 767px) {
          .room-slider .rooms-content-wrap .room-content-box .slider-count-big {
            font-size: 150px;
          }
        }

        .room-slider .rooms-content-wrap .room-content-box h3 {
          font-size: 36px;
          color: #fff;
          margin-bottom: 20px;
        }

        .room-slider .rooms-content-wrap .room-content-box h3,
        .room-slider .rooms-content-wrap .room-content-box h3 a {
          color: #fff;
        }

        .room-slider .rooms-content-wrap .room-content-box .icon {
          line-height: 1;
          color: #87847b;
          margin-bottom: 40px;
          font-size: 70px;
        }

        .room-slider .rooms-content-wrap .room-content-box .room-content-slider {
          padding-bottom: 45px;
        }

        .room-slider .rooms-content-wrap .room-content-box .room-content-slider .single-content {
          overflow: hidden;
        }

        .room-slider .rooms-content-wrap .room-content-box .room-content-slider .slick-dots {
          position: absolute;
          left: 0;
          bottom: 0;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .room-slider .rooms-content-wrap .room-content-box .room-content-slider .slick-dots li {
          display: inline-block;
          cursor: pointer;
        }

        .room-slider .rooms-content-wrap .room-content-box .room-content-slider .slick-dots li button {
          font-size: 0;
          border: 0;
          background: #434343;
          width: 16px;
          height: 4px;
          margin: 0 5px;
          transition: all 0.3s ease-out 0s;
        }

        .room-slider .rooms-content-wrap .room-content-box .room-content-slider .slick-dots li.slick-active button {
          width: 26px;
          background-color: #87847b;
        }

        .section-title {
          text-align: center;
        }

        .title-tag {
          display: inline-block;
          font-size: 14px;
          color: #87847b;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 10px;
        }

        .section-title h2 {
          font-size: 42px;
          color: #1a3f48;
          margin-bottom: 0;
          font-weight: 700;
        }

        .pt-100 {
          padding-top: 100px;
        }

        .pb-100 {
          padding-bottom: 100px;
        }

        .mb-100 {
          margin-bottom: 100px;
        }

        .container-fluid {
          width: 100%;
          padding-right: 15px;
          padding-left: 15px;
          margin-right: auto;
          margin-left: auto;
        }

        .container {
          width: 100%;
          padding-right: 15px;
          padding-left: 15px;
          margin-right: auto;
          margin-left: auto;
        }

        .p-0 {
          padding: 0;
        }

        .row {
          display: flex;
          flex-wrap: wrap;
          margin-right: -15px;
          margin-left: -15px;
        }

        .justify-content-center {
          justify-content: center;
        }

        .justify-content-md-start {
          justify-content: flex-start;
        }

        .col-xl-4 {
          flex: 0 0 33.333333%;
          max-width: 33.333333%;
        }

        .col-lg-5 {
          flex: 0 0 41.666667%;
          max-width: 41.666667%;
        }

        .col-sm-8 {
          flex: 0 0 66.666667%;
          max-width: 66.666667%;
        }

        @media (max-width: 991px) {
          .justify-content-md-start {
            justify-content: center;
          }
        }

        @media (max-width: 767px) {
          .col-sm-8 {
            flex: 0 0 100%;
            max-width: 100%;
          }
        }
      `}</style> */}

            <section className="room-slider pt-100 pb-100">
                <div className="container-fluid p-0">
                    <div className="section-title mb-100">
                        <span className="title-tag">Yakın Çevre</span>
                        <h2>Merkezlere Olan Mesafe</h2>
                    </div>

                    {/* Image Slider */}
                    <div className="row rooms-slider-one">
                        <Slider
                            {...imageSliderSettings}
                            ref={setImageSliderRef}
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
                    </div>
                </div>

                {/* Content Box */}
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
                                        <Slider
                                            {...contentSliderSettings}
                                            ref={setContentSliderRef}
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