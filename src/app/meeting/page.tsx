'use client';
import Image from 'next/image';
import Link from 'next/link';
import '@/styles/pages/meeting.css';
import Header from '@/components/Header';
import Breadcrumb from '@/components/BreadCrumb';
import Footer from '@/components/Footer';

export default function MeetingPage() {
    const meetingRooms = [
        {
            id: 1,
            name: 'Toplantı Salonu A',
            capacity: '50 Kişi',
            size: '120 m²',
            features: ['Projeksiyon', 'Ses Sistemi', 'Wi-Fi', 'Klima', 'Beyaz Tahta'],
            image: '/img/meeting-room-1.jpg'
        },
        {
            id: 2,
            name: 'Toplantı Salonu B',
            capacity: '30 Kişi',
            size: '80 m²',
            features: ['LED Ekran', 'Ses Sistemi', 'Wi-Fi', 'Klima', 'Video Konferans'],
            image: '/img/meeting-room-2.jpg'
        },
        {
            id: 3,
            name: 'VIP Toplantı Odası',
            capacity: '15 Kişi',
            size: '45 m²',
            features: ['Smart TV', 'Kahve Makinesi', 'Wi-Fi', 'Klima', 'Özel Servis'],
            image: '/img/meeting-room-3.jpg'
        }
    ];

    const services = [
        {
            icon: 'fas fa-wifi',
            title: 'Yüksek Hızlı İnternet',
            desc: 'Fiber altyapı ile kesintisiz bağlantı'
        },
        {
            icon: 'fas fa-video',
            title: 'Video Konferans',
            desc: 'HD kalitede görüntülü görüşme sistemi'
        },
        {
            icon: 'fas fa-coffee',
            title: 'İkram Servisi',
            desc: 'Çay, kahve ve aperatif hizmetleri'
        },
        {
            icon: 'fas fa-parking',
            title: 'Ücretsiz Otopark',
            desc: 'Misafirleriniz için özel park alanı'
        },
        {
            icon: 'fas fa-utensils',
            title: 'Catering Hizmeti',
            desc: 'Zengin menü seçenekleri ile yemek servisi'
        },
        {
            icon: 'fas fa-headset',
            title: 'Teknik Destek',
            desc: '7/24 teknik ekip desteği'
        }
    ];
    const breadcrumbItems = [
        { href: '/', label: 'Anasayfa' },
        { label: 'Toplantı & Organizasyon', active: true }
    ];

    return (
        <>
            <Header />
            <Breadcrumb
                title="Hakkımızda"
                subtitle="INN TOWN HOTEL"
                backgroundImage="/img/bg/04.jpg"
                items={breadcrumbItems}
            />
            <div className="meeting-page">
                {/* Meeting Rooms */}
                <section className="meeting-rooms-section">
                    <div className="container">
                        <div className="section-title text-center">
                            <span className="title-tag">Salonlarımız</span>
                            <h2>Toplantı Salonları</h2>
                            <p>Her türlü organizasyon için uygun, esnek salon seçenekleri</p>
                        </div>

                        <div className="rooms-grid">
                            {meetingRooms.map((room) => (
                                <div key={room.id} className="room-card">
                                    <div className="room-image">
                                        <Image
                                            src={room.image}
                                            alt={room.name}
                                            width={600}
                                            height={400}
                                            className="image"
                                        />
                                        <div className="room-badge">{room.capacity}</div>
                                    </div>
                                    <div className="room-content">
                                        <h3>{room.name}</h3>
                                        <div className="room-info">
                                            <span><i className="fas fa-ruler-combined"></i> {room.size}</span>
                                            <span><i className="fas fa-users"></i> {room.capacity}</span>
                                        </div>
                                        <div className="room-features">
                                            {room.features.map((feature, index) => (
                                                <span key={index} className="feature-tag">{feature}</span>
                                            ))}
                                        </div>
                                        <Link href="/iletisim" className="room-btn">
                                            Rezervasyon Yap
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="services-section">
                    <div className="container">
                        <div className="section-title text-center">
                            <span className="title-tag">Hizmetlerimiz</span>
                            <h2>Toplantı Hizmetleri</h2>
                        </div>

                        <div className="services-grid">
                            {services.map((service, index) => (
                                <div key={index} className="service-card">
                                    <div className="service-icon">
                                        <i className={service.icon}></i>
                                    </div>
                                    <h4>{service.title}</h4>
                                    <p>{service.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="cta-section">
                    <div className="container">
                        <div className="cta-content">
                            <h2>Etkinliğiniz için rezervasyon yapın</h2>
                            <p>Profesyonel ekibimiz organizasyonunuzun her detayı ile ilgilenir</p>
                            <Link href="/iletisim" className="cta-button">
                                İletişime Geçin
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}