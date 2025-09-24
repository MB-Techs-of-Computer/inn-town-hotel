'use client';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from '@/components/Header';
import Breadcrumb from '@/components/BreadCrumb';
import Footer from '@/components/Footer';

export default function SuiteRoomPage() {
    const roomImages = [
        '../yonetim/resimler/sayfaresim/31320222133413.jpg',
        '../yonetim/resimler/sayfaresim/31320222133444.jpg',
        '../yonetim/resimler/sayfaresim/31320222133489.jpg'
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
        { label: 'Junior Suite Oda', active: true }
    ];

    return (
        <>
            <Header />
            <Breadcrumb
                title="Junior Suite Oda"
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
                                        <h2>Junior Suit Oda</h2>
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

                                <p>Şehir manzaralı, 47 m² kullanım alanına sahip, güneş gören ferah ve huzurlu odalarımızda güne enerjik başlayın.&nbsp;<br /><br /></p>

                                <p>3 kişilik yatak kapasitesi ile Junior Suit odalarımızda dilerseniz romantik bir akşam yemeği yiyebilir, sevdiklerinizle güzel ve konforlu bir akşam geçirebilirsiniz.&nbsp;<br />Anti-alerjik parke, merkezi ısıtma sistemi, ses yalıtımı, çalışma masası, ütü olanakları, LED ekran TV, kablolu yayın kanalları, telefon, kablosuz internet, mini bar, çay/kahve seti.&nbsp;<br /></p>

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