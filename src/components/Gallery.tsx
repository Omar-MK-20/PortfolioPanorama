import { useState } from 'react';
import type { GalleryProps, LightboxProps, ImageData } from '../types';

const Lightbox: React.FC<LightboxProps> = ({
    image,
    isOpen,
    onClose,
    onNext,
    onPrevious,
    hasNext,
    hasPrevious,
}) => {
    if (!isOpen || !image) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={onClose}
        >
            <div className="relative max-w-7xl max-h-full mx-4">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 text-white hover:text-terracotta transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Previous Button */}
                {hasPrevious && (
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onPrevious();
                        }}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 text-white hover:text-terracotta transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                )}

                {/* Next Button */}
                {hasNext && (
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onNext();
                        }}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 text-white hover:text-terracotta transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                )}

                {/* Image */}
                <div
                    className="relative"
                    onClick={(e) => e.stopPropagation()}
                >
                    <img
                        src={image.url}
                        alt={image.altText}
                        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                    />

                    {/* Image Info */}
                    <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                        <h3 className="text-xl font-semibold text-white mb-2">{image.title || image.roomType}</h3>
                        <p className="text-white/80 text-sm">{image.description}</p>
                        <div className="flex items-center mt-2 space-x-4 text-sm text-white/70">
                            <span className="bg-white/20 px-2 py-1 rounded">{image.roomType}</span>
                            <span className="bg-white/20 px-2 py-1 rounded">{image.category}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Gallery: React.FC<GalleryProps> = ({ images, onImageClick }) => {
    const [lightboxImage, setLightboxImage] = useState<ImageData | null>(null);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const openLightbox = (image: ImageData, index: number) => {
        setLightboxImage(image);
        setLightboxIndex(index);
    };

    const closeLightbox = () => {
        setLightboxImage(null);
    };

    const goToNext = () => {
        const nextIndex = (lightboxIndex + 1) % images.length;
        setLightboxIndex(nextIndex);
        setLightboxImage(images[nextIndex]);
    };

    const goToPrevious = () => {
        const prevIndex = lightboxIndex === 0 ? images.length - 1 : lightboxIndex - 1;
        setLightboxIndex(prevIndex);
        setLightboxImage(images[prevIndex]);
    };

    const handleImageClick = (image: ImageData, index: number) => {
        openLightbox(image, index);
        onImageClick(image);
    };

    return (
        <section id="gallery" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
                        Our Work
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Explore our curated collection of interior design projects that showcase modern elegance and functional beauty.
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {images.map((image, index) => (
                        <div
                            key={image.id}
                            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                            // onClick={() => handleImageClick(image, index)}
                        >
                            {/* Image */}
                            <div className="aspect-4/3 overflow-hidden">
                                <img
                                    src={image.url}
                                    alt={image.altText}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                    loading="lazy"
                                />
                            </div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                                <div className="p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-xl font-semibold mb-2">{image.title || image.roomType}</h3>
                                    <p className="text-white/80 text-sm mb-3">{image.description}</p>
                                    <div className="flex items-center space-x-2">
                                        <span className="bg-white/20 px-2 py-1 rounded text-xs">{image.roomType}</span>
                                        <span className="bg-white/20 px-2 py-1 rounded text-xs">{image.category}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Hover Icon */}
                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" onClick={() => handleImageClick(image, index)}>
                                <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Lightbox */}
                <Lightbox
                    image={lightboxImage}
                    isOpen={!!lightboxImage}
                    onClose={closeLightbox}
                    onNext={goToNext}
                    onPrevious={goToPrevious}
                    hasNext={lightboxIndex < images.length - 1}
                    hasPrevious={lightboxIndex > 0}
                />
            </div>
        </section>
    );
};

export default Gallery;
