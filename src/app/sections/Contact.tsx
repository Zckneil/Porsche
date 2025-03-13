'use client';

import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Contact() {
  const sectionRef = useIntersectionObserver();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setIsSubmitted(true);
      // Reset after showing success message
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', phone: '', message: '' });
      }, 3000);
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-900 to-black">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.png')] opacity-10" />
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div ref={sectionRef} className="container mx-auto px-4 relative z-10 section-fade-in">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white font-playfair mb-4 relative">
              Contact Us
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Interested in this classic Porsche 356C? We'd love to hear from you.
            </p>
            <div className="mt-6 flex items-center justify-center space-x-2 text-gray-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-lg">Gainesville, GA</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-white/10 border-2 border-white/20 rounded-lg px-4 py-3 text-white placeholder-transparent peer focus:outline-none focus:border-white/40 transition-colors duration-300"
                  placeholder="Your Name"
                />
                <label className={`absolute left-4 transition-all duration-300 ${focusedField === 'name' || formData.name ? '-top-6 text-sm text-gray-300' : 'top-3 text-gray-400'} peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gray-300`}>
                  Your Name
                </label>
              </div>

              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-white/10 border-2 border-white/20 rounded-lg px-4 py-3 text-white placeholder-transparent peer focus:outline-none focus:border-white/40 transition-colors duration-300"
                  placeholder="Email Address"
                />
                <label className={`absolute left-4 transition-all duration-300 ${focusedField === 'email' || formData.email ? '-top-6 text-sm text-gray-300' : 'top-3 text-gray-400'} peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gray-300`}>
                  Email Address
                </label>
              </div>
            </div>

            <div className="relative group">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                onFocus={() => setFocusedField('phone')}
                onBlur={() => setFocusedField(null)}
                className="w-full bg-white/10 border-2 border-white/20 rounded-lg px-4 py-3 text-white placeholder-transparent peer focus:outline-none focus:border-white/40 transition-colors duration-300"
                placeholder="Phone (Optional)"
              />
              <label className={`absolute left-4 transition-all duration-300 ${focusedField === 'phone' || formData.phone ? '-top-6 text-sm text-gray-300' : 'top-3 text-gray-400'} peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gray-300`}>
                Phone (Optional)
              </label>
            </div>

            <div className="relative group">
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                rows={4}
                className="w-full bg-white/10 border-2 border-white/20 rounded-lg px-4 py-3 text-white placeholder-transparent peer focus:outline-none focus:border-white/40 transition-colors duration-300"
                placeholder="Your Message"
              />
              <label className={`absolute left-4 transition-all duration-300 ${focusedField === 'message' || formData.message ? '-top-6 text-sm text-gray-300' : 'top-3 text-gray-400'} peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gray-300`}>
                Your Message
              </label>
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`px-8 py-3 rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105 
                  ${isSubmitted ? 'bg-green-500 text-white' : 'bg-white text-gray-900 hover:bg-gray-100'} 
                  disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl`}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : isSubmitted ? (
                  <span className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Sent!
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
} 