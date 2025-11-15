"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Button from "./button";
import ContactModal from "./contact-modal";

export default function Navbar({ showSecondaryNav = false, activeSecondaryItem = "" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHomePage, setIsHomePage] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  
  // Check if on home page
  useEffect(() => {
    // Defer setState to avoid synchronous call in effect
    setTimeout(() => {
      setIsHomePage(window.location.pathname === '/');
    }, 0);
  }, []);
  
  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Handle scrolling to section on page load if there's a hash in URL
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Small delay to ensure the page has rendered
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);
  
  const navItems = [
    { text: "Home", href: "/#home", active: true },
    { text: "Insights Hub", href: "/#insights", active: false },
    { text: "Services", href: "/#services", active: false },
    { text: "Meet the Founder", href: "/#founder", active: false },
    { text: "Our Values", href: "/#values", active: false }
  ];

    const secondaryNavItems = [
    { text: "Property Wealth Advisory", href: "/property-wealth-advisory" },
    { text: "Risk Profiling and Assessments", href: "/risk-profiling-and-assessments" },
    { text: "Mortgage and Lending Advisory", href: "/mortgage-and-lending-advisory" },
    { text: "Wealth Management Services", href: "/wealth-management-services" },
    { text: "Real Estate Asset Management", href: "/real-estate-asset-management" },
    { text: "YieldMax Reports", href: "/yieldmax-reports" },
  ];

  const handleNavClick = (e, href) => {
    // Close mobile menu
    setIsMenuOpen(false);
    
    // Handle smooth scrolling for hash links on home page
    if (href.startsWith('/#')) {
      const hash = href.substring(1); // Remove the leading '/'
      const isHomePage = window.location.pathname === '/';
      
      if (isHomePage) {
        // We're on home page, just scroll to the section
        e.preventDefault();
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
      // If not on home page, let the default navigation happen (redirect to home with hash)
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Main Navigation */}
      <nav className={`w-full transition-all duration-300 ${
        isHomePage && !isScrolled 
          ? 'bg-transparent' 
          : 'bg-[rgba(7,7,7,0.36)] backdrop-blur-md'
      }`}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 flex items-center justify-between gap-4 lg:gap-40">
          {/* Logo + Menu */}
          <div className="flex items-center gap-4 lg:gap-16">
            {/* Logo */}
            <Link href="/" className="w-[160px] sm:w-[170px] lg:w-[201px] h-auto relative shrink-0 flex justify-center items-center">
              <Image 
                src="/logo.svg" 
                alt="Home Track Logo" 
                width={201} 
                height={43} 
                className="w-full h-auto object-contain" 
              />
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navItems.map((item) => (
                <a 
                  key={item.text} 
                  href={item.href} 
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`font-dm-sans text-sm xl:text-base whitespace-nowrap transition-colors ${
                    item.active 
                      ? "font-bold text-white" 
                      : "font-light text-white hover:font-normal"
                  }`}
                >
                  {item.text}
                </a>
              ))}
            </div>
          </div>
          
          {/* Desktop Contact Button */}
          <div className="hidden lg:flex items-center ml-auto">
            <Button label="Contact Us" onClick={() => setIsContactModalOpen(true)} />
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-white ml-auto min-w-11 min-h-11 flex items-center justify-center"
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
        </div>
        
        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden w-full bg-black/95 backdrop-blur-md border-t border-gray-800">
            <div className="flex flex-col items-center py-4 gap-4">
              {navItems.map((item) => (
                <a 
                  key={item.text} 
                  href={item.href} 
                  className={`font-dm-sans text-base whitespace-nowrap transition-colors py-2 min-h-11 flex items-center ${
                    item.active 
                      ? "font-bold text-white" 
                      : "font-light text-gray-300 hover:text-white"
                  }`}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.text}
                </a>
              ))}
              <div className="pt-2">
                <Button label="Contact Us" onClick={() => setIsContactModalOpen(true)} />
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />

      {/* Secondary Navigation - Services */}
      {showSecondaryNav && secondaryNavItems.length > 0 && (
        <div className="w-full bg-[rgba(7,7,7,0.3)] backdrop-blur-sm overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
            {/* Mobile: Dropdown or Compact List */}
            <nav className="lg:hidden">
              <div className="relative">
                <select 
                  className="w-full bg-black/50 text-white border border-gray-700 rounded-md px-3 py-2.5 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-orange-600 appearance-none"
                  onChange={(e) => {
                    if (e.target.value) {
                      window.location.href = e.target.value;
                    }
                  }}
                  value={secondaryNavItems.find(item => item.text === activeSecondaryItem)?.href || ''}
                >
                  <option value="">Select a Service</option>
                  {secondaryNavItems.map((item) => (
                    <option key={item.text} value={item.href}>
                      {item.text}
                    </option>
                  ))}
                </select>
                <svg 
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white pointer-events-none" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </nav>
            
            {/* Desktop: Horizontal Scroll */}
            <nav className="hidden lg:flex items-center gap-3 sm:gap-4 lg:gap-6 overflow-x-auto scrollbar-hide">
              {secondaryNavItems.map((item) => (
                <Link
                  key={item.text}
                  href={item.href}
                  className={`font-dm-sans text-xs sm:text-sm lg:text-base whitespace-nowrap transition-colors min-h-11 flex items-center ${
                    activeSecondaryItem === item.text
                      ? "font-bold text-white underline decoration-white underline-offset-4"
                      : "font-light text-[#e6e6e6] hover:text-white"
                  }`}
                >
                  {item.text}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
