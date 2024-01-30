import Link from "next/link";
import Image from "next/image";

const Brand = () => {
  return (
    <figure>
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
    </figure>
  );
};

export default Brand;
