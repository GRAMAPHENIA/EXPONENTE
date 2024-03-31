import Image from "next/image";

const DecoradorEstudios = () => {
  const tecnologias = {
    web: [
      { nombre: "html" },
      { nombre: "css" },
      { nombre: "tailwind" },
      { nombre: "js" },
      { nombre: "react" },
      { nombre: "next" },
      { nombre: "node" },
      { nombre: "express" },
    ],
    ilustracion: [
      { nombre: "photoshop" },
      { nombre: "illustrator" },
      { nombre: "Figma" },
    ],
    tresd: [
      { nombre: "Blender" },
      { nombre: "Godot" },
      { nombre: "Unity" },
      { nombre: "Unreal Engine" },
    ],
  };

  console.log(tecnologias);

  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-3 mb-20">
        <figure className="flex flex-col col-span-3 text-center">
          <p className="text-4xl lg:text-5xl text-gray-400/80 font-black text-center antialiased md:subpixel-antialiased pt-10">
            Estudios
          </p>
          <p className="text-balance font-normal text-gray-500 w-auto lg:w-[300px] lg:m-auto">
            Ruta para descubrir los detalles de los{" "}
            <span className="text-amber-100 font-light">Estudios</span>.
          </p>
        </figure>
      </section>

      <section></section>
    </>
  );
};

export default DecoradorEstudios;
