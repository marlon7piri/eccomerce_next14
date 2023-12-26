import React from "react";

const PromocionesInfo = () => {
  return (
    <div className="w-full h-full p-4 mt-20">
        <h1 className="mb-24">Nuestras Mejores Promociones</h1>
      <div className="w-full h-full grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">

        
        <div className=" flex flex-col gap-4 p-4 justify-center items-center ">
          <figure className="w-[80%] ">
            <img src="/pizzafondo1.jpg" alt="una pizza de peperoni" className="rounded-md"/>
          </figure>

          <article className="flex flex-col gap-4">
            <h2 className="text-3xl text-green-800 font-bold">
              Pretty Big Pizza
            </h2>
            <p className="w-[400px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
              fugit mollitia suscipit eius voluptatem architecto. Dicta
              expedita, nostrum nesciunt neque asperiores, tenetur, deserunt
              possimus autem adipisci itaque exercitationem delectus
              perspiciatis?
            </p>
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 w-max py-2 px-4 rounded-br-3xl"
            >
              Agregar al Carrito
            </a>
          </article>
        </div>
        <div className=" flex flex-col gap-8 p-4 justify-center items-center ">
          <article className="flex flex-col gap-4">
            <h2 className="text-3xl text-green-800 font-bold">
              Pretty Big Pizza
            </h2>
            <p className="w-[400px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
              fugit mollitia suscipit eius voluptatem architecto. Dicta
              expedita, nostrum nesciunt neque asperiores, tenetur, deserunt
              possimus autem adipisci itaque exercitationem delectus
              perspiciatis?
            </p>
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 w-max py-2 px-4 rounded-br-3xl"
            >
              Agregar al Carrito
            </a>
          </article>
          <figure className="w-[80%] relative">
            <img src="/pizzafondo4.jpg" alt="una pizza de peperoni" className="object-cover rounded-md"/>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default PromocionesInfo;
