"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import ConfirmationModal from "./confirmation-modal";

export default function BookingModal({ isOpen, onClose, serviceName }) {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    date: "",
    time: ""
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData(e.target);
      formDataToSend.append("access_key", "92607a42-97c8-4fed-b90e-4304a34f48eb");
      formDataToSend.append("service", serviceName || "Consultation");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setShowConfirmation(true);
        setFormData({
          fullName: "",
          email: "",
          date: "",
          time: ""
        });
      } else {
        console.error("Form submission error:", data);
        alert("Failed to book appointment. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Failed to book appointment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
            Book For {serviceName}
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
                name="name"
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
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full py-2.5 sm:py-3 px-3 rounded-md bg-black/20 border border-[#313131] placeholder:text-[#9E9E9E] text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-600 min-h-11"
                placeholder="Enter Email"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <div className="w-full sm:w-1/2">
              <h2 className="text-white font-dm-sans text-sm sm:text-base lg:text-lg mb-2">Date</h2> 
              <div className="relative">
                <input
                  type="text"
                  name="date"
                  placeholder="DD/MM/YYYY"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  required
                  onClick={(e) => {
                    e.target.type = 'date';
                    e.target.showPicker?.();
                  }}
                  onFocus={(e) => {
                    e.target.type = 'date';
                    setTimeout(() => e.target.showPicker?.(), 0);
                  }}
                  onBlur={(e) => {
                    if (!e.target.value) {
                      e.target.type = 'text';
                    }
                  }}
                  className="w-full py-2.5 sm:py-3 px-3 rounded-md bg-black/20 text-white text-sm sm:text-base cursor-pointer placeholder:text-[#9E9E9E] border border-[#313131] focus:outline-none focus:ring-2 focus:ring-orange-600 min-h-11"
                  style={{
                    colorScheme: 'dark',
                    appearance: 'none',
                  }}
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/date.svg"
                  alt="Date"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 pointer-events-none"
                />
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <h2 className="text-white font-dm-sans text-sm sm:text-base lg:text-lg mb-2">Time</h2>
              <div className="relative">
                <select 
                  name="time"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  required
                  className="w-full py-2.5 sm:py-3 px-3 pr-9 rounded-md bg-black/20 border border-[#313131] text-[#9E9E9E] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-600 min-h-11 appearance-none cursor-pointer [&:has(option:checked:not(:first-child))]:text-white">
                  <option value="">Select Slot</option>
                  <option value="09:00">09:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                  <option value="17:00">5:00 PM</option>
                </select>
                <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 pointer-events-none text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

        <div className="mt-6 sm:mt-8">
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 bg-orange-600 hover:bg-orange-700 transition-colors duration-200 text-white rounded-sm font-dm-sans text-sm sm:text-base lg:text-base min-h-11 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Booking..." : "Book a Slot"}
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
        type="booking"
      />
    </>
  );
}
