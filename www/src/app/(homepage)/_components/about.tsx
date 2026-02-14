"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section
      className="flex flex-col md:flex-row items-center justify-center gap-10 bg-gradient-to-t from-gray-100 via-white to-gray-100 text-black py-20 px-6 w-full h-auto md:h-160 scroll-mt-40"
      id="quienes-somos"
    >
      {/* Left: Image */}
      <div className="flex justify-center">
        <Image
          src="/images/julio.png"
          alt="julio"
          height={400}
          width={400}
          className="rounded-xl shadow-lg object-cover bg-[url('/images/bg.jpg')] bg-cover bg-center bg-no-repeat md:h-[400px] md:w-[300px] h-[300px] w-[200px]"
        />
      </div>

      {/* Right: Text */}
      <div className="max-w-xl text-center md:text-left">
        <h2
          className="text-lg font-extrabold mb-2"
          style={{ color: "#ffce1b" }}
        >
          {t("about_title")}
        </h2>
        <h1 className="text-4xl font-thin mb-4">{t("about_heading")}</h1>
        <p className="text-base leading-relaxed">
          {t("about_body")}
        </p>
      </div>
    </section>
  );
}
