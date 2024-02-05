import React from "react";

const Header = () => {
  return (
    <header className="pt-5">
      <figure className="">
        <p className="flex justify-center align-middle text-balance text-5xl w-[300px] lg:text-7xl text-gray-200 font-black text-center lg:text-left mt-6 lg:mt-[16%] lg:w-[1200px] tracking-tight antialiased md:subpixel-antialiased">
          Desarrollo Web, Ilustraciones y 3D.
        </p>
      </figure>
      <section className="">
        <p className="pt-10 mb-10 text-xl text-center text-balance text-gray-500 antialiased md:subpixel-antialiased w-[300px] lg:w-[1200px] italic">
          &quot;La tecnología redefine nuestra realidad, fusionando lo tangible
          con lo virtual para crear una experiencia unificada que transforma
          nuestra forma de {" "}
          <span className="text-gray-200">vivir, trabajar y relacionarnos</span>
          &quot;
        </p>
      </section>
      <section className="flex space-x-10 lg:space-x-40 justify-center align-middle ">
        <button className="text-amber-100 bg-zinc-800/30 hover:bg-zinc-800/50 px-4 py-2 rounded-xl border border-gray-800 w-32 lg:w-auto">
          Saber más
        </button>
        <button className="bg-zinc-300 hover:bg-white px-4 py-2 rounded-xl border border-gray-800 text-zinc-800 hover:text-black">
          Contactate
        </button>
      </section>
    </header>
  );
};

export default Header;
