"use client";

import Link from "next/link";
import Image from "next/image";

import NavegacionMobile from "@/components/NavegacionMobile";

import React, { useState, useRef, useEffect } from "react";
import Modal from "@/components/Modal";

export default function NavegacionMenu() {
  const [openModal, setOpenModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const modalRef = useRef(null);

  const modalOpen = () => {
    setOpenModal(true);
  };
  const modalClose = () => {
    setOpenModal(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
    setIsHovered(false);
  };

  const handleClickOutsideModal = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsModalOpen(false);
      setIsHovered(false);
    }
  };

  useEffect(() => {
    if (openModal) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [openModal]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideModal);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideModal);
    };
  }, []);

  return (
    <nav className="z-10 max-w-5xl w-full items-center justify-between font-mono text-md lg:flex">
      <ul className="fixed antialiased md:subpixel-antialiased left-0 top-0 flex w-full justify-between border-b border-gray-300 bg-gradient-to-b from-zinc-200 py-4 backdrop-blur-2xl dark:border-neutral-800  dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border  lg:p-2 ">
        <li className="cursor-pointer">
          <button
            onClick={modalOpen}
            className="image-container ml-10 block lg:hidden"
          >
            <Image
              src="/svgs/menu.svg"
              alt="Imagen svg del menu"
              width={40}
              height={40}
              priority
            />
          </button>
        </li>
        <li
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleModalOpen}
          className={`hidden lg:block px-4 py-2 rounded-lg cursor-pointer  ${
            isModalOpen ? "text-white" : "text-gray-500 hover:text-white"
          }`}
        >
          <span className="hover:bg-gray-600/30 px-4 py-3 rounded-lg cursor-pointer">
            Creaciones
          </span>
        </li>

        <li className="hidden lg:block text-gray-500 hover:text-white hover:bg-gray-600/30 px-4 py-2 rounded-lg cursor-pointer mr-2">
          Código
        </li>
        <li className="hidden lg:block text-gray-500 hover:text-white hover:bg-gray-600/30 px-4 py-2 rounded-lg cursor-pointer mr-10">
          Estudio
        </li>
        <li className="cursor-pointer">
          <div className="image-container mr-10 lg:mr-0 animate-pulse ">
            <Image
              src="/contact.svg"
              alt="gramaphenia Logo"
              width={40}
              height={40}
              priority
            />
          </div>
        </li>
      </ul>
      {openModal && (
        <div className="modal m-auto col-span-2 fixed inset-0 flex items-center justify-center z-[999] overflow-auto bg-black bg-opacity-50 backdrop-blur-lg">
          <div className="modal-content flex items-center">
            <NavegacionMobile />
            <span
              className="text-xl text-gray-300/50 fixed top-0 right-0 mt-4 mr-4 py-[2px] px-[10px] border-2 border-gray-300/20 hover:bg-slate-500/20 rounded-full cursor-pointer"
              onClick={modalClose}
            >
              &times;
            </span>
          </div>
        </div>
      )}
      {isModalOpen && (
        <div className="absolute p-4 mt-20" ref={modalRef}>
          <Modal onClose={handleModalClose} />
        </div>
      )}
    </nav>
  );
}
