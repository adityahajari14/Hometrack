import Image from "next/image";

export default function TestimonialCard({
  name,
  feedback,
  imageurl,
  rating = 5,
}) {
  return (
    <div className="bg-[#161616] rounded-xl p-8">
      <div className="flex items-center gap-6 mb-6">
        <div className="relative">
          <Image
            src={imageurl}
            alt={name}
            width={120}
            height={120}
            className="rounded-full shrink-0"
          />
          <div className="absolute inset-0 bg-black/50 rounded-full"></div>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-white mb-2">{name}</h3>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={
                  i < rating
                    ? "text-orange-500 text-2xl"
                    : "text-gray-600 text-2xl"
                }
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </div>
      <p className="text-lg text-gray-300 leading-relaxed">{feedback}</p>
    </div>
  );
}
