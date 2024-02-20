import Image from "next/image";

const DecoradorEstudios = () => {
  return (
    <>
      <section className="grid grid-cols-3 ">
        <figure className="flex flex-col justify-end col-span-1 lg:col-span-1 text-right">
          <p
            className="text-4xl lg:text-5xl text-gray-400/80 font-black text-left antialiased md:subpixel-antialiased"
            id="grafico"
          >
            Estudios
          </p>
          <p className="text-balance text-left font-normal text-gray-500 w-auto lg:w-[300px] lg:m-auto">
            Tomar esta ruta para descubrir los detalles del{" "}
            <span className="text-amber-100 font-light">Estudios</span>.
          </p>
        </figure>
        <Image
          className="col-span-2 col-start-3 col-end-4"
          src="/svgs/decoradores/decorador-acerca-de.svg"
          alt="imagen del logo de la empresa"
          width="300"
          height="200"
          priority={true}
        />
      </section>
    </>
  );
};

export default DecoradorEstudios;
