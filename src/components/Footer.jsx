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
            <ul className="text-center">
              <h2 className="mb-6 text-center text-2xl font-thin text-amber-100">
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
      <Link className="mt-4" href="/" target="_blank" rel="noopener noreferrer">
        <Image
          src="/svgs/decoradores/transversal-circulos-footer.svg"
          alt="gramaphenia Logo"
          className="col-span-1"
          width={1000}
          height={1000}
          priority
        />
      </Link>
      <p className="text-xs mb-28 lg:mb-4 font-mono font-extralight text-slate-400/90 antialiased md:subpixel-antialiased ">
        2022{" "}
        <span className="text-gray-700">
          ┬┴┬┴┤{" "}
          <span className="align-middle text-2xl text-slate-400/90">⌨</span>{" "}
          ├┬┴┬┴
        </span>{" "}
        2024
      </p>
    </>
  );
};

export default Footer;
