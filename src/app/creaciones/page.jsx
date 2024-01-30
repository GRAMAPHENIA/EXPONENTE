import Image from "next/image";
import Link from "next/link";

export default function Creaciones() {
  return (
    <main className="flex flex-col items-center justify-center lg:justify-start pt-10 px-24">

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
            <Link href="/creaciones">Creaciones</Link>
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
     
    </main>
  );
}
