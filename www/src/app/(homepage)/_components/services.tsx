export default function Services() {
    return (
      <section
        className="flex flex-col items-center justify-center bg-gradient-to-t from-gray-100 via-white to-gray-100 text-black h-auto md:h-200 w-full py-16 px-6"
        id="servicios"
      >
        <h2 className="text-lg font-extrabold" style={{ color: "#ffce1b" }}>
          Servicios
        </h2>
        <h1 className="text-4xl font-thin text-center mb-16 max-w-3xl">
          Soluciones Financieras Completas para Tu Vida en EE.UU.
        </h1>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-8 max-w-6xl w-full">
          <div className="bg-white p-6 rounded-2xl shadow-xl">
            <h2
              className="text-xl font-extrabold mb-4"
              style={{ color: "#ffce1b" }}
            >
              Reparación y Construcción de Crédito
            </h2>
            <p className="text-sm text-black/80">
              Analizamos tu reporte, disputamos errores y te guiamos para construir un historial sólido.
              Abre puertas a mejores préstamos, vivienda y oportunidades.
              <span className="block mt-2 text-black font-medium">
                Ideal para: Mejorar puntaje, eliminar errores, construir historial.
              </span>
            </p>
          </div>
  
          <div className="bg-white p-6 rounded-2xl shadow-xl">
            <h2
              className="text-xl font-extrabold mb-4"
              style={{ color: "#ffce1b" }}
            >
              Preparación de Impuestos Personales (Taxes)
            </h2>
            <p className="text-sm text-black/80">
              Presenta tus impuestos rápido y fácil.
              Maximizamos tu reembolso y aseguramos cumplimiento con el IRS, ya sea con ITIN o SSN.
              <span className="block mt-2 text-black font-medium">
                Ideal para: Declaración anual, maximizar reembolso, evitar errores.
              </span>
            </p>
          </div>
  
          <div className="bg-white p-6 rounded-2xl shadow-xl">
            <h2
              className="text-xl font-extrabold mb-4"
              style={{ color: "#ffce1b" }}
            >
              Corrección de Impuestos (Enmiendas)
            </h2>
            <p className="text-sm text-black/80">
              ¿Errores en declaraciones pasadas?
              Te ayudamos a corregir y presentar enmiendas correctamente ante el IRS.
              <span className="block mt-2 text-black font-medium">
                Ideal para: Corregir errores, añadir información, responder notificaciones.
              </span>
            </p>
          </div>
        </div>
      </section>
    );
  }
  