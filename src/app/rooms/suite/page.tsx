'use client';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from '@/components/Header';
import Breadcrumb from '@/components/BreadCrumb';
import Footer from '@/components/Footer';
import '../room-details.css';

export default function SuiteRoomPage() {
    const roomImages = [
        '../yonetim/resimler/sayfaresim/31320222135432.jpg',
        '../yonetim/resimler/sayfaresim/31320222135477.jpg',
        '../yonetim/resimler/sayfaresim/31320222135500.jpg'
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
        { label: 'Suite Oda', active: true }
    ];

    return (
        <>
            <Header />
            <Breadcrumb
                title="Suite Oda"
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
                                        <h2>Suit Oda</h2>
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

                                <p>7 ve 8. katlarda bulunan 70 metre karelik kullanım alanı, şehir manzaralı süit odalarımızda, oturma odası ve yatak odası olmak üzere iki ayrı alandan oluşmaktadır.&nbsp;<br /><br /></p>

                                <p>Dilerseniz iş yemeği, dilerseniz sevdiklerinizle romantik bir akşam deneyimi için süit odalarımız size gerekli tüm imkanı sağlamaktadır.&nbsp;<br />2 kişilik yatak kapasitesi, küvet/duşa kabin, merkezi ısıtma sistemi, ses yalıtımı, çalışma masası, ütü olanakları, led ekran tv, kablolu yayın kanalları, telefon, kablosuz internet, mini bar, çay / kahve seti.&nbsp;<br /></p>

                                <div><br /></div>

                                <a href="rez.asp?room-type=5008203" className="tl-booking-btn">Rezervasyon</a>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
}