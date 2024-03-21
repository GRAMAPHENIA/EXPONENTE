import Image from "next/image";

const ModalCreacionesWeb = () => {
  return (
    <>
      <section className="grid grid-cols-4 gap-10">
        <figure className="group text-center col-span-1">
          <Image
            src="/experiencia/web/uno.svg"
            alt="gramaphenia Logo"
            width={600}
            height={600}
            priority
            className="border-2 border-gray-600 hover:border-amber-100 rounded-lg cursor-pointer"
          />
          <p className="group-hover:text-gray-100 text-blue-200/30 p-1 text-xs font-mono rounded-sm mt-4 bg-gray-600/15 backdrop-blur-sm ">
            Concepto Hexágono
          </p>
        </figure>
        <figure className="group text-center col-span-1">
          <Image
            src="/experiencia/web/dos.svg"
            alt="gramaphenia Logo"
            width={600}
            height={600}
            priority
            className="border-2 border-gray-600 hover:border-amber-100 rounded-lg cursor-pointer"
          />
          <p className="group-hover:text-gray-100 text-blue-200/30 p-1 text-xs font-mono  rounded-sm mt-4 bg-gray-600/15 backdrop-blur-sm col-span-1">
            Di corato Luthier
          </p>
        </figure>
      </section>
    </>
  );
};

export default ModalCreacionesWeb;
