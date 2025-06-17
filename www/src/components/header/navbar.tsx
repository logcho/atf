"use client";
import Image from "next/image"
import { useEffect, useState } from "react";

export default function Navbar() {
    const navItems = [
        { label: "Inicio", href: "#inicio" },
        { label: "Quienes somos", href: "#quienes-somos" },
        { label: "Servicios", href: "#servicios" },
        { label: "Noticias", href: "#noticias" },
        { label: "Testimonios", href: "#testimonios" },
        { label: "Ubicaciones", href: "#ubicaciones" },
    ];


    return (
        <div className={`flex flex-row items-center justify-around w-full h-40 fixed z-50 px-6 transition-colors duration-300 bg-black`}>

            <Image
                src="/images/atf_logo.png"
                alt="logo"
                height={200} // smaller on mobile
                width={200}
                className="object-contain" // bigger on md+
            />

            <nav className="hidden md:flex flex-row items-center gap-x-6 text-white w-2/3 text-lg font-thin">
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

        </div>
    )
}
