import Image from "next/image";

export default function TestimonialCard({
  name,
  feedback,
  imageurl,
  rating = 5,
}) {
  return (
    <div className="bg-[#161616] rounded-xl p-4 sm:p-6 lg:p-8 w-full h-auto">
      <div className="flex flex-col items-center sm:flex-row sm:items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
        <div className="relative shrink-0">
          <Image
            src={imageurl}
            alt={name}
            width={80}
            height={80}
            className="rounded-full w-20 h-20 sm:w-24 sm:h-24 lg:w-24 lg:h-24"
          />
          <div className="absolute inset-0 bg-black/60 rounded-full"></div>
        </div>
        <div className="flex-1 min-w-0 text-center sm:text-left">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">{name}</h3>
          <div className="flex gap-1 justify-center sm:justify-start">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={
                  i < rating
                    ? "text-orange-500 text-lg sm:text-xl lg:text-2xl"
                    : "text-gray-600 text-lg sm:text-xl lg:text-2xl"
                }
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </div>
      <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed line-clamp-4 sm:line-clamp-none">{feedback}</p>
    </div>
  );
}
