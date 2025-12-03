'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export default function InquiryModal({ isOpen, onClose, propertyId, propertyTitle }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null

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

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Create FormData and append Web3Forms access key
      const formDataToSend = new FormData(e.target)
      formDataToSend.append('access_key', '553b3d69-1e10-49a1-9de1-2d4e0160ac97')
      formDataToSend.append('property', propertyTitle)

      // Submit to Web3Forms API
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      })

      const data = await response.json()

      if (data.success) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', message: '' })
        setTimeout(() => {
          onClose()
          setSubmitStatus(null)
        }, 2000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

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
                Property Inquiry
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

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-500/10 border border-green-500 rounded text-green-500">
              Thank you! Your inquiry has been submitted successfully. We&apos;ll get back to you soon.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500 rounded text-red-500">
              Sorry, there was an error submitting your inquiry. Please try again.
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4">
            {/* Name */}
            <div className="w-full">
              <h3 className="text-white font-dm-sans text-sm sm:text-base lg:text-lg mb-2">
                Full Name <span className="text-[#ff5810]">*</span>
              </h3>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full py-2.5 sm:py-3 px-3 rounded-md bg-black/20 border border-[#313131] placeholder:text-[#9E9E9E] text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-600 min-h-11"
                placeholder="Enter Full Name"
              />
            </div>

            {/* Email */}
            <div className="w-full">
              <h3 className="text-white font-dm-sans text-sm sm:text-base lg:text-lg mb-2">
                Email <span className="text-[#ff5810]">*</span>
              </h3>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full py-2.5 sm:py-3 px-3 rounded-md bg-black/20 border border-[#313131] placeholder:text-[#9E9E9E] text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-600 min-h-11"
                placeholder="Enter Email"
              />
            </div>

            {/* Phone (Optional) */}
            <div className="w-full">
              <h3 className="text-white font-dm-sans text-sm sm:text-base lg:text-lg mb-2">
                Phone Number
              </h3>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full py-2.5 sm:py-3 px-3 rounded-md bg-black/20 border border-[#313131] placeholder:text-[#9E9E9E] text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-600 min-h-11"
                placeholder="Enter Phone Number"
              />
            </div>

            {/* Message */}
            <div className="w-full">
              <h3 className="text-white font-dm-sans text-sm sm:text-base lg:text-lg mb-2">
                Message <span className="text-[#ff5810]">*</span>
              </h3>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full py-2.5 sm:py-3 px-3 rounded-md bg-black/20 border border-[#313131] placeholder:text-[#9E9E9E] text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-600 resize-none"
                placeholder="Write your message..."
              />
            </div>

            {/* Submit Button */}
            <div className="mt-6 sm:mt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 bg-orange-600 hover:bg-orange-700 transition-colors duration-200 text-white rounded-sm font-dm-sans text-sm sm:text-base lg:text-base min-h-11 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Inquiry'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )

  return createPortal(modalContent, document.body)
}
