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
        { label: 'Sürdürülebilirlik Belgeleri', active: true }
    ];

    const [selectedDoc, setSelectedDoc] = useState<Document | null>(null);

    const politicsDocuments: Document[] = [
        { title: "Acil Durum Çalışmaları", size: "245 KB", description: "Acil durum ve kriz yönetimi prosedürleri", pdfUrl: "/pdfs/acildurum.pdf" },
        { title: "Estram Tramvay Politikası", size: "189 KB", description: "Toplu taşıma sürdürülebilirlik yaklaşımı", pdfUrl: "/pdfs/tramvayhat.pdf" },
        { title: "Yiyeceklerimiz - Değerlendirme", size: "312 KB", description: "Gıda israfı önleme ve değerlendirme raporu", pdfUrl: "/pdfs/yiyecekler.pdf" },
        { title: "LS.03 Ziyaretler", size: "156 KB", description: "", pdfUrl: "/pdfs/ziyaretkurallar.pdf" },
        { title: "PLT.01 Çevre Koruma Politikası", size: "203 KB", description: "Çevre koruma ilkeleri ve taahhütler", pdfUrl: "/pdfs/cevre-koruma.pdf" },
        { title: "PLT.02 Çocuk Hakları Politikası", size: "178 KB", description: "Çocuk hakları ve koruma politikaları", pdfUrl: "/pdfs/cocuk-haklari.pdf" },
        { title: "PLT.04 Kadın Hakları Politikası", size: "192 KB", description: "Toplumsal cinsiyet eşitliği ve kadın hakları", pdfUrl: "/pdfs/kadinhaklari.pdf" },
        { title: "PLT.03 Enerji Verimliliği Politikası", size: "215 KB", description: "Enerji tasarrufu ve yenilenebilir enerji", pdfUrl: "/pdfs/enerji-verimlilik.pdf" },
        { title: "PLT.05 Sürdürülebilirlik Politikası", size: "267 KB", description: "Genel sürdürülebilirlik yaklaşımı ve hedefler", pdfUrl: "/pdfs/surdurulebilirlik-a.pdf" },
        { title: "PLT.06 Sürdürülebilirlik Politikası B", size: "438 KB", description: "Güncellenmiş sürdürülebilirlik stratejisi", pdfUrl: "/pdfs/surdurulebilirlik-b.pdf" },
        { title: "PLT.07 Yöresel Kalkınma", size: "294 KB", description: "Yerel ekonomi ve kalkınma destekleri", pdfUrl: "/pdfs/yoresel-kalkinma.pdf" },
        { title: "Eskişehir Avlak Haritası", size: "1.2 MB", description: "Bölgesel avlak alanları haritası", pdfUrl: "/pdfs/avlak-haritasi.pdf" },
        { title: "PLT.08 Yerel Toplum İlişkileri", size: "221 KB", description: "Paydaş katılımı ve toplum ilişkileri", pdfUrl: "/pdfs/yerel-toplum.pdf" },
        { title: "Tablo 4 - Sürdürülebilirlik", size: "387 KB", description: "İstatistiksel sürdürülebilirlik göstergeleri", pdfUrl: "/pdfs/tablo-surdurulebilirlik.pdf" }
    ];

    const reportsDocuments: Document[] = [
        { title: "Karbon Ayak İzi Raporu", size: "428 KB", description: "Yıllık karbon emisyon analizi ve hedefler", pdfUrl: "/pdfs/karbon-ayak-izi.pdf" }
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
                title="Sürdürülebilirlik Belgeleri"
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