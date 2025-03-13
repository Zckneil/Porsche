'use client';

import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const specifications = [
  {
    category: 'Engine',
    specs: [
      { label: 'Type', value: 'Air-cooled Flat 4' },
      { label: 'Displacement', value: '1,582 cc' },
      { label: 'Power', value: '75 hp @ 5,200 rpm' },
      { label: 'Torque', value: '89 lb-ft @ 3,800 rpm' }
    ]
  },
  {
    category: 'Performance',
    specs: [
      { label: '0-60 mph', value: '13.5 seconds' },
      { label: 'Top Speed', value: '109 mph' },
      { label: 'Weight', value: '1,980 lbs' },
      { label: 'Power-to-Weight', value: '16.5 lbs/hp' }
    ]
  },
  {
    category: 'Features',
    specs: [
      { label: 'Transmission', value: '4-speed manual' },
      { label: 'Drive', value: 'Rear-wheel drive' },
      { label: 'Sunroof', value: 'Electric' },
      { label: 'Brakes', value: 'Disc brakes all-round' }
    ]
  }
];

export default function Specifications() {
  const sectionRef = useIntersectionObserver();

  return (
    <section id="specifications" className="py-20 bg-white">
      <div ref={sectionRef} className="container mx-auto px-4 section-fade-in">
        <h2 className="text-4xl font-bold text-center mb-4">Specifications</h2>
        <p className="text-gray-600 text-center mb-12">Technical details of the 1965 Porsche 356C</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specifications.map((category, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-lg hover-scale"
            >
              <h3 className="text-2xl font-bold mb-6 text-center">{category.category}</h3>
              <div className="space-y-4">
                {category.specs.map((spec, specIndex) => (
                  <div key={specIndex} className="flex justify-between items-center">
                    <span className="text-gray-600">{spec.label}</span>
                    <span className="font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 