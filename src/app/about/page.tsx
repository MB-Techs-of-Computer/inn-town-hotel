import Header from '@/components/Header';
import Image from 'next/image';
import Breadcrumb from '@/components/BreadCrumb';
import Footer from '@/components/Footer';
import '@/styles/pages/about.css';

export default function AboutPage() {
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

          {/* İstatistikler */}
          {/* <div className="stats-section">
            <div className="stat-item">
              <div className="stat-number">82</div>
              <div className="stat-label">Oda</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2</div>
              <div className="stat-label">Toplantı Salonu</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">120</div>
              <div className="stat-label">Restoran Kapasitesi</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Hizmet</div>
            </div>
          </div> */}
        </div>
      </section>

      <Footer />
    </>
  );
}