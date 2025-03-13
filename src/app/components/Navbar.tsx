'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className={`flex items-center ${isScrolled ? 'text-black' : 'text-white'}`}>
            <span className="font-playfair text-2xl font-bold tracking-wider">PORSCHE</span>
            <span className="ml-2 text-sm font-inter tracking-widest">356C 1965</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link href="#gallery" className={`nav-link ${isScrolled ? 'text-black' : 'text-white'}`}>Gallery</Link>
            <Link href="#specifications" className={`nav-link ${isScrolled ? 'text-black' : 'text-white'}`}>Specifications</Link>
            <Link href="#about" className={`nav-link ${isScrolled ? 'text-black' : 'text-white'}`}>About</Link>
            <Link href="#contact" className={`nav-link ${isScrolled ? 'text-black' : 'text-white'}`}>Contact</Link>
          </div>

          <button
            className={`md:hidden p-2 ${isScrolled ? 'text-black' : 'text-white'}`}
            aria-label="Menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-64' : 'max-h-0'} overflow-hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link href="#gallery" className="nav-link block px-3 py-2">Gallery</Link>
            <Link href="#specifications" className="nav-link block px-3 py-2">Specifications</Link>
            <Link href="#about" className="nav-link block px-3 py-2">About</Link>
            <Link href="#contact" className="nav-link block px-3 py-2">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 