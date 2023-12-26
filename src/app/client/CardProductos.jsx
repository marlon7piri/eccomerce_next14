import Image from "next/image";
import React from "react";
import { IconCart } from "../icons/IconCart";
import styles from "./cardproduct.module.css";
import StarsIcon from "../components/icons/StarsIcon";

const CardProductos = ({ productos }) => {
  const imageStyle = {
    border: "1px solid #fff",

    maxWidth: "200px",
    maxHeight: "200px",
    objectFit: "cover",
  };

  const returnEstrellas = (rating) => {
    if (rating === "1") {
      return <StarsIcon />;
    } else if (rating === "2") {
      return (
        <div className="flex gap-1">
          <StarsIcon />
          <StarsIcon />
        </div>
      );
    }else if (rating === "3") {
      return (
        <div className="flex gap-1">
          <StarsIcon />
          <StarsIcon />
          <StarsIcon />
        </div>
      );
    }else if (rating === "4") {
      return (
        <div className="flex gap-1">
          <StarsIcon />
          <StarsIcon />
          <StarsIcon />
          <StarsIcon />
        </div>
      );
    }else if (rating === "5") {
      return (
        <div className="flex gap-1">
          <StarsIcon />
          <StarsIcon />
          <StarsIcon />
          <StarsIcon />
          <StarsIcon />
        </div>
      );
    }

    console.log(rating);
  };

  return (
    <div className={styles.cardproduct}>
      <figure className="w-[100%] h-[200px]">
        <img
          src={productos.image}
          alt=""
          className="w-full h-full object-cover"
        />
        {/* <Image
          src={productos.image}
          style={imageStyle}
          alt="una imagen de pizzas"
          fill={true}
        /> */}
      </figure>

      <article className="p-2 basis-1">
        <p className="text-center text-2xl font-medium">{productos.title}</p>
        <div className=" w-full  flex items-center justify-center">{returnEstrellas(productos.rating)}</div>
        

        <details className="text-2xl hover:cursor-pointer mt-2 border-[1px solid black]">
          <summary>Ingredientes</summary>
          {productos.description}
        </details>

        <button className="m-auto w-max flex gap-4 justify-evenly items-center   bg-green-800 rounded-md px-8 py-2 text-slate-50 hover:bg-green-500 transition duration-500">
          <IconCart className="w-24 h-24 bg-pink-500" />
          <p className="text-2xl font-bold"> ${productos.price}</p>
        </button>
      </article>
    </div>
  );
};

export default CardProductos;
