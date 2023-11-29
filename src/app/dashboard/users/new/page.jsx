import React from "react";

import Image from "next/image";
import { addUser } from "@/app/libs/actions";

const AddUser = () => {
  return (
    <form className="w-full h-full p-4" action={addUser}>
      <fieldset className="w-full h-full border border-gray-200 p-1 flex gap-4">
        <div className="w-80 h-80 p-4 bg-slate-200">
          <Image src={"/next.svg"} alt="una imagen" width={84} height={84} />
        </div>
        <legend className="text-center text-gray-50 text-2xl">
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
