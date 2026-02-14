"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Services() {
  const { t } = useLanguage();

  return (
    <section
      className="flex flex-col items-center justify-center bg-gradient-to-t from-gray-100 via-white to-gray-100 text-black h-auto md:h-200 w-full py-16 px-6 scroll-mt-40"
      id="servicios"
    >
      <h2 className="text-lg font-extrabold" style={{ color: "#ffce1b" }}>
        {t("services_title")}
      </h2>
      <h1 className="text-4xl font-thin text-center mb-16 max-w-3xl">
        {t("services_heading")}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-8 max-w-6xl w-full">
        <div className="bg-white p-6 rounded-2xl shadow-xl">
          <h2
            className="text-xl font-extrabold mb-4"
            style={{ color: "#ffce1b" }}
          >
            {t("service_1_title")}
          </h2>
          <p className="text-sm text-black/80">
            {t("service_1_desc")}
            <span className="block mt-2 text-black font-medium">
              {t("service_1_ideal")}
            </span>
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-xl">
          <h2
            className="text-xl font-extrabold mb-4"
            style={{ color: "#ffce1b" }}
          >
            {t("service_2_title")}
          </h2>
          <p className="text-sm text-black/80">
            {t("service_2_desc")}
            <span className="block mt-2 text-black font-medium">
              {t("service_2_ideal")}
            </span>
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-xl">
          <h2
            className="text-xl font-extrabold mb-4"
            style={{ color: "#ffce1b" }}
          >
            {t("service_3_title")}
          </h2>
          <p className="text-sm text-black/80">
            {t("service_3_desc")}
            <span className="block mt-2 text-black font-medium">
              {t("service_3_ideal")}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
