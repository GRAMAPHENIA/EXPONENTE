import Image from "next/image";
import Link from "next/link";

import NavegacionMenu from "@/components/NavegacionMenu";
import Brand from "@/components/Brand";
import Header from "@/components/Header";
import Creaciones from "@/components/Creaciones";
import AcercaDe from "@/components/datos-personales/Perfil";
import Estudios from "@/components/datos-personales/Estudios";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center lg:justify-start pt-10 px-2 lg:px-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-md lg:flex">
        <NavegacionMenu />
        {/* <Brand /> */}
      </div>
      <div className="mb-28 lg:mb-5">
        <Header />
      </div>
      <section className="flex justify-center items-center">
        <Creaciones />
      </section>
      <section className="mt-20 mb-40">
        <AcercaDe />
      </section>
      <section className="mt-20 mb-40">
        <Estudios />
      </section>
      <Footer />
    </main>
  );
};

export default Home;
