"use client";

import ModalTresD from "@/components/modales/ModalTresD.jsx";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const CreacionesTresD = () => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (modalOpen) {
      document.body.classList.add("modal-open");
    } else {
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
      <figure className="col-span-1 lg:col-span-2 text-center mt-20">
        <Image
          id="modelado3d"
          className="col-span-3 m-auto pt-6"
          src="/svgs/decoradores/seccion-creaciones.svg"
          alt="Imagen en svg de un diseño de geometrias sencillas con circulos y cuadrados para separar seccion"
          width={50}
          height={50}
          priority
        />
        <p
          className="text-4xl lg:text-5xl text-gray-400/80 font-black text-center antialiased md:subpixel-antialiased pt-10"
          // id="modelado3d"
        >
          Modelado
        </p>
        <p className="text-balance font-normal text-gray-500 w-auto lg:w-[300px] lg:m-auto">
          Ruta para descubrir los detalles del{" "}
          <span className="text-amber-100 font-light">
            Modelado de objetos 3D
          </span>
          .
        </p>
      </figure>

      <figure className="flex col-span-1 lg:col-span-2 m-auto">
        <Image
          className="col-span-1 lg:col-span-2 m-auto"
          src="/experiencia/3d/tres-d.svg"
          alt="Imagen en svg de un diseño de geometrias sencillas. En este caso un teclado un, raton inalambrico y un par de manos sobre el primero."
          width={600}
          height={600}
          priority
        />
      </figure>

      <button
        onClick={openModal}
        className="col-span-1 lg:col-span-2 bg-zinc-800/30 hover:bg-zinc-800/50 px-4 py-2 rounded-xl border border-gray-800 w-[200px] m-auto hover:text-amber-100"
      >
        Assets
      </button>
      {modalOpen && (
        <div className="fondo col-span-2 fixed inset-0 flex items-center justify-center z-[999] overflow-auto bg-black bg-opacity-80 backdrop-blur-xl p-10 lg:p-16">
          <span
            className="text-xl text-red-500/50 hover:text-red-500 fixed top-0 right-0 mt-16 mr-16 py-[2px] px-[10px] border-2 border-red-500/50 hover:border-red-500 hover:bg-slate-500/20 rounded-full cursor-pointer"
            onClick={closeModal}
          >
            &times;
          </span>

          <ModalTresD />
        </div>
      )}
    </>
  );
};

export default CreacionesTresD;
