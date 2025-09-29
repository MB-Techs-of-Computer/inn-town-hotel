'use client';

import Header from '@/components/Header';
import Breadcrumb from '@/components/BreadCrumb';
import Footer from '@/components/Footer';
import RoomDetailGallery from '@/components/RoomDetailGallery';

// Standart Oda Sayfası
export default function StandartRoomPage() {
    const roomImages = [
        '/yonetim/resimler/sayfaresim/31320222131373.jpg',
        '/yonetim/resimler/sayfaresim/31320222131413.jpg',
        '/yonetim/resimler/sayfaresim/31320222131452.jpg',
        '/yonetim/resimler/sayfaresim/31320222131487.jpg'
    ];

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
            <section className="room-details pt-120 pb-90">
                <RoomDetailGallery 
                    images={roomImages}
                    roomTitle="Standart Oda"
                    description="Şehir manzaralı 34 metre karelik geniş kullanım alanı ile 2, 3 ve 4 kişilik yatak kapasiteleri. Anti alerjik parke ve halı kaplı zemin olmak üzere iki ayrı oda tipi mevcuttur."
                />
            </section>
            <Footer />
        </>
    );
}