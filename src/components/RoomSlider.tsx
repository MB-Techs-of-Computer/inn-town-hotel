"use client";
import Slider from "react-slick";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "../styles/bootstrap.min.css";

export default function RoomSlider() {
  const rooms = [
    {
      id: 13,
      title: "Suit Oda",
      href: "/odalar/suite",
      img: "/yonetim/resimler/sayfaresim/3132022215741.jpg",
      desc: "7 ve 8. katlarda bulunan 70 metre karelik kullanım alanı, şehir manzaralı suit odalarımızda, oturma odası ve yatak odası olmak üzere iki ayrı alandan oluşmaktadır. Dilerseniz iş yemeği, dilerseniz sevdiklerinizle romantik bir akşam deneyimi için suit odalarımız size gerekli tüm imkanı sağlamaktadır.",
      features: "2 kişilik yatak kapasitesi, küvet/duşa kabin, merkezi ısıtma sistemi, ses yalıtımı, çalışma masası, ütü olanakları, led ekran tv, kablolu yayın kanalları, telefon, kablosuz internet, mini bar, çay / kahve seti."
    },
    {
      id: 14,
      title: "Junior Suit Oda",
      href: "/odalar/junior-suite",
      img: "/yonetim/resimler/sayfaresim/3132022215652.jpg",
      desc: "Şehir manzaralı 47 metre karelik kullanım alanı, güneş gören ferah ve huzurlu odalarımızda güne enerjik başlayın. 3 kişilik yatak kapasitesi ile Juniour Suit odalarımızda dilerseniz romantik bir akşam yemeği yiyebilir, sevdiklerinizle güzel ve konforlu bir akşam geçirebilirsiniz.",
      features: "Anti alerjik parke, merkezi ısıtma sistemi, ses yalıtımı, çalışma masası, ütü olanakları, led ekran tv, kablolu yayın kanalları, telefon, kablosuz internet, mini bar, çay / kahve seti."
    },
    {
      id: 15,
      title: "Standart Oda",
      href: "/odalar/standart",
      img: "/yonetim/resimler/sayfaresim/3132022215519.jpg",
      desc: "Şehir manzaralı 34 metre karelik geniş kullanım alanı ile; 2, 3 ve 4 kişilik yatak kapasiteleri ile anti alerjik parke ve halı kaplı zemin olmak üzere iki ayrı oda tipi mevcuttur.",
      features: "Merkezi ısıtma sistemi, ses yalıtımı, çalışma masası, ütü olanakları, led ekran tv, kablolu yayın kanalları, telefon, kablosuz internet, mini bar, çay / kahve seti."
    },
  ];

  const CustomPrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <div className="slick-arrow prev-arrow" onClick={onClick}>
      <i className="fal fa-arrow-left"></i>
    </div>
  );

  const CustomNextArrow = ({ onClick }: { onClick?: () => void }) => (
    <div className="slick-arrow next-arrow" onClick={onClick}>
      <i className="fal fa-arrow-right"></i>
    </div>
  );

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 4000,
    arrows: true,
    dots: false,
    centerMode: true,
    centerPadding: '20%',
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          centerPadding: '20%',
        },
      },
      {
        breakpoint: 992,
        settings: {
          centerPadding: '15%',
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: '10%',
        },
      },
      {
        breakpoint: 576,
        settings: {
          centerPadding: '5%',
        },
      },
    ],
  };

  return (
    <>
      <section className="room-slider bg-white pb-100 pt-115">
        <div className="container-fluid p-0">
          <div className="section-title mb-80 text-center">
            <span className="title-tag">Odalar</span>
            <h2>Özenle Tasarlanmış Odalar</h2>
          </div>

          <div className="row rooms-slider-two justify-content-center">
            <Slider {...settings}>
              {rooms.map((room) => (
                <div key={room.id} className="col-lg-6">
                  <div className="single-rooms-box">
                    <div className="room-img">
                      <div
                        className="img"
                        style={{
                          backgroundImage: `url(${room.img})`
                        }}
                      />
                    </div>

                    <ul className="icons">
                      <li><i className="fal fa-bed"></i></li>
                      <li><i className="fal fa-wifi"></i></li>
                      <li><i className="fal fa-car"></i></li>
                      <li><i className="fal fa-coffee"></i></li>
                      <li><i className="fal fa-concierge-bell"></i></li>
                      <li><i className="fal fa-compress-arrows-alt"></i></li>
                    </ul>

                    <div className="room-desc">
                      <div className="row align-items-center">
                        <div className="col-sm-8">
                          <h3>
                            <Link href={room.href}>
                              {room.title}
                            </Link>
                          </h3>
                          <div className="otext">
                            <p>{room.desc}</p>
                            <p>{room.features}</p>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="price">
                            <span>
                              <Link href={room.href}>
                                Detaylar &raquo;
                              </Link>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}