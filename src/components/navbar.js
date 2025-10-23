import Button from "./button";
import Image from "next/image";

export default function Navbar() {
  const navItems = [
    { text: "Home", href: "#home" },
    { text: "About the Founder", href: "#about" },
    { text: "Services", href: "#services" },
  ];

  return (
    <nav className="fixed top-0 left-0 flex w-full justify-between p-6 bg-black/30 backdrop-blur-md z-50 text-white">
      <Image src="/logo.svg" alt="Logo" width={250} height={250} />
      <div className="flex flex-1 justify-center items-center lg:text-xl md:text-md sm:text-sm text-gray-300">
        {navItems.map((item) => (
          <a key={item.text} href={item.href} className="mx-6 hover:text-white">
            {item.text}
          </a>
        ))}
      </div>
      <div className="flex-1 flex justify-end items-center">
        <Button label="Contact Us" />
      </div>
    </nav>
  );
}
