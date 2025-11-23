'use client'

import { useEffect, useState, useCallback } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getPropertyById, getRelatedProperties } from '@/app/actions/properties'
import InquiryModal from '@/components/inquiry-modal'
import PropertyCard from '@/components/property-card'
import DescriptionModal from '@/components/description-modal'
import ImageViewerModal from '@/components/image-viewer-modal'
import AmenitiesModal from '@/components/amenities-modal'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import TestimonialSection from '@/components/testimonial-section'
import ContactCard from '@/components/contact'
import AnimationWrapper from '@/components/animation-wrapper'

export default function PropertyDetailPage() {
  const params = useParams()
  const { id } = params
  
  const [property, setProperty] = useState(null)
  const [relatedProperties, setRelatedProperties] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDescriptionModalOpen, setIsDescriptionModalOpen] = useState(false)
  const [isImageViewerOpen, setIsImageViewerOpen] = useState(false)
  const [isAmenitiesModalOpen, setIsAmenitiesModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)

  const loadProperty = useCallback(async () => {
    setIsLoading(true)
    const result = await getPropertyById(id)
    
    if (result.success) {
      setProperty(result.data)
      
      // Load related properties
      const relatedResult = await getRelatedProperties(id, result.data.type, 4)
      if (relatedResult.success) {
        setRelatedProperties(relatedResult.data)
      }
    }
    
    setIsLoading(false)
  }, [id])

  useEffect(() => {
    loadProperty()
  }, [loadProperty])

  if (!property && !isLoading) {
    return (
      <div className="min-h-screen bg-[#020202] flex items-center justify-center">
        <div className="text-center">
          <div className="text-white text-xl sm:text-2xl font-noto-sans font-semibold mb-4">Property not found</div>
          <Link href="/portfolio" className="text-[#ff5810] hover:underline font-dm-sans text-base sm:text-lg">
            Back to Portfolio
          </Link>
        </div>
      </div>
    )
  }

  if (!property) return null

  const images = [property.mainImage, ...property.gallery.filter(img => img !== property.mainImage)]

  return (
    <>
      <Navbar />
      <AnimationWrapper>
        <main className="bg-[#020202] text-white overflow-x-hidden pt-10">

        {/* Property Details Section */}
        <section 
          className="bg-[#020202] py-8 sm:py-12 md:py-16 lg:py-20 w-full overflow-x-hidden"
          id="property-details"
        >
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
            {/* Breadcrumb */}
            <div className="scale-in-repeat mb-4 sm:mb-5 md:mb-6">
              <p className="text-[#aaaaaa] text-xs sm:text-sm md:text-base font-dm-sans">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span> / </span>
                <Link href="/portfolio" className="hover:text-white transition-colors">{property.location.split(',')[0]}</Link>
                <span> / </span>
                <span className="text-white font-semibold">{property.type}</span>
              </p>
            </div>

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row items-start gap-6 sm:gap-8 lg:gap-10 xl:gap-12 mb-8 sm:mb-10 lg:mb-12">
              {/* Left: Property Info */}
              <div className="scale-in-repeat flex flex-col gap-6 sm:gap-7 lg:gap-8 w-full lg:flex-1 lg:max-w-[550px] order-2 lg:order-1">
                <div className="flex flex-col gap-5 sm:gap-6 lg:gap-7">
                  <div className="flex flex-col gap-4 sm:gap-5">
                    {/* Category Badge */}
                    {property.category && (
                      <div className="bg-[rgba(244,244,244,0.2)] rounded-full px-3 sm:px-4 py-1.5 sm:py-2 inline-flex items-center justify-center w-fit">
                        <span className="text-white text-xs sm:text-sm font-medium font-dm-sans capitalize">{property.category === 'off-plan' ? 'Off-Plan' : 'Secondary'}</span>
                      </div>
                    )}

                    {/* Title & Location */}
                    <div className="flex flex-col gap-3 sm:gap-4">
                      <div className="flex flex-col gap-2 sm:gap-3">
                        <div className="flex flex-col gap-1 sm:gap-1.5">
                          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-white">
                            {property.title}
                          </h1>
                          <p className="text-white text-sm sm:text-base lg:text-lg xl:text-xl font-normal">
                            {property.location}
                          </p>
                        </div>
                        <div className="text-[#999999] text-xs sm:text-sm lg:text-base font-dm-sans leading-relaxed">
                          {property.description.length > 150 
                            ? (
                              <>
                                {property.description.substring(0, 150)}...{' '}
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.preventDefault()
                                    e.stopPropagation()
                                    setIsDescriptionModalOpen(true)
                                  }}
                                  className="text-[#ff5810] hover:text-[#e64d0a] active:text-[#d44509] transition-colors cursor-pointer touch-manipulation inline"
                                >
                                  Read more
                                </button>
                              </>
                            )
                            : property.description}
                        </div>
                      </div>

                      {/* Amenities */}
                      <div className="flex flex-wrap gap-2">
                        <div className="bg-[#1a1a1a] border border-neutral-800 rounded-full px-2.5 sm:px-3 py-1.5 sm:py-2 flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none">
                            <rect x="3" y="8" width="18" height="12" rx="2" stroke="white" strokeWidth="2"/>
                            <path d="M7 8V6C7 4.89543 7.89543 4 9 4H15C16.1046 4 17 4.89543 17 6V8" stroke="white" strokeWidth="2"/>
                          </svg>
                          <span className="text-white text-xs sm:text-sm font-medium">{property.bedrooms}-Bedroom</span>
                        </div>

                        <div className="bg-[#1a1a1a] border border-neutral-800 rounded-full px-2.5 sm:px-3 py-1.5 sm:py-2 flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none">
                            <rect x="4" y="4" width="16" height="16" rx="2" stroke="white" strokeWidth="2"/>
                            <circle cx="12" cy="9" r="2" stroke="white" strokeWidth="2"/>
                          </svg>
                          <span className="text-white text-xs sm:text-sm font-medium">{property.bathrooms}-Bathroom</span>
                        </div>

                        <div className="bg-[#1a1a1a] border border-neutral-800 rounded-full px-2.5 sm:px-3 py-1.5 sm:py-2 flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none">
                            <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="white" strokeWidth="2"/>
                          </svg>
                          <span className="text-white text-xs sm:text-sm font-medium">{property.type}</span>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Price */}
                  <p className="text-white text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold">
                    AED {property.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}{property.listingType === 'rent' ? ' / year' : ''}
                  </p>
                </div>

                {/* Enquire Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    setIsModalOpen(true)
                  }}
                  className="w-full bg-[#ff5810] text-white text-sm sm:text-base lg:text-lg font-semibold px-5 sm:px-6 py-3 sm:py-3.5 rounded hover:bg-[#e64d0a] active:bg-[#d44509] transition-colors cursor-pointer min-h-11 touch-manipulation"
                >
                  Enquire Now
                </button>
              </div>

              {/* Right: Image Gallery */}
              <div className="scale-in-repeat w-full lg:flex-1 order-1 lg:order-2">
                <div className="flex flex-col lg:flex-row gap-3">
                  {/* Main Image */}
                  <div className="w-full lg:flex-1">
                    <div 
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        setIsImageViewerOpen(true)
                      }}
                      className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[420px] rounded-lg overflow-hidden cursor-pointer group"
                    >
                      <Image
                        src={images[selectedImage]}
                        alt={property.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 700px"
                        priority
                      />
                    </div>
                  </div>

                  {/* Thumbnails */}
                  <div className="w-full lg:w-auto">
                    {/* Mobile: Horizontal thumbnails */}
                    <div className="flex lg:hidden items-center justify-center gap-2">
                      {images.slice(0, 5).map((image, idx) => {
                        const isSelected = selectedImage === idx
                        const isLastWithMore = idx === 4 && images.length > 5 && !isSelected
                        
                        return (
                          <div
                            key={idx}
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              if (isLastWithMore) {
                                setIsImageViewerOpen(true)
                              } else {
                                setSelectedImage(idx)
                              }
                            }}
                            className={`
                              relative shrink-0 cursor-pointer
                              w-16 h-16 sm:w-[72px] sm:h-[72px] md:w-20 md:h-20
                              rounded-md overflow-hidden
                              transition-all duration-300
                              ${isSelected 
                                ? 'ring-2 ring-[#ff5810] ring-offset-2 ring-offset-[#020202] scale-105' 
                                : 'opacity-70 hover:opacity-100 hover:scale-105'
                              }
                            `}
                          >
                            <Image
                              src={image}
                              alt={`Thumbnail ${idx + 1}`}
                              fill
                              className="object-cover"
                              sizes="80px"
                            />
                            
                            {isLastWithMore && (
                              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                <span className="text-white text-sm font-semibold">
                                  +{images.length - 5}
                                </span>
                              </div>
                            )}
                          </div>
                        )
                      })}
                    </div>

                    {/* Desktop: Vertical thumbnails */}
                    <div className="hidden lg:flex flex-col gap-2 h-[400px] xl:h-[420px]">
                      {images.slice(0, 5).map((image, idx) => {
                        const isSelected = selectedImage === idx
                        const isLastWithMore = idx === 4 && images.length > 5 && !isSelected
                        
                        return (
                          <div
                            key={idx}
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              if (isLastWithMore) {
                                setIsImageViewerOpen(true)
                              } else {
                                setSelectedImage(idx)
                              }
                            }}
                            className={`
                              relative shrink-0 cursor-pointer
                              w-20 xl:w-[88px]
                              flex-1 min-h-0
                              rounded-md overflow-hidden
                              transition-all duration-300
                              ${isSelected 
                                ? 'ring-2 ring-[#ff5810] ring-offset-2 ring-offset-[#020202] scale-105' 
                                : 'opacity-70 hover:opacity-100 hover:scale-105'
                              }
                            `}
                          >
                            <Image
                              src={image}
                              alt={`Thumbnail ${idx + 1}`}
                              fill
                              className="object-cover"
                              sizes="88px"
                            />
                            
                            {isLastWithMore && (
                              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                <span className="text-white text-sm font-semibold">
                                  +{images.length - 5}
                                </span>
                              </div>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Property Details Grid */}
            <div className="scale-in-repeat bg-[#1d1d1d] rounded-lg p-4 sm:p-5 md:p-6 mb-6 sm:mb-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                {property.developer && (
                  <div className="flex flex-col gap-1">
                    <span className="text-[#a5a5a5] text-xs sm:text-sm font-medium">Developer Name</span>
                    <span className="text-white text-sm sm:text-base lg:text-lg font-medium wrap-break-word">{property.developer}</span>
                  </div>
                )}
                {property.area && (
                  <div className="flex flex-col gap-1">
                    <span className="text-[#a5a5a5] text-xs sm:text-sm font-medium">Area</span>
                    <span className="text-white text-sm sm:text-base lg:text-lg font-medium">{property.area} sq. ft</span>
                  </div>
                )}
                {property.amenities && property.amenities.length > 0 && (
                  <div className="flex flex-col gap-1">
                    <span className="text-[#a5a5a5] text-xs sm:text-sm font-medium">Amenities</span>
                    <div className="flex flex-col gap-1">
                      <span className="text-white text-sm sm:text-base lg:text-lg font-medium">{property.amenities.slice(0, 2).join(', ')}</span>
                      {property.amenities.length > 2 && (
                        <button
                          type="button"
                          onClick={() => setIsAmenitiesModalOpen(true)}
                          className="text-[#ff5810] text-xs sm:text-sm hover:text-[#e64d0a] active:text-[#d44509] transition-colors cursor-pointer text-left touch-manipulation"
                        >
                          +{property.amenities.length - 2} more
                        </button>
                      )}
                    </div>
                  </div>
                )}
                {property.bedrooms && (
                  <div className="flex flex-col gap-1">
                    <span className="text-[#a5a5a5] text-xs sm:text-sm font-medium">Bedrooms</span>
                    <span className="text-white text-sm sm:text-base lg:text-lg font-medium">{property.bedrooms}</span>
                  </div>
                )}
                {property.bathrooms && (
                  <div className="flex flex-col gap-1">
                    <span className="text-[#a5a5a5] text-xs sm:text-sm font-medium">Bathrooms</span>
                    <span className="text-white text-sm sm:text-base lg:text-lg font-medium">{property.bathrooms}</span>
                  </div>
                )}
                {property.readyDate && (
                  <div className="flex flex-col gap-1">
                    <span className="text-[#a5a5a5] text-xs sm:text-sm font-medium">Delivery Date</span>
                    <span className="text-white text-sm sm:text-base lg:text-lg font-medium">{property.readyDate}</span>
                  </div>
                )}
                {property.type && (
                  <div className="flex flex-col gap-1">
                    <span className="text-[#a5a5a5] text-xs sm:text-sm font-medium">Type</span>
                    <span className="text-white text-sm sm:text-base lg:text-lg font-medium capitalize">{property.type}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Related Properties */}
            {relatedProperties.length > 0 && (
              <div className="flex flex-col gap-3 sm:gap-4 mb-8 sm:mb-10">
                <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-medium text-white">
                  Other Properties
                </h2>
                <div className="scale-in-repeat grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                  {relatedProperties.map((relatedProperty) => (
                    <PropertyCard key={relatedProperty.id} property={relatedProperty} />
                  ))}
                </div>
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

      {/* Modals */}
      <InquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        propertyId={property.id}
        propertyTitle={property.title}
      />

      <DescriptionModal
        isOpen={isDescriptionModalOpen}
        onClose={() => setIsDescriptionModalOpen(false)}
        title={property.title}
        description={property.description}
      />

      <ImageViewerModal
        isOpen={isImageViewerOpen}
        onClose={() => setIsImageViewerOpen(false)}
        images={images}
        initialIndex={selectedImage}
        propertyTitle={property.title}
      />

      <AmenitiesModal
        isOpen={isAmenitiesModalOpen}
        onClose={() => setIsAmenitiesModalOpen(false)}
        amenities={property.amenities || []}
        propertyTitle={property.title}
      />
      </AnimationWrapper>
    </>
  )
}
