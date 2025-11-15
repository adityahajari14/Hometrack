"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

export default function ConfirmationModal({ isOpen, onClose, type = "contact" }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const messages = {
    contact: {
      title: "Message Sent Successfully!",
      description: "Thank you for reaching out. We've received your message and will get back to you.",
      icon: "/contact/mail.svg"
    },
    booking: {
      title: "Booking Confirmed!",
      description: "Your consultation has been scheduled successfully. We'll send you a confirmation email shortly.",
      icon: "/date.svg"
    },
    consultation: {
      title: "Consultation Booked!",
      description: "Your consultation slot has been reserved. Our team will contact you soon to confirm the details.",
      icon: "/date.svg"
    }
  };

  const message = messages[type] || messages.contact;

  const modalContent = (
    <div 
      className="fixed top-0 left-0 right-0 bottom-0 z-[9999] bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="fixed top-0 left-0 right-0 bottom-0 overflow-y-auto flex items-center justify-center p-3 sm:p-4">
        <div 
          className="w-full max-w-[90%] sm:max-w-md bg-[#0b0b0b] border border-[#373737] rounded-lg py-6 sm:py-8 px-5 sm:px-6 lg:px-8 my-4 sm:my-8"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col items-center text-center gap-4 sm:gap-5 lg:gap-6">
            {/* Success Icon */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-orange-600/20 flex items-center justify-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orange-600 flex items-center justify-center">
                <svg 
                  className="w-6 h-6 sm:w-7 sm:h-7 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2.5} 
                    d="M5 13l4 4L19 7" 
                  />
                </svg>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-white font-dm-sans text-lg sm:text-xl lg:text-2xl font-semibold">
              {message.title}
            </h2>

            {/* Description */}
            <p className="text-gray-300 font-dm-sans text-xs sm:text-sm lg:text-base leading-relaxed px-2">
              {message.description}
            </p>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-orange-600 hover:bg-orange-700 transition-colors duration-200 text-white rounded-sm font-dm-sans text-sm sm:text-base font-medium min-h-11"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
