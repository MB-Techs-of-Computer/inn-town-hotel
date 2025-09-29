"use client";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '@/styles/components/roomslider.css';

export default function RoomSlider() {
  const rooms = [
    {
      id: 13,
      title: "Suit Oda",
      href: "/rooms/suite",
      img: "/yonetim/resimler/sayfaresim/3132022215741.jpg",
      desc: "7 ve 8. katlarda bulunan 70 metre karelik kullanım alanı, şehir manzaralı suit odalarımızda, oturma odası ve yatak odası olmak üzere iki ayrı alandan oluşmaktadır. Dilerseniz iş yemeği, dilerseniz sevdiklerinizle romantik bir akşam deneyimi için suit odalarımız size gerekli tüm imkanı sağlamaktadır."
    },
    {
      id: 14,
      title: "Junior Suit Oda",
      href: "/rooms/juniorsuite",
      img: "/yonetim/resimler/sayfaresim/3132022215652.jpg",
      desc: "Şehir manzaralı 47 metre karelik kullanım alanı, güneş gören ferah ve huzurlu odalarımızda güne enerjik başlayın. 3 kişilik yatak kapasitesi ile Juniour Suit odalarımızda dilerseniz romantik bir akşam yemeği yiyebilir, sevdiklerinizle güzel ve konforlu bir akşam geçirebilirsiniz."
    },
    {
      id: 15,
      title: "Standart Oda",
      href: "/rooms/standart",
      img: "/yonetim/resimler/sayfaresim/3132022215519.jpg",
      desc: "Şehir manzaralı 34 metre karelik geniş kullanım alanı ile; 2, 3 ve 4 kişilik yatak kapasiteleri ile anti alerjik parke ve halı kaplı zemin olmak üzere iki ayrı oda tipi mevcuttur."
    },
  ];

  const [currentRoomIndex, setCurrentRoomIndex] = useState(0);
  const [isAnimated, setIsAnimated] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showcase, setShowcase] = useState('initial');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !isAnimated) {
          setTimeout(() => {
            animateRoomShowcase();
          }, 500);
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isAnimated]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (isAnimated && !isTransitioning) {
        if (e.key === 'ArrowLeft') {
          changeRoom(-1);
        } else if (e.key === 'ArrowRight') {
          changeRoom(1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isAnimated, isTransitioning, currentRoomIndex]);

  const animateRoomShowcase = () => {
    setShowcase('fullscreen');

    setTimeout(() => {
      setShowcase('default');
      setIsAnimated(true);
    }, 1500);
  };

  const changeRoom = (direction: number) => {
    if (isTransitioning) return;

    const newIndex = currentRoomIndex + direction;
    if (newIndex < 0 || newIndex >= rooms.length) return;

    setIsTransitioning(true);
    setCurrentRoomIndex(newIndex);
    setShowcase('fullscreen');

    setTimeout(() => {
      setShowcase('default');
      setIsTransitioning(false);
    }, 1500);
  };

  const currentRoom = rooms[currentRoomIndex];
  const isFullWidth = showcase === 'initial' || showcase === 'fullscreen';

  return (
    <>

      <section className="room-detail-section bg-white pb-100 pt-115" ref={sectionRef}>
        {isFullWidth ? (
          <>
            <div className="container">
              <div className="section-title mb-80 text-center">
                <span className="title-tag">Odalar</span>
                <h2>Özenle Tasarlanmış Odalar</h2>
              </div>
            </div>

            <div className={`room-showcase ${showcase}`}>
              <div className="room-image-main">
                <Image
                  src={currentRoom.img}
                  alt={currentRoom.title}
                  width={1920}
                  height={800}
                  style={{ objectFit: 'cover' }}
                  priority
                />

                <ul className="room-icons">
                  <li><i className="fal fa-bed"></i></li>
                  <li><i className="fal fa-wifi"></i></li>
                  <li><i className="fal fa-car"></i></li>
                  <li><i className="fal fa-coffee"></i></li>
                  <li><i className="fal fa-concierge-bell"></i></li>
                  <li><i className="fal fa-compress-arrows-alt"></i></li>
                </ul>

                <div className="room-image-overlay">
                  <h2 className="room-title">{currentRoom.title}</h2>
                  <p className="room-subtitle">{currentRoom.desc}</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="container">
            <div className="section-title mb-80 text-center">
              <span className="title-tag">Odalar</span>
              <h2>Özenle Tasarlanmış Odalar</h2>
            </div>

            <div className={`room-showcase ${showcase}`}>
              <div className="main-navigation left">
                <button
                  className="nav-arrow"
                  onClick={() => changeRoom(-1)}
                  disabled={currentRoomIndex === 0}
                >
                  <i className="fal fa-chevron-left"></i>
                </button>
              </div>

              <div className="main-navigation right">
                <button
                  className="nav-arrow"
                  onClick={() => changeRoom(1)}
                  disabled={currentRoomIndex === rooms.length - 1}
                >
                  <i className="fal fa-chevron-right"></i>
                </button>
              </div>

              <div className="room-image-main">
                <Image
                  src={currentRoom.img}
                  alt={currentRoom.title}
                  width={1200}
                  height={800}
                  style={{ objectFit: 'cover' }}
                  priority
                />

                <ul className="room-icons">
                  <li><i className="fal fa-bed"></i></li>
                  <li><i className="fal fa-wifi"></i></li>
                  <li><i className="fal fa-car"></i></li>
                  <li><i className="fal fa-coffee"></i></li>
                  <li><i className="fal fa-concierge-bell"></i></li>
                  <li><i className="fal fa-compress-arrows-alt"></i></li>
                </ul>

                <div className="room-image-overlay">
                  <h2 className="room-title">{currentRoom.title}</h2>
                  <p className="room-subtitle">{currentRoom.desc}</p>
                </div>
              </div>

              <div className="room-content">
                <div className="room-content-header">
                  <h3 className="room-content-title">{currentRoom.title}</h3>
                  <p className="room-content-description">{currentRoom.desc}</p>
                </div>

                <div className="room-cta">
                  <Link href={currentRoom.href} className="cta-btn">
                    Detaylar <i className="fal fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}