import Image from "next/image"
export default function Footer(){
    return (
        <footer className="flex flex-col items-center justify-center bg-black text-white md:h-80 h-auto w-full py-8">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <Image
                    src="/images/atf_logo.png"
                    alt="logo"
                    height={200}
                    width={200}
                    className="object-contain h-[120px] w-[120px] md:h-[200px] md:w-[200px]"
                />
                <div className="flex flex-col justify-center mx-4 text-sm md:text-lg">
                    <h2 className="font-extrabold uppercase" style={{ color: "#ffce1b" }}>
                        <span className="border-b-2 border-grey-400">
                            Contacto
                        </span>
                    </h2>
                    <ul className="mt-4 space-y-2 font-thin">
                        <li>📞 +1 (214) 898-5404</li>
                        <li>✉️ contacto@atfsolutions.com</li>
                        <li>✉️ impuesto@atfsolutions.net</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}