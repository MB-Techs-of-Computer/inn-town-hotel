"use client";
import { useState } from 'react';
import Image from 'next/image';
import '@/styles/components/roomdetailgallery.css';

interface RoomDetailGalleryProps {
    images: string[];
    roomTitle: string;
    description: string;
    reservationUrl?: string;
}

export default function RoomDetailGallery({
    images,
    roomTitle,
    description,
    reservationUrl = "/rez.asp?room-type=5008203"
}: RoomDetailGalleryProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const prevImage = () => {
        if (currentImageIndex > 0) {
            setIsImageLoaded(false);
            setCurrentImageIndex(currentImageIndex - 1);
        }
    };

    const nextImage = () => {
        if (currentImageIndex < images.length - 1) {
            setIsImageLoaded(false);
            setCurrentImageIndex(currentImageIndex + 1);
        }
    };

    const amenities = [
        { icon: 'fa-bed' },
        { icon: 'fa-wifi' },
        { icon: 'fa-car'},
        { icon: 'fa-coffee'},
        { icon: 'fa-concierge-bell' },
        { icon: 'fa-tv' }
    ];

    return (
        <>
            <div className="room-detail-gallery-container">
                <div className="gallery-layout">
                    {/* Sol taraf - Büyük foto */}
                    <div className="gallery-main-section">
                        <div className="main-image-wrapper">
                            <button
                                className="image-nav-arrow left"
                                onClick={prevImage}
                                disabled={currentImageIndex === 0}
                                aria-label="Önceki resim"
                            >
                                <i className="fal fa-chevron-left"></i>
                            </button>

                            <div className={`image-container ${isImageLoaded ? 'loaded' : ''}`}>
                                <Image
                                    src={images[currentImageIndex]}
                                    alt={`${roomTitle} ${currentImageIndex + 1}`}
                                    width={1200}
                                    height={800}
                                    style={{ objectFit: 'cover' }}
                                    onLoad={() => setIsImageLoaded(true)}
                                    priority={currentImageIndex === 0}
                                />
                            </div>

                            <button
                                className="image-nav-arrow right"
                                onClick={nextImage}
                                disabled={currentImageIndex === images.length - 1}
                                aria-label="Sonraki resim"
                            >
                                <i className="fal fa-chevron-right"></i>
                            </button>

                            {/* Image counter */}
                            <div className="image-counter">
                                <span>{currentImageIndex + 1}</span>
                                <span className="divider">/</span>
                                <span>{images.length}</span>
                            </div>

                            {/* Amenities overlay */}
                            <div className="room-amenities-overlay">
                                <div className="amenities-grid">
                                    {amenities.map((amenity, index) => (
                                        <div key={index} className="amenity-item" >
                                            <i className={`fal ${amenity.icon}`}></i>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sağ taraf - Bilgi ve thumbnail'ler */}
                    <div className="gallery-info-section">
                        <div className="info-content">
                            <div className="title-section">
                                <h3 className="room-detail-title">{roomTitle}</h3>
                                <div className="title-decoration">
                                    <span></span>
                                    <i className="fal fa-hotel"></i>
                                    <span></span>
                                </div>
                            </div>

                            <div className="room-description-text">
                                <p>{description}</p>
                            </div>

                            {/* Oda Galerisi */}
                            <div className="thumbnail-section">
                                <div className="thumbnail-header">
                                    <h4>
                                        <i className="fal fa-images"></i>
                                        ODA GALERİSİ
                                    </h4>
                                    <div className="thumbnail-nav">
                                        <button 
                                            onClick={prevImage} 
                                            disabled={currentImageIndex === 0}
                                            aria-label="Önceki"
                                        >
                                            <i className="fal fa-chevron-left"></i>
                                        </button>
                                        <button 
                                            onClick={nextImage} 
                                            disabled={currentImageIndex === images.length - 1}
                                            aria-label="Sonraki"
                                        >
                                            <i className="fal fa-chevron-right"></i>
                                        </button>
                                    </div>
                                </div>

                                <div className="thumbnail-grid">
                                    {images.map((image, index) => (
                                        <div
                                            key={index}
                                            className={`thumbnail-item ${index === currentImageIndex ? 'active' : ''}`}
                                            onClick={() => {
                                                setIsImageLoaded(false);
                                                setCurrentImageIndex(index);
                                            }}
                                        >
                                            <Image
                                                src={image}
                                                alt={`${roomTitle} ${index + 1}`}
                                                width={180}
                                                height={120}
                                                style={{ objectFit: 'cover' }}
                                            />
                                            <div className="thumbnail-overlay">
                                                <i className="fal fa-search-plus"></i>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Rezervasyon butonu */}
                            <div className="reservation-button-wrapper">
                                <a href={reservationUrl} className="reservation-btn">
                                    <i className="fal fa-calendar-check"></i>
                                    <span>Hemen Rezervasyon Yapın</span>
                                    <i className="fal fa-arrow-right"></i>
                                </a>
                                <p className="reservation-note">
                                    <i className="fal fa-info-circle"></i>
                                    En iyi fiyat garantisi ile rezervasyon yapın
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}