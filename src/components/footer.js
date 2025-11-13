"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black text-white overflow-x-hidden font-dm-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20 py-12 lg:py-16 flex flex-col gap-8">

        <div className="w-32 h-auto sm:w-40 lg:w-44 relative shrink-0 mx-auto sm:mx-0">
          <Image
            src="/logo.svg"
            alt="Home Track Logo"
            className="object-contain"
            height={300}
            width={300}
          />
        </div>
         
        <div className="h-0 w-full border-[0.75px] border-white opacity-20" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          <div className="space-y-6 text-center sm:text-left">
            <div className="gap-2">
              <h3 className="text-base sm:text-lg font-medium mb-3">Address</h3>
              <p className="text-sm sm:text-base text-white/60 leading-relaxed">
                2972 Westheimer Rd.
                <br />
                Santa Ana,
                <br />
                Illinois 85486
              </p>
            </div>
          </div>

          <div className="space-y-3 text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold mb-3">Info</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="#services"
                className="text-sm sm:text-base text-white/60 hover:text-white transition-colors"
              >
                Services
              </Link>
              <Link
                href="#terms"
                className="text-sm sm:text-base text-white/60 hover:text-white transition-colors"
              >
                Terms and Conditions
              </Link>
              <Link
                href="#about"
                className="text-sm sm:text-base text-white/60 hover:text-white transition-colors"
              >
                About Us
              </Link>
            </nav>
          </div>

          <div className="space-y-3 text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold mb-3">Contact us</h3>
            <div className="flex flex-col gap-2">
              <a
                href="tel:+971 4 263 5775"
                className="text-sm sm:text-base text-white/60 hover:text-white transition-colors"
              >
                +971 4 263 5775
              </a>
              <a
                href="mailto:info@hometrack.ae"
                className="text-sm sm:text-base text-white/60 hover:text-white transition-colors"
              >
                info@hometrack.ae
              </a>
            </div>
          </div>

          <div className="flex items-start justify-center sm:col-span-2 lg:col-span-1 lg:justify-end">
            <div className="flex gap-2 sm:gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.10)] p-1 hover:bg-[rgba(255,255,255,0.20)] transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.10)] p-1 hover:bg-[rgba(255,255,255,0.20)] transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.10)] p-1 hover:bg-[rgba(255,255,255,0.20)] transition-colors"
                aria-label="YouTube"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 lg:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-white/10">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-xs sm:text-sm text-white/50 items-center">
            <p>© 2025 — Copyright</p>
            <Link
              href="#certificate"
              className="hover:text-white transition-colors"
            >
              Certificate
            </Link>
          </div>

          <button
            onClick={scrollToTop}
            className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-200 transition-colors"
            aria-label="Back to top"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
