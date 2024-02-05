import React from "react";
import Link from "next/link";

const Modal = () => {
  return (
    <>
    <div className="fixed antialiased md:subpixel-antialiased left-0 top-0 flex w-full pb-6  mt-[198px] bg-zinc-950/90 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:p-2 backdrop-blur-lg border border-zinc-800">
      <ul className="relative flex flex-col justify-center align-middle ">
        <Link
          href="#desarrolloweb"
          className="m-2 bg-gray-600/15 hover:bg-gray-600/30 rounded-lg px-4 py-2 text-gray-500 hover:text-white"
        >
          Desarrolo web
        </Link>
        <Link href="#grafico" className="m-2 bg-gray-600/15 hover:bg-gray-600/30 rounded-lg px-4 py-2 text-gray-500 hover:text-white">
          Ilustraciones
        </Link>
        <Link href="#modelado3d" className="m-2 bg-gray-600/15 hover:bg-gray-600/30 rounded-lg px-4 py-2 text-gray-500 hover:text-white">
          Modelado 3D
        </Link>
      </ul>
    </div>
    <div className="absolute z-50 h-4 w-4 left-[30%] bottom-[47%] bg-zinc-950/90 rotate-45 border-t border-l border-zinc-800"></div>
    </>
    
  );
};

export default Modal;
