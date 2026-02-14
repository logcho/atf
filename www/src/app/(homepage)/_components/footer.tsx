"use client";

import Image from "next/image"
import { useLanguage } from "@/context/LanguageContext";
import { Phone, Mail } from "lucide-react";

export default function Footer() {
    const { t } = useLanguage();
    const year = new Date().getFullYear();

    return (
        <footer className="bg-black text-white py-12 w-full">
            <div className="max-w-full mx-auto px-6 flex flex-col items-center text-center space-y-8">
                {/* Logo */}
                <Image
                    src="/images/atf_logo.png"
                    alt="ATF Solutions Logo"
                    height={120}
                    width={120}
                    className="object-contain"
                />

                {/* Contact Info */}
                <div className="flex flex-col items-center space-y-4">
                    <h2 className="text-lg font-bold tracking-widest uppercase" style={{ color: "#ffce1b" }}>
                        {t("footer_contact")}
                    </h2>

                    <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center text-gray-300 font-light">
                        <a
                            href="tel:+12148985404"
                            className="flex items-center gap-2 hover:text-yellow-400 transition-colors group"
                        >
                            <Phone size={20} className="text-yellow-500 group-hover:text-yellow-400" />
                            <span>+1 (214) 898-5404</span>
                        </a>

                        <div className="flex flex-col md:flex-row gap-4">
                            <a
                                href="mailto:contacto@atfsolutions.com"
                                className="flex items-center gap-2 hover:text-yellow-400 transition-colors group"
                            >
                                <Mail size={20} className="text-yellow-500 group-hover:text-yellow-400" />
                                <span>contacto@atfsolutions.com</span>
                            </a>
                            <a
                                href="mailto:impuesto@atfsolutions.net"
                                className="flex items-center gap-2 hover:text-yellow-400 transition-colors group"
                            >
                                <Mail size={20} className="text-yellow-500 group-hover:text-yellow-400" />
                                <span>impuesto@atfsolutions.net</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 w-full max-w-2xl pt-8 mt-4">
                    <p className="text-gray-500 text-sm">
                        &copy; {year} ATF Solutions. {t("footer_rights")}
                    </p>
                </div>
            </div>
        </footer>
    )
}