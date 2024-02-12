"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const CreacionesWeb = () => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (modalOpen) {
      // Al abrir el modal, añade la clase al body
      document.body.classList.add("modal-open");
    } else {
      // Al cerrar el modal, remueve la clase del body
      document.body.classList.remove("modal-open");
    }
  }, [modalOpen]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <figure className="col-span-1 lg:col-span-2 text-center">
        <p
          className="text-4xl lg:text-5xl text-gray-400/80 font-black text-center antialiased md:subpixel-antialiased pt-20"
          id="desarrolloweb"
        >
          Desarrollado
        </p>
        <p className="text-balance font-normal text-gray-500 w-auto lg:w-[300px] lg:m-auto">
          Tomar esta ruta para descubrir los detalles del{" "}
          <span className="text-amber-100 font-light">Desarrollo Web</span>.
        </p>
      </figure>

      <figure className="group text-center">
        <Image
          src="/experiencia/uno.png"
          alt="gramaphenia Logo"
          width={500}
          height={500}
          priority
          className="border-2 border-dotted  opacity-80 hover:opacity-100 border-gray-600 hover:border-gray-400 rounded-md cursor-pointer"
        />
        <p className="group-hover:text-gray-100 text-blue-200/30 p-1 text-lg font-mono  rounded-md mt-4 bg-gray-600/15">
          Concepto Hexágono
        </p>
      </figure>
      <figure className="group text-center">
        <Image
          src="/experiencia/dos.png"
          alt="gramaphenia Logo"
          width={500}
          height={500}
          priority
          className="border-2 opacity-80 hover:opacity-100 border-dotted border-gray-600 hover:border-gray-400 rounded-lg cursor-pointer"
        />
        <p className="group-hover:text-gray-100 text-blue-200/30 p-1 text-lg font-mono  rounded-md mt-4 bg-gray-600/15">
          Di corato Luthier
        </p>
      </figure>
      <button
        onClick={openModal}
        className="col-span-1 lg:col-span-2 bg-zinc-800/30 hover:bg-zinc-800/50 px-4 py-2 rounded-xl border border-gray-800 w-[200px] m-auto hover:text-amber-100"
      >
        Más Trabajos
      </button>
      {modalOpen && (
        <div className="modal m-auto col-span-2 fixed inset-0 flex items-center justify-center z-[999] overflow-auto bg-black bg-opacity-50 backdrop-blur-lg">
          <div className="modal-content grid grid-cols-4 grid-rows-4">
            <span
              className="text-xl text-gray-300/50 fixed top-0 right-0 mt-4 mr-4 py-[2px] px-[10px] border-2 border-gray-300/20 hover:bg-slate-500/20 rounded-full cursor-pointer"
              onClick={closeModal}
            >
              &times;
            </span>
            <h1>Creaciones Web</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default CreacionesWeb;
