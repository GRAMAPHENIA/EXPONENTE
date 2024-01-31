import React from "react";

const Header = () => {
  return (
    <header className="pt-5">
      <figure className="">
        <p className="flex justify-center align-middle text-balance text-5xl w-[300px] lg:text-7xl text-gray-200/80 font-extrabold text-center lg:text-left mt-24 lg:mt-[18%] lg:w-[1200px] tracking-tight antialiased md:subpixel-antialiased">
          Tangible y Virtual, Una Visión
        </p>
      </figure>
      <section className="">
        <p className="pt-10 mb-10 text-xl text-center text-balance text-gray-500 antialiased md:subpixel-antialiased w-[300px] lg:w-[1200px]">
          La tecnología redefine cómo vivimos, trabajamos y nos relacionamos,
          creando un universo donde lo real y lo virtual convergen en{" "}
          <span className="text-gray-200">una sola experiencia</span>.
        </p>
      </section>
      <section className="flex space-x-10 lg:space-x-40 justify-center align-middle ">
        <button className="bg-zinc-800/30 hover:bg-zinc-800/50 px-4 py-2 rounded-xl border border-gray-800 w-32 lg:w-auto">
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
