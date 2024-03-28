import Image from "next/image";

const DecoradorPerfil = () => {
  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
        <Image
          className="flex justify-center align-middle col-span-1 lg:col-span-2 mx-auto lg:mx-0"
          src="/svgs/decoradores/decorador-estudio.svg"
          alt="imagen del logo de la empresa"
          width="200"
          height="75"
          priority={true}
        />
        <figure className="flex flex-col justify-end col-span-1 lg:col-span-1 text-right">
          <p
            className="text-4xl lg:text-5xl text-gray-400/80 font-black text-center lg:text-right antialiased md:subpixel-antialiased"
            id="grafico"
          >
            Perfil
          </p>
          <p className="text-balance text-center lg:text-right font-normal text-gray-500 w-auto ">
            Tomar esta ruta para descubrir los detalles del{" "}
            <span className="text-amber-100 font-light">Perfil</span>.
          </p>
        </figure>
      </section>
      <Image
        className="col-span-3 m-auto rounded-full"
        src="/foto-perfil.svg"
        alt="imagen del logo de la empresa"
        width="300"
        height="300"
        priority={true}
      />
      <section className="w-[800px] col-span-3 m-auto pt-10">
        <p className="text-slate-400 text-lg font-extralight text-center text-pretty p-4">
          Nacido en julio de 1981, me fui desarrollando hasta poder expandir mi
          perspectiva geográfica. Cursé estudios básicos de computación. Me
          aficioné a las artes y la tecnología con dedicación asíncrona. Mas las
          vistas y perspectivas puestas en la concentración diaria, me dieron
          como objeto de estudio actual, la programación, la ilustración digital
          y el modelado 3D.
        </p>
      </section>

      <button
        // onClick={openModal}
        className=" bg-zinc-800/30 hover:bg-zinc-800/50 backdrop-blur-sm px-4 py-2  mt-20 rounded-xl border border-gray-800 w-[200px] m-auto hover:text-amber-100"
      >
        Detalles
      </button>
    </>
  );
};

export default DecoradorPerfil;
