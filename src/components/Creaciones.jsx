import Image from "next/image";
import Link from "next/link";

const Creaciones = () => {
  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-20 mb-60 text-center">
        <figure className="col-span-1 lg:col-span-2 text-center">
          <p className="text-5xl lg:text-7xl text-gray-200/80 font-extrabold text-center antialiased md:subpixel-antialiased">
            Realizado
          </p>
          <p className="text-5xl lg:text-4xl text-slate-600/70 font-extrabold text-center antialiased md:subpixel-antialiased mt-5 ">
            Web
          </p>
          <p className="text-balance text-gray-500 w-auto lg:w-[300px] lg:m-auto">
            Tomar esta ruta para descubrir los detalles del{" "}
            <span className="text-gray-200">Desarrollo Web</span>.
          </p>
        </figure>

        <figure className="group text-center">
          <Image
            src="/experiencia/uno.png"
            alt="gramaphenia Logo"
            width={500}
            height={500}
            priority
            className="border-2 opacity-60 hover:opacity-100 border-dotted border-gray-600 hover:border-gray-400 rounded-lg cursor-pointer"
          />
          <p className="group-hover:text-gray-100 text-blue-200/30 pt-5 text-lg lg:text-2xl font-mono">
            Concepto Hexágono
          </p>
        </figure>
        <figure className="group text-center">
          <Image
            src="/experiencia/dos.png"
            alt="gramaphenia Logo"
            width={500}
            height={500}
            priority
            className="border-2 opacity-60 hover:opacity-100 border-dotted border-gray-600 hover:border-gray-400 rounded-lg cursor-pointer"
          />
          <p className="group-hover:text-gray-100 text-blue-200/30 pt-5 text-lg lg:text-2xl font-mono">
            Di corato Luthier
          </p>
        </figure>
        <button className="col-span-1 lg:col-span-2 bg-zinc-800/30 hover:bg-zinc-800/50 px-4 py-2 rounded-xl border border-gray-800 w-[200px] m-auto">
          Más Trabajos
        </button>
      </section>
    </>
  );
};

export default Creaciones;
