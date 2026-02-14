"use client";

import React, { createContext, useContext, useState } from "react";

type Language = "es" | "en";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
    es: {
        // Navbar
        nav_home: "Inicio",
        nav_about: "Quienes somos",
        nav_services: "Servicios",
        nav_process: "Proceso",
        nav_testimonials: "Testimonios",
        nav_locations: "Ubicaciones",
        nav_switch_lang: "Switch to English",

        // Hero
        hero_title: "Optimiza Tu Crédito y Presenta Tus Impuestos Fácil y Seguro",
        hero_subtitle: "Tu solución integral en EE.UU.: reparamos tu crédito, preparamos tus taxes y corregimos errores pasados. Todo con expertos que hablan tu idioma.",
        hero_cta: "Descarga aquí tu reporte GRATIS",

        // About
        about_title: "¿Quiénes Somos?",
        about_heading: "Conoce a Julio y ATF Solutions",
        about_body: "En ATF Solutions, liderados por Julio, ofrecemos soluciones financieras personalizadas para ayudarte a mejorar tu crédito, resolver tus impuestos y alcanzar tus metas económicas. Nos enorgullece brindar atención cercana, honesta y eficaz a cada cliente.",

        // Services
        services_title: "Servicios",
        services_heading: "Soluciones Financieras Completas para Tu Vida en EE.UU.",
        // Service 1
        service_1_title: "Reparación y Construcción de Crédito",
        service_1_desc: "Analizamos tu reporte, disputamos errores y te guiamos para construir un historial sólido. Abre puertas a mejores préstamos, vivienda y oportunidades.",
        service_1_ideal: "Ideal para: Mejorar puntaje, eliminar errores, construir historial.",
        // Service 2
        service_2_title: "Preparación de Impuestos Personales (Taxes)",
        service_2_desc: "Presenta tus impuestos rápido y fácil. Maximizamos tu reembolso y aseguramos cumplimiento con el IRS, ya sea con ITIN o SSN.",
        service_2_ideal: "Ideal para: Declaración anual, maximizar reembolso, evitar errores.",
        // Service 3
        service_3_title: "Corrección de Impuestos (Enmiendas)",
        service_3_desc: "¿Errores en declaraciones pasadas? Te ayudamos a corregir y presentar enmiendas correctamente ante el IRS.",
        service_3_ideal: "Ideal para: Corregir errores, añadir información, responder notificaciones.",

        // Process
        process_title: "Proceso",
        process_heading: "Nuestro Proceso",
        process_step1_title: "Contacto Inicial y Registro",
        process_step1_desc: "Completa nuestro formulario seguro o llámanos para decirnos qué necesitas.",
        process_step2_title: "Plan de Acción y Ejecución",
        process_step2_desc: "Presentamos una estrategia clara y comenzamos a trabajar en tu crédito e impuestos.",
        process_step3_title: "Análisis y Diagnóstico",
        process_step3_desc: "Revisamos tu reporte o documentos fiscales y te explicamos tus opciones sin costo.",
        process_step4_title: "Resultados y Seguimiento",
        process_step4_desc: "Monitoreamos tu progreso, te mantenemos informado y celebramos tus logros financieros.",

        // Testimonies
        testimonies_title: "Testimonios",
        testimonies_heading: "Lo que nuestros clientes opinan",
        testimony_1_feedback: "Gracias a ATF Solutions mejoré mi crédito en pocos meses. El proceso fue claro y siempre estuvieron disponibles.",
        testimony_2_feedback: "Tenía muchas dudas con mis impuestos, pero el equipo fue profesional, rápido y muy amable. ¡Los recomiendo!",
        testimony_3_feedback: "Los resultados superaron mis expectativas. Ahora tengo una mejor salud financiera y mucha más confianza.",

        // Location
        location_title: "Ubicaciones",
        location_heading: "Nuestra Oficina",
        location_address: "18790 Lloyd Dr, Dallas, TX 75252",
        location_hours: "Lun a vie: 9:00 am - 5:00 pm",

        // Footer
        footer_contact: "Contacto",
        footer_rights: "Todos los derechos reservados.",
    },
    en: {
        // Navbar
        nav_home: "Home",
        nav_about: "About Us",
        nav_services: "Services",
        nav_process: "Process",
        nav_testimonials: "Testimonials",
        nav_locations: "Locations",
        nav_switch_lang: "Cambiar a Español",

        // Hero
        hero_title: "Optimize Your Credit and File Your Taxes Easily and Securely",
        hero_subtitle: "Your comprehensive solution in the U.S.: we repair your credit, prepare your taxes, and correct past errors. All with experts who speak your language.",
        hero_cta: "Download your FREE report here",

        // About
        about_title: "Who Are We?",
        about_heading: "Meet Julio and ATF Solutions",
        about_body: "At ATF Solutions, led by Julio, we offer personalized financial solutions to help you improve your credit, resolve your taxes, and achieve your financial goals. We pride ourselves on providing close, honest, and effective attention to every client.",

        // Services
        services_title: "Services",
        services_heading: "Complete Financial Solutions for Your Life in the U.S.",
        // Service 1
        service_1_title: "Credit Repair and Building",
        service_1_desc: "We analyze your report, dispute errors, and guide you to build a solid history. Opens doors to better loans, housing, and opportunities.",
        service_1_ideal: "Ideal for: Improving score, eliminating errors, building history.",
        // Service 2
        service_2_title: "Personal Tax Preparation",
        service_2_desc: "File your taxes quickly and easily. We maximize your refund and ensure compliance with the IRS, whether with ITIN or SSN.",
        service_2_ideal: "Ideal for: Annual filing, maximizing refund, avoiding errors.",
        // Service 3
        service_3_title: "Tax Correction (Amendments)",
        service_3_desc: "Errors in past returns? We help you correct and file amendments correctly with the IRS.",
        service_3_ideal: "Ideal for: Correcting errors, adding information, responding to notices.",

        // Process
        process_title: "Process",
        process_heading: "Our Process",
        process_step1_title: "Initial Contact and Registration",
        process_step1_desc: "Complete our secure form or call us to tell us what you need.",
        process_step2_title: "Action Plan and Execution",
        process_step2_desc: "We present a clear strategy and begin working on your credit and taxes.",
        process_step3_title: "Analysis and Diagnosis",
        process_step3_desc: "We review your report or tax documents and explain your options at no cost.",
        process_step4_title: "Results and Follow-up",
        process_step4_desc: "We monitor your progress, keep you informed, and celebrate your financial achievements.",

        // Testimonies
        testimonies_title: "Testimonials",
        testimonies_heading: "What our clients say",
        testimony_1_feedback: "Thanks to ATF Solutions I improved my credit in a few months. The process was clear and they were always available.",
        testimony_2_feedback: "I had many doubts about my taxes, but the team was professional, fast, and very kind. I recommend them!",
        testimony_3_feedback: "The results exceeded my expectations. Now I have better financial health and much more confidence.",

        // Location
        location_title: "Locations",
        location_heading: "Our Office",
        location_address: "18790 Lloyd Dr, Dallas, TX 75252",
        location_hours: "Mon to Fri: 9:00 am - 5:00 pm",

        // Footer
        footer_contact: "Contact",
        footer_rights: "All rights reserved.",
    },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>("es");

    const t = (key: string) => {
        // @ts-expect-error: Dynamic key access not strictly typed
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
