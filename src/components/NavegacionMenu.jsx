import Link from "next/link";
import Image from "next/image";

import NavLink from "@/components/NavLink";

export default function NavegacionMenu() {
  return (
    <nav className="z-10 max-w-5xl w-full items-center justify-between font-mono text-amber-50  text-md lg:flex">
     
      <ul className="fixed antialiased md:subpixel-antialiased left-0 top-0 flex w-full justify-between  border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-2 lg:dark:bg-zinc-800/30">
        <li>
          <NavLink
            activeClasses="flex justify-center text-amber-100 px-4 py-2 bg-[#171c1f] rounded-full"
            text="inicio"
            href="/"
          />
        </li>
        <li>
          <NavLink
            activeClasses="flex justify-center text-amber-100 px-4 py-2 bg-[#171c1f] rounded-full"
            text="Galeria"
            href="/galeria"
          />
        </li>
        <li>
          <NavLink
            activeClasses="flex justify-center text-amber-100 px-4 py-2 bg-[#171c1f] rounded-full"
            text="Instrumentos"
            href="/instrumentos"
          />
        </li>
      </ul>
    </nav>
  );
}
