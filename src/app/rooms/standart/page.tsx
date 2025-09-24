'use client';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from '@/components/Header';
import Breadcrumb from '@/components/BreadCrumb';
import Footer from '@/components/Footer';

export default function StandartRoomPage() {
    const roomImages = [
        '../yonetim/resimler/sayfaresim/31320222131373.jpg',
        '../yonetim/resimler/sayfaresim/31320222131413.jpg',
        '../yonetim/resimler/sayfaresim/31320222131452.jpg',
        '../yonetim/resimler/sayfaresim/31320222131487.jpg',
        '../yonetim/resimler/sayfaresim/31320222131487.jpg'
    ];

    const mainSliderSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        fade: true,
        infinite: true,
        autoplay: false
    };

    const thumbSliderSettings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    };
    const breadcrumbItems = [
        { href: '/', label: 'Anasayfa' },
        { label: 'Standart Oda', active: true }
    ];

    return (
        <>
            <Header />
            <Breadcrumb
                title="Standart Oda"
                subtitle="INN TOWN HOTEL"
                backgroundImage="/img/bg/04.jpg"
                items={breadcrumbItems}
            />

            <div id="block-search">
                <div id="tl-search-form" className="tl-container container">
                </div>
            </div>

            <section className="room-details pt-120 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="deatils-box">
                                <div className="title-wrap">
                                    <div className="title">
                                        <div className="room-cat">Oda Bilgileri</div>
                                        <h2>Standart Oda</h2>
                                    </div>
                                </div>

                                <div className="thumb">
                                    <div className="room-details-slider">
                                        <Slider {...mainSliderSettings}>
                                            {roomImages.map((image, index) => (
                                                <img key={index} src={image} alt="Suit Oda" />
                                            ))}
                                        </Slider>
                                    </div>

                                    <div className="room-details-slider-nav">
                                        <Slider {...thumbSliderSettings}>
                                            {roomImages.map((image, index) => (
                                                <img key={index} src={image} alt="Suit Oda" />
                                            ))}
                                        </Slider>
                                    </div>
                                </div>

                                <p>Şehir manzaralı 34 metre karelik geniş kullanım alanı ile;<br />2, 3 ve 4 kişilik yatak kapasiteleri ile anti alerjik parke ve halı kaplı zemin olmak üzere iki ayrı oda tipi mevcuttur.&nbsp;<br /></p>

                                <p>Merkezi ısıtma sistemi,&nbsp; ses yalıtımı, çalışma masası, ütü olanakları, LED ekran TV, kablolu yayın kanalları, telefon, kablosuz internet, mini bar, çay / kahve seti.&nbsp;<br /></p>

                                <div><br /></div>

                                <a href="rez.asp?room-type=5008203" className="tl-booking-btn">Rezervasyon</a>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}