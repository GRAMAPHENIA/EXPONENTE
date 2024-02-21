import React from "react";

import NavLink from "@/components/NavLink";
import Image from "next/image";

const NavegacionMobile = () => {
  return (
    <>
      <section className="w-full flex justify-center text-center">
        <nav>
          <Image
            className="mb-2"
            src="/svgs/juno-fang.svg"
            alt="imagen del logo de firma juno fang"
            width="200"
            height="200"
            priority={true}
          />
          <span className="text-white">. Menů .</span>
          <ul className="mt-10 space-y-10">
            <li>
              <NavLink
                activeClasses="m-2 bg-gray-600/15 hover:bg-gray-600/30 rounded-lg px-4 py-2 text-gray-500 text-slate-500"
                text="inicio"
                href="/"
              />
            </li>
            <li>
              <NavLink
                activeClasses="m-2 bg-gray-600/15 hover:bg-gray-600/30 rounded-lg px-4 py-2 text-gray-500 hover:text-white"
                text="Desarrollo Web"
                href="#desarrolloweb"
              />
            </li>
            <li>
              <NavLink
                activeClasses="m-2 bg-gray-600/15 hover:bg-gray-600/30 rounded-lg px-4 py-2 text-gray-500 hover:text-white"
                text="Ilustraciones"
                href="#grafico"
              />
            </li>
            <li>
              <NavLink
                activeClasses="m-2 bg-gray-600/15 hover:bg-gray-600/30 rounded-lg px-4 py-2 text-gray-500 hover:text-white"
                text="Modelado 3D"
                href="#modelado3d"
              />
            </li>
            <li>
              <NavLink
                activeClasses="m-2 bg-gray-600/15 hover:bg-gray-600/30 rounded-lg px-4 py-2 text-gray-500 hover:text-white"
                text="Codigo"
                href="#codigo"
              />
            </li>
            <li>
              <NavLink
                activeClasses="m-2 bg-gray-600/15 hover:bg-gray-600/30 rounded-lg px-4 py-2 text-gray-500 hover:text-white"
                text="Estudio"
                href="#estudio"
              />
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default NavegacionMobile;
