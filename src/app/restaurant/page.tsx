'use client';
import Image from 'next/image';
import Link from 'next/link';
import '@/styles/pages/restaurant.css';
import Header from '@/components/Header';
import Breadcrumb from '@/components/BreadCrumb';
import Footer from '@/components/Footer';

export default function RestaurantPage() {
    const restaurants = [
        {
            id: 1,
            name: 'Ana Restaurant',
            type: 'Açık Büfe Kahvaltı & Akşam Yemeği',
            hours: '07:00 - 22:00',
            capacity: '120 Kişi',
            image: '/img/restaurant-1.jpg',
            features: ['Açık Büfe', 'À la Carte', 'Dünya Mutfağı', 'Vejetaryen Seçenekler']
        },
        {
            id: 2,
            name: 'Lobby Bar',
            type: 'Kokteyl & İçecekler',
            hours: '10:00 - 02:00',
            capacity: '50 Kişi',
            image: '/img/bar-1.jpg',
            features: ['Kokteyl', 'Canlı Müzik', 'Geniş İçecek Menüsü', 'Snack']
        },
        {
            id: 3,
            name: 'Roof Top Terrace',
            type: 'Özel Mekan',
            hours: '18:00 - 24:00',
            capacity: '40 Kişi',
            image: '/img/terrace-1.jpg',
            features: ['Şehir Manzarası', 'Özel Menü', 'Romantik Atmosfer', 'Rezervasyon Gerekli']
        }
    ];

    const menuCategories = [
        {
            icon: 'fas fa-coffee',
            title: 'Kahvaltı',
            desc: 'Zengin açık büfe kahvaltı menümüz ile güne başlayın'
        },
        {
            icon: 'fas fa-pizza-slice',
            title: 'Dünya Mutfağı',
            desc: 'Türk ve dünya mutfaklarından özel lezzetler'
        },
        {
            icon: 'fas fa-wine-glass-alt',
            title: 'Bar & Kokteyl',
            desc: 'Özel kokteyl tarifleri ve geniş içecek menüsü'
        },
        {
            icon: 'fas fa-birthday-cake',
            title: 'Tatlılar',
            desc: 'Ev yapımı pasta ve tatlı çeşitleri'
        }
    ];
    const breadcrumbItems = [
        { href: '/', label: 'Anasayfa' },
        { label: 'Restaurant & Barlar', active: true }
    ];

    return (
        <>
            <Header />
            <Breadcrumb
                title="Restaurant & Barlar"
                subtitle="INN TOWN HOTEL"
                backgroundImage="/img/bg/04.jpg"
                items={breadcrumbItems}
            />
            <div className="restaurant-page">
                {/* Restaurants Section */}
                <section className="restaurants-section">
                    <div className="container">
                        <div className="section-title text-center">
                            <span className="title-tag">Lezzet</span>
                            <h2>Restaurant & Bar Seçeneklerimiz</h2>
                        </div>

                        <div className="restaurants-list">
                            {restaurants.map((restaurant, index) => (
                                <div
                                    key={restaurant.id}
                                    className={`restaurant-item ${index % 2 === 1 ? 'reverse' : ''}`}
                                >
                                    <div className="restaurant-image">
                                        <Image
                                            src={restaurant.image}
                                            alt={restaurant.name}
                                            width={700}
                                            height={500}
                                            className="image"
                                        />
                                    </div>
                                    <div className="restaurant-content">
                                        <h3>{restaurant.name}</h3>
                                        <p className="restaurant-type">{restaurant.type}</p>
                                        <div className="restaurant-info">
                                            <div className="info-item">
                                                <i className="far fa-clock"></i>
                                                <span>{restaurant.hours}</span>
                                            </div>
                                            <div className="info-item">
                                                <i className="far fa-user"></i>
                                                <span>{restaurant.capacity}</span>
                                            </div>
                                        </div>
                                        <div className="restaurant-features">
                                            {restaurant.features.map((feature, idx) => (
                                                <span key={idx} className="feature-badge">{feature}</span>
                                            ))}
                                        </div>
                                        <Link href="/contact" className="restaurant-btn">
                                            Rezervasyon
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Menu Categories */}
                <section className="menu-section">
                    <div className="container">
                        <div className="section-title text-center">
                            <span className="title-tag">Menü</span>
                            <h2>Lezzet Kategorileri</h2>
                        </div>

                        <div className="menu-grid">
                            {menuCategories.map((category, index) => (
                                <div key={index} className="menu-card">
                                    <div className="menu-icon">
                                        <i className={category.icon}></i>
                                    </div>
                                    <h4>{category.title}</h4>
                                    <p>{category.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="restaurant-cta">
                    <div className="container">
                        <div className="cta-content">
                            <h2>Unutulmaz Bir Yemek Deneyimi</h2>
                            <p>Şef ekibimizin özenle hazırladığı lezzetleri keşfedin</p>
                            <Link href="/contact" className="cta-button">
                                Rezervasyon Yap
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}