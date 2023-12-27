"use client";
import React, { useRef, useState } from "react";

import Image from "next/image";
import { addProduct } from "../../../libs/actions";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";

const url = "http://localhost:3000";
const url2 = "https://eccomerce-next14.vercel.app";

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
  const [rating, setRating] = useState("");
  const form = useRef(null);

  const handlerChange = async (e) => {
    e.preventDefault();
    form.current.reset();
    const formData = new FormData();
    formData.append("image", imagen);
    formData.append("title", title);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("stock", stock);
    formData.append("rating", rating);

    try {
      const res = await fetch(
        `https://eccomerce-next14.vercel.app/api/upload`,
        {
          method: "POST",
          headers: {
            Accept: "multipart/form-data",
            "Content-Type": "multipart/form-data",
          },
          body: JSON.stringify(formData),
        },{
          cache:"no-store"
        }
      );

      if (!res.ok) {
        throw new Error("Fallo al eliminar el producto");
      }

      router.push("/dashboard");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    /*  <form
      className="w-full h-full  overflow-y-scroll flex flex-col gap-4 p-4  text-slate-500"
      onSubmit={handlerChange}
      ref={form}
    >
      <span>Nombre</span>
      <input type="text" onChange={(e) => setTitle(e.target.value)} />
      <span>Precio</span>
      <input type="number" onChange={(e) => setPrice(e.target.value)} />
      <textarea
        rows={4}
        onChange={(e) => setDescription(e.target.value)}
        className="resize-none w-[400px] outline-none"
      />
      <span>Stock</span>
      <input type="number" onChange={(e) => setStock(e.target.value)} />
      <span>Rating</span>
      <select onChange={(e) => setRating(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <span>Imagen</span>

      <input type="file" onChange={(e) => setImagen(e.target.files[0])} />

      {imagen && (
        <Image
          src={URL.createObjectURL(imagen)}
          alt={"/next.svg"}
          width={84}
          height={84}
        />
      )}

      <input
        type="submit"
        value="Crear"
        className="bg-green-500 p-2 rounded-md text-slate-900 cursor-pointer"
      />

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
      </fieldset>
    </form> */

    <form
      className="w-3/4 h-full p-4 bg-green-900"
      onSubmit={handlerChange}
      ref={form}
    >
      <fieldset className="w-full h-full border border-gray-200 p-1 flex gap-4">
        <div className="w-80 h-80 p-4 bg-slate-200 flex flex-col gap-2">
          <div>
            {" "}
            {imagen && (
              <Image
                src={URL.createObjectURL(imagen)}
                alt={"/next.svg"}
                width={184}
                height={184}
              />
            )}
          </div>
          <input type="file" onChange={(e) => setImagen(e.target.files[0])} />
        </div>
        <legend className="text-center text-gray-900 text-2xl">
          Nuevo Producto
        </legend>
        <div className="w-full flex flex-col gap-4">
          <input
            type="text"
            placeholder="Title.."
            className=" p-1 border-none rounded-sm"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="number"
            placeholder="Price.."
            className=" p-1 border-none rounded-sm"
            onChange={(e) => setPrice(e.target.value)}
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="w-full resize-none p-2"
            placeholder="Description...."
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="number"
            placeholder="Stock.."
            className=" p-1 border-none rounded-sm"
            onChange={(e) => setStock(e.target.value)}
          />
          <span className="text-slate-50">Rating</span>
          <select
            onChange={(e) => setRating(e.target.value)}
            className="w-[120px] "
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <input
            type="submit"
            value="Crear"
            className="py-2 text-slate-900 bg-slate-50 rounded-sm hover:cursor-pointer"
          />
        </div>
      </fieldset>
    </form>
  );
};

export default AddProduct;
