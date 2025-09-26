import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import '@/styles/components/aboutsection.css';

const AboutSection = () => {
    // Animation states
    const [counters, setCounters] = useState({
        rooms: 0,
        restaurant: 0,
        meetings: 0
    });
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    // Target values
    const targets = {
        rooms: 82,
        restaurant: 120,
        meetings: 2
    };

    // Intersection Observer to trigger animation when section is visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                    startCountAnimation();
                }
            },
            {
                threshold: 0.3 // Trigger when 30% of the section is visible
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [isVisible]);

    // Count animation function
    const startCountAnimation = () => {
        const duration = 2000; // 2 seconds
        const steps = 60; // 60 FPS
        const stepTime = duration / steps;

        let step = 0;
        const timer = setInterval(() => {
            step++;
            const progress = step / steps;

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);

            setCounters({
                rooms: Math.floor(targets.rooms * easeOutQuart),
                restaurant: Math.floor(targets.restaurant * easeOutQuart),
                meetings: Math.floor(targets.meetings * easeOutQuart)
            });

            if (step >= steps) {
                clearInterval(timer);
                // Ensure final values are exact
                setCounters({
                    rooms: targets.rooms,
                    restaurant: targets.restaurant,
                    meetings: targets.meetings
                });
            }
        }, stepTime);
    };

    return (
        <section className="split-about" ref={sectionRef}>
            <div className="left-section">
                <div className="left-content">
                    <span className="badge">HAKKIMIZDA</span>
                    <h1 className="left-title">Şehrin cazibe merkezinde</h1>
                    <p className="left-description">
                        Ocak 2022 itibariyle, tecrübeli yönetim anlayışı ile misafirlerini ağırlamaya başlayan Inn Town Hotel
                        75 Deluxe, 5 Junior Suite, 2 Suite olmak üzere toplamda 82 odaya sahiptir.
                    </p>
                    <Link href="/about" className="cta-button">
                        Daha Fazlası
                    </Link>
                </div>
            </div>

            <div className="right-section">
                <div className="features-grid">
                    <div className="feature-item">
                        <div className="feature-icon">
                            <i className="fas fa-shield-alt"></i>
                        </div>
                        <h3 className="feature-title">Güvenli Turizm</h3>
                        <p className="feature-description">
                            Sağlık ve güvenlik standartlarımızla misafirlerimizin huzurlu konaklaması için tüm önlemleri alıyoruz.
                        </p>
                    </div>

                    <div className="feature-item">
                        <div className="feature-icon">
                            <i className="fas fa-bed"></i>
                        </div>
                        <h3 className="feature-title">Lüks Odalar</h3>
                        <p className="feature-description">
                            Modern tasarım ve konforu bir arada sunan odalarımızla unutulmaz bir konaklama deneyimi yaşayın.
                        </p>
                    </div>

                    <div className="feature-item">
                        <div className="feature-icon">
                            <i className="fas fa-users"></i>
                        </div>
                        <h3 className="feature-title">Toplantı Salonları</h3>
                        <p className="feature-description">
                            30 ve 80 kişilik iki adet çok amaçlı toplantı salonu ile iş etkinliklerinizi organize edin.
                        </p>
                    </div>

                    <div className="feature-item">
                        <div className="feature-icon">
                            <i className="fas fa-utensils"></i>
                        </div>
                        <h3 className="feature-title">A la Carte Restaurant</h3>
                        <p className="feature-description">
                            9. katta bulunan 120 kişilik restaurantımızda eşsiz lezzetleri keşfedin.
                        </p>
                    </div>
                </div>

                <div className="stats-section">
                    <div className="stat-item">
                        <span className="stat-number">
                            {counters.rooms}
                        </span>
                        <span className="stat-label">Oda</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">
                            {counters.restaurant}
                        </span>
                        <span className="stat-label">Kişilik Restaurant</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">
                            {counters.meetings}
                        </span>
                        <span className="stat-label">Toplantı Salonu</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;