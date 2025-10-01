'use client';
import Header from '@/components/Header';
import Breadcrumb from '@/components/BreadCrumb';
import Footer from '@/components/Footer';
import RoomDetailGallery from '@/components/RoomDetailGallery';
import '@/styles/pages/rooms.css';

export default function RoomsPage() {
    const breadcrumbItems = [
        { href: '/', label: 'Anasayfa' },
        { label: 'Odalarımız', active: true }
    ];

    const rooms = [
        {
            id: 'standart',
            title: 'Standart Oda',
            images: [
                '/yonetim/resimler/sayfaresim/31320222131373.jpg',
                '/yonetim/resimler/sayfaresim/31320222131413.jpg',
                '/yonetim/resimler/sayfaresim/31320222131452.jpg',
                '/yonetim/resimler/sayfaresim/31320222131487.jpg'
            ],
            description: 'Şehir manzaralı 34 metre karelik geniş kullanım alanı ile 2, 3 ve 4 kişilik yatak kapasiteleri. Anti alerjik parke ve halı kaplı zemin olmak üzere iki ayrı oda tipi mevcuttur.'
        },
        {
            id: 'junior-suite',
            title: 'Junior Suite Oda',
            images: [
                '/yonetim/resimler/sayfaresim/31320222133413.jpg',
                '/yonetim/resimler/sayfaresim/31320222133444.jpg',
                '/yonetim/resimler/sayfaresim/31320222133489.jpg'
            ],
            description: 'Şehir manzaralı, 47 m² kullanım alanına sahip, güneş gören ferah ve huzurlu odalarımızda güne enerjik başlayın. 3 kişilik yatak kapasitesi ile Junior Suit odalarımızda konforlu bir konaklama deneyimi yaşayın.'
        },
        {
            id: 'suite',
            title: 'Suite Oda',
            images: [
                '/yonetim/resimler/sayfaresim/31320222135432.jpg',
                '/yonetim/resimler/sayfaresim/31320222135477.jpg',
                '/yonetim/resimler/sayfaresim/31320222135500.jpg'
            ],
            description: '7 ve 8. katlarda bulunan 70 metre karelik kullanım alanı, şehir manzaralı suit odalarımızda, oturma odası ve yatak odası olmak üzere iki ayrı alandan oluşmaktadır.',
            reservationUrl: 'rez.asp?room-type=5008203'
        }
    ];

    return (
        <>
            <Header />
            <Breadcrumb
                title="Odalarımız"
                subtitle="INN TOWN HOTEL"
                backgroundImage="/img/bg/04.jpg"
                items={breadcrumbItems}
            />

            {/* Intro Section */}
            <section className="rooms-intro pt-120 pb-60">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <div className="section-title-wrapper">
                                <span className="section-subtitle">KONFOR & LÜKS</span>
                                <h2 className="section-main-title">Rüya Gibi Odalarımızı Keşfedin</h2>
                                <p className="section-description">
                                    Her biri özenle tasarlanmış odalarımızda, konfor ve şıklığın mükemmel uyumunu yaşayın.
                                    Modern donanım ve zarif detaylarla unutulmaz bir konaklama deneyimi sizi bekliyor.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {rooms.map((room, index) => (
                <section
                    key={room.id}
                    id={room.id}
                    className={`room-details ${index === 0 ? '' : 'pt-60'} pb-60`}
                >
                    <RoomDetailGallery
                        images={room.images}
                        roomTitle={room.title}
                        description={room.description}
                        reservationUrl={room.reservationUrl}
                    />
                </section>
            ))}

            <Footer />
        </>
    );
}