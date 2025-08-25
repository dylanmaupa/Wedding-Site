import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const GallerySection: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {
      src: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Engagement photo 1'
    },
    {
      src: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Engagement photo 2'
    },
    {
      src: 'https://images.pexels.com/photos/1024859/pexels-photo-1024859.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Engagement photo 3'
    },
    {
      src: 'https://images.pexels.com/photos/1024867/pexels-photo-1024867.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Engagement photo 4'
    },
    {
      src: 'https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Engagement photo 5'
    },
    {
      src: 'https://images.pexels.com/photos/1024866/pexels-photo-1024866.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Engagement photo 6'
    },
  ];

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-dark-olive mb-4">
            Our Gallery
          </h2>
          <p className="font-montserrat text-muted-sage text-lg">
            Moments we've captured together
          </p>
          <div className="w-24 h-1 bg-soft-rose mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 md:h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-olive/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-montserrat font-medium">Click to view</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white hover:text-soft-rose transition-colors"
            >
              <X className="h-8 w-8" />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-6 text-white hover:text-soft-rose transition-colors"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-6 text-white hover:text-soft-rose transition-colors"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            <img
              src={images[currentImage].src}
              alt={images[currentImage].alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />

            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
              <p className="text-white font-montserrat text-sm">
                {currentImage + 1} of {images.length}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;