"use client"

import Button from "./button";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { text: "Home", href: "#home" },
    { text: "About the Founder", href: "#about" },
    { text: "Services", href: "#services" },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 flex w-full justify-between items-center px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6 bg-black/30 backdrop-blur-md z-50 text-white gap-2 sm:gap-4 lg:gap-6">
      <div className="w-24 h-auto sm:w-32 md:w-40 lg:w-48 shrink-0">
        <Image src="/logo.svg" alt="Logo" width={200} height={60} className="w-full h-auto" />
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex flex-1 justify-center items-center gap-3 lg:gap-6 text-xs sm:text-sm lg:text-lg text-gray-300">
        {navItems.map((item) => (
          <a 
            key={item.text} 
            href={item.href} 
            className="hover:text-white transition-colors duration-200 whitespace-nowrap"
          >
            {item.text}
          </a>
        ))}
      </div>
      
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden p-2 text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          {isMenuOpen ? (
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12" 
            />
          ) : (
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          )}
        </svg>
      </button>
      
      {/* Desktop Contact Button */}
      <div className="ml-auto hidden md:block">
        <Button label="Contact Us" />
      </div>
      
      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col items-center py-4 gap-4">
            {navItems.map((item) => (
              <a 
                key={item.text} 
                href={item.href} 
                className="text-gray-300 hover:text-white transition-colors duration-200 py-2 text-base"
                onClick={handleNavClick}
              >
                {item.text}
              </a>
            ))}
            <div className="pt-2">
              <Button label="Contact Us" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
