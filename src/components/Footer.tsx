'use client';
import Link from 'next/link';
import '@/styles/components/footer.css';

export default function Footer() {
    return (
        <footer className="footer-two">
            <div className="footer-widget-area pt-100 pb-50">
                <div className="container">
                    <div className="row">
                        {/* Sol Kolon - Otel Bilgisi */}
                        <div className="col-lg-4 col-md-6 order-1">
                            <div className="widget site-info-widget mb-50">
                                <div className="brand-logo mb-30">
                                    <h2 className="hotel-name">Inn Town Hotel</h2>
                                    <span className="hotel-tagline">Eskişehir&apos;in Kalbi</span>
                                </div>
                                <p className="hotel-description">
                                    Eskişehir&apos;in en merkezi konumunda, modern mimarisi ve sıcak atmosferiyle 
                                    misafirlerine unutulmaz bir konaklama deneyimi sunan InnTown Hotel, 
                                    şehrin kültürel ve sosyal yaşamına açılan kapınızdır.
                                </p>
                                <div className="quick-contact mt-30">
                                    <a className="contact-item" href="tel:+902223223535">
                                        <i className="flaticon-call"></i>
                                        <span>+90 222 322 3535</span>
                                    </a>
                                    <a className="contact-item" href="mailto:info@inntownhotel.com">
                                        <i className="flaticon-message"></i>
                                        <span>info@inntownhotel.com</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Orta Kolon - Hızlı Linkler */}
                        <div className="col-lg-4 col-md-6 order-2">
                            <div className="widget nav-widget-modern mb-50">
                                <h4 className="widget-title">Keşfedin</h4>
                                <div className="nav-columns">
                                    <div className="nav-column">
                                        <h5 className="column-title">Otel</h5>
                                        <ul>
                                            <li><Link href="/">Anasayfa</Link></li>
                                            <li><Link href="/about">Hakkımızda</Link></li>
                                            <li><Link href="/gallery">Galeri</Link></li>
                                            <li><Link href="/corporate">Kurumsal</Link></li>
                                        </ul>
                                    </div>
                                    <div className="nav-column">
                                        <h5 className="column-title">Hizmetler</h5>
                                        <ul>
                                            <li><Link href="/meeting">Toplantı & Organizasyon</Link></li>
                                            <li><Link href="/restaurant">Restaurant & Barlar</Link></li>
                                            <li><Link href="/rooms">Odalarımız</Link></li>
                                            <li><Link href="/contact">İletişim</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sağ Kolon - İletişim ve Sosyal Medya */}
                        <div className="col-lg-4 col-md-12 order-3">
                            <div className="widget contact-widget-modern mb-50">
                                <h4 className="widget-title">Bize Ulaşın</h4>
                                <div className="location-box">
                                    <div className="location-icon">
                                        <i className="flaticon-location-pin"></i>
                                    </div>
                                    <div className="location-info">
                                        <h5>Adresimiz</h5>
                                        <p>Yenibaşlar Mah. Gün Sokak No: 1<br/>Tepebaşı/ESKİŞEHİR</p>
                                        <a href="https://maps.app.goo.gl/PuYPwn35iAaXiCh79" target="_blank" className="get-directions">Yol Tarifi Al →</a>
                                    </div>
                                </div>
                                
                                <div className="social-section mt-40">
                                    <h5 className="social-title">Bizi Takip Edin</h5>
                                    <div className="social-links-modern">
                                        <a href="https://www.facebook.com/inntownhotel/" target="_blank" className="social-link facebook-link" aria-label="Facebook">
                                            <i className="fab fa-facebook-f"></i>
                                            <span className="social-tooltip">Facebook</span>
                                        </a>
                                        <a href="https://www.instagram.com/inntownhotel/" target="_blank"  className="social-link instagram-link" aria-label="Instagram">
                                            <i className="fab fa-instagram"></i>
                                            <span className="social-tooltip">Instagram</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Alt Bilgi Çubuğu */}
                    <div className="footer-bottom-bar mt-30">
                        {/* <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="footer-badges">
                                    <span className="badge-item">
                                        <i className="fas fa-shield-alt"></i> Güvenli Ödeme
                                    </span>
                                    <span className="badge-item">
                                        <i className="fas fa-award"></i> 5 Yıldız
                                    </span>
                                    <span className="badge-item">
                                        <i className="fas fa-wifi"></i> Ücretsiz WiFi
                                    </span>
                                    <span className="badge-item">
                                        <i className="fas fa-concierge-bell"></i> 7/24 Hizmet
                                    </span>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>

            <div className="copyright-area pt-20">
                <div className="container">
                    <div className="row align-items-center">
                            <p className="copyright-text copyright-two">Copyright ©Simgesel Media 2025</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}