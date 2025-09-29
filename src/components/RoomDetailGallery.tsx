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

    const prevImage = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1);
        }
    };

    const nextImage = () => {
        if (currentImageIndex < images.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
        }
    };

    return (
        <div className="room-detail-gallery-container">
            <div className="gallery-layout">
                {/* Sol taraf - Büyük foto */}
                <div className="gallery-main-section">
                    <div className="main-image-wrapper">
                        <button
                            className="image-nav-arrow left"
                            onClick={prevImage}
                            disabled={currentImageIndex === 0}
                        >
                            <i className="fal fa-chevron-left"></i>
                        </button>

                        <Image
                            src={images[currentImageIndex]}
                            alt={`${roomTitle} ${currentImageIndex + 1}`}
                            width={1200}
                            height={800}
                            style={{ objectFit: 'cover' }}
                        />

                        <button
                            className="image-nav-arrow right"
                            onClick={nextImage}
                            disabled={currentImageIndex === images.length - 1}
                        >
                            <i className="fal fa-chevron-right"></i>
                        </button>

                        {/* Icon'lar */}
                        <ul className="room-feature-icons">
                            <li><i className="fal fa-bed"></i></li>
                            <li><i className="fal fa-wifi"></i></li>
                            <li><i className="fal fa-car"></i></li>
                            <li><i className="fal fa-coffee"></i></li>
                            <li><i className="fal fa-concierge-bell"></i></li>
                            <li><i className="fal fa-compress-arrows-alt"></i></li>
                        </ul>
                    </div>
                </div>

                {/* Sağ taraf - Bilgi ve thumbnail'ler */}
                <div className="gallery-info-section">
                    <h3 className="room-detail-title">{roomTitle}</h3>

                    <div className="room-description-text">
                        <p>{description}</p>
                    </div>

                    {/* Oda Galerisi */}
                    <div className="thumbnail-section">
                        <div className="thumbnail-header">
                            <h4>ODA GALERİSİ</h4>
                            <div className="thumbnail-nav">
                                <button onClick={prevImage} disabled={currentImageIndex === 0}>
                                    <i className="fal fa-chevron-left"></i>
                                </button>
                                <button onClick={nextImage} disabled={currentImageIndex === images.length - 1}>
                                    <i className="fal fa-chevron-right"></i>
                                </button>
                            </div>
                        </div>

                        <div className="thumbnail-grid">
                            {images.map((image, index) => (
                                <div
                                    key={index}
                                    className={`thumbnail-item ${index === currentImageIndex ? 'active' : ''}`}
                                    onClick={() => setCurrentImageIndex(index)}
                                >
                                    <Image
                                        src={image}
                                        alt={`${roomTitle} ${index + 1}`}
                                        width={180}
                                        height={120}
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Rezervasyon butonu */}
                    <div className="reservation-button-wrapper">
                        <a href={reservationUrl} className="reservation-btn">
                            Rezervasyon
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}