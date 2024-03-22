import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ModalCreacionesWeb = () => {
  const [hoverStates, setHoverStates] = useState(Array(2).fill(false));

  const handleHover = (index, isHovered) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = isHovered;
    setHoverStates(newHoverStates);
  };

  const figuresData = [
    {
      src: "/experiencia/web/uno.svg",
      alt: "gramaphenia Logo",
      title: "Concepto Hexagono",
      description: "Sitio dedicado al diseño, web y 3D",
      link: "https://conceptohexagono.com/", 
    },
    {
      src: "/experiencia/web/dos.svg",
      alt: "gramaphenia Logo",
      title: "Di corato Luthier",
      description: "Descripción para Di corato Luthier",
      link: "https://www.dicorato.com.ar/", 
    },
    {
        src: "/experiencia/web/dos.svg",
        alt: "gramaphenia Logo",
        title: "Di corato Luthier",
        description: "Descripción para Di corato Luthier",
        link: "https://www.dicorato.com.ar/", 
      },
      {
        src: "/experiencia/web/dos.svg",
        alt: "gramaphenia Logo",
        title: "Di corato Luthier",
        description: "Descripción para Di corato Luthier",
        link: "https://www.dicorato.com.ar/", 
      },
      {
        src: "/experiencia/web/dos.svg",
        alt: "gramaphenia Logo",
        title: "Di corato Luthier",
        description: "Descripción para Di corato Luthier",
        link: "https://www.dicorato.com.ar/", 
      },
      {
        src: "/experiencia/web/dos.svg",
        alt: "gramaphenia Logo",
        title: "Di corato Luthier",
        description: "Descripción para Di corato Luthier",
        link: "https://www.dicorato.com.ar/", 
      },
      {
        src: "/experiencia/web/dos.svg",
        alt: "gramaphenia Logo",
        title: "Di corato Luthier",
        description: "Descripción para Di corato Luthier",
        link: "https://www.dicorato.com.ar/", 
      },
      {
        src: "/experiencia/web/dos.svg",
        alt: "gramaphenia Logo",
        title: "Di corato Luthier",
        description: "Descripción para Di corato Luthier",
        link: "https://www.dicorato.com.ar/", 
      },
      {
        src: "/experiencia/web/dos.svg",
        alt: "gramaphenia Logo",
        title: "Di corato Luthier",
        description: "Descripción para Di corato Luthier",
        link: "https://www.dicorato.com.ar/", 
      },
  ];

  return (
    <>
      <section className="grid lg:grid-cols-4 gap-10 h-full">
        {figuresData.map((figure, index) => (
          <figure key={index} className="group text-center col-span-1 ">
            <section className="hover:border-amber-100/60 border border-gray-600 rounded-md">
              {/* Enlace para la imagen y el icono */}
              <Link href={figure.link} passHref>
                <div className="cursor-pointer">
                  <Image
                    src={figure.src}
                    alt={figure.alt}
                    width={600}
                    height={600}
                    priority
                    className="rounded-t-md"
                  />
                  <div className="grid grid-cols-2 h-[160px] bg-gray-600/15 backdrop-blur-sm rounded-b-rounded-md p-2 px-4 pt-5 text-left">
                    <h2 className="text-gray-50 col-span-2 text-lg">{figure.title}</h2>
                    <p className="text-gray-400 col-span-2 pb-4 text-md">{figure.description}</p>
                    <div className="flex w-full col-span-2 justify-between">
                      <p className="text-gray-400 text-xs">
                        por <span className="text-gray-300 text-base">Gramaphenia</span>
                      </p>
                      {/* Enlace al hacer clic en el icono */}
                      <Link href={figure.link} passHref>
                        <Image
                          src={
                            hoverStates[index]
                              ? "/icons/external-link-amber.svg"
                              : "/icons/external-link.svg"
                          }
                          alt="Icono de external link"
                          width={25}
                          height={25}
                          priority
                          className="rounded-t-md cursor-pointer"
                          onMouseEnter={() => handleHover(index, true)}
                          onMouseLeave={() => handleHover(index, false)}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </Link>
            </section>
          </figure>
        ))}
      </section>
    </>
  );
};

export default ModalCreacionesWeb;
