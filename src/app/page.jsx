import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center lg:justify-start  pt-10 px-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-amber-50  text-md lg:flex">
        <ul className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 gap-4">
          <li className="hover:text-amber-200 cursor-pointer ">Desarrollo</li>
          <li className="hover:text-amber-200 cursor-pointer ">Creaciones</li>
          <li className="hover:text-amber-200 cursor-pointer ">Estudios</li>
          <li className="hover:text-amber-200 cursor-pointer ">
            <div className="image-container">
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
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
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
      <h1 className="h-screen flex justify-center mt-20">Texto</h1>
    </main>
  );
}
