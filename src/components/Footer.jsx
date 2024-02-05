import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const sections = [
    {
      title: "Creaciones",
      items: ["Desarrollo", "Ilustraciones", "Modelado 3D"],
    },
    {
      title: "Información",
      items: ["Mapa de sitio", "Código", "Estudios"],
    },
    {
      title: "Sociales",
      items: ["Instagram", "Youtube", "LinkedIn"],
    },
  ];

  return (
    <>
      <Image
        src="/svgs/decoradores/flecha-abajo.svg"
        alt="gramaphenia Logo"
        className="mb-10 col-span-1"
        width={80}
        height={80}
        priority
      />
      <footer className="grid grid-cols-1 lg:grid-cols-3 justify-center align-middle gap-8 lg:gap-40">
        {/* Iterar sobre las secciones y renderizar cada una */}
        {sections.map((section, index) => (
          <section key={index}>
            <ul className="text-center lg:text-left">
              <h2 className="mb-8 text-center lg:text-left text-xl font-extralight text-amber-100">
                {section.title}
              </h2>
              {/* Iterar sobre los elementos de cada sección y renderizarlos */}
              {section.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="text-gray-500 text-sm font-normal hover:text-gray-50 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </footer>

      <Link
        className="mt-14"
        href="/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/svgs/decoradores/transversal-circulos-footer.svg"
          alt="gramaphenia Logo"
          className="col-span-1"
          width={1000}
          height={1000}
          priority
        />
      </Link>
      <p className="mb-28 lg:mb-4 font-extralight text-slate-400/90 antialiased md:subpixel-antialiased">2020 <span className="text-slate-400/20">┬┴┬┴┤ <span className="text-slate-400/90">⌨</span> ├┬┴┬┴ </span> 2024</p>
    </>
  );
};

export default Footer;
