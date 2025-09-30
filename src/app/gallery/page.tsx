'use client';
import { useState } from 'react';
import Image from 'next/image';
import '@/styles/pages/gallery.css';
import Header from '@/components/Header';
import Breadcrumb from '@/components/BreadCrumb';
import Footer from '@/components/Footer';

export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const images = [
        { id: 1, src: '/img/galeri/1.jpg', alt: 'Otel Görünümü 1' },
        { id: 2, src: '/img/galeri/2.jpg', alt: 'Otel Görünümü 2' },
        { id: 3, src: '/img/galeri/3.jpg', alt: 'Otel Görünümü 3' },
        { id: 4, src: '/img/galeri/4.jpg', alt: 'Otel Görünümü 4' },
        { id: 5, src: '/img/galeri/5.jpg', alt: 'Otel Görünümü 5' },
        { id: 6, src: '/img/galeri/6.jpg', alt: 'Otel Görünümü 6' },
        { id: 7, src: '/img/galeri/7.jpg', alt: 'Otel Görünümü 7' },
        { id: 8, src: '/img/galeri/8.jpg', alt: 'Otel Görünümü 8' },
        { id: 9, src: '/img/galeri/9.jpg', alt: 'Otel Görünümü 9' },
        { id: 10, src: '/img/galeri/10.jpg', alt: 'Otel Görünümü 10' },
        { id: 11, src: '/img/galeri/11.jpg', alt: 'Otel Görünümü 11' },
        { id: 12, src: '/img/galeri/12.jpg', alt: 'Otel Görünümü 12' },
    ];

    const openLightbox = (src: string) => {
        setSelectedImage(src);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto';
    };

    const handleNext = () => {
        const currentIndex = images.findIndex(img => img.src === selectedImage);
        const nextIndex = (currentIndex + 1) % images.length;
        setSelectedImage(images[nextIndex].src);
    };

    const handlePrev = () => {
        const currentIndex = images.findIndex(img => img.src === selectedImage);
        const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        setSelectedImage(images[prevIndex].src);
    };

    const breadcrumbItems = [
        { href: '/', label: 'Anasayfa' },
        { label: 'Galeri', active: true }
    ];

    return (
        <>
            <Header />
            <Breadcrumb
                title="Galeri"
                subtitle="INN TOWN HOTEL"
                backgroundImage="/img/bg/04.jpg"
                items={breadcrumbItems}
            />
            <section className="gallery-section">
                <div className="container">
                    <div className="section-title text-center mb-80">
                        <span className="title-tag">Galeri</span>
                        <h2>Otelimizden Görüntüler</h2>
                    </div>

                    <div className="gallery-grid">
                        {images.map((image, index) => (
                            <div
                                key={image.id}
                                className="gallery-item"
                                onClick={() => openLightbox(image.src)}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="gallery-image-wrapper">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        width={600}
                                        height={400}
                                        className="gallery-image"
                                    />
                                    <div className="gallery-overlay">
                                        <i className="fas fa-search-plus"></i>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Lightbox */}
                {selectedImage && (
                    <div className="lightbox" onClick={closeLightbox}>
                        <button className="lightbox-close" onClick={closeLightbox}>
                            <i className="fas fa-times"></i>
                        </button>

                        <button className="lightbox-nav prev" onClick={(e) => {
                            e.stopPropagation();
                            handlePrev();
                        }}>
                            <i className="fas fa-chevron-left"></i>
                        </button>

                        <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                            <Image
                                src={selectedImage}
                                alt="Büyük Görünüm"
                                width={1200}
                                height={800}
                                className="lightbox-image"
                            />
                        </div>

                        <button className="lightbox-nav next" onClick={(e) => {
                            e.stopPropagation();
                            handleNext();
                        }}>
                            <i className="fas fa-chevron-right"></i>
                        </button>
                    </div>
                )}
            </section>
            <Footer/>
        </>
    );
}