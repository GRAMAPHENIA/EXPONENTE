import React from "react";
import Image from "next/image";

const ModalPerfil = () => {
  const experienciasLaborales = [
    {
      cargo: "Desarrollador Freelancer",
      empresa: "Concepto Hexágono,",
      fecha: " Octubre de 2021 - Actualidad",
      ubicacion: "Longchamps, Pcia. de Buenos Aires.",
      responsabilidades: [
        "Diseño y desarrollo de sitios web.",
        "Diseño y modelado en 3D.",
        "Edición de videos y musicalización.",
      ],
      paginaWeb: "https://www.ejemplo.com/proyecto1",
    },
    {
      cargo: "Desarrollo de sitio Web",
      empresa: "Di corato Luthier,",
      fecha: "Marzo de 2024",
      ubicacion: "Longchamps, Pcia. de Rio negro.",
      responsabilidades: ["Ilustracion.", "Diseño.", "Programacion."],
      paginaWeb: "https://www.ejemplo.com/proyecto2",
    },
    {
      cargo: "Desarrollo de sitio Web",
      empresa: "El Método,",
      fecha: "Agosto de 2023",
      ubicacion: "El Bolson, Pcia. de Rio negro.",
      responsabilidades: ["Ilustracion.", "Diseño.", "Programacion."],
      paginaWeb: "https://www.ejemplo.com/proyecto3",
    },
    {
      cargo: "Desarrollo de sitio Web",
      empresa: "Babushka,",
      fecha: "Febrero de 2023",
      ubicacion: "El Bolson, Pcia. de Rio negro.",
      responsabilidades: ["Ilustracion.", "Diseño.", "Programacion."],
      paginaWeb: "https://www.ejemplo.com/proyecto4",
    },
    {
      cargo: "Desarrollo de sitio Web",
      empresa: "Concepto Hexagono,",
      fecha: "Enero de 2023",
      ubicacion: "El Bolson, Pcia. de Rio negro.",
      responsabilidades: ["Ilustracion.", "Diseño.", "Programacion."],
      paginaWeb: "https://www.ejemplo.com/proyecto5",
    },
    {
      cargo: "Mantenimiento",
      empresa: "El Mirador Hostel,",
      fecha: "Enero de 2023 - Marzo de 2023",
      ubicacion: "El Bolson, Pcia. de Rio negro.",
      responsabilidades: ["Mantenimiento.", "Limpieza.", "Recepcion."],
      // paginaWeb: null, // No hay página web asociada
    },
    {
      cargo: "Mantenimiento y jardinería",
      empresa: "Cabañas Los Teros / Casas Chaura",
      fecha: "2021 - Actualidad",
      ubicacion: "Longchamps, Pcia. de Buenos Aires.",
      responsabilidades: [
        "Encargado de mantenimiento y jardineria. (Uso de Motoguadaña, motosierra y tractor para el pasto)",
        "Manejo de sistema de riego y pileta climatizada.",
        "Atencion y recepcion del turista.",
        "Tareas de limpieza.",
      ],
      // paginaWeb: "https://www.ejemplo.com/proyecto6",
    },
  ];

  return (
    <>
      <article className="m-auto bg-slate-700/10 backdrop-blur-lg ">
        <figure className="border border-slate-700 px-40 py-10 rounded-lg">
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
            <section className="my-10" key={index}>
              <h3 className="text-2xl font-bold py-2 text-blue-200/70">
                {experiencia.cargo}
              </h3>

              <p className="font-bold py-2 text-slate-300">
                <span className="text-amber-100">{experiencia.empresa}</span>{" "}
                {experiencia.fecha}. {experiencia.ubicacion}
              </p>

              {experiencia.paginaWeb ? (
                <p className="font-bold py-2 text-slate-300">
                  <a
                    href={experiencia.paginaWeb}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visitar sitio
                  </a>
                </p>
              ) : (
                <p className="font-bold py-2 text-slate-300"></p>
              )}

              <ul className="text-gray-400 list-disc">
                {experiencia.responsabilidades.map((responsabilidad, i) => (
                  <li key={i}>{responsabilidad}</li>
                ))}
              </ul>
            </section>
          ))}
        </figure>
      </article>
    </>
  );
};

export default ModalPerfil;