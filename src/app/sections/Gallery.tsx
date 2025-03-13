'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface MediaItem {
  src: string;
  alt: string;
  type: 'image' | 'video';
  poster?: string;
}

interface LightboxProps {
  media: MediaItem | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}

const Lightbox = ({ media, onClose, onNext, onPrev, hasNext, hasPrev }: LightboxProps) => {
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && hasNext) onNext();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev, hasNext, hasPrev]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && hasNext) onNext();
    if (isRightSwipe && hasPrev) onPrev();

    setTouchStart(0);
    setTouchEnd(0);
  };

  if (!media) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <button 
        className="absolute top-4 right-4 text-white text-4xl hover:opacity-70 transition-opacity z-50"
        onClick={onClose}
      >
        ×
      </button>

      {/* Navigation Buttons - Hidden on Mobile */}
      {hasPrev && (
        <button
          className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-50"
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}
      
      {hasNext && (
        <button
          className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-50"
          onClick={(e) => { e.stopPropagation(); onNext(); }}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      <div 
        className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {media.type === 'image' ? (
          <div className="relative w-full h-full">
            <Image
              src={media.src}
              alt={media.alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        ) : (
          <video
            src={media.src}
            controls
            className="max-w-full max-h-full"
          >
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
};

export default function Gallery() {
  const sectionRef = useIntersectionObserver();
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleSelectMedia = (media: MediaItem, index: number) => {
    setSelectedMedia(media);
    setCurrentIndex(index);
  };

  const handleNext = () => {
    if (currentIndex < galleryMedia.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedMedia(galleryMedia[currentIndex + 1]);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedMedia(galleryMedia[currentIndex - 1]);
    }
  };

  const handleCloseLightbox = () => {
    setSelectedMedia(null);
    setCurrentIndex(0);
  };

  const galleryMedia: MediaItem[] = [
    {
      src: "/Side.png",
      alt: "Side profile of 1965 Porsche 356C",
      type: "image"
    },
    {
      src: "/Front.png",
      alt: "Front view of 1965 Porsche 356C",
      type: "image"
    },
    {
      src: "/Back.png",
      alt: "Rear view of 1965 Porsche 356C",
      type: "image"
    },
    {
      src: "/Engine.png",
      alt: "Engine bay of 1965 Porsche 356C showing the replaced 1600cc engine",
      type: "image"
    },
    {
      src: "/Authenticity.png",
      alt: "Certificate of Authenticity from Porsche showing vehicle specifications (unmatching numbers)",
      type: "image"
    },
    {
      src: "/EngineSound.mp4",
      alt: "Sound of the 1965 Porsche 356C engine",
      type: "video"
    }
  ];

  return (
    <>
      <section id="gallery" className="py-24 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.png')] opacity-10" />
        </div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2" />

        <div ref={sectionRef} className="container mx-auto px-4 relative z-10 section-fade-in">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4 relative inline-block">
              Gallery
              <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
            </h2>
            <p className="text-gray-300 text-lg mt-4">
              Explore the timeless beauty of this meticulously preserved 1965 Porsche 356C
            </p>
          </div>

          {/* Featured image - larger display */}
          <div className="mb-12">
            <div 
              className="relative h-[60vh] overflow-hidden rounded-lg shadow-2xl cursor-pointer group"
              onClick={() => handleSelectMedia(galleryMedia[0], 0)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 group-hover:opacity-80 transition-opacity duration-300" />
              <Image
                src={galleryMedia[0].src}
                alt={galleryMedia[0].alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="100vw"
                priority
              />
              <div className="absolute bottom-8 left-8 z-20">
                <p className="text-white text-xl font-medium mb-2">{galleryMedia[0].alt}</p>
                <button className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-white text-sm hover:bg-white/20 transition-colors duration-300 flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View Full Size
                </button>
              </div>
            </div>
          </div>

          {/* Gallery grid - smaller thumbnails */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {galleryMedia.slice(1).map((media, index) => (
              <div 
                key={index} 
                className="relative h-64 overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                onClick={() => handleSelectMedia(media, index + 1)}
              >
                {media.type === 'image' ? (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    <Image
                      src={media.src}
                      alt={media.alt}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </>
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    <video
                      className="absolute inset-0 w-full h-full object-cover"
                      poster={media.poster}
                    >
                      <source src={media.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                        </svg>
                      </div>
                    </div>
                  </>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-sm font-medium">{media.alt}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="mt-12 text-center">
            <p className="text-gray-300 mb-6">
              Request a private viewing to experience this classic Porsche in person
            </p>
            <button 
              className="premium-button pulse-glow"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span></span>
              Schedule Viewing
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox 
        media={selectedMedia}
        onClose={handleCloseLightbox}
        onNext={handleNext}
        onPrev={handlePrev}
        hasNext={currentIndex < galleryMedia.length - 1}
        hasPrev={currentIndex > 0}
      />
    </>
  );
} 