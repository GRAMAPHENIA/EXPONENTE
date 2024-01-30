import React from "react";
import Link from "next/link";

const Modal = () => {
  return (
    <div className="fixed antialiased md:subpixel-antialiased left-0 top-0 flex w-full pb-6  mt-48 bg-zinc-950/90 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:p-2 backdrop-blur-lg border border-zinc-800">
      <ul className=" flex flex-col justify-center align-middle ">
        <Link
          href="/desarrolloweb"
          className="m-4 text-gray-500 hover:text-white"
        >
          Desarrolo web
        </Link>
        <Link href="/grafico" className="m-4 text-gray-500 hover:text-white">
          Diseño gráfico
        </Link>
        <Link href="/modelado3d" className="m-4 text-gray-500 hover:text-white">
          Modelado 3D
        </Link>
      </ul>
    </div>
  );
};

export default Modal;
