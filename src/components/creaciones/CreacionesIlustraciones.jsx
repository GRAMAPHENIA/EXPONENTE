import Image from "next/image";

const CreacionesIlustraciones = () => {
  return (
    <>
      <figure className="col-span-1 lg:col-span-2 text-center mt-20">
        <p className="text-4xl lg:text-5xl text-gray-400/80 font-black text-center antialiased md:subpixel-antialiased">
          Ilustrado
        </p>
        <p className="text-2xl lg:text-4xl text-slate-600/70 font-extrabold text-center antialiased md:subpixel-antialiased mt-5 ">
          2D
        </p>
        <p className="text-balance font-thin text-gray-500 w-auto lg:w-[300px] lg:m-auto">
          Tomar esta ruta para descubrir los detalles del{" "}
          <span className="text-gray-200 font-light">Diseño Gráfico</span>.
        </p>
      </figure>

      <figure className="group text-center">
        <Image
          src="/experiencia/ilustraciones/uno.png"
          alt="gramaphenia Logo"
          width={500}
          height={500}
          priority
          className="border-2 opacity-60 hover:opacity-100 border-dotted border-gray-600 hover:border-gray-400 rounded-lg cursor-pointer"
        />
        <p className="group-hover:text-gray-100 text-blue-200/30 pt-5 text-lg lg:text-2xl font-mono">
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
          className="border-2 opacity-60 hover:opacity-100 border-dotted border-gray-600 hover:border-gray-400 rounded-lg cursor-pointer"
        />
        <p className="group-hover:text-gray-100 text-blue-200/30 pt-5 text-lg lg:text-2xl font-mono">
          A color
        </p>
      </figure>
      <button className="col-span-1 lg:col-span-2 bg-zinc-800/30 hover:bg-zinc-800/50 px-4 py-2 rounded-xl border border-gray-800 w-[200px] m-auto">
        Más Trabajos
      </button>
    </>
  );
};

export default CreacionesIlustraciones;