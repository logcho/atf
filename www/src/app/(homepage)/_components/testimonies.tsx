"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Testimonies() {
    const { t } = useLanguage();

    const testimonies = [
        {
            name: "María G.",
            feedback: t("testimony_1_feedback"),
            image: "/images/person1.png", // optional
        },
        {
            name: "José R.",
            feedback: t("testimony_2_feedback"),
            image: "/images/person2.png",
        },
        {
            name: "Ana L.",
            feedback: t("testimony_3_feedback"),
            image: "/images/person3.png",
        },
    ];

    return (
        <section
            className="flex flex-col items-center justify-center bg-gradient-to-t from-gray-100 via-white to-gray-100 text-black py-20 px-6 w-full h-auto scroll-mt-40"
            id="testimonios"
        >
            <h2 className="text-lg font-extrabold mb-2" style={{ color: "#ffce1b" }}>
                {t("testimonies_title")}
            </h2>
            <h1 className="text-4xl font-thin mb-12 text-center">
                {t("testimonies_heading")}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
                {testimonies.map((testimony, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center"
                    >
                        {testimony.image && (
                            <Image
                                src={testimony.image}
                                alt={testimony.name}
                                width={200}
                                height={200}
                                className="w-16 h-16 rounded-full mb-4 object-cover"
                            />
                        )}
                        <p className="text-gray-700 italic mb-4">&quot;{testimony.feedback}&quot;</p>
                        <h3 className="font-bold text-sm text-gray-900">{testimony.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}
