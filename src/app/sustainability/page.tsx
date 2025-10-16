'use client';

import Header from '@/components/Header';
import Breadcrumb from '@/components/BreadCrumb';
import Footer from '@/components/Footer';
import '@/styles/pages/sustainability.css';
import { useState } from 'react';

interface Document {
    title: string;
    size: string;
    description: string;
    pdfUrl: string;
}

export default function SustainabilityDocsPage() {
    const breadcrumbItems = [
        { href: '/', label: 'Anasayfa' },
        { label: 'Sürdürülebilirlik', active: true }
    ];

    const [selectedDoc, setSelectedDoc] = useState<Document | null>(null);

    const politicsDocuments: Document[] = [
        { title: "Sürdürülebilirlik Politikası", size: "", description: "", pdfUrl: "/pdfs/surdurulebilirlikpolitika.pdf" },
        { title: "Kadın Hakları ve Cinsiyet Eşitliği Politikası", size: "", description: "", pdfUrl: "/pdfs/kadinhaklari.pdf" },
        { title: "Çocuk Hakları Politikası", size: "", description: "", pdfUrl: "/pdfs/cocukhaklari.pdf" },
        { title: "Çevre Koruma Politikası ", size: "", description: "", pdfUrl: "/pdfs/cevrekoruma.pdf" },
        { title: "Enerji Verimliliği Politikası", size: "", description: "", pdfUrl: "/pdfs/enerjipolitika.pdf" },
        { title: "Karbon Ayak İzini Azaltmak İçin Neler Yapabiliriz?", size: "", description: "", pdfUrl: "/pdfs/karbonayakizi.pdf" },
        { title: "Sürüdürülebilir Satın Alma Politikası", size: "", description: "", pdfUrl: "/pdfs/surdurebilirsatinalma.pdf" },
        { title: "Kültürel Etkileşim Politikası", size: "", description: "", pdfUrl: "/pdfs/kulturelpolitika.pdf" },
        { title: "Kültürel Mirasın Korunması ve Sunulması Politikası", size: "", description: "", pdfUrl: "/pdfs/kulturelkorunma.pdf" },
        { title: "Yerel Toplum İlişkileri ve Sorumluluk Politikası", size: "", description: "", pdfUrl: "/pdfs/yereltoplum.pdf" },
        { title: "Yöresel Geleneksel Kültürel Arkeolojik Miras ve Yaban Hayatı Koruma Politikası", size: "", description: "", pdfUrl: "/pdfs/yabanhayatipolitika.pdf" },
        { title: "Eskişehir Avlak Haritası", size: "", description: "", pdfUrl: "/pdfs/avlaklarharita.pdf" },
        { title: "Yiyeceklerimiz Çöpe Atılmayaca Kadar Değerlidir", size: "", description: "", pdfUrl: "/pdfs/yiyecekler.pdf" },
        { title: "Ziyaretler Sırasında Uyulması Gereken Kurallar", size: "", description: "", pdfUrl: "/pdfs/ziyaretkurallar.pdf" },
        { title: "Acil Durum Çağrı", size: "", description: "", pdfUrl: "/pdfs/acildurum.pdf" },
        { title: "Estram Tramvay Hat Şeması", size: "", description: "", pdfUrl: "/pdfs/tramvayhat.pdf" }
    ];

    const reportsDocuments: Document[] = [
        { title: "Sürdürülebilirlik Raporu", size: "", description: "", pdfUrl: "/pdfs/surdurulebilirlikraporlamasi.pdf" }
    ];

    const openModal = (doc: Document): void => {
        setSelectedDoc(doc);
    };

    const closeModal = (): void => {
        setSelectedDoc(null);
    };

    const DocCard = ({ doc }: { doc: Document }) => (
        <div className="doc-card" onClick={() => openModal(doc)}>
            <div className="doc-icon">
                <i className="fal fa-file-pdf"></i>
            </div>
            <div className="doc-title">{doc.title}</div>
            <div className="doc-meta">
                <span className="doc-size">{doc.size}</span>
            </div>
        </div>
    );

    return (
        <>
            <Header />
            <Breadcrumb
                title="Sürdürülebilirlik"
                subtitle="INN TOWN HOTEL"
                backgroundImage="/img/bg/04.jpg"
                items={breadcrumbItems}
            />

            <section className="docs-section">
                <div className="container">
                    <div className="docs-header">
                        <h1>Sürdürülebilirlik Belgeleri</h1>
                        <p>Tüm politika ve raporlarımıza buradan ulaşabilirsiniz</p>
                    </div>

                    <div className="section">
                        <h2 className="section-title">Sürdürülebilirlik Politikası</h2>
                        <div className="docs-grid">
                            {politicsDocuments.map((doc, index) => (
                                <DocCard key={index} doc={doc} />
                            ))}
                        </div>
                    </div>

                    <div className="section">
                        <h2 className="section-title">Sürdürülebilirlik Raporlaması</h2>
                        <div className="docs-grid">
                            {reportsDocuments.map((doc, index) => (
                                <DocCard key={index} doc={doc} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {selectedDoc && (
                <div className="modal active" onClick={closeModal}>
                    <div className="modal-content modal-pdf" onClick={(e) => e.stopPropagation()}>
                        <span className="close-modal" onClick={closeModal}>&times;</span>
                        <div className="modal-header">
                            <h2>{selectedDoc.title}</h2>
                            <p className="modal-description">{selectedDoc.description}</p>
                        </div>
                        <div className="pdf-viewer">
                            <iframe
                                src={selectedDoc.pdfUrl}
                                title={selectedDoc.title}
                                width="100%"
                                height="100%"
                            />
                        </div>
                        <div className="modal-footer">
                            <a
                                href={selectedDoc.pdfUrl}
                                download
                                className="download-pdf-btn"
                            >
                                <i className="fal fa-download"></i> İndir
                            </a>
                            <a
                                href={selectedDoc.pdfUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="open-pdf-btn"
                            >
                                <i className="fal fa-external-link"></i> Yeni Sekmede Aç
                            </a>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
}