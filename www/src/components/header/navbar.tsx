"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // optional: or use your own icons
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { label: t("nav_home"), href: "#inicio" },
    { label: t("nav_about"), href: "#quienes-somos" },
    { label: t("nav_services"), href: "#servicios" },
    { label: t("nav_process"), href: "#proceso" },
    { label: t("nav_testimonials"), href: "#testimonios" },
    { label: t("nav_locations"), href: "#ubicaciones" },
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
    : "bg-white/90 backdrop-blur-md shadow-sm";
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

      <nav className="hidden md:flex flex-row items-center gap-x-6 text-black w-2/3 text-lg font-thin">
        {navItems.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="relative before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[2px] before:bg-yellow-400 before:transition-all before:duration-300 before:ease-in-out hover:before:w-full hover:before:left-0"
          >
            {label}
          </a>
        ))}
        {/* Language Toggle Desktop */}
        <button
          onClick={() => setLanguage(language === "es" ? "en" : "es")}
          className="font-bold border border-black px-3 py-1 rounded-full hover:bg-black hover:text-white transition-colors"
        >
          {language === "es" ? "EN" : "ES"}
        </button>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-black z-50"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-md text-black font-thin flex flex-col items-center justify-center space-y-8 md:hidden shadow-md z-40">
          {/* Logo in Mobile Menu */}
          <Image
            src="/images/atf_logo.png"
            alt="logo"
            height={150}
            width={150}
            className="object-contain mb-8"
          />

          {navItems.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl hover:text-yellow-400 transition-colors"
            >
              {label}
            </a>
          ))}

          {/* Language Toggle Mobile */}
          <button
            onClick={() => {
              setLanguage(language === "es" ? "en" : "es");
              setMenuOpen(false);
            }}
            className="text-xl font-bold border border-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition-colors mt-4"
          >
            {t("nav_switch_lang")}
          </button>
        </div>
      )}
    </div>
  );
}
