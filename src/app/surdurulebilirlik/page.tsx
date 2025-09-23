import React from 'react';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/BreadCrumb';

export const metadata: Metadata = {
    title: 'Sürdürülebilirlik Politikası - Inn Town Hotel',
    description: 'Inn Town Hotel\'in çevre dostu ve sürdürülebilir turizm politikaları hakkında bilgi alın.',
    keywords: 'sürdürülebilirlik, çevre, otel, turizm, Inn Town Hotel',
};

export default function SurdurulebilirlikPage() {
    const breadcrumbItems = [
        { href: '/', label: 'Anasayfa' },
        { label: 'Sürdürülebilirlik Politikası', active: true }
    ];
    return (
        <>
            <Header />
            <Breadcrumb
                title="Sürdürülebilirlik Politikası"
                subtitle="INN TOWN HOTEL"
                backgroundImage="/img/bg/04.jpg"
                items={breadcrumbItems}
            />
            <section className="about-section pt-115 pb-115">
                <div className="container">
                    <div className="about-text-box">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <div className="about-text listul">

                                    <h5><strong>Sürdürülebilir Çevre Politikası<br /><br /></strong></h5>

                                    <p>
                                        <strong>INN TOWN HOTEL</strong>, sürdürülebilir çevre anlayışı ile gelecek nesillere temiz ve sağlıklı bir çevre bırakmayı amaçlamıştır. Bu bağlamda aşağıda belirtilen sorumluluklarımızı gerçekleştirmeyi taahhüt ederiz.
                                    </p>

                                    <ul>
                                        <li>Çevre kirliliğinin önlenmesi, biyoçeşitlilik ve ekosistemlerin korunması ilgili süreçlerimizin sürekli iyileştirilmesine katkı sağlamak,</li>
                                        <li>Yenilenebilir, temiz enerji kullanımını artırmak,</li>
                                        <li>Doğal kaynaklarımızı etkin kullanmak,</li>
                                        <li>Su tüketimini azaltmak,</li>
                                        <li>Atıkları kaynağında azaltmak,</li>
                                        <li>Sıfır atık ilkesiyle atıkların ayrıştırılmasını ve geri kazanımını sağlamak,</li>
                                        <li>Kimyasal tüketimi ve pestisit kullanımını azaltmak, doğaya zarar vermeyen ürün tercih etmek,</li>
                                        <li>Etkin risk analizi yaparak, çevresel etkilerimizi azaltmak, yeni çevresel fırsatlar elde etmek,</li>
                                        <li>Çevre dostu ürün kullanımını yaygınlaştırmak,</li>
                                        <li>Süreçlerimizin oluşturulması, uygulanması aşamasında yaşam döngüsü bakış açısı ile hareket etmek,</li>
                                        <li>Karbon ayak izimizi izleyerek, belirli bir hedef doğrultusunda azaltmak,</li>
                                        <li>Acil durumlardan kaynaklanan olumsuz çevresel etkilerin azaltılmasıyla ilgili planlı çalışmalar yapmak,</li>
                                        <li>Çevre/Enerji yönetim sisteminin etkinliğine katkı sağlayacak çalışanlarımızı desteklemek,</li>
                                        <li>Önemli çevre boyutları ve etkileri konusunda çalışanların farkındalığını artıracak eğitimler vermek,</li>
                                        <li>Çevreyi Koruma Faaliyetlerimizi kurum kültürü haline getirmek,</li>
                                        <li>Tedarikçi seçimlerinde çevresel açıdan sürdürülebilir tedarikçilere öncelik vermek,</li>
                                        <li>Çevresel uygunluk yükümlülüklerimizin yerine getirilmesini sağlamak,</li>
                                        <li>Çevresel faaliyetlerimiz ve ilkelerimiz konusunda tüm ilgili taraflarımızın bilgilendirilmesi ve katılımını sağlamak.</li>
                                    </ul>

                                    <p><strong><br /></strong></p>

                                    <h5><strong>Sürdürülebilirlik Politikası</strong></h5>

                                    <br />
                                    <p><strong>INN TOWN HOTEL</strong> olarak;</p>

                                    <ul>
                                        <li>Çevresel Sürdürülebilirlik Politikası çerçevesinde hareket ediyoruz,</li>
                                        <li>Yerel/bölgesel kalkınma ve istihdamı destekliyoruz,</li>
                                        <li>İstihdam, ilerleme, ödüllendirme sürecinde ayrım yapılmaksızın yönetim pozisyonları dahil olmak üzere performans analizi yaparak tüm çalışanlarımıza eşit fırsatlar sunuyoruz.</li>
                                        <li>Çalışanlarımızın çalışma haklarına saygı duyuyor, yasal mevzuat hükümleri çerçevesinde takip ediyoruz.</li>
                                        <li>Çocuk işçiliğin kaldırılmasını destekliyoruz.</li>
                                        <li>Çalışanlarımıza düzenli eğitimler vererek gelişim ve ilerleme fırsatı sunuyoruz.</li>
                                        <li>Çalışanlarımıza sağlıklı, güvenli çalışma ortamı sunuyor, istek, öneri ve şikayetlerini iletebilecekleri çeşitli imkanlar sunuyoruz. Çalışanlarımızdan gelen geri bildirimleri değerlendirerek yönetim sistemlerimizin gelişimine katkı sağlıyoruz.</li>
                                        <li>Sıfır kaza ilkesiyle çalışarak, iş sağlığı ve güvenliğini kurumsal kültür haline getirmek istiyoruz.</li>
                                        <li>Politikamızı işletirken ilgili taraflarımızın katılımına önem veriyor, gerektiğinde şeffaf bilgi sunuyoruz.</li>
                                        <li>Yerel/Bölgenin doğal ve kültürel mirasının ilgili misafirlerimizi ve çalışanlarımızı bilgilendiriyoruz,</li>
                                        <li>Misafirlerimizin tüm geri bildirimlerini değerlendiriyoruz. Elde ettiğimiz veriler doğrultusunda süreçlerimizi iyileştiriyoruz.</li>
                                        <li>Yatırımlarımızı planlarken; binalarımızın ve alt yapı sistemlerimizin; korunan hassas alanlara, tarihi mirasa, doğal ve kültürel çevrenin bütünlüğüne olan risklerini dikkate alıyoruz. Arazi kullanımı, inşaat, bakım onarım işlemleri, tasarım, peyzaj düzenlemesiyle ilgili çalışmalarımızda yerel/bölgeye uygun, sürdürülebilir uygulamalar ve materyaller tercih ediyoruz.</li>
                                        <li>Binalarımızı ve konseptimizi tasarlarken, özel ihtiyacı olan misafir ve çalışanlarımızın ihtiyaçlarını düşünüyor, herkes için erişilebilir hizmet anlayışını benimsiyoruz.</li>
                                        <li>Tarihi, arkeolojik, kültürel ve manevi öneme sahip yerel/bölgesel mülklerin, alanların ve geleneklerin korunmasına ve gelişmesine katkı sağlıyoruz.</li>
                                        <li>Ürün/hizmet alımlarında niteliği ve kalitesini kullanıcılarla değerlendiriyor ve analiz ediyoruz. Tedarikçi seçiminde adil, dürüst ve tarafsız davranıyoruz.</li>
                                        <li>İnsan haklarına saygı duyuyor; dil, din, ırk, cinsiyet vb. her türlü ayrımcılığı reddediyoruz. Özel korumalı gruplar ve diğer savunmasız gruplara yönelik, ticari, cinsel veya başka herhangi bir istismar veya tacize karşıyız. Aile içi şiddet ve çocuk istismarına karşı alınacak tedbirleri destekliyoruz.</li>
                                        <li>Tüm süreçlerimizi temel değerlerimize bağlı kalarak, uymakla yükümlü olduğumuz yasal ve diğer şartlara uyum anlayışı ile sürekli geliştiriyoruz.</li>
                                        <li>Bilgi güvenliği ile ilgili mevzuata uygun hareket ediyor, süreçlerimizi geliştiriyoruz.</li>
                                        <li>Sektöre yön veren inovasyon çalışmaları ile teknolojik sistemlere yatırım yapıyoruz.</li>
                                        <li>Faaliyetlerimizi, kendi iç dış hususlarımız, ilgili taraflarımızın ihtiyaç ve beklentilerini ele alarak potansiyel riskleri önceden analiz ediyor, sürekli iyileştirme hedefi doğrultusunda geliştiriyoruz. Risk Yönetimi Sürecini tüm iş süreçlerimizde ele alıyor, yeni fırsatlar elde etmeyi amaçlıyoruz.</li>
                                        <li>Sürdürülebilir kalkınma doğrultusunda, Turizm sektöründe öncü, uzun vadeli değer yaratmayı hedefliyoruz.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

