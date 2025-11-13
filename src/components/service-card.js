import Image from "next/image";
import Link from "next/link";

export default function ServiceCard({ title, description, imageurl, link, logo }) {
  return (
    <Link href={link} className="block border border-[#2b2b2c] rounded-sm relative w-full h-auto overflow-hidden hover:border-[#3b3b3c] transition-colors duration-300 group">
      <div className="relative w-full aspect-square overflow-hidden">
        <Image
          className="w-full h-full object-cover"
          src={imageurl}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      
      {/* Default gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#020202] flex flex-col justify-end px-5 py-8 group-hover:opacity-0 transition-opacity duration-300">
        <h3 className="text-white text-2xl font-medium font-['DM_Sans',sans-serif] leading-[1.33]">
          {title}
        </h3>
      </div>

      {/* Orange hover overlay */}
      <div className="absolute inset-0 bg-[#FF6B35] flex flex-col gap-3 justify-end px-5 py-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
        {logo && (
          <div className="flex justify-start">
            <div className="relative w-10 h-10">
              <Image
                src={logo}
                alt={`${title} logo`}
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}
        <div>
          <h3 className="text-white text-2xl font-medium font-['DM_Sans',sans-serif] leading-[1.33]">
            {title}
          </h3>
          {description && (
            <p className="text-white text-sm font-['DM_Sans',sans-serif] leading-relaxed opacity-90">
              {description}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
