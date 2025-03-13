'use client';

import React, { useEffect, useState } from 'react';

export default function Hero() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800/20 via-gray-900/40 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          {/* SVG Text with animation */}
          <svg 
            className="w-full max-w-[140%] h-auto transform scale-150"
            viewBox="0 0 800 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-[120px] font-bold font-playfair fill-white/30"
              style={{
                strokeWidth: "1",
                stroke: "white",
                strokeDasharray: animate ? "0 1500" : "1500 1500",
                strokeDashoffset: animate ? "1500" : "0",
                transition: "stroke-dasharray 3s ease-out, stroke-dashoffset 3s ease-out",
              }}
            >
              PORSCHE
            </text>
          </svg>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4 sm:px-6 lg:px-8 fade-in">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 tracking-wider">
            1965 Porsche 356C
          </h1>
          <p className="font-inter text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            A timeless masterpiece of German engineering, 
            embodying the perfect blend of elegance and performance.
          </p>
          <button 
            className="vintage-button bg-transparent border-white text-white 
                     hover:bg-white hover:text-black"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Inquire Now
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-white"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
} 