'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('./components/Navbar'), { ssr: true });
const Hero = dynamic(() => import('./sections/Hero'), { ssr: true });
const Gallery = dynamic(() => import('./sections/Gallery'), { ssr: true });
const Specifications = dynamic(() => import('./sections/Specifications'), { ssr: true });
const About = dynamic(() => import('./sections/About'), { ssr: true });
const Contact = dynamic(() => import('./sections/Contact'), { ssr: true });

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Gallery />
      <Specifications />
      <About />
      <Contact />
      {/* Additional sections will be added here */}
    </main>
  );
}
