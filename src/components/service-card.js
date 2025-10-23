import Image from "next/image";
export default function ServiceCard({ title, imageurl }) {
  return (
    <div className="bg-black/20 rounded-md p-0 hover:bg-black/40 transition-colors duration-300">
      <div className="relative w-130 h-130 rounded-md overflow-hidden">
        <Image
          className="w-full h-full object-cover"
          src={imageurl}
          alt={title}
          width={300}
          height={300}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent"></div>
        <h3 className="absolute bottom-4 left-4 text-white text-2xl font-dm-sans">{title}</h3>
      </div>
    </div>  
  );
}
