import Link from 'next/link'
import Image from 'next/image'

export default function PropertyCard({ property }) {
  const {
    id,
    title,
    description,
    price,
    bedrooms,
    bathrooms,
    type,
    mainImage,
    location,
    listingType
  } = property

  // Format price in k format
  const formatPrice = (price) => {
    if (price >= 1000) {
      return `${(price / 1000).toFixed(0)}k`
    }
    return price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  }

  // Truncate description with Read More link
  const truncatedDescription = description.length > 85 
    ? description.substring(0, 85) + '... ' 
    : description

  return (
    <Link 
      href={`/property/${id}`}
      className="block bg-[#141414] rounded-lg overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] h-full touch-manipulation"
    >
      <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 p-4 sm:p-5 h-full">
        {/* Image */}
        <div className="relative w-full rounded-md overflow-hidden h-44 sm:h-48 md:h-52">
          <Image
            src={mainImage}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between flex-1">
          <div className="flex flex-col gap-3 sm:gap-4">
            {/* Title & Description */}
            <div className="flex flex-col gap-1 sm:gap-1.5">
              <h3 className="text-white text-base sm:text-lg lg:text-xl font-semibold line-clamp-2">
                {title}
              </h3>
              <p className="text-[#999999] text-xs sm:text-sm lg:text-base font-medium line-clamp-2">
                {truncatedDescription}
              </p>
            </div>

            {/* Amenities Tags */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <div className="bg-[#1a1a1a] border border-neutral-800 rounded-full px-2.5 sm:px-3 py-1 sm:py-1.5 flex items-center gap-1 sm:gap-1.5">
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="8" width="18" height="12" rx="2" stroke="white" strokeWidth="2"/>
                  <path d="M7 8V6C7 4.89543 7.89543 4 9 4H15C16.1046 4 17 4.89543 17 6V8" stroke="white" strokeWidth="2"/>
                </svg>
                <span className="text-white text-xs sm:text-sm font-medium">
                  {bedrooms}-Bed
                </span>
              </div>

              <div className="bg-[#1a1a1a] border border-neutral-800 rounded-full px-2.5 sm:px-3 py-1 sm:py-1.5 flex items-center gap-1 sm:gap-1.5">
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" viewBox="0 0 24 24" fill="none">
                  <rect x="4" y="4" width="16" height="16" rx="2" stroke="white" strokeWidth="2"/>
                  <circle cx="12" cy="9" r="2" stroke="white" strokeWidth="2"/>
                </svg>
                <span className="text-white text-xs sm:text-sm font-medium">
                  {bathrooms}-Bath
                </span>
              </div>

              <div className="bg-[#1a1a1a] border border-neutral-800 rounded-full px-2.5 sm:px-3 py-1 sm:py-1.5 flex items-center gap-1 sm:gap-1.5">
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" viewBox="0 0 24 24" fill="none">
                  <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="white" strokeWidth="2"/>
                </svg>
                <span className="text-white text-xs sm:text-sm font-medium">
                  {type}
                </span>
              </div>
            </div>
          </div>

          {/* Price */}
          <p className="text-white text-lg sm:text-xl lg:text-2xl font-semibold mt-3 sm:mt-4">
            AED {formatPrice(price)}{listingType === 'rent' ? ' / year' : ''}
          </p>
        </div>
      </div>
    </Link>
  )
}
