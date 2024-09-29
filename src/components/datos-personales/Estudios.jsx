import React from "react";

const DecoradorEstudios = () => {
  const tecnologias = [
    { nombre: "Html" },
    { nombre: "CSS" },
    { nombre: "JavaScript" },
    { nombre: "Tailwind" },
    { nombre: "React" },
    { nombre: "Next" },
    { nombre: "Node" },
    { nombre: "Express" },
    // { nombre: "C#" },
    // { nombre: "GD Script" },
    { nombre: "Figma" },
    { nombre: "Photoshop" },
    { nombre: "Illustrator" },
    { nombre: "Blender" },
    { nombre: "Godot" },
    { nombre: "Unity" },
    { nombre: "Unreal Engine" },
  ];

  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-3 mb-20">
        <figure className="col-span-3 text-center">
          <p className="text-4xl lg:text-5xl text-gray-400/80 font-black antialiased md:subpixel-antialiased pt-10">
            Estudios
          </p>
          <p className="text-balance font-normal text-gray-500 w-auto lg:w-[300px] lg:m-auto">
            Ruta para descubrir los detalles de los{" "}
            <span className="text-amber-100 font-light">Estudios</span>.
          </p>
        </figure>
      </section>

      <section className="flex justify-center">
        <div className="flex flex-wrap justify-center gap-2">
          {tecnologias.map((tec, index) => (
            <div
              key={index}
              className="border-2 rounded-full border-gray-500/50 p-2 mb-2 text-center text-amber-100 bg-zinc-800/30 backdrop-blur-lg w-36"
            >
              {tec.nombre}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default DecoradorEstudios;
