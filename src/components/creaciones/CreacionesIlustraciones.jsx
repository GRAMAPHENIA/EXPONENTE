import Image from "next/image";

const CreacionesIlustraciones = () => {
  return (
    <>
      <figure className="col-span-1 lg:col-span-2 text-center mt-20">
        <p
          className="text-4xl lg:text-5xl text-gray-400/80 font-black text-center antialiased md:subpixel-antialiased pt-10"
          id="grafico"
        >
          Ilustrado
        </p>
        <p className="text-balance font-normal text-gray-500 w-auto lg:w-[300px] lg:m-auto">
          Tomar esta ruta para descubrir los detalles de las{" "}
          <span className="text-amber-100 font-light">Ilustraciones</span>.
        </p>
      </figure>

      <figure className="group text-center">
        <Image
          src="/experiencia/ilustraciones/uno.png"
          alt="gramaphenia Logo"
          width={500}
          height={500}
          priority
          className="border-2 opacity-80 hover:opacity-100 border-dotted border-gray-600 hover:border-gray-400 rounded-lg cursor-pointer"
        />
        <p className="group-hover:text-gray-100 text-blue-200/30 p-1 text-lg font-mono  rounded-md mt-4 bg-gray-600/15">
          Lineales
        </p>
      </figure>
      <figure className="group text-center">
        <Image
          src="/experiencia/ilustraciones/dos.png"
          alt="gramaphenia Logo"
          width={500}
          height={500}
          priority
          className="border-2 opacity-80 hover:opacity-100 border-dotted border-gray-600 hover:border-gray-400 rounded-lg cursor-pointer"
        />
        <p className="group-hover:text-gray-100 text-blue-200/30 p-1 text-lg font-mono  rounded-md mt-4 bg-gray-600/15">
          A color
        </p>
      </figure>
      <button className="col-span-1 lg:col-span-2 bg-zinc-800/30 hover:bg-zinc-800/50 px-4 py-2 rounded-xl border border-gray-800 w-[200px] m-auto hover:text-amber-100">
        Más Trabajos
      </button>
    </>
  );
};

export default CreacionesIlustraciones;
