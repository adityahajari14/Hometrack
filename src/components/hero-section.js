"use client"

import { useState, useEffect } from 'react';
import Hero from './hero';

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Add scroll listener with passive flag for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate parallax effect for video background (moves slower upward)
  const videoTransform = `translateY(${scrollY * -0.3}px)`;
  const overlayOpacity = Math.min(0.64 + scrollY / 1000, 0.85);

  return (
    <section className="overflow-hidden relative min-h-[100vh] sm:min-h-[110vh] lg:min-h-[120vh]" id="home">
      <div className="w-screen min-h-[100vh] sm:min-h-[110vh] lg:min-h-[120vh] flex items-center relative overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full will-change-transform"
          style={{ transform: videoTransform }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-110"
          >
            <source src="/hero-video.mp4" type="video/mp4" /> 
          </video>
        </div>
        <div 
          className="absolute inset-0 bg-black transition-opacity duration-100"
          style={{ opacity: overlayOpacity }}
        ></div>
        <Hero scrollY={scrollY} />
      </div>
    </section>
  );
}
