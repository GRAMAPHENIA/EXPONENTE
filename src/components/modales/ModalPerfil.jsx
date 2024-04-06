import React from "react";

import Image from "next/image";

const ModalPerfil = () => {
  return (
    <>
      <section>
        <figure className="border border-slate-700 p-4">
          {/* <h2>Perfíl laborals</h2> */}
          <Image
          id="laboral"
          className="col-span-3 m-auto"
          src="/svgs/decoradores/seccion-creaciones.svg"
          alt="Imagen en svg de un diseño de geometrias sencillas con circulos y cuadrados para separar seccion"
          width={100}
          height={100}
          priority
        />
        </figure>
      </section>
    </>
  );
};

export default ModalPerfil;
