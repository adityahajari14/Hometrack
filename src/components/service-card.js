import Image from "next/image";
export default function ServiceCard({ title, imageurl }) {
  return (
    <div className="bg-black/20 rounded-md p-0 hover:bg-black/40 transition-colors duration-300 w-full h-auto">
      <div className="relative w-full aspect-square rounded-md overflow-hidden">
        <Image
          className="w-full h-full object-cover"
          src={imageurl}
          alt={title}
          width={300}
          height={300}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent"></div>
        <h3 className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white text-base sm:text-lg lg:text-2xl font-dm-sans line-clamp-2">{title}</h3>
      </div>
    </div>  
  );
}
