"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Location() {
  const { t } = useLanguage();

  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-6 items-center justify-items-center bg-gradient-to-t from-gray-100 via-white to-gray-100 text-black h-auto md:h-200 w-full py-16 md:px-30 scroll-mt-40"
      id="ubicaciones"
    >
      {/* Text Content */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 max-w-md">
        <h2 className="text-lg font-extrabold" style={{ color: "#ffce1b" }}>
          {t("location_title")}
        </h2>
        <h1 className="text-4xl font-extrabold">
          {t("location_heading")}
        </h1>
        <h2 className="text-xl font-thin text-gray-800">
          {t("location_address")}
        </h2>
        <h2 className="text-xl font-thin text-gray-800">
          {t("location_hours")}
        </h2>
      </div>

      {/* Map */}
      <div
        className="w-full max-w-md h-[400px] rounded-xl overflow-hidden shadow-lg"
      //   style={{ border: "4px solid #ffce1b" }}
      >
        <iframe
          title="Nuestra Ubicación"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.890233895673!2d-96.8013412234634!3d33.006669273568555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c23b5e5c39a67%3A0xaac1af960feb61f6!2sPreston%20Bend!5e0!3m2!1sen!2sus!4v1751342630608!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
