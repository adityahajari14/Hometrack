"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import ConfirmationModal from "./confirmation-modal";

export default function ContactModal({ isOpen, onClose }) {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: ""
  });

  // Close modal on Escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }
    
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the contact data to your backend
    console.log("Contact submitted:", formData);
    
    // Show confirmation modal
    setShowConfirmation(true);
    
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  const modalContent = (
    <div 
      className="fixed top-0 left-0 right-0 bottom-0 z-[9999] bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="fixed top-0 left-0 right-0 bottom-0 overflow-y-auto flex items-center justify-center p-4">
        <div 
          className="w-full max-w-2xl bg-black rounded-md py-6 sm:py-8 lg:py-8 px-4 sm:px-6 lg:px-8 my-8"
          onClick={(e) => e.stopPropagation()}
        >
        {/* Header with Close Button */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-white font-dm-sans text-xl sm:text-2xl lg:text-3xl">
            Contact Us
          </h2>
          <button
            onClick={onClose}
            className="text-white hover:text-orange-600 transition-colors text-3xl leading-none min-w-11 min-h-11 flex items-center justify-center"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4"> 
            <div className="w-full sm:w-1/2">
              <h3 className="text-white font-dm-sans text-sm sm:text-base lg:text-lg mb-2">Full Name</h3>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                required
                className="w-full py-2.5 sm:py-3 px-3 rounded-md bg-black/20 border border-[#313131] placeholder:text-[#9E9E9E] text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-600 min-h-11"
                placeholder="Enter Full Name"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <h3 className="text-white font-dm-sans text-sm sm:text-base lg:text-lg mb-2">Email</h3>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full py-2.5 sm:py-3 px-3 rounded-md bg-black/20 border border-[#313131] placeholder:text-[#9E9E9E] text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-600 min-h-11"
                placeholder="Enter Email"
              />
            </div>
          </div>

          <div className="w-full">
            <h3 className="text-white font-dm-sans text-sm sm:text-base lg:text-lg mb-2">Phone Number</h3>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              className="w-full py-2.5 sm:py-3 px-3 rounded-md bg-black/20 border border-[#313131] placeholder:text-[#9E9E9E] text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-600 min-h-11"
              placeholder="Enter Phone Number"
            />
          </div>

          <div className="w-full">
            <h3 className="text-white font-dm-sans text-sm sm:text-base lg:text-lg mb-2">Message</h3>
            <textarea
              rows="4"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="w-full py-2.5 sm:py-3 px-3 rounded-md bg-black/20 border border-[#313131] placeholder:text-[#9E9E9E] text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-600 resize-none"
              placeholder="Write your message..."
            />
          </div>

        <div className="mt-6 sm:mt-8">
          <button type="submit" className="px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 bg-orange-600 hover:bg-orange-700 transition-colors duration-200 text-white rounded-sm font-dm-sans text-sm sm:text-base lg:text-base min-h-11">
            Send Message
          </button>
        </div>
        </form>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {createPortal(modalContent, document.body)}
      <ConfirmationModal 
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        type="contact"
      />
    </>
  );
}
