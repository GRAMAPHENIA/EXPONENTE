import React from "react";
import Image from "next/image";
import Link from "next/link";

const ModalPerfil = () => {
  const experienciasLaborales = [
    {
      cargo: "Desarrollador Freelancer",
      empresa: "Concepto Hexágono",
      fecha: "Octubre de 2021 - Actualidad",
      ubicacion: "Longchamps, Pcia. de Buenos Aires.",
      responsabilidades: [
        "Diseño y desarrollo de sitios web.",
        "Diseño y modelado en 3D.",
        "Edición de videos y musicalización."
      ],
      // paginaWeb: "https://www.ejemplo.com/proyecto1",
    },
    {
      cargo: "Desarrollo de sitio Web",
      empresa: "Di Corato Luthier",
      fecha: "Marzo de 2024",
      ubicacion: "Longchamps, Pcia. de Buenos Aires.",
      responsabilidades: ["Ilustración.", "Diseño.", "Programación."],
      paginaWeb: "https://dicorato.com.ar",
    },
    {
      cargo: "Desarrollo de sitio Web",
      empresa: "El Método",
      fecha: "Agosto de 2023",
      ubicacion: "El Bolsón, Pcia. de Río Negro.",
      responsabilidades: ["Ilustración.", "Diseño.", "Programación."],
      paginaWeb: "https://elmetodoadulma.com/",
    },
    {
      cargo: "Desarrollo de sitio Web",
      empresa: "Babushka",
      fecha: "Febrero de 2023",
      ubicacion: "El Bolsón, Pcia. de Río Negro.",
      responsabilidades: ["Ilustración.", "Diseño.", "Programación."],
      paginaWeb: "https://babushka.conceptohexagono.com/",
    },
    {
      cargo: "Desarrollo de sitio Web",
      empresa: "Concepto Hexágono",
      fecha: "Enero de 2023",
      ubicacion: "El Bolsón, Pcia. de Río Negro.",
      responsabilidades: ["Ilustración.", "Diseño.", "Programación."],
      paginaWeb: "https://conceptohexagono.com/",
    },
    {
      cargo: "Mantenimiento",
      empresa: "El Mirador Hostel",
      fecha: "Enero de 2023 - Marzo de 2023",
      ubicacion: "El Bolsón, Pcia. de Río Negro.",
      responsabilidades: ["Mantenimiento.", "Limpieza."],
      // paginaWeb: null, // No hay página web asociada
    },
    {
      cargo: "Mantenimiento y jardinería",
      empresa: "Cabañas Los Teros / Casas Chaura",
      fecha: "2021 - Diciembre 2022",
      ubicacion: "El Bolsón, Pcia. de Río Negro.",
      responsabilidades: [
        "Encargado de mantenimiento y jardinería. (Uso de Motoguadaña, motosierra y tractor para el pasto)",
        "Manejo de sistema de riego y pileta climatizada.",
        "Atención y recepción del turista.",
        "Tareas de limpieza."
      ],
      // paginaWeb: "https://www.ejemplo.com/proyecto6",
    },
    {
      cargo: "Refugiero",
      empresa: "Refugio Los Laguitos",
      fecha: "Septiembre 2020 - Abril 2021",
      ubicacion: "El Bolsón, Pcia. de Río Negro.",
      responsabilidades: [
        "Tareas de mantenimiento",
        "Recepción y atención al turista",
        "Tareas de cocina y limpieza.",
        "Armado y mantenimiento de la huerta"
      ],
      // paginaWeb: "https://www.ejemplo.com/proyecto6",
    },
    {
      cargo: "Administrativo - Atención al público",
      empresa: "Camping Hue Nain",
      fecha: "Enero 2020 - Marzo 2020",
      ubicacion: "El Bolsón, Pcia. de Río Negro.",
      responsabilidades: [
        "Tareas de mantenimiento",
        "Recepción y atención al turista",
        "Tareas de cocina y limpieza.",
        "Atención del almacén del camping"
      ],
      // paginaWeb: "https://www.ejemplo.com/proyecto6",
    },
    {
      cargo: "Refugiero",
      empresa: "Refugio Hielo Azul",
      fecha: "Temporadas de verano de 2015-2016-2018-2019 y mes de Marzo de 2020",
      ubicacion: "El Bolsón, Pcia. de Río Negro.",
      responsabilidades: [
        "Tareas de mantenimiento",
        "Recepción y atención al turista",
        "Tareas de cocina y limpieza.",
        "Tareas de campo, acopio de leña"
      ],
      // paginaWeb: "https://www.ejemplo.com/proyecto6",
    },
  ];

  return (
    <> 
      <article className="m-auto bg-[var(--dark)]">
        <figure className="border border-slate-700 lg:px-20 py-10 rounded-lg">
          <Image
            id="laboral"
            className="col-span-3 m-auto py-10"
            src="/svgs/decoradores/seccion-creaciones.svg"
            alt="Imagen en svg de un diseño de geometrías sencillas con círculos y cuadrados para separar sección"
            width={100}
            height={100}
            priority
          />
          <h2 className="text-6xl file py-6 font-black text-gray-200 text-center">
            Experiencia
          </h2>

          {experienciasLaborales.map((experiencia, index) => (
            <section className="my-10 px-8 py-6 border border-slate-700 rounded-sm shadow-md bg-gray-800/10" key={index}>
              <h3 className="text-2xl font-bold py-2 text-blue-200/70">
                {experiencia.cargo}
              </h3>
              <p className="py-2 text-slate-300">
                <span className="text-amber-100">{experiencia.empresa}</span> {experiencia.fecha}. {experiencia.ubicacion}
              </p>
              <ul className="text-gray-400 list-disc mb-8">
                {experiencia.responsabilidades.map((responsabilidad, i) => (
                  <li key={i}>{responsabilidad}</li>
                ))}
              </ul>{" "}
              {experiencia.paginaWeb ? (
                <Link
                  className="w-28 mt-8 py-1 px-2 text-center text-blue-400 hover:text-amber-100 bg-gray-700/20 hover:bg-gray-700/60 border border-gray-500/50 rounded-md text-xs"
                  href={experiencia.paginaWeb}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  visitar
                </Link>
              ) : (
                <p></p>
              )}
            </section>
          ))}
        </figure>
      </article>
    </>
  );
};

export default ModalPerfil;
