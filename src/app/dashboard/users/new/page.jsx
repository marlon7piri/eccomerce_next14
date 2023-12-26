"use client";
import React from "react";

import Image from "next/image";
import { addUser } from "../../../libs/actions";
import { CldUploadButton,CldImage,getCldImageUrl  } from "next-cloudinary";

const AddUser = () => {



  const url = getCldImageUrl({
    width: 960,
    height: 600,
    src: '365676634229152'
  });

  console.log(url)
  return (
    <form className="w-3/4 h-full p-4  text-gray-900" action={addUser}>
      <fieldset className="w-full h-full border border-gray-200 p-1 flex gap-4">
        <div className="w-80 h-80 p-4 bg-slate-200">
          <Image src={url} alt="una imagen" width={84} height={84} />
        </div>
        <legend className="text-center text-gray-900 text-2xl">
          Create User
        </legend>
        <div className="w-full flex flex-col gap-4">
          <input
            type="text"
            placeholder="name.."
            className=" p-1 border-none rounded-sm"
            name="name"
          />
          <input
            type="email"
            placeholder="email.."
            className=" p-1 border-none rounded-sm"
            name="email"
          />
          <input
            type="password"
            placeholder="password.."
            className=" p-1 border-none rounded-sm"
            name="password"
          />

          <input
            type="text"
            placeholder="address.."
            className=" p-1 border-none rounded-sm"
            name="address"
          />
          <input
            type="text"
            placeholder="phone number.."
            className=" p-1 border-none rounded-sm"
            name="phone"
          />
          <select name="isAdmin" id="">
            <option value={false}> </option>
            <option value={false}>Client</option>
            <option value={true}>Admin</option>
          </select>
          <select name="isActive" id="">
            <option value={false}> </option>
            <option value={true}>Activo</option>
            <option value={false}>Inactivo</option>
          </select>
          <CldUploadButton
            uploadPreset="alalmapreset"
            width="960"
            height="600"
            remove
            className="w-max p-4 rounded-md bg-green-600"
          />

          <CldImage
            width="960"
            height="600"
            src="<Your Public ID>"
            sizes="100vw"
            removeBackground
            alt=""
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

export default AddUser;
