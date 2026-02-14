"use client";

import Image from "next/image";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section
            className="min-h-screen w-full bg-white flex items-center justify-center px-8 md:px-24 py-20"
            id="inicio"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full max-w-7xl gap-12 md:gap-20">

                {/* LEFT COLUMN */}
                <div className="flex flex-col justify-center items-start space-y-6">

                    {/* Audience Callout */}
                    <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                        {t("hero_audience_callout")}
                    </p>

                    {/* Main Headline */}
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight text-black">
                        {t("hero_title")}
                        <span style={{ color: "#ffce1b" }}>{t("hero_title_highlight")}</span>
                    </h1>

                    {/* Emotional Subheadline */}
                    <h2 className="text-lg md:text-xl text-gray-700 font-light max-w-xl">
                        {t("hero_subtitle")}
                    </h2>

                    {/* TRUST BAR */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 font-medium pt-2">
                        <span>{t("hero_trust_1")}</span>
                        <span>{t("hero_trust_2")}</span>
                        <span>{t("hero_trust_3")}</span>
                    </div>

                    {/* CTA SECTION */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto mt-6">

                        {/* PRIMARY CTA */}
                        <a
                            href="https://member.myscoreiq.com/get-fico-preferred.aspx?offercode=4321408Z"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <ShimmerButton
                                className="text-white text-md font-extrabold w-full sm:w-80 hover:brightness-110"
                                borderRadius="12px"
                            >
                                {t("hero_cta_primary")}
                            </ShimmerButton>
                        </a>

                        {/* SECONDARY CTA */}
                        <a
                            href="https://wa.me/YOURNUMBER"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center text-black font-semibold underline hover:opacity-70"
                        >
                            {t("hero_cta_secondary")}
                        </a>
                    </div>

                    {/* Micro reassurance */}
                    <p className="text-xs text-gray-500 mt-2">
                        {t("hero_disclaimer")}
                    </p>
                </div>

                {/* RIGHT COLUMN */}
                <div className="relative h-[450px] md:h-[600px] w-full flex items-center justify-center">

                    {/* Soft background accent */}
                    <div className="absolute inset-0 bg-[#ffce1b]/10 rounded-3xl blur-3xl"></div>

                    <Image
                        src="/images/julio3.png"
                        alt="ATF Team"
                        fill
                        className="object-contain object-center relative z-10"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
