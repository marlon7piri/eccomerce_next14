"use client";
import React, { useRef, useState } from "react";

import Image from "next/image";
import { addProduct } from "../../../libs/actions";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { CldUploadButton, CldUploadWidgetResults } from "next-cloudinary";
import toast from "react-hot-toast";


const url = "http://localhost:3000";
const url2 = "https://eccomerce-next14.vercel.app";

const AddProduct = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState(0);
  const [rating, setRating] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [publicId, setPublicId] = useState("");
  const form = useRef(null);

  const handleImageUpload = (result) => {
    console.log("result: ", result);
    const info = result.info;

    if ("secure_url" in info && "public_id" in info) {
      const url = info.secure_url;
      const public_id = info.public_id;
      setImageUrl(url);
      setPublicId(public_id);
      console.log("url: ", url);
      console.log("public_id: ", public_id);
    }
  };

  const removeImage = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${url2}/api/removeImage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ publicId }),
      });

      if (res.ok) {
        setImageUrl("");
        setPublicId("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlerChange = async (e) => {
    e.preventDefault();
    form.current.reset();

    try {
      setLoading(true);
      const res = await fetch(
        `${url2}/api/upload`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            description,
            price,
            stock,
            rating,
            imageUrl,
            publicId
          }),
        }
      );

      console.log(res);

      if (res.ok) {
        toast.success("Producto creado");
        router.push("/dashboard/products");
        router.refresh();
      } else {
        toast.error("Something went wrong.");
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <form
      className="w-3/4 h-full p-4 bg-green-900"
      onSubmit={handlerChange}
      ref={form}
    >
      <fieldset className="w-full h-full border border-gray-200 p-1 flex gap-4">
        <div className="w-80 h-80 p-4 bg-slate-200 flex flex-col gap-2">
          <div> </div>
          <CldUploadButton
            uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
            className={`h-48 border-2 mt-4 border-dotted grid place-items-center bg-slate-100 rounded-md relative ${
              imageUrl && "pointer-events-none"
            }`}
            onUpload={handleImageUpload}
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </div>

            {imageUrl && (
              <Image
                src={imageUrl}
                fill
                className="absolute object-cover inset-0"
                alt={title}
              />
            )}
          </CldUploadButton>

          {publicId && (
            <button
              onClick={removeImage}
              className="py-2 px-4 rounded-md font-bold w-fit bg-red-600 text-white mb-4"
            >
              Remove Image
            </button>
          )}
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
            value={loading ? "loading...." : "Crear"}
            className="py-2 text-slate-900 bg-slate-50 rounded-sm hover:cursor-pointer"
          />
        </div>
      </fieldset>
    </form>
  );
};

export default AddProduct;
