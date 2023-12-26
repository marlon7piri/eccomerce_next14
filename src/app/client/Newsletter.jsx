import React from "react";
import styles from "./newsletter.module.css";

const Newsletter = () => {
  return (
    <div className="w-full h-full flex justify-center items-center bg-green-800 p-4">
      <div>
        <form className="flex gap-4 bg-slate-900 text-slate-50 p-4">
          <div>
            <h3>Suscribete para nuevos anuncios</h3>
            <p>Mejores pizzas y envio a cualquier parte de la ciudad</p>
          </div>
          <div>
            <input type="text" />
            <button>enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
