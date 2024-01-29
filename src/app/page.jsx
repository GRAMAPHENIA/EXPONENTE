import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center lg:justify-start  pt-10 px-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-amber-50  text-md lg:flex">
        <ul className="fixed antialiased md:subpixel-antialiased left-0 top-0 flex w-full justify-between  border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-2 lg:dark:bg-zinc-800/30">
          <li className="cursor-pointer">
            <div className="image-container ml-10 block lg:hidden">
              <Image
                src="/svgs/menu.svg"
                alt="gramaphenia Logo"
                width={40}
                height={40}
                priority
              />
            </div>
          </li>
          <li className="hidden lg:block text-gray-300 hover:text-[#aedbfc] hover:bg-gray-800/50 px-4 py-2 rounded-lg cursor-pointer mr-2">
            Creaciones
          </li>
          <li className="hidden lg:block text-gray-300 hover:text-[#aedbfc] hover:bg-gray-800/50 px-4 py-2 rounded-lg cursor-pointer mr-2">
            Desarrollo
          </li>
          <li className="hidden lg:block text-gray-300 hover:text-[#aedbfc] hover:bg-gray-800/50 px-4 py-2 rounded-lg cursor-pointer mr-2">
            Estudios
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
              width={30}
              height={30}
              priority
            />
          </a>
        </div>
      </div>
      <figure className="">
        <p className="flex justify-center align-middle text-balance text-5xl w-[300px] lg:text-7xl text-gray-200/80 font-extrabold text-center lg:text-left mt-32 lg:mt-[12.5%]  lg:w-[1200px] tracking-tight antialiased md:subpixel-antialiased">
          Tangible y Virtual, Una Visión
        </p>
      </figure>
      <section className="">
        <p className="pt-10 mb-20 text-xl text-center text-balance text-gray-500 antialiased md:subpixel-antialiased w-[300px] lg:w-[1200px]">
          La tecnología redefine cómo vivimos, trabajamos y nos relacionamos,
          creando un universo donde lo real y lo virtual convergen en{" "}
          <span className="text-gray-200">una sola experiencia</span>.
        </p>
      </section>
    </main>
  );
}
