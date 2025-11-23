'use client'

import { useEffect } from 'react'
import { createPortal } from 'react-dom'

export default function AmenitiesModal({ isOpen, onClose, amenities, propertyTitle }) {
  // Close modal on Escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const modalContent = (
    <div 
      className="fixed top-0 left-0 right-0 bottom-0 z-[10000] bg-black/70 backdrop-blur-sm overflow-y-auto scrollbar-hide"
      onClick={onClose}
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <div className="flex items-center justify-center min-h-full p-4">
        <div 
          className="w-full max-w-2xl bg-black rounded-md py-6 sm:py-8 lg:py-8 px-4 sm:px-6 lg:px-8 my-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header with Close Button */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-white font-dm-sans text-xl sm:text-2xl lg:text-3xl">
                All Amenities
              </h2>
              <p className="text-[#999999] text-sm sm:text-base mt-1">
                {propertyTitle}
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-orange-600 transition-colors text-3xl leading-none min-w-11 min-h-11 flex items-center justify-center"
              aria-label="Close modal"
            >
              ×
            </button>
          </div>

          {/* Amenities List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {amenities.map((amenity, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-3 bg-black/20 border border-[#313131] rounded-md"
              >
                <svg className="w-5 h-5 text-orange-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white text-sm sm:text-base font-dm-sans">
                  {amenity}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  return createPortal(modalContent, document.body)
}
