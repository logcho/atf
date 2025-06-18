export default function Testimonies() {
    const testimonies = [
        {
            name: "María G.",
            feedback:
                "Gracias a ATF Solutions mejoré mi crédito en pocos meses. El proceso fue claro y siempre estuvieron disponibles.",
            image: "/images/person1.png", // optional
        },
        {
            name: "José R.",
            feedback:
                "Tenía muchas dudas con mis impuestos, pero el equipo fue profesional, rápido y muy amable. ¡Los recomiendo!",
            image: "/images/person2.png",
        },
        {
            name: "Ana L.",
            feedback:
                "Los resultados superaron mis expectativas. Ahora tengo una mejor salud financiera y mucha más confianza.",
            image: "/images/person3.png",
        },
    ];

    return (
        <section
            className="flex flex-col items-center justify-center bg-gradient-to-t from-gray-100 via-white to-gray-100 text-black py-20 px-6 w-full h-auto"
            id="testimonios"
        >
            <h2 className="text-lg font-extrabold mb-2" style={{ color: "#ffce1b" }}>
                Testimonios
            </h2>
            <h1 className="text-4xl font-thin mb-12 text-center">
                Lo que nuestros clientes opinan
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
                {testimonies.map((testimony, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center"
                    >
                        {testimony.image && (
                            <img
                                src={testimony.image}
                                alt={testimony.name}
                                className="w-16 h-16 rounded-full mb-4 object-cover"
                            />
                        )}
                        <p className="text-gray-700 italic mb-4">"{testimony.feedback}"</p>
                        <h3 className="font-bold text-sm text-gray-900">{testimony.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}
