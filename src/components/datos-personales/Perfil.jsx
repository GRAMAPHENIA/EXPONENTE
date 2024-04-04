import Image from "next/image";

const DecoradorPerfil = () => {
  return (
    <>
      <figure className="col-span-1 lg:col-span-2 text-center">
        <Image
          id="perfil"
          className="col-span-3 m-auto"
          src="/svgs/decoradores/seccion-creaciones.svg"
          alt="Imagen en svg de un diseño de geometrias sencillas con circulos y cuadrados para separar seccion"
          width={50}
          height={50}
          priority
        />
        <p className="text-4xl lg:text-5xl text-gray-400/80 font-black text-center antialiased md:subpixel-antialiased pt-10">
          Perfíl
        </p>
        <p className="text-balance font-normal text-gray-500 w-auto lg:w-[300px] lg:m-auto">
          Ruta para descubrir los detalles del{" "}
          <span className="text-amber-100 font-light">Perfíl</span>.
        </p>
      </figure>

      <Image
        className="col-span-3 m-auto rounded-full bg-gray-600/10 p-4 border-2 border-gray-700/30 mt-5"
        src="/foto-perfil.svg"
        alt="imagen del logo de la empresa"
        width="200"
        height="200"
        priority={true}
      />
      <section className=" col-span-3 m-auto pt-5">
        <p className="text-slate-400 text-lg font-extralight text-center text-pretty">
          <span className="text-amber-100">Nacido en julio de 1981</span>. Fui
          desarrollandome hasta poder conseguir algo de perspectiva. Cursé{" "}
          <span className="text-amber-100">
            estudios básicos en programación
          </span>
          . Me aficioné a las{" "}
          <span className="text-amber-100">artes y tecnología</span> con
          dedicación asíncrona. Las vistas puestas en la 
          <span className="text-amber-100"> concentración</span> diaria, me
          dieron como objeto de{" "}
          <span className="text-amber-100">
            desarrollo y estudio actual, la programación web, la ilustración digital
            y el modelado 3D
          </span>{" "}
          .
        </p>
      </section>

      <button
        // onClick={openModal}
        className="bg-zinc-800/30 hover:bg-zinc-800/50 px-4 py-2  mt-5 rounded-xl border border-gray-800 w-[200px] m-auto hover:text-amber-100"
      >
        Laboral
      </button>
    </>
  );
};

export default DecoradorPerfil;
