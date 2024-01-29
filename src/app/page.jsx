import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center lg:justify-start  pt-10 px-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-amber-50  text-md lg:flex">
        <ul className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 gap-4">
          <li className="text-gray-300 hover:text-[#94a3b8] cursor-pointer">Desarrollo</li>
          <li className="text-gray-300 hover:text-[#94a3b8] cursor-pointer">Creaciones</li>
          <li className="text-gray-300 hover:text-[#94a3b8] cursor-pointer">Estudios</li>
          <li className="cursor-pointer">
            <div className="image-container animate-pulse">
              <Image
                src="/contact.svg"
                alt="gramaphenia Logo"
                width={24}
                height={24}
                priority
              />
            </div>
          </li>
        </ul>
        <div className="fixed bottom-0 left-0 flex h-24 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
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
              width={36}
              height={36}
              priority
            />
          </a>
        </div>
      </div>
      <figure className="">
        <p className="flex justify-center align-middle text-balance text-5xl w-[300px] lg:text-7xl text-gray-200/80 font-extrabold text-center lg:text-left mt-36 lg:mt-[12.5%]  lg:w-[1200px] tracking-tight">
          Tangible y Virtual, Una Visión.
        </p>
      </figure>
      <section className="">
        <p className="pt-10 text-xl text-center text-balance text-gray-500">
          La tecnología redefine cómo vivimos, trabajamos y nos relacionamos,
          creando un universo donde lo real y lo virtual convergen en{" "}
          <span className="text-gray-200">una sola experiencia</span>.
        </p>
      </section>
    </main>
  );
}
