import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-40">
        <section>
          <ul className="text-center lg:text-left">
            <h2 className="mb-8 text-xl font-extralight text-amber-100">
              Creaciones
            </h2>
            <li className="text-gray-500 font-normal hover:text-gray-50 cursor-pointer">
              Desarrollo
            </li>
            <li className="text-gray-500 font-normal hover:text-gray-50 cursor-pointer">
              Ilustraciones
            </li>
            <li className="text-gray-500 font-normal hover:text-gray-50 cursor-pointer">
              Modelado 3D
            </li>
          </ul>
        </section>
        <section>
          <ul className="text-center lg:text-left">
            <h2 className="mb-8 text-xl font-extralight text-amber-100">
              Información
            </h2>
            <li className="text-gray-500 font-normal hover:text-gray-50 cursor-pointer">
              Mapa de sitio
            </li>
            <li className="text-gray-500 font-normal hover:text-gray-50 cursor-pointer">
              Código
            </li>
            <li className="text-gray-500 font-normal hover:text-gray-50 cursor-pointer">
              Estudios
            </li>
          </ul>
        </section>
        <section>
          <ul className="text-center lg:text-left">
            <h2 className="mb-8 text-xl font-extralight text-amber-100">
              Sociales
            </h2>
            <li className="text-gray-500 font-normal hover:text-gray-50 cursor-pointer">
              Instagram
            </li>
            <li className="text-gray-500 font-normal hover:text-gray-50 cursor-pointer">
              Youtube
            </li>
            <li className="text-gray-500 font-normal hover:text-gray-50 cursor-pointer">
              LinkedIn
            </li>
          </ul>
        </section>
      </footer>
      {/* <hr className="border border-gray-500/50 border-dashed w-full mt-10" /> */}
      <Link
        className="my-14"
        href="/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/svgs/fango.svg"
          alt="gramaphenia Logo"
          className="hidden lg:block"
          width={100}
          height={100}
          priority
        />
      </Link>
    </>
  );
};

export default Footer;
