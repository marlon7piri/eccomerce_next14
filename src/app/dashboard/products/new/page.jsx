"use client";
import React, { useState } from "react";

import Image from "next/image";
import { addProduct } from "@/app/libs/actions";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Button, Textarea } from "@nextui-org/react";
import { Input } from "@nextui-org/react";

const AddProduct = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [imagen, setImagen] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState(0);

  const handlerChange = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", imagen);
    //formData.append("upload_preset", "alalmapreset");
    formData.append("title", title);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("stock", stock);

    try {
      const res = await fetch(
        `https://eccomerce-next14.vercel.app/api/upload`,
        {
          method: "POST",

          body: formData,
        },
        { cache: "no-store" }
      );

      const data = await res.json();
      console.log(data);
      //router.push("/dashboard/products");
    } catch (error) {}

   
  };

  return (
    <form className="w-full h-full p-4" onSubmit={handlerChange}>
      <input type="text" onChange={(e) => setTitle(e.target.value)} />
      <input type="number" onChange={(e) => setPrice(e.target.value)} />
      <input type="text" onChange={(e) => setDescription(e.target.value)} />
      <input type="number" onChange={(e) => setStock(e.target.value)} />
      <input type="file" onChange={(e) => setImagen(e.target.files[0])} />

      <Button color="success" type="submit">
        Crear
      </Button>

      {/*   <fieldset className="w-full h-full border border-gray-200 p-1 flex gap-4">
        <div className="w-80 h-80 p-4 bg-slate-200 flex flex-col gap-4">
          <Image src={"/next.svg"} alt="una imagen" width={84} height={84} />
        </div>
        <legend className="text-center text-gray-50 text-2xl">
          Create Product
        </legend>
        <div className="w-full flex flex-col gap-4">
          <Input
            type="text"
            label="Name"
            {...register("title", {
              required: true,
            })}
          />

          <Input
            type="number"
            label="Price"
            {...register("price", {
              required: true,
            })}
          />

          <Textarea
            label="Description"
            placeholder="Enter your description"
            className="max-w-xs"
            {...register("description", {
              required: true,
            })}
          />

          <Input
            type="number"
            label="Stock"
            {...register("stock", {
              required: true,
            })}
          />
          <Input
            type="text"
            label="Editar foto"
            {...register("image", {
              required: true,
            })}
          />
          <input type="file" onChange={(e) => setImagen(e.target.files[0])} />

          <Button color="success" type="submit">
            Crear
          </Button>
          <button type="submit" className="text-slate-50"> Crear</button>}
        </div>
      </fieldset> */}
    </form>
  );
};

export default AddProduct;
