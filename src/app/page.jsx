import Image from "next/image";
import Link from "next/link";

import NavegacionMenu from "@/components/NavegacionMenu";

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center lg:justify-start pt-10 px-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-md lg:flex">
        <NavegacionMenu />
        <div className="fixed bottom-0 left-0 flex h-24 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <Link
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/gramaphenia.svg"
              alt="gramaphenia Logo"
              className="dark:invert"
              width={25}
              height={25}
              priority
            />
          </Link>
        </div>
      </div>
      <figure className="">
        <p className="flex justify-center align-middle text-balance text-5xl w-[300px] lg:text-7xl text-gray-200/80 font-extrabold text-center lg:text-left mt-24 lg:mt-[18%] lg:w-[1200px] tracking-tight antialiased md:subpixel-antialiased">
          Tangible y Virtual, Una Visión
        </p>
      </figure>
      <section className="">
        <p className="pt-10 mb-10 text-xl text-center text-balance text-gray-500 antialiased md:subpixel-antialiased w-[300px] lg:w-[1200px]">
          La tecnología redefine cómo vivimos, trabajamos y nos relacionamos,
          creando un universo donde lo real y lo virtual convergen en{" "}
          <span className="text-gray-200">una sola experiencia</span>.
        </p>
      </section>
      <section className="flex space-x-10 lg:space-x-40 justify-center align-middle ">
        <button className="bg-zinc-800/30 hover:bg-zinc-800/50 px-4 py-2 rounded-xl border border-gray-800 w-32 lg:w-auto">
          Saber más
        </button>
        <button className="bg-zinc-300 hover:bg-white px-4 py-2 rounded-xl border border-gray-800 text-zinc-800 hover:text-black">
          Contactate
        </button>
      </section>
    </main>
  );
};

export default Home;
