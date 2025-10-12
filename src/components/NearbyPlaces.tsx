"use client";
import { useState, useEffect } from 'react';
import Slider from "react-slick";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/components/nearbyplaces.css";

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
            <section className="room-slider pt-100 pb-100">
                <div className="container-fluid p-0">
                    <div className="section-title mb-100 text-center">
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