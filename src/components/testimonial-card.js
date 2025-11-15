import Image from "next/image";

export default function TestimonialCard({
  name,
  feedback,
  imageurl,
  rating = 5,
}) {
  return (
    <div className="bg-[#161616] rounded-xl p-4 sm:p-6 lg:p-8 w-full h-auto">
      <div className="flex flex-col items-center sm:flex-row gap-4 sm:gap-6 mb-4 sm:mb-6">
        <div className="relative shrink-0">
          <Image
            src={imageurl}
            alt={name}
            width={50}
            height={50}
            className="rounded-full w-12 h-12"
          />
          <div className="absolute inset-0 bg-black/40 rounded-full"></div>
        </div>
        <div className="flex-1 min-w-0 text-center sm:text-left">
          <h3 className="text-lg font-semibold text-white font-noto-sans">{name}</h3>
          <div className="flex gap-1 justify-center sm:justify-start">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={
                  i < rating
                    ? "text-orange-500 text-lg"
                    : "text-gray-600 text-lg"
                }
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </div>
      <p className="text-base sm:text-lg text-gray-300 leading-relaxed line-clamp-4 sm:line-clamp-none">{feedback}</p>
    </div>
  );
}
