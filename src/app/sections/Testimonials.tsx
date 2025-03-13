'use client';

import React from 'react';
import Image from 'next/image';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const testimonials = [
  {
    quote: "The 356C represents the pinnacle of classic Porsche design. Its timeless elegance and driving experience are unmatched in today's market.",
    author: "James Peterson",
    title: "Classic Car Collector",
    avatar: "/avatars/avatar1.jpg"
  },
  {
    quote: "I've owned several vintage Porsches, but the 356C has a special place in my heart. The balance of performance and refinement is extraordinary.",
    author: "Elizabeth Chambers",
    title: "Porsche Club of America Member",
    avatar: "/avatars/avatar2.jpg"
  },
  {
    quote: "As an investment, these models have consistently appreciated over time. The 356C is not just a car, it's a piece of automotive history.",
    author: "Robert Miller",
    title: "Automotive Historian",
    avatar: "/avatars/avatar3.jpg"
  }
];

export default function Testimonials() {
  const sectionRef = useIntersectionObserver();

  return (
    <section className="py-24 bg-gradient-to-br from-gray-100 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gray-200/50 rounded-full translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-200/50 rounded-full -translate-x-1/3 translate-y-1/3" />
      
      {/* Subtle Porsche logo watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none">
        <div className="text-black text-[30rem] font-bold tracking-tighter">P</div>
      </div>

      <div ref={sectionRef} className="container mx-auto px-4 relative z-10 section-fade-in">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4 relative inline-block">
            What Enthusiasts Say
            <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
          </h2>
          <p className="text-gray-600 text-lg mt-4">
            Insights from collectors and Porsche aficionados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              <p className="text-gray-700 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 mr-4 relative">
                  {/* Fallback avatar if image is not available */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-xl font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 