"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // optional: or use your own icons

export default function Navbar() {
  const navItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Quienes somos", href: "#quienes-somos" },
    { label: "Servicios", href: "#servicios" },
    { label: "Proceso", href: "#proceso" },
    { label: "Testimonios", href: "#testimonios" },
    { label: "Ubicaciones", href: "#ubicaciones" },
  ];

  const [isTop, setIsTop] = useState(true);
  const [isBottom, setIsBottom] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 10;

      setIsTop(scrollTop <= 10);
      setIsBottom(atBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const baseClasses =
    "flex flex-row items-center justify-around w-full md:h-40 h-20 fixed z-50 px-6 transition-all duration-300";
  const backgroundClass = isTop
    ? "bg-transparent"
    : "bg-black/90 backdrop-blur-md";
  const visibilityClass = isBottom ? "opacity-0 pointer-events-none" : "opacity-100";

  return (
    <div className={`${baseClasses} ${backgroundClass} ${visibilityClass}`}>
      <Image
        src="/images/atf_logo.png"
        alt="logo"
        height={200}
        width={200}
        className="object-contain h-[120px] w-[120px] md:h-[200px] md:w-[200px]"
      />

      <nav className="hidden md:flex flex-row items-center gap-x-6 text-white w-2/3 text-md font-thin">
        {navItems.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="relative before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[2px] before:bg-yellow-400 before:transition-all before:duration-300 before:ease-in-out hover:before:w-full hover:before:left-0"
          >
            {label}
          </a>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Dropdown */}
{menuOpen && (
  <div className="absolute top-full left-0 w-full bg-black/90 rounded-b-2xl backdrop-blur-md text-white flex flex-col items-center py-4 md:hidden">
    {navItems.map(({ label, href }) => (
      <a
        key={label}
        href={href}
        onClick={() => setMenuOpen(false)}
        className="py-2 text-lg hover:text-yellow-400 transition-colors"
      >
        {label}
      </a>
    ))}
  </div>
)}
    </div>
  );
}
