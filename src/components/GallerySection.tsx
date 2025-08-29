import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Plus } from 'lucide-react';

const GallerySection: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [showAllImages, setShowAllImages] = useState(false);

  const allImages = [
    {
      src: '/Gallery/WhatsApp Image 2025-08-26 at 11.55.52.jpeg',
      alt: 'Sarah and Michael at the beach'
    },
    {
      src: '/Gallery/WhatsApp Image 2025-08-26 at 11.55.53 (2).jpeg',
      alt: 'Romantic dinner date'
    },
    {
      src: '/Gallery/WhatsApp Image 2025-08-26 at 11.55.53 (3).jpeg',
      alt: 'Hiking adventure together'
    },
    {
      src: '/Gallery/WhatsApp Image 2025-08-26 at 11.55.53.jpeg',
      alt: 'Cozy winter evening'
    },
    {
      src: '/Gallery/WhatsApp Image 2025-08-26 at 11.55.54 (2).jpeg',
      alt: 'The proposal moment'
    },
    {
      src: '/Gallery/WhatsApp Image 2025-08-26 at 11.55.56 (1).jpeg',
      alt: 'Celebrating our engagement'
    },
    {
      src: '/Gallery/WhatsApp Image 2025-08-26 at 11.55.56 (2).jpeg',
      alt: 'Weekend getaway'
    },
    {
      src: '/Gallery/WhatsApp Image 2025-08-26 at 11.55.56 (3).jpeg',
      alt: 'Family gathering'
    },
    {
      src: '/Gallery/WhatsApp Image 2025-08-26 at 11.55.57 (1).jpeg',
      alt: 'Date night in the city'
    },
    {
      src: '/Gallery/WhatsApp Image 2025-08-26 at 11.55.57 (2).jpeg',
      alt: 'Morning coffee together'
    },
    {
      src: '/Gallery/WhatsApp Image 2025-08-26 at 11.55.57.jpeg',
      alt: 'Dancing in the kitchen'
    },
    {
      src: '/Gallery/WhatsApp Image 2025-08-26 at 13.03.40 (1).jpeg',
      alt: 'Sunset walk on the beach'
    },
    {
      src: '/Gallery/WhatsApp Image 2025-08-26 at 13.03.40.jpeg',
      alt: 'Picnic in the park'
    },
    {
      src: '/Gallery/WhatsApp Image 2025-08-26 at 13.03.42.jpeg',
      alt: 'Holiday celebration'
    },
    {
      src: '/Gallery/WhatsApp Image 2025-08-26 at 13.03.43 (1).jpeg',
      alt: 'Adventure trip'
    },
    {
      src: '/Gallery/WhatsApp Image 2025-08-26 at 13.03.43.jpeg',
      alt: 'Weekend getaway'
    },
    {
      src: '/Gallery/WhatsApp Image 2025-08-26 at 13.03.44.jpeg',
      alt: 'Family gathering'
    },
    {
      src: '/Gallery/WhatsApp Image 2025-08-26 at 13.03.45.jpeg',
      alt: 'Date night in the city'
    },
    {
      src: '/Gallery/WhatsApp Image 2025-08-26 at 13.03.46 (1).jpeg',
      alt: 'Date night in the city'
    },
    {
      src: '/Gallery/WhatsApp Image 2025-08-26 at 13.03.46.jpeg',
      alt: 'Date night in the city'
    },
    {
      src: '/Gallery/WhatsApp Image 2025-08-26 at 13.03.47.jpeg',
      alt: 'Date night in the city'
    },
    {
      src: 'https://res.cloudinary.com/dcqawu6rn/image/upload/v1756443767/_MG_0524_ydj4my.jpg',
      alt: 'Date night in the city'
    },
    {
      src: 'https://res.cloudinary.com/dcqawu6rn/image/upload/v1756443768/_MG_0525_lij6as.jpg',
      alt: 'Date night in the city'
    },
    {
      src: 'https://res.cloudinary.com/dcqawu6rn/image/upload/v1756443768/IMG_0413_bvxwxb.jpg',
      alt: 'Date night in the city'
    },
    {
      src: 'https://res.cloudinary.com/dcqawu6rn/image/upload/v1756443769/_MG_0522_szlmn5.jpg',
      alt: 'Date night in the city'
    },
    {
      src: 'https://res.cloudinary.com/dcqawu6rn/image/upload/v1756443770/IMG_0418_ot6naa.jpg',
      alt: 'Date night in the city'
    },
    {
      src: 'https://res.cloudinary.com/dcqawu6rn/image/upload/v1756443784/_MG_0519_inazzl.jpg',
      alt: 'Date night in the city'
    },
    {
      src: 'https://res.cloudinary.com/dcqawu6rn/image/upload/v1756443788/IMG_0393_refows.jpg',
      alt: 'Date night in the city'
    },
    {
      src: 'https://res.cloudinary.com/dcqawu6rn/image/upload/v1756443790/_MG_0521_pzulp4.jpg',
      alt: 'Date night in the city'
    },
    {
      src: 'https://res.cloudinary.com/dcqawu6rn/image/upload/v1756443795/_MG_0497_chcqyp.jpg',
      alt: 'Date night in the city'
    },
    {
      src: 'https://res.cloudinary.com/dcqawu6rn/image/upload/v1756443796/_MG_0523_fo5lui.jpg',
      alt: 'Date night in the city'
    },
    {
      src: 'https://res.cloudinary.com/dcqawu6rn/image/upload/v1756443805/IMG_0391_xlmct4.jpg',
      alt: 'Date night in the city'
    },
    {
      src: 'https://res.cloudinary.com/dcqawu6rn/image/upload/v1756443808/_MG_0504_rvnnn6.jpg',
      alt: 'Date night in the city'
    },
    {
      src: 'https://res.cloudinary.com/dcqawu6rn/image/upload/v1756443808/_MG_0504_rvnnn6.jpg',
      alt: 'Date night in the city'
    },
    {
      src: 'https://res.cloudinary.com/dcqawu6rn/image/upload/v1756443808/_MG_0485_zaxfy7.jpg',
      alt: 'Date night in the city'
    },
    {
      src: 'https://res.cloudinary.com/dcqawu6rn/image/upload/v1756443810/IMG_0389_vfa55s.jpg',
      alt: 'Date night in the city'
    },
    {
      src: 'https://res.cloudinary.com/dcqawu6rn/image/upload/v1756443811/_MG_0494_kfzcqz.jpg',
      alt: 'Date night in the city'
    },
    {
      src: 'https://res.cloudinary.com/dcqawu6rn/image/upload/v1756443824/_MG_0475_tmw5kq.jpg',
      alt: 'Date night in the city'
    },
    {
      src: 'https://res.cloudinary.com/dcqawu6rn/image/upload/v1756443825/IMG_0373_lgknfb.jpg',
      alt: 'Date night in the city'
    },
    {
      src: 'https://res.cloudinary.com/dcqawu6rn/image/upload/v1756443825/IMG_0388_muv71w.jpg',
      alt: 'Date night in the city'
    },
    {
      src: 'https://res.cloudinary.com/dcqawu6rn/image/upload/v1756443827/_MG_0476_c8ewfd.jpg',
      alt: 'Date night in the city'
    },
    {
      src: 'https://res.cloudinary.com/dcqawu6rn/image/upload/v1756443829/IMG_0372_uxdcwx.jpg',
      alt: 'Date night in the city'
    },
    {
      src: 'https://res.cloudinary.com/dcqawu6rn/image/upload/v1756443837/IMG_0371_th00pu.jpg',
      alt: 'Date night in the city'
    },
    {
      src: 'https://res.cloudinary.com/dcqawu6rn/image/upload/v1756443838/IMG_0424_fkqmjd.jpg',
      alt: 'Date night in the city'
    },
    {
      src: 'https://res.cloudinary.com/dcqawu6rn/image/upload/v1756443845/IMG_0369_nvhtd5.jpg',
      alt: 'Date night in the city'
    },
    {
      src: 'https://res.cloudinary.com/dcqawu6rn/image/upload/v1756443877/_MG_0469_ycu8li.jpg',
      alt: 'Date night in the city'
    },
    {
      src: 'https://res.cloudinary.com/dcqawu6rn/image/upload/v1756443881/_MG_0452_psuxr5.jpg',
      alt: 'Date night in the city'
    },
    {
      src: 'https://res.cloudinary.com/dcqawu6rn/image/upload/v1756443877/_MG_0467_akehy0.jpg',
      alt: 'Date night in the city'
    },
    {
      src: 'https://res.cloudinary.com/dcqawu6rn/image/upload/v1756443881/_MG_0466_bmuru3.jpg',
      alt: 'Date night in the city'
    },
    {
      src: 'https://res.cloudinary.com/dcqawu6rn/image/upload/v1756443886/_MG_0450_kwik60.jpg',
      alt: 'Date night in the city'
    },
    {
      src: 'https://res.cloudinary.com/dcqawu6rn/image/upload/v1756443888/_MG_0464_bqydv6.jpg',
      alt: 'Date night in the city'
    },
    {
      src: 'https://res.cloudinary.com/dcqawu6rn/image/upload/v1756443897/_MG_0445_tiqtvv.jpg',
      alt: 'Date night in the city'
    },
    {
      src: 'https://res.cloudinary.com/dcqawu6rn/image/upload/v1756443898/_MG_0449_matisv.jpg',
      alt: 'Date night in the city'
    },
    {
      src: 'https://res.cloudinary.com/dcqawu6rn/image/upload/v1756443899/_MG_0443_mzqmhv.jpg',
      alt: 'Date night in the city'
    },
    {
      src: 'https://res.cloudinary.com/dcqawu6rn/image/upload/v1756443900/_MG_0447_qsmkcs.jpg',
      alt: 'Date night in the city'
    },
    {
      src: 'https://res.cloudinary.com/dcqawu6rn/image/upload/v1756443901/_MG_0441_wsko09.jpg',
      alt: 'Date night in the city'
    },
    {
      src: 'https://res.cloudinary.com/dcqawu6rn/image/upload/v1756443903/_MG_0442_aivdck.jpg',
      alt: 'Date night in the city'
    },
    {
      src: 'https://res.cloudinary.com/dcqawu6rn/image/upload/v1756443909/_MG_0439_c8adi3.jpg',
      alt: 'Date night in the city'
    },
    {
      src: 'https://res.cloudinary.com/dcqawu6rn/image/upload/v1756443846/IMG_0366_px5zo9.jpg',
      alt: 'Date night in the city'
    },
    {
      src: 'https://res.cloudinary.com/dcqawu6rn/image/upload/v1756443847/IMG_0364_cnysv8.jpg',
      alt: 'Date night in the city'
    },
    {
      src: 'https://res.cloudinary.com/dcqawu6rn/image/upload/v1756443849/IMG_0362_snpw0z.jpg',
      alt: 'Date night in the city'
    },
    {
      src: 'https://res.cloudinary.com/dcqawu6rn/image/upload/v1756443850/IMG_0360_p1tt2m.jpg',
      alt: 'Date night in the city'
    },
    {
      src: 'https://res.cloudinary.com/dcqawu6rn/image/upload/v1756443858/IMG_0359_t1kybb.jpg',
      alt: 'Date night in the city'
    },
    {
      src: 'https://res.cloudinary.com/dcqawu6rn/image/upload/v1756443859/IMG_0357_y76etc.jpg',
      alt: 'Date night in the city'
    },
    {
      src: 'https://res.cloudinary.com/dcqawu6rn/image/upload/v1756443865/IMG_0356_udqndf.jpg',
      alt: 'Date night in the city'
    },
    {
      src: 'https://res.cloudinary.com/dcqawu6rn/image/upload/v1756443916/IMG_0484_n21zqs.jpg',
      alt: 'Date night in the city'
    },
    {
      src: 'https://res.cloudinary.com/dcqawu6rn/image/upload/v1756443917/_MG_0438_zdzzj8.jpg',
      alt: 'Date night in the city'
    },
    {
      src: 'https://res.cloudinary.com/dcqawu6rn/image/upload/v1756443918/_MG_0436_jwwrst.jpg',
      alt: 'Date night in the city'
    },
    {
      src: 'https://res.cloudinary.com/dcqawu6rn/image/upload/v1756443926/IMG_0477_ehbzyj.jpg',
      alt: 'Date night in the city'
    },
    {
      src: 'https://res.cloudinary.com/dcqawu6rn/image/upload/v1756443929/IMG_0481_quxb9i.jpg',
      alt: 'Date night in the city'
    },
    {
      src: 'https://res.cloudinary.com/dcqawu6rn/image/upload/v1756443932/IMG_0479_qvggmu.jpg',
      alt: 'Date night in the city'
    },
    {
      src: 'https://res.cloudinary.com/dcqawu6rn/image/upload/v1756443937/IMG_0475_gsoita.jpg',
      alt: 'Date night in the city'
    },
    {
      src: 'https://res.cloudinary.com/dcqawu6rn/image/upload/v1756443944/IMG_0473_nrthd5.jpg',
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