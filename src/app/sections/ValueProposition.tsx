'use client';

import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const valuePoints = [
  {
    title: "Investment Potential",
    description: "Classic Porsche models have shown consistent appreciation over the past decade, with the 356C being particularly sought after by collectors.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    title: "Provenance & Documentation",
    description: "Complete with Certificate of Authenticity from Porsche, service records, and detailed ownership history dating back to original purchase.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    title: "Mechanical Excellence",
    description: "Recently serviced by Porsche specialists with meticulous attention to detail, ensuring reliable performance while maintaining originality.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    title: "Exclusive Ownership Experience",
    description: "Membership in the exclusive Porsche 356 Registry, invitations to prestigious classic car events, and access to specialized service network.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    )
  }
];

export default function ValueProposition() {
  const sectionRef = useIntersectionObserver();

  return (
    <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('/grid.png')] opacity-10" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2" />
      
      <div ref={sectionRef} className="container mx-auto px-4 relative z-10 section-fade-in">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4 relative inline-block">
            Beyond Transportation
            <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
          </h2>
          <p className="text-gray-300 text-lg mt-4 max-w-2xl mx-auto">
            Owning a Porsche 356C is more than acquiring a vehicle—it's entering a legacy of excellence and distinction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {valuePoints.map((point, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg border border-gray-700 hover:border-gray-500 transition-all duration-300 group"
            >
              <div className="flex items-start">
                <div className="mr-5 p-3 bg-gray-700 rounded-lg text-white group-hover:bg-white group-hover:text-gray-900 transition-colors duration-300">
                  {point.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 font-playfair">{point.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{point.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 