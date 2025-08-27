import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Plus } from 'lucide-react';

const GallerySection: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [showAllImages, setShowAllImages] = useState(false);

  const allImages = [
    {
      src: 'src/images/Gallery/WhatsApp Image 2025-08-26 at 11.55.58.jpeg',
      alt: 'Sarah and Michael at the beach'
    },
    {
      src: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Romantic dinner date'
    },
    {
      src: 'https://images.pexels.com/photos/1024859/pexels-photo-1024859.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Hiking adventure together'
    },
    {
      src: 'https://images.pexels.com/photos/1024867/pexels-photo-1024867.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Cozy winter evening'
    },
    {
      src: 'https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'The proposal moment'
    },
    {
      src: 'https://images.pexels.com/photos/1024866/pexels-photo-1024866.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Celebrating our engagement'
    },
    {
      src: 'https://images.pexels.com/photos/1024857/pexels-photo-1024857.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Weekend getaway'
    },
    {
      src: 'https://images.pexels.com/photos/1024876/pexels-photo-1024876.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Family gathering'
    },
    {
      src: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Date night in the city'
    },
    {
      src: 'https://images.pexels.com/photos/1024858/pexels-photo-1024858.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Morning coffee together'
    },
    {
      src: 'https://images.pexels.com/photos/1024860/pexels-photo-1024860.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Dancing in the kitchen'
    },
    {
      src: 'https://images.pexels.com/photos/1024861/pexels-photo-1024861.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Sunset walk on the beach'
    },
    {
      src: 'https://images.pexels.com/photos/1024862/pexels-photo-1024862.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Picnic in the park'
    },
    {
      src: 'https://images.pexels.com/photos/1024863/pexels-photo-1024863.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Holiday celebration'
    },
    {
      src: 'https://images.pexels.com/photos/1024864/pexels-photo-1024864.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Adventure trip'
    },
    {
      src: 'https://images.pexels.com/photos/1024857/pexels-photo-1024857.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Weekend getaway'
    },
    {
      src: 'https://images.pexels.com/photos/1024876/pexels-photo-1024876.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Family gathering'
    },
    {
      src: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Date night in the city'
    },
  ];

  // Show first 6 images initially, all images when expanded
  const displayedImages = showAllImages ? allImages : allImages.slice(0, 6);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + allImages.length) % allImages.length);
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
          {displayedImages.map((image, index) => (
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

        {/* View More Button */}
        {!showAllImages && allImages.length > 6 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAllImages(true)}
              className="bg-dark-olive hover:bg-muted-sage text-white font-montserrat font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2 mx-auto"
            >
              <Plus className="h-5 w-5" />
              <span>View More Photos ({allImages.length - 6} more)</span>
            </button>
          </div>
        )}

        {/* Show Less Button */}
        {showAllImages && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAllImages(false)}
              className="bg-muted-sage hover:bg-dark-olive text-white font-montserrat font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg mx-auto"
            >
              Show Less Photos
            </button>
          </div>
        )}

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
              src={allImages[currentImage].src}
              alt={allImages[currentImage].alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />

            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
              <p className="text-white font-montserrat text-sm">
                {currentImage + 1} of {allImages.length}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;