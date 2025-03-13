'use client';

import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const specifications = [
  {
    category: 'Engine & Performance',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    specs: [
      { label: 'Engine Type', value: 'Air-cooled Flat 4' },
      { label: 'Displacement', value: '1,582 cc' },
      { label: 'Power Output', value: '75 hp @ 5,200 rpm' },
      { label: 'Torque', value: '89 lb-ft @ 3,800 rpm' },
      { label: '0-60 mph', value: '13.5 seconds' },
      { label: 'Top Speed', value: '109 mph' }
    ]
  },
  {
    category: 'Dimensions & Weight',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
      </svg>
    ),
    specs: [
      { label: 'Length', value: '4,010 mm (157.9 in)' },
      { label: 'Width', value: '1,670 mm (65.7 in)' },
      { label: 'Height', value: '1,320 mm (52.0 in)' },
      { label: 'Wheelbase', value: '2,100 mm (82.7 in)' },
      { label: 'Curb Weight', value: '1,980 lbs (898 kg)' },
      { label: 'Power-to-Weight', value: '16.5 lbs/hp' }
    ]
  },
  {
    category: 'Drivetrain & Chassis',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    specs: [
      { label: 'Transmission', value: '4-speed manual' },
      { label: 'Drive Type', value: 'Rear-wheel drive' },
      { label: 'Front Suspension', value: 'Independent, torsion bars' },
      { label: 'Rear Suspension', value: 'Independent, torsion bars' },
      { label: 'Brakes', value: 'ATE disc brakes all-round' },
      { label: 'Steering', value: 'Worm and roller' }
    ]
  },
  {
    category: 'Features & Equipment',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    specs: [
      { label: 'Sunroof', value: 'Electric (Rare Option)' },
      { label: 'Interior', value: 'Original leather' },
      { label: 'Wheels', value: '15-inch chrome' },
      { label: 'Radio', value: 'Period-correct Blaupunkt' },
      { label: 'Exterior Color', value: 'Ivory White (Original)' },
      { label: 'Production Number', value: 'One of 14,151 units' }
    ]
  }
];

export default function Specifications() {
  const sectionRef = useIntersectionObserver();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="specifications" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gray-100 rounded-full translate-x-1/2 -translate-y-1/2 opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-100 rounded-full -translate-x-1/2 translate-y-1/2 opacity-50" />
      
      {/* Subtle Porsche logo watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none">
        <div className="text-black text-[25rem] font-bold tracking-tighter">P</div>
      </div>

      <div ref={sectionRef} className="container mx-auto px-4 relative z-10 section-fade-in">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4 relative inline-block">
            Technical Specifications
            <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
          </h2>
          <p className="text-gray-600 text-lg mt-4">
            Precision engineering and meticulous attention to detail
          </p>
        </div>

        {/* Tabs for mobile */}
        <div className="md:hidden mb-8 overflow-x-auto whitespace-nowrap pb-2">
          <div className="inline-flex space-x-2">
            {specifications.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === index 
                    ? 'bg-gray-900 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveTab(index)}
              >
                {category.category}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop view - all specs */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specifications.map((category, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center mr-3 text-white">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold font-playfair">{category.category}</h3>
              </div>
              <div className="space-y-4">
                {category.specs.map((spec, specIndex) => (
                  <div key={specIndex} className="flex justify-between items-center border-b border-gray-100 pb-2">
                    <span className="text-gray-600 text-sm">{spec.label}</span>
                    <span className="font-medium text-gray-900">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile view - active tab only */}
        <div className="md:hidden">
          <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center mr-3 text-white">
                {specifications[activeTab].icon}
              </div>
              <h3 className="text-xl font-bold font-playfair">{specifications[activeTab].category}</h3>
            </div>
            <div className="space-y-4">
              {specifications[activeTab].specs.map((spec, specIndex) => (
                <div key={specIndex} className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="text-gray-600 text-sm">{spec.label}</span>
                  <span className="font-medium text-gray-900">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certificate of Authenticity note */}
        <div className="mt-12 max-w-2xl mx-auto text-center">
          <p className="text-gray-600 italic">
            All specifications verified by Porsche's Certificate of Authenticity. 
            This vehicle has been meticulously maintained to preserve its original specifications.
          </p>
        </div>
      </div>
    </section>
  );
} 