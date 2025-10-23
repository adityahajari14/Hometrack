import Button from "./button";
import Image from "next/image";

export default function Navbar() {
  const navItems = [
    { text: "Home", href: "#home" },
    { text: "About the Founder", href: "#about" },
    { text: "Services", href: "#services" },
  ];

  return (
    <nav className="fixed top-0 left-0 flex w-full justify-between items-center px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6 bg-black/30 backdrop-blur-md z-50 text-white gap-2 sm:gap-4 lg:gap-6">
      <div className="w-24 h-auto sm:w-32 md:w-40 lg:w-48 shrink-0">
        <Image src="/logo.svg" alt="Logo" width={200} height={60} className="w-full h-auto" />
      </div>
      
      <div className="hidden md:flex flex-1 justify-center items-center gap-3 lg:gap-6 text-xs sm:text-sm lg:text-lg text-gray-300">
        {navItems.map((item) => (
          <a 
            key={item.text} 
            href={item.href} 
            className="hover:text-white transition-colors duration-200 whitespace-nowrap"
          >
            {item.text}
          </a>
        ))}
      </div>
      
      <div className="ml-auto">
        <Button label="Contact Us" />
      </div>
    </nav>
  );
}
