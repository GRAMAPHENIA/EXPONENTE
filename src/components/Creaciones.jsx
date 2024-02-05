import Image from "next/image";
import Link from "next/link";

import CreacionesWeb from "@/components/creaciones/CreacionesWeb";
import CreacionesIlustraciones from "@/components/creaciones/CreacionesIlustraciones";
import CreacionesTresD from "@/components/creaciones/CreacionesTresD";

const Creaciones = () => {
  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-20 mb-32 text-center">
        <CreacionesWeb />
        <CreacionesIlustraciones />
        <CreacionesTresD />
      </section>
    </>
  );
};

export default Creaciones;
