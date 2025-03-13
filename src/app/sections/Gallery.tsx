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
      <section id="gallery" className="py-20 bg-gray-50">
        <div ref={sectionRef} className="container mx-auto px-4 section-fade-in">
          <h2 className="text-4xl font-bold text-center mb-4">Gallery</h2>
          <p className="text-gray-600 text-center mb-12">Explore the timeless beauty of the 1965 Porsche 356C</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {galleryMedia.map((media, index) => (
              <div 
                key={index} 
                className="relative h-80 overflow-hidden rounded-lg shadow-lg hover-scale cursor-pointer"
                onClick={() => handleSelectMedia(media, index)}
              >
                {media.type === 'image' ? (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                    <Image
                      src={media.src}
                      alt={media.alt}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </>
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                    <video
                      className="absolute inset-0 w-full h-full object-cover"
                      poster={media.poster}
                    >
                      <source src={media.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-16 h-16 text-white opacity-80" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                      </svg>
                    </div>
                  </>
                )}
                <p className="absolute bottom-4 left-4 text-white z-20 font-medium">{media.alt}</p>
              </div>
            ))}
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