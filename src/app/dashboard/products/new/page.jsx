import React from "react";

import Image from "next/image";
import { addProduct } from "@/app/libs/actions";

const AddProduct =   () => {
   
 

  return (
    <form className="w-full h-full p-4" action={addProduct}>
      <fieldset className="w-full h-full border border-gray-200 p-1 flex gap-4">
        <div className="w-80 h-80 p-4 bg-slate-200">
          <Image src={"/next.svg"} alt="una imagen" width={84} height={84} />
        </div>
        <legend className="text-center text-gray-50 text-2xl">
          Create Product
        </legend>
        <div className="w-full flex flex-col gap-4">
          <input
            type="text"
            placeholder="Title.."
            className=" p-1 border-none rounded-sm"
            name="title"
          />
          <input
            type="number"
            placeholder="Price.."
            className=" p-1 border-none rounded-sm"
            name="price"
          />
          <textarea
            id=""
            cols="30"
            rows="10"
            className="w-full resize-none p-2"
            placeholder="Description...."
            name="description"
          />
          <input
            type="number"
            placeholder="Stock.."
            className=" p-1 border-none rounded-sm"
            name="stock"
          />
           <input
            type="text"
            placeholder="image.."
            className=" p-1 border-none rounded-sm"
            name="image"
          />
          <input
            type="submit"
            value="Crear"
            className="py-2 text-slate-900 bg-sky-400 rounded-sm hover:cursor-pointer"
          />
        </div>
      </fieldset>
    </form>
  );
};

export default AddProduct;
