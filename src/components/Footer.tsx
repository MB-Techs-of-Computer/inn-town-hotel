'use client';
import Link from 'next/link';
import '@/styles/components/footer.css';

export default function Footer() {
    return (
        <footer className="footer-two">
            <div className="footer-widget-area pt-100 pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 order-1">
                            <div className="widget site-info-widget mb-50">
                                <h4 className="widget-title">Hakkımızda</h4>
                                <p>
                                    Bir İç Anadolu kenti olan Eskişehir, öğrenci şehri olarak bilinmesinin
                                    ötesine turizm merkezli bir şehir haline gelmiştir. Tarihi Odunpazarı Evleri,
                                    şehrin simgesi olan Porsuk Çayı, müzeleri, sanata olan düşkünlüğü ve
                                    yatırımları ile bir Avrupa şehrini yansıtmaktadır.
                                </p>
                                <div className="social-links mt-40">
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-behance"></i></a>
                                    <a href="#"><i className="fab fa-linkedin"></i></a>
                                    <a href="#"><i className="fab fa-youtube"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 order-3 order-lg-2">
                            <div className="widget nav-widget mb-50">
                                <h4 className="widget-title">Bağlantılar</h4>
                                <ul>
                                    <li><Link href="/">Anasayfa</Link></li>
                                    <li><Link href="/hakkimizda">Hakkımızda</Link></li>
                                    <li><Link href="/toplanti">Toplantı & Organizasyon</Link></li>
                                    <li><Link href="/restaurant">Restaurant & Barlar</Link></li>
                                    <li><Link href="/galeri">Galeri</Link></li>
                                    <li><Link href="/iletisim">İletişim</Link></li>
                                    <li><Link href="/kariyer">Kariyer</Link></li>
                                    <li><Link href="/odalar/suite">Suite Oda</Link></li>
                                    <li><Link href="/odalar/junior-suite">Junior Suite Oda</Link></li>
                                    <li><Link href="/odalar/standart">Standart Oda</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 order-2 order-lg-3">
                            <div className="widget contact-widget mb-50">
                                <h4 className="widget-title">İletişim Bilgileri</h4>
                                <div className="contact-lists">
                                    <div className="contact-box">
                                        <div className="icon"><i className="flaticon-call"></i></div>
                                        <div className="desc"><h6 className="title">Telefon</h6>+90 222 322 3535</div>
                                    </div>
                                    <div className="contact-box">
                                        <div className="icon"><i className="flaticon-message"></i></div>
                                        <div className="desc"><h6 className="title">E-Posta Adresi</h6><a href="mailto:info@inntownhotel.com">info@inntownhotel.com</a></div>
                                    </div>
                                    <div className="contact-box">
                                        <div className="icon"><i className="flaticon-location-pin"></i></div>
                                        <div className="desc"><h6 className="title">Adres</h6>Yenibaşlar Mah. Gün Sokak No: 1 Tepebaşı/ESKİŞEHİR</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-area pt-30 pb-30">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-5 order-2 order-md-1">
                            <p className="copyright-text copyright-two">Copyright <Link href="/">INN TOWN HOTEL</Link> - 2022</p>
                        </div>
                        <div className="col-lg-6 col-md-7 order-1 order-md-2">
                            <div className="footer-menu text-center text-md-right">
                                <ul>
                                    <li><a href="https://www.asd.web.tr/" rel="nofollow">ASD Creative</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
