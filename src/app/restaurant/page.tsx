'use client';
import Image from 'next/image';
import Link from 'next/link';
import '@/styles/pages/restaurant.css';
import Header from '@/components/Header';
import Breadcrumb from '@/components/BreadCrumb';
import Footer from '@/components/Footer';

export default function RestaurantPage() {
    const breadcrumbItems = [
        { href: '/', label: 'Anasayfa' },
        { label: 'Restaurant', active: true }
    ];

    return (
        <>
            <Header />
            <Breadcrumb
                title="Restaurant"
                subtitle="INN TOWN HOTEL"
                backgroundImage="/img/bg/04.jpg"
                items={breadcrumbItems}
            />
            <div className="restaurant-page">
                {/* Main Restaurant Section */}
                <section className="restaurant-hero-section">
                    <div className="container">
                        <div className="restaurant-hero-content">
                            <div className="restaurant-hero-image">
                                <Image
                                    src="/img/DSCF9890.jpg"
                                    alt="À la Carte Restaurant - Inn Town Hotel"
                                    width={1200}
                                    height={800}
                                    className="hero-image"
                                    priority
                                />
                            </div>
                            <div className="restaurant-hero-text">
                                <span className="title-tag">Lezzet</span>
                                <h2>À la Carte Restaurant</h2>
                                <p className="restaurant-description">
                                    9. katta bulunan 120 kişilik restaurantımızda eşsiz lezzetleri keşfedin. 
                                    Şehrin muhteşem manzarasına karşı, şef ekibimizin özenle hazırladığı 
                                    Türk ve dünya mutfaklarından özel tatları deneyimleyin. Modern ve şık 
                                    atmosferiyle, her yemek özel bir anıya dönüşüyor.
                                </p>
                                <div className="restaurant-highlights">
                                    <div className="highlight-item">
                                        <i className="fas fa-users"></i>
                                        <span>120 Kişi Kapasite</span>
                                    </div>
                                    <div className="highlight-item">
                                        <i className="fas fa-building"></i>
                                        <span>9. Kat</span>
                                    </div>
                                    <div className="highlight-item">
                                        <i className="fas fa-city"></i>
                                        <span>Şehir Manzarası</span>
                                    </div>
                                    <div className="highlight-item">
                                        <i className="fas fa-utensils"></i>
                                        <span>À la Carte Menü</span>
                                    </div>
                                </div>
                                <Link href="/contact" className="contact-button">
                                    İletişime Geçin
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Bar Section */}
                <section className="bar-section">
                    <div className="container">
                        <div className="restaurant-hero-content reverse">
                            <div className="restaurant-hero-image">
                                <Image
                                    src="/img/DSCF9971.jpg"
                                    alt="Bar - Inn Town Hotel"
                                    width={1200}
                                    height={800}
                                    className="hero-image"
                                />
                            </div>
                            <div className="restaurant-hero-text">
                                <span className="title-tag">Bar & Kokteyl</span>
                                <h2>Bar</h2>
                                <p className="restaurant-description">
                                    Otelin kalbinde yer alan barımızda, gün boyu keyifli anlar sizi bekliyor. 
                                    Profesyonel barmenlerimizin hazırladığı özel kokteyller, geniş içki menümüz ve 
                                    samimi atmosferimizle unutulmaz bir deneyim yaşayın. Canlı müzik eşliğinde 
                                    rahatlayabileceğiniz ideal bir buluşma noktası.
                                </p>
                                <div className="restaurant-highlights">
                                    <div className="highlight-item">
                                        <i className="fas fa-cocktail"></i>
                                        <span>Özel Kokteyller</span>
                                    </div>
                                    <div className="highlight-item">
                                        <i className="fas fa-couch"></i>
                                        <span>Rahat Ortam</span>
                                    </div>
                                    <div className="highlight-item">
                                        <i className="fas fa-clock"></i>
                                        <span>10:00 - 02:00</span>
                                    </div>
                                    <div className="highlight-item">
                                        <i className="fas fa-wine-glass"></i>
                                        <span>Geniş İçecek Menüsü</span>
                                    </div>
                                </div>
                                <Link href="/contact" className="contact-button">
                                    İletişime Geçin
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}