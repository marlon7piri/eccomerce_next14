import axios from "axios";
import React from "react";
import styles from "./InfoProduct.module.css";
import Image from "next/image";
import CardProductos from "./CardProductos";

const InfoProductos = async () => {
  const data = await axios.get(`${process.env.NEXTAUTH_URL}/api/product`);

  return (
    <div className=" w-full  h-full mt-20 bg-slate-50 p-2 flex flex-col  justify-center items-center" id="infoproduct">
      <h1 className="pb-20">Productos en la Tienda</h1>

      <div className="grid lg:grid-cols-4 gap-8 md:grid md:grid-cols-3 sm:grid sm:grid-cols-1">
      {data?.data.map((e) => {
        return <CardProductos productos={e} key={e._id}/>;
      })}
      </div>
    </div>
  );
};

export default InfoProductos;
