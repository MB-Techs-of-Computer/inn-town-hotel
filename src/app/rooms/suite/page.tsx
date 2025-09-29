// Suite Oda Sayfası
'use client';
import Header from '@/components/Header';
import Breadcrumb from '@/components/BreadCrumb';
import Footer from '@/components/Footer';
import RoomDetailGallery from '@/components/RoomDetailGallery';

export default function SuiteRoomPage() {
    const roomImages = [
        '/yonetim/resimler/sayfaresim/31320222135432.jpg',
        '/yonetim/resimler/sayfaresim/31320222135477.jpg',
        '/yonetim/resimler/sayfaresim/31320222135500.jpg'
    ];

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
            <section className="room-details pt-120 pb-90">
                <RoomDetailGallery 
                    images={roomImages}
                    roomTitle="Suit Oda"
                    description="7 ve 8. katlarda bulunan 70 metre karelik kullanım alanı, şehir manzaralı suit odalarımızda, oturma odası ve yatak odası olmak üzere iki ayrı alandan oluşmaktadır."
                    reservationUrl="rez.asp?room-type=5008203"
                />
            </section>
            <Footer/>
        </>
    );
}