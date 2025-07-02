import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <section
            className="relative flex flex-col items-center justify-center bg-[url('/images/bg.jpg')] bg-cover bg-center bg-no-repeat h-screen w-full"
            id="inicio"
        >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />

            {/* Text Content */}
            <div className="relative z-10 p-6 max-w-3xl text-center font-thin">
                <h1 className="text-4xl mb-4" style={{ color: "#ffce1b" }}>
                    Optimiza Tu Crédito y Presenta Tus Impuestos Fácil y Seguro
                </h1>
                <h2 className="text-white text-lg">
                    Tu solución integral en EE.UU.: reparamos tu crédito, preparamos tus taxes y corregimos errores pasados. Todo con expertos que hablan tu idioma.
                </h2>

                <div className="flex flex-col items-center justify-center gap-y-2 mt-2">
                    <a
                        href="https://api.whatsapp.com/send?phone=12148985404"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button
                            className="text-black text-md font-extrabold w-80 hover:brightness-110"
                            style={{ background: "#ffce1b" }}
                        >
                            Empieza con una Consulta GRATIS
                        </Button>
                    </a>

                    <a
                        href="https://member.myscoreiq.com/get-fico-preferred.aspx?offercode=4321408Z"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button
                            className="text-white text-md font-extrabold w-80 hover:brightness-110"
                            style={{ color: "#ffce1b" }}
                        >
                            Descarga aquí tu reporte GRATIS
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    );
}
