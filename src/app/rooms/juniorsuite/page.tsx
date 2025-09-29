import Breadcrumb from "@/components/BreadCrumb";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import RoomDetailGallery from "@/components/RoomDetailGallery";

// Junior Suite Oda Sayfası
export default function JuniorSuiteRoomPage() {
    const roomImages = [
        '/yonetim/resimler/sayfaresim/31320222133413.jpg',
        '/yonetim/resimler/sayfaresim/31320222133444.jpg',
        '/yonetim/resimler/sayfaresim/31320222133489.jpg'
    ];

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
            <section className="room-details pt-120 pb-90">
                <RoomDetailGallery
                    images={roomImages}
                    roomTitle="Junior Suit Oda"
                    description="Şehir manzaralı, 47 m² kullanım alanına sahip, güneş gören ferah ve huzurlu odalarımızda güne enerjik başlayın. 3 kişilik yatak kapasitesi ile Junior Suit odalarımızda konforlu bir konaklama deneyimi yaşayın."
                />
            </section>
            <Footer />
        </>
    );
}