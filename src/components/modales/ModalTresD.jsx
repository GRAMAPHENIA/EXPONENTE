import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ModalTresD = () => {
  const [hoverStates, setHoverStates] = useState(Array(2).fill(false));

  const handleHover = (index, isHovered) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = isHovered;
    setHoverStates(newHoverStates);
  };

  const figuresData = [
    {
      src: "experiencia/3d/renders/01.svg",
      alt: "Svg de ",
      title: "Un sitio",
      description: "Svg's creados para",
      link: "",
    },
    {
      src: "experiencia/3d/renders/02.svg",
      alt: "Svg de un cordero",
      title: "Un sitio",
      description: "Svg's creados para",
      link: "",
    },
    {
      src: "experiencia/3d/renders/03.svg",
      alt: "Svg de un cordero",
      title: "Un sitio",
      description: "Svg's creados para",
      link: "",
    },
    {
      src: "experiencia/3d/renders/04.svg",
      alt: "Svg de una tijera de poda",
      title: "Un sitio",
      description: "Svg's creados para",
      link: "",
    },
    {
      src: "experiencia/3d/renders/05.svg",
      alt: "Svg de una casa",
      title: "Un sitio",
      description: "Svg's creados para",
      link: "",
    },
    {
      src: "experiencia/3d/renders/06.svg",
      alt: "Svg de un luthier trabajando",
      title: "Un sitio",
      description: "Svg's creados para",
      link: "",
    },
    {
      src: "experiencia/3d/renders/07.svg",
      alt: "Svg de una pareja de ancianos",
      title: "Un sitio",
      description: "Svg's creados para",
      link: "",
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

export default ModalTresD;
