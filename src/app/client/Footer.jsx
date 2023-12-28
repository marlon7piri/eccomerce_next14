import React from "react";
import IconInstagram from "../icons/IconInstagram";
import IconFacebook from "../icons/IconFacebook";
import IconWhatsApp from "../icons/IconWhatsApp";

const Footer = () => {
  return (
    <div className="bg-slate-50 w-full h-screen text-slate-900 lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 lsm:grid sm:grid-cols-1 p-4 gap-4  items-center justify-center" id='contacto'>
     
      <div className=" flex items-start flex-col p-4 gap-4">
        <h2 className="text-3xl text-green-800 font-bold">Pizza.Hub</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A autem eum
          commodi rerum beatae libero amet provident, quo temporibus porro nihil
          excepturi vero nulla rem voluptatem eos saepe, ratione aliquam.
        </p>
        <div className="flex gap-4">
          <IconInstagram className={"w-10 h-10 bg-yellow-400 rounded-full"} />
          <IconFacebook className={"w-10 h-10 bg-yellow-400 rounded-full"} />
          <IconWhatsApp className={"w-10 h-10 bg-yellow-400 rounded-full"} />
        </div>
      </div>
      <div className="flex items-start  flex-col gap-4">
        <h2 className="text-3xl">Categorias</h2>

        <ul>
          <li>Productos</li>
          <li>Diseño</li>
          <li>Educacion & Training</li>
          <li>UI/UX Deiseño</li>
          <li>Desarrollo</li>
          <li>Soporte de Desarrollo</li>
        </ul>
      </div>
      <div className="flex items-start  flex-col  gap-4">
        
        <h2 className="text-3xl">Sobre Nosotros</h2>
        <ul>
          <li>Productos</li>
          <li>Diseño</li>
          <li>Educacion & Training</li>
          <li>UI/UX Deiseño</li>
          <li>Desarrollo</li>
          <li>Soporte de Desarrollo</li>
        </ul>
      </div>
      <div className="flex items-start  flex-col gap-4 ">
      <h2 className="text-3xl">Siguenos en</h2>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>Linkedin</li>
        </ul>
      </div>
     
    </div>
  );
};

export default Footer;
