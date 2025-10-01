'use client';

import Header from '@/components/Header';
import Image from 'next/image';
import Breadcrumb from '@/components/BreadCrumb';
import Footer from '@/components/Footer';
import '@/styles/pages/corporate.css';

export default function CorporatePage() {
    const breadcrumbItems = [
        { href: '/', label: 'Anasayfa' },
        { label: 'Hakkımızda', active: true }
    ];

    const features = [
        {
            icon: 'flaticon-serving-dish',
            hoverIcon: 'flaticon-serving-dish',
            title: 'Oda Servisi'
        },
        {
            icon: 'flaticon-group',
            hoverIcon: 'flaticon-group',
            title: 'Rehberlik Hizmetleri'
        },
        {
            icon: 'fal fa-shuttle-van',
            hoverIcon: 'fal fa-shuttle-van',
            title: 'VIP Transfer'
        },
        {
            icon: 'fal fa-mail-bulk',
            hoverIcon: 'fal fa-mail-bulk',
            title: 'Posta & Kurye'
        },
        {
            icon: 'fal fa-fax',
            hoverIcon: 'fal fa-fax',
            title: 'Fotokopi & Yazıcı'
        }
    ];

    const environmentalPolicies = [
        {
            icon: 'fal fa-leaf',
            title: 'Çevre Kirliliğinin Önlenmesi',
            description: 'Biyoçeşitlilik ve ekosistemlerin korunması'
        },
        {
            icon: 'fal fa-solar-panel',
            title: 'Yenilenebilir Enerji',
            description: 'Temiz enerji kullanımını artırma'
        },
        {
            icon: 'fal fa-water',
            title: 'Su Tasarrufu',
            description: 'Doğal kaynaklarımızı etkin kullanma'
        },
        {
            icon: 'fal fa-recycle',
            title: 'Sıfır Atık',
            description: 'Atıkların ayrıştırılması ve geri kazanımı'
        },
        {
            icon: 'fal fa-flask',
            title: 'Kimyasal Azaltma',
            description: 'Doğaya zarar vermeyen ürün tercihi'
        },
        {
            icon: 'fal fa-seedling',
            title: 'Çevre Dostu Ürünler',
            description: 'Sürdürülebilir ürün kullanımı'
        },
        {
            icon: 'fal fa-cloud',
            title: 'Karbon Ayak İzi',
            description: 'Emisyon azaltma hedefleri'
        },
        {
            icon: 'fal fa-users',
            title: 'Farkındalık Eğitimleri',
            description: 'Çalışan ve misafir bilgilendirme'
        }
    ];

    const sustainabilityValues = [
        {
            icon: 'fal fa-handshake',
            title: 'Yerel Kalkınma',
            items: [
                'Yerel/bölgesel kalkınma ve istihdamı destekliyoruz',
                'Tüm çalışanlarımıza eşit fırsatlar sunuyoruz',
                'Çalışanlarımıza düzenli eğitimler veriyoruz'
            ]
        },
        {
            icon: 'fal fa-shield-check',
            title: 'İş Güvenliği',
            items: [
                'Sağlıklı, güvenli çalışma ortamı sunuyoruz',
                'Sıfır kaza ilkesiyle çalışıyoruz',
                'İş sağlığı ve güvenliğini kurumsal kültür haline getiriyoruz'
            ]
        },
        {
            icon: 'fal fa-landmark',
            title: 'Kültürel Miras',
            items: [
                'Tarihi ve kültürel mirasın korunmasına katkı sağlıyoruz',
                'Yerel geleneklerin gelişmesini destekliyoruz',
                'Misafirlerimizi yerel değerler hakkında bilgilendiriyoruz'
            ]
        },
        {
            icon: 'fal fa-balance-scale',
            title: 'İnsan Hakları',
            items: [
                'İnsan haklarına saygı duyuyoruz',
                'Her türlü ayrımcılığı reddediyoruz',
                'Çocuk işçiliğin kaldırılmasını destekliyoruz'
            ]
        }
    ];

    return (
        <>
            <Header />
            <Breadcrumb
                title="Hakkımızda"
                subtitle="INN TOWN HOTEL"
                backgroundImage="/img/bg/04.jpg"
                items={breadcrumbItems}
            />

            {/* About Section */}
            <section className="modern-about-section">
                <div className="container">
                    {/* Başlık */}
                    <div className="about-header">
                        <span className="year-tag">
                            2022 <span>itibariyle</span>
                        </span>
                        <h2 className="about-main-title">
                            Inn Town Hotel, 75 Deluxe, 5 Juniour Suit, 2 Suite olmak üzere toplamda 82 odaya sahiptir.
                        </h2>
                    </div>

                    {/* Özellikler */}
                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-card">
                                <div className="feature-card-inner">
                                    <i className={feature.icon}></i>
                                    <i className={`hover-icon ${feature.hoverIcon}`}></i>
                                    <span className="feature-title">{feature.title}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* İçerik Kutusu */}
                    <div className="about-content-box">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="about-image-wrapper">
                                    <Image
                                        src="/img/about.jpg"
                                        alt="Inn Town Hotel Hakkında"
                                        width={600}
                                        height={500}
                                        className="about-main-image"
                                    />
                                    <div className="image-decoration"></div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-content">
                                    <span className="content-tag">HAKKIMIZDA</span>
                                    <h3 className="content-title">Bir İç Anadolu kenti olan Eskişehir,</h3>
                                    <div className="content-text">
                                        <p>
                                            Öğrenci şehri olarak bilinmesinin ötesine turizm merkezli bir şehir haline gelmiştir.
                                            Tarihi Odunpazarı Evleri, şehrin simgesi olan Porsuk Çayı, müzeleri, sanata olan
                                            düşkünlüğü ve yatırımları ile bir Avrupa şehrini yansıtmaktadır.
                                        </p>
                                        <p>
                                            Ocak 2022 itibariyle, tecrübeli yönetim anlayışı ile misafirlerini ağırlamaya başlayan
                                            Inn Town Hotel 75 Deluxe, 5 Juniour Suit, 2 Suite olmak üzere toplamda 82 odaya
                                            sahiptir.
                                        </p>
                                        <p>
                                            Ek olarak; 30 kişilik ve 80 kişilik 2 adet çok amaçlı toplantı salonu ve otelin 9.
                                            katında bulunan 120 kişilik A la Carte Restaurant bulunmaktadır.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sustainability Section */}
            <section className="sustainability-section">
                <div className="container">
                    {/* Environmental Policy Header */}
                    <div className="section-header">
                        <span className="section-badge">
                            <i className="fal fa-globe"></i>
                            Çevre & Sürdürülebilirlik
                        </span>
                        <h2 className="section-title">Sürdürülebilir Çevre Politikası</h2>
                        <p className="section-description">
                            <strong>INN TOWN HOTEL</strong>, sürdürülebilir çevre anlayışı ile gelecek nesillere temiz ve sağlıklı bir çevre bırakmayı amaçlamıştır.
                        </p>
                    </div>

                    {/* Environmental Policies Grid */}
                    <div className="policies-grid">
                        {environmentalPolicies.map((policy, index) => (
                            <div key={index} className="policy-card">
                                <div className="policy-icon">
                                    <i className={policy.icon}></i>
                                </div>
                                <h4 className="policy-title">{policy.title}</h4>
                                <p className="policy-description">{policy.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Sustainability Values */}
                    <div className="sustainability-values-section">
                        <div className="values-header">
                            <h3 className="values-title">Sürdürülebilirlik İlkelerimiz</h3>
                            <div className="title-underline"></div>
                        </div>

                        <div className="values-grid">
                            {sustainabilityValues.map((value, index) => (
                                <div key={index} className="value-card">
                                    <div className="value-header">
                                        <div className="value-icon-wrapper">
                                            <i className={value.icon}></i>
                                        </div>
                                        <h4 className="value-title">{value.title}</h4>
                                    </div>
                                    <ul className="value-list">
                                        {value.items.map((item, idx) => (
                                            <li key={idx}>
                                                <i className="fal fa-check-circle"></i>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Commitment Box */}
                    <div className="commitment-box">
                        <div className="commitment-icon">
                            <i className="fal fa-heart"></i>
                        </div>
                        <h3>Sürdürülebilir Taahhüdümüz</h3>
                        <p>
                            Sürdürülebilir kalkınma doğrultusunda, turizm sektöründe öncü, uzun vadeli değer yaratmayı hedefliyoruz.
                            Tüm süreçlerimizi temel değerlerimize bağlı kalarak, uymakla yükümlü olduğumuz yasal ve diğer şartlara
                            uyum anlayışı ile sürekli geliştiriyoruz.
                        </p>
                        <div className="commitment-stats">
                            <div className="stat-item">
                                <i className="fal fa-tree"></i>
                                <span>Karbon Nötr</span>
                            </div>
                            <div className="stat-item">
                                <i className="fal fa-recycle"></i>
                                <span>%100 Geri Dönüşüm</span>
                            </div>
                            <div className="stat-item">
                                <i className="fal fa-solar-panel"></i>
                                <span>Yenilenebilir Enerji</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}