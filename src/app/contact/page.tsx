'use client';
import { useState } from 'react';
import '@/styles/pages/contact.css';
import Header from '@/components/Header';
import Breadcrumb from '@/components/BreadCrumb';
import Footer from '@/components/Footer';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        ad: '',
        posta: '',
        tel: '',
        konu: '',
        mesaj: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        // API çağrısı simülasyonu - gerçek API endpoint'inizi buraya ekleyin
        try {
            // const response = await fetch('/api/contact', {
            //   method: 'POST',
            //   headers: { 'Content-Type': 'application/json' },
            //   body: JSON.stringify(formData)
            // });

            // Simüle edilmiş başarılı gönderim
            setTimeout(() => {
                setStatus('success');
                setFormData({ ad: '', posta: '', tel: '', konu: '', mesaj: '' });

                setTimeout(() => {
                    setStatus('idle');
                }, 3000);
            }, 1000);
        } catch (error) {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    const breadcrumbItems = [
        { href: '/', label: 'Anasayfa' },
        { label: 'İletişim', active: true }
    ];

    return (
        <>
            <Header />
            <Breadcrumb
                title="İletişim"
                subtitle="INN TOWN HOTEL"
                backgroundImage="/img/bg/04.jpg"
                items={breadcrumbItems}
            />
            <section className="contact-section">
                <div className="container">
                    <div className="section-title text-center mb-80">
                        <span className="title-tag">İletişim</span>
                        <h2>Bizimle İletişime Geçin</h2>
                    </div>

                    {/* İletişim Bilgileri */}
                    <div className="contact-info-grid">
                        <div className="info-card">
                            <div className="info-icon">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div className="info-content">
                                <h4>Adres</h4>
                                <p>Yenibaşlar Mah. Gün Sokak No:1<br />Tepebaşı/Eskişehir</p>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">
                                <i className="fa-solid fa-phone"></i>
                            </div>
                            <div className="info-content">
                                <h4>Telefon</h4>
                                <p><a href="tel:+902223223535">+90 222 322 3535</a></p>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div className="info-content">
                                <h4>E-Posta Adresi</h4>
                                <p><a href="mailto:info@inntownhotel.com">info@inntownhotel.com</a></p>
                            </div>
                        </div>
                    </div>

                    {/* Harita */}
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3065.8447688900624!2d30.505621715638874!3d39.78803890155728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cc15a5afd2a05f%3A0xcc708e1254afa652!2sInn%20Town%20Hotel!5e0!3m2!1str!2str!4v1648133572689!5m2!1str!2str"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                    {/* İletişim Formu */}
                    <div className="contact-form-wrapper">
                        <div className="form-header">
                            <h3>Mesaj Gönderin</h3>
                            <p>Sorularınız ve önerileriniz için formu doldurun</p>
                        </div>

                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-grid">
                                <div className="form-group">
                                    <label htmlFor="ad">
                                        <i className="far fa-user"></i>
                                    </label>
                                    <input
                                        type="text"
                                        id="ad"
                                        name="ad"
                                        placeholder="Adınız Soyadınız"
                                        value={formData.ad}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="posta">
                                        <i className="far fa-envelope"></i>
                                    </label>
                                    <input
                                        type="email"
                                        id="posta"
                                        name="posta"
                                        placeholder="E-Posta Adresiniz"
                                        value={formData.posta}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="tel">
                                        <i className="far fa-phone"></i>
                                    </label>
                                    <input
                                        type="tel"
                                        id="tel"
                                        name="tel"
                                        placeholder="Telefon Numaranız"
                                        value={formData.tel}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="konu">
                                        <i className="far fa-book"></i>
                                    </label>
                                    <input
                                        type="text"
                                        id="konu"
                                        name="konu"
                                        placeholder="Konu"
                                        value={formData.konu}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group full-width">
                                <label htmlFor="mesaj">
                                    <i className="far fa-pen"></i>
                                </label>
                                <textarea
                                    id="mesaj"
                                    name="mesaj"
                                    rows={6}
                                    placeholder="Mesajınız"
                                    value={formData.mesaj}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-submit">
                                <button
                                    type="submit"
                                    className="submit-btn"
                                    disabled={status === 'loading'}
                                >
                                    {status === 'loading' ? 'Gönderiliyor...' : 'Gönder'}
                                </button>

                                {status === 'success' && (
                                    <p className="form-message success">Mesajınız başarıyla gönderildi!</p>
                                )}
                                {status === 'error' && (
                                    <p className="form-message error">Bir hata oluştu. Lütfen tekrar deneyin.</p>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
}