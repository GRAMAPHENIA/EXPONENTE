import Link from "next/link";
import Image from "next/image";

const Brand = () => {
  return (
    <figure>
      <div className="fixed bottom-0 left-0 lg:flex h-24 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none hidden">
        <Link
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{" "}
          <Image
            src="/svgs/juno-fang.svg"
            alt="gramaphenia Logo"
            width={150}
            height={150}
            priority
          />
        </Link>
      </div>
    </figure>
  );
};

export default Brand;
