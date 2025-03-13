'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ImageLightbox from '../components/ImageLightbox';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function About() {
  const sectionRef = useIntersectionObserver();
  const [showLightbox, setShowLightbox] = useState(false);
  const historicalImage = {
    src: '/pictures/356C-Carrera-2-4.jpg',
    alt: 'Historical photo of the Porsche 356C'
  };

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gray-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-100 rounded-full translate-x-1/2 translate-y-1/2 opacity-50" />
      <div className="absolute top-1/4 right-10 w-20 h-20 border-2 border-gray-200 rounded-full opacity-30" />
      <div className="absolute bottom-1/4 left-10 w-16 h-16 border border-gray-200 rotate-45 opacity-30" />
      
      {/* Porsche Logo Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
        <div className="text-black text-[20rem] font-bold tracking-tighter">P</div>
      </div>

      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 section-fade-in">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 font-playfair relative">
            About the 1965 356C
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
          </h2>
          <p className="text-gray-600 text-center max-w-2xl text-lg">
            The culmination of the legendary 356 series
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {/* Content boxes with enhanced styling */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm">01</span>
                </div>
                <h3 className="text-xl font-playfair font-bold">Historical Significance</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                The 356C, introduced in 1964, represented the final and most refined evolution of Porsche's first production car. 
                Featuring disc brakes all around and the most powerful pushrod engine, it marked the pinnacle of 356 development.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm">02</span>
                </div>
                <h3 className="text-xl font-playfair font-bold">Innovative Features</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                This particular model features a rare electric sunroof, a luxurious addition for its time. 
                The 356C also introduced advanced features like ATE disc brakes and a more powerful 75 HP engine in its standard form.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm">03</span>
                </div>
                <h3 className="text-xl font-playfair font-bold">Design Legacy</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                The 356C's timeless design influenced sports car aesthetics for decades. Its elegant lines, 
                superior aerodynamics, and perfect proportions make it one of the most sought-after classic Porsches.
              </p>
            </div>
          </div>

          <div 
            className="relative aspect-square rounded-lg overflow-hidden shadow-2xl cursor-pointer hover-scale group"
            onClick={() => setShowLightbox(true)}
          >
            <div className="absolute inset-0 border-2 border-gray-200 rounded-lg transform -rotate-3 transition-transform group-hover:rotate-0" />
            <div className="absolute inset-0 border-2 border-gray-300 rounded-lg transform rotate-3 transition-transform group-hover:rotate-0" />
            <Image
              src={historicalImage.src}
              alt={historicalImage.alt}
              fill
              className="object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </div>

      {showLightbox && (
        <ImageLightbox
          src={historicalImage.src}
          alt={historicalImage.alt}
          onClose={() => setShowLightbox(false)}
        />
      )}
    </section>
  );
} 