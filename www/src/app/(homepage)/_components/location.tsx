export default function Location() {
    return (
      <section
        className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-6 items-center justify-items-center bg-gradient-to-br from-white via-gray-100 to-white text-black min-h-screen w-full py-16 md:px-30"
        id="ubicaciones"
      >
        {/* Text Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 max-w-md">
          <h1 className="text-4xl font-extrabold">
            Nuestra Oficina
          </h1>
          <h2 className="text-xl font-thin text-gray-800">
            4005 W Parker Rd, Plano, TX 75023
          </h2>
          <h2 className="text-xl font-thin text-gray-800">
            Lun a vie: 9:00 am - 5:00 pm
          </h2>
        </div>
  
        {/* Map */}
        <div
          className="w-full max-w-md h-[400px] rounded-xl overflow-hidden shadow-lg"
        //   style={{ border: "4px solid #ffce1b" }}
        >
          <iframe
            title="Nuestra Ubicación"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.5441817900637!2d-96.77373902346228!3d33.04213737355391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c22ed521e182f%3A0x1b917a80210f1f54!2sMcDonald&#39;s!5e0!3m2!1sen!2sus!4v1750195185308!5m2!1sen!2sus"
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
  