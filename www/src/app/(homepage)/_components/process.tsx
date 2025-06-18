import Image from "next/image";

export default function Process() {
    return (
        <section
            className="flex flex-col items-center justify-center bg-gradient-to-t from-gray-100 via-white to-gray-100 text-black py-20 px-6 w-full h-auto md:h-200 scroll-mt-40"
            id="proceso"
        >
            <h2 className="text-lg font-extrabold" style={{ color: "#ffce1b" }}>
                Proceso
            </h2>
            <h1 className="text-4xl font-thin mb-12 text-center">Nuestro Proceso</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full items-center">
                {/* Left Column */}
                <div className="flex flex-col items-center justify-center gap-y-12">
                    {/* Step 1 */}
                    <div className="max-w-xs text-center">
                        <Image
                            src="/images/gift.png"
                            alt="gift"
                            height={80}
                            width={80}
                            className="mx-auto mb-4"
                        />
                        <h2 className="text-xl font-bold mb-2">
                            Contacto Inicial y Registro
                        </h2>
                        <p className="text-sm text-gray-700">
                            Completa nuestro formulario seguro o llámanos para decirnos qué necesitas.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="max-w-xs text-center">
                        <Image
                            src="/images/text.png"
                            alt="text"
                            height={80}
                            width={80}
                            className="mx-auto mb-4"
                        />
                        <h2 className="text-xl font-bold mb-2">
                            Plan de Acción y Ejecución
                        </h2>
                        <p className="text-sm text-gray-700">
                            Presentamos una estrategia clara y comenzamos a trabajar en tu crédito e impuestos.
                        </p>
                    </div>
                </div>

                {/* Middle Image */}
                <div className="flex justify-center items-center">
                    <Image
                        src="/images/phone.png"
                        alt="phone"
                        height={200}
                        width={200}
                        className="hidden md:block"
                    />
                </div>

                {/* Right Column */}
                <div className="flex flex-col items-center justify-center gap-y-12">
                    {/* Step 3 */}
                    <div className="max-w-xs text-center">
                        <Image
                            src="/images/badge.png"
                            alt="badge"
                            height={80}
                            width={80}
                            className="mx-auto mb-4"
                        />
                        <h2 className="text-xl font-bold mb-2">
                            Análisis y Diagnóstico
                        </h2>
                        <p className="text-sm text-gray-700">
                            Revisamos tu reporte o documentos fiscales y te explicamos tus opciones sin costo.
                        </p>
                    </div>

                    {/* Step 4 */}
                    <div className="max-w-xs text-center">
                        <Image
                            src="/images/hand.png"
                            alt="hand"
                            height={80}
                            width={80}
                            className="mx-auto mb-4"
                        />
                        <h2 className="text-xl font-bold mb-2">
                            Resultados y Seguimiento
                        </h2>
                        <p className="text-sm text-gray-700">
                            Monitoreamos tu progreso, te mantenemos informado y celebramos tus logros financieros.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
