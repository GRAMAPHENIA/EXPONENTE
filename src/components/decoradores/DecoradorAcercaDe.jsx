import Image from "next/image";

const DecoradorAcercaDe = () => {
  return (
    <>
      <section className="grid grid-cols-3 ">
        <Image
          className="flex justify-center align-middle col-span-2"
          src="/svgs/decoradores/decorador-estudio.svg"
          alt="imagen del logo de la empresa"
          width="150"
          height="75"
          priority={true}
        />
        <figure className="flex flex-col justify-end col-span-1 lg:col-span-1 text-right">
          <p
            className="text-4xl lg:text-5xl text-gray-400/80 font-black text-right antialiased md:subpixel-antialiased"
            id="grafico"
          >
            Perfil
          </p>
          <p className="text-balance text-right font-normal text-gray-500 w-auto lg:w-[300px]">
            Tomar esta ruta para descubrir los detalles del{" "}
            <span className="text-amber-100 font-light">Perfil</span>.
          </p>
        </figure>
      </section>
    </>
  );
};

export default DecoradorAcercaDe;
