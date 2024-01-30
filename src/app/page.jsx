import Image from "next/image";
import Link from "next/link";

import NavegacionMenu from "@/components/NavegacionMenu";
import Brand from "@/components/Brand";
import Header from "@/components/Header";

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center lg:justify-start pt-10 px-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-md lg:flex">
        <NavegacionMenu />
        <Brand />
      </div>
      <Header />
    </main>
  );
};

export default Home;
