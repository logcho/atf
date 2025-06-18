import Image from "next/image";

export default function About() {
  return (
    <section
      className="flex flex-col md:flex-row items-center justify-center gap-10 bg-gradient-to-t from-gray-100 via-white to-gray-100 text-black py-20 px-6 w-full"
      id="quienes-somos"
    >
      {/* Left: Image */}
      <div className="flex justify-center">
        <Image
          src="/images/julio2.png"
          alt="julio"
          height={400}
          width={400}
          className="rounded-xl shadow-lg object-cover bg-[url('/images/bg.jpg')] bg-cover bg-center bg-no-repeat"
        />
      </div>

      {/* Right: Text */}
      <div className="max-w-xl text-center md:text-left">
        <h2
          className="text-lg font-extrabold mb-2"
          style={{ color: "#ffce1b" }}
        >
          ¿Quiénes Somos?
        </h2>
        <h1 className="text-4xl font-thin mb-4">Conoce a Julio y ATF Solutions</h1>
        <p className="text-base leading-relaxed">
          En ATF Solutions, liderados por Julio, ofrecemos soluciones financieras personalizadas para ayudarte a mejorar tu crédito, resolver tus impuestos y alcanzar tus metas económicas. Nos enorgullece brindar atención cercana, honesta y eficaz a cada cliente.
        </p>
      </div>
    </section>
  );
}
