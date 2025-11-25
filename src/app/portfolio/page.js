'use client'

import { useEffect, useState, useCallback } from 'react'
import { getProperties } from '@/app/actions/properties'
import PropertyCard from '@/components/property-card'
import PortfolioFilters from '@/components/portfolio-filters'
import Navbar from '@/components/navbar'
import TestimonialSection from '@/components/testimonial-section'
import ContactCard from '@/components/contact'
import Footer from '@/components/footer'
import AnimationWrapper from '@/components/animation-wrapper'

export default function PortfolioPage() {
  const [properties, setProperties] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [filters, setFilters] = useState({})

  // Format price in K, M, B format
  const formatPrice = (price) => {
    if (price >= 1000000000) {
      const bValue = (price / 1000000000).toFixed(2)
      return `${parseFloat(bValue).toLocaleString('en-US')}B`
    } else if (price >= 1000000) {
      const mValue = (price / 1000000).toFixed(2)
      return `${parseFloat(mValue).toLocaleString('en-US')}M`
    } else if (price >= 1000) {
      const kValue = (price / 1000).toFixed(0)
      return `${parseInt(kValue).toLocaleString('en-US')}K`
    }
    return price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  }

  const loadProperties = useCallback(async () => {
    setIsLoading(true)
    const result = await getProperties(filters)
    if (result.success) {
      setProperties(result.data)
    }
    setIsLoading(false)
  }, [filters])

  useEffect(() => {
    loadProperties()
  }, [loadProperties])

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters)
  }

  // Function to chunk properties into groups
  const chunkProperties = (arr, size) => {
    const chunks = []
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size))
    }
    return chunks
  }

  const propertyChunks = chunkProperties(properties, 3)

  return (
    <>
      <Navbar />
      <AnimationWrapper>
        <main className="bg-[#020202] text-white overflow-x-hidden pt-20 sm:pt-24 md:pt-28">

        {/* Portfolio Content Section */}
        <section 
          className="bg-[#020202] py-8 sm:py-12 md:py-16 lg:py-20 w-full overflow-x-hidden"
          id="portfolio"
        >
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
            {/* Filters */}
            <div className="scale-in-repeat mb-6 sm:mb-8 md:mb-10 lg:mb-12">
              <PortfolioFilters onFilterChange={handleFilterChange} />
            </div>

            {/* Properties Grid */}
            {!isLoading && properties.length === 0 ? (
              <div className="flex flex-col items-center justify-center min-h-[300px] sm:min-h-[400px] gap-3 sm:gap-4 px-4">
                <div className="text-white text-lg sm:text-xl md:text-2xl font-noto-sans font-semibold text-center">No properties found</div>
                <p className="text-[#999999] text-sm sm:text-base md:text-lg font-dm-sans text-center">Try adjusting your filters or search query</p>
              </div>
            ) : (
              <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
                {propertyChunks.map((chunk, chunkIndex) => (
                  <div 
                    key={chunkIndex} 
                    className="scale-in-repeat grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
                  >
                    {chunk.map((property) => (
                      <PropertyCard key={property.id} property={property} />
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          className="bg-[#020202] w-full overflow-x-hidden py-8 sm:py-12 lg:py-16"
          id="testimonials"
        >
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
            <div className="scale-in-repeat">
              <TestimonialSection />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          className="bg-[#020202] py-8 sm:py-12 md:py-16 lg:py-20 w-full overflow-x-hidden"
          id="contact-us"
        >
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
            <div className="scale-in-repeat">
              <ContactCard />
            </div>
          </div>
        </section>

        <Footer />
      </main>
      </AnimationWrapper>
    </>
  )
}
