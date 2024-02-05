import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  // Definir la estructura de datos para las secciones del footer
  const sections = [
    {
      title: "Creaciones",
      items: ["Desarrollo", "Ilustraciones", "Modelado 3D"]
    },
    {
      title: "Información",
      items: ["Mapa de sitio", "Código", "Estudios"]
    },
    {
      title: "Sociales",
      items: ["Instagram", "Youtube", "LinkedIn"]
    }
  ];

  return (
    <>
      <hr className="border border-amber-50 border-dashed w-full mb-10 opacity-20" />
      <footer className="grid grid-cols-1 lg:grid-cols-3 justify-center align-middle gap-8 lg:gap-40">
        {/* Iterar sobre las secciones y renderizar cada una */}
        <Image
              src="/svgs/keyboard.svg"
              alt="gramaphenia Logo"
              className="mb-10 lg:hidden col-span-1 border-2 p-4 rounded-full border-gray-500/50"
              width={150}
              height={150}
              priority
            />
        {sections.map((section, index) => (
          <section key={index}>
            <ul className="text-center lg:text-left">
                
              <h2 className="mb-8 text-center lg:text-left text-xl font-extralight text-amber-100">
                {section.title}
              </h2>
              {/* Iterar sobre los elementos de cada sección y renderizarlos */}
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="text-gray-500 text-sm font-normal hover:text-gray-50 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </footer>
      <hr className="border border-amber-50 border-dashed w-full mt-10 opacity-20" />
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
