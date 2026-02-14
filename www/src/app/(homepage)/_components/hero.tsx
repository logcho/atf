"use client";

import Image from "next/image";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section
            className="min-h-screen w-full bg-white flex items-center justify-center px-8 md:px-24 py-8 md:py-24"
            id="inicio"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full max-w-7xl gap-8 md:gap-16">
                {/* Left Column: Text Content */}
                <div className="flex flex-col justify-center items-start space-y-6">
                    <h1 className="text-4xl font-bold leading-tight" style={{ color: "#ffce1b" }}>
                        {t("hero_title")}
                    </h1>
                    <h2 className="text-black md:text-2xl text-xl font-light text-left">
                        {t("hero_subtitle")}
                    </h2>

                    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto mt-4">
                        {/* WhatsApp button removed */}

                        <a
                            href="https://member.myscoreiq.com/get-fico-preferred.aspx?offercode=4321408Z"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <ShimmerButton
                                className="text-white text-md font-extrabold w-full sm:w-80 hover:brightness-110"
                                borderRadius="12px"
                            >
                                {t("hero_cta")}
                            </ShimmerButton>
                        </a>
                    </div>
                </div>

                {/* Right Column: Image */}
                <div className="relative h-[450px] md:h-[800px] w-full flex items-center justify-center">
                    <Image
                        src="/images/julio3.png"
                        alt="ATF Team"
                        fill
                        className="object-contain object-center rounded-xl"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
