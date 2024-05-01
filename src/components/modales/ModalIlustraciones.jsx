import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ModalIlustraciones = () => {
  const [hoverStates, setHoverStates] = useState(Array(2).fill(false));

  const handleHover = (index, isHovered) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = isHovered;
    setHoverStates(newHoverStates);
  };

  const figuresData = [
    {
      src: "/svgs/ilustraciones/uno.svg",
      alt: "Svg de un cerdo mirando de frente a la camara",
      title: "Cerdo",
      description: "Svg's creados para lista de videos de YouTube.",
      link: "https://www.youtube.com/channel/UC4R1sI_p6Q5_qjzlUdmgmjw",
    },
    {
      src: "/svgs/ilustraciones/dos.svg",
      alt: "Svg de un cordero",
      title: "Cordero",
      description: "Svg's creados para lista de videos de YouTube.",
      link: "https://www.youtube.com/channel/UC4R1sI_p6Q5_qjzlUdmgmjw",
    },
    {
      src: "/svgs/ilustraciones/tres.svg",
      alt: "Svg de un cordero",
      title: "Fuego",
      description: "Svg's creados para lista de videos de YouTube.",
      link: "https://www.youtube.com/channel/UC4R1sI_p6Q5_qjzlUdmgmjw",
    },
    {
      src: "/svgs/ilustraciones/cuatro.svg",
      alt: "Svg de una tijera de poda",
      title: "Tijeras",
      description: "Svg's creados para lista de videos de YouTube.",
      link: "https://www.youtube.com/channel/UC4R1sI_p6Q5_qjzlUdmgmjw",
    },
    {
      src: "/svgs/ilustraciones/cinco.svg",
      alt: "Svg de una casa",
      title: "Casa",
      description: "Svg's creados para el sitio web de Hexágono.",
      link: "https://www.conceptohexagono.com",
    },
  ];

  return (
    <>
      <section className="h-screen">
        <section className="my-20">
          <h2 className="col-span-4 text-gray-500 text-4xl lg:text-8xl font-black"> 
            Realizado
          </h2>
          <h3 className="col-span-4 font-extralight text-amber-100 lg:text-xl">
            recientemente
          </h3>
        </section>

        <section className="flex flex-col lg:grid lg:grid-cols-4 w-auto items-center">
          {figuresData.map((figure, index) => (
            <figure key={index} className="group text-center col-span-1 mx-4">
              <section className="modal-content hover:border-amber-100 border border-gray-600 rounded-md">
                {/* Enlace para la imagen y el icono */}
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={figure.link}
                  passHref  
                >
                  <div className="cursor-pointer">
                    <Image
                      src={figure.src}
                      alt={figure.alt}
                      width={600}
                      height={600}
                      priority
                      className="rounded-t-md opacity-70 hover:opacity-100"
                    />
                    <div className="grid grid-cols-2 h-[160px] bg-gray-600/15 backdrop-blur-md rounded-b-md p-2 px-4 pt-5 text-left">
                      <h2 className="text-gray-50 col-span-2 text-lg">
                        {figure.title}
                      </h2>
                      <p className="text-gray-400 col-span-2 pb-4 text-md font-extralight">
                        {figure.description}
                      </p>
                      <div className="flex w-full col-span-2 justify-between">
                        <p className="text-gray-400 text-xs">
                          por{" "}
                          <span className="text-gray-300 text-base">
                            Gramaphenia
                          </span>
                        </p>
                        {/* Enlace al hacer clic en el icono */}
                        <Link
                          target="_blank"
                          rel="noopener noreferrer"
                          href={figure.link}
                          passHref
                        >
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
      </section>
    </>
  );
};

export default ModalIlustraciones;
