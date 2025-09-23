import Header from '@/components/Header';
import Image from 'next/image';
import Breadcrumb from '@/components/BreadCrumb';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const breadcrumbItems = [
    { href: '/', label: 'Anasayfa' },
    { label: 'Hakkımızda', active: true }
  ];
  return (
    <>
      <Header />
      {/* TL Search form section */}
      <div id="block-search">
        <div id="tl-search-form" className="tl-container container"></div>
      </div>

      <Breadcrumb
        title="Hakkımızda"
        subtitle="INN TOWN HOTEL"
        backgroundImage="/img/bg/04.jpg"
        items={breadcrumbItems}
      />

      {/* About Section */}
      <section className="about-section pt-115 pb-115">
        <div className="container">
          <div className="section-title about-title text-center">
            <span className="title-tag">
              2022 <span>itibariyle</span>
            </span>
            <h2>
              Inn Town Hotel, 75 Deluxe, 5 Juniour Suit, 2 Suite olmak üzere toplamda 82 odaya sahiptir.
            </h2>
          </div>

          <ul className="about-features">
            <li className="wow fadeInUp" data-wow-delay=".3s">
              <a href="#">
                <i className="flaticon-serving-dish"></i>
                <i className="hover-icon flaticon-serving-dish"></i>
                <span className="title">Oda Servisi</span>
              </a>
            </li>
            <li className="wow fadeInUp" data-wow-delay=".4s">
              <a href="#">
                <i className="flaticon-group"></i>
                <i className="hover-icon flaticon-group"></i>
                <span className="title">Rehberlik Hizmetleri</span>
              </a>
            </li>
            <li className="wow fadeInUp" data-wow-delay=".5s">
              <a href="#">
                <i className="fal fa-shuttle-van"></i>
                <i className="hover-icon fal fa-shuttle-van"></i>
                <span className="title">VIP Transfer</span>
              </a>
            </li>
            <li className="wow fadeInUp" data-wow-delay=".6s">
              <a href="#">
                <i className="fal fa-mail-bulk"></i>
                <i className="hover-icon fal fa-mail-bulk"></i>
                <span className="title">Posta & Kurye</span>
              </a>
            </li>
            <li className="wow fadeInUp" data-wow-delay=".7s">
              <a href="#">
                <i className="fal fa-fax"></i>
                <i className="hover-icon fal fa-fax"></i>
                <span className="title">Fotokopi & Yazıcı</span>
              </a>
            </li>
          </ul>

          <div className="about-text-box">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="about-img">
                  <Image
                    src="/img/about.jpg"
                    alt="Inn Town Hotel Hakkında"
                    width={600}
                    height={400}
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-text">
                  <span>HAKKIMIZDA</span>
                  <h3>Bir İç Anadolu kenti olan Eskişehir,</h3>
                  <p>
                    Öğrenci şehri olarak bilinmesinin ötesine turizm merkezli bir şehir haline gelmiştir.
                    Tarihi Odunpazarı Evleri, şehrin simgesi olan Porsuk Çayı, müzeleri, sanata olan
                    düşkünlüğü ve yatırımları ile bir Avrupa şehrini yansıtmaktadır.
                  </p>
                  <br />
                  <p>
                    Ocak 2022 itibariyle, tecrübeli yönetim anlayışı ile misafirlerini ağırlamaya başlayan
                    Inn Town Hotel 75 Deluxe, 5 Juniour Suit, 2 Suite olmak üzere toplamda 82 odaya
                    sahiptir.
                  </p>
                  <br />
                  <p>
                    Ek olarak; 30 kişilik ve 80 kişilik 2 adet çok amaçlı toplantı salonu ve otelin 9.
                    katında bulunan 120 kişilik A la Carte Restaurant bulunmaktadır.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      <a href="#" className="back-to-top" id="backToTop">
        <i className="fal fa-angle-double-up"></i>
      </a>
      <Footer/>
    </>
  );
}