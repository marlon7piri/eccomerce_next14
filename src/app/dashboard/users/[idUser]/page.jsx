import React from "react";

import Image from "next/image";
import { editUser, getOnlyAUser } from "../../../libs/actions";

const EditUser = async ({params}) => {

    
    const userfound  =  await getOnlyAUser(params.idUser)
    console.log(userfound)
  return (
    <form className="w-full h-full p-4" action={editUser}>
      <fieldset className="w-full h-full border border-gray-200 p-1 flex gap-4">
        <div className="w-80 h-80 p-4 bg-slate-200">
          <Image src={"/next.svg"} alt="una imagen" width={84} height={84} />
        </div>
        <legend className="text-center text-gray-50 text-2xl">
          Update User
        </legend>
        <div className="w-full flex flex-col gap-4">
            <input type="hidden" name="id" value={userfound.id}/>
          <input
            type="text"
            placeholder={userfound.name}
            className=" p-1 border-none rounded-sm"
            name="name"
          />
          <input
            type="email" autoComplete={false}
            placeholder={userfound.email}
            className=" p-1 border-none rounded-sm"
            name="email"
          />
          <input
            type="password"
            placeholder={userfound.password}
            className=" p-1 border-none rounded-sm"
            name="password"
          />

          <input
            type="text" placeholder={userfound.address}
            className=" p-1 border-none rounded-sm"
            name="address"
          />
          <input
            type="text"
            placeholder={userfound.phone}
            className=" p-1 border-none rounded-sm"
            name="phone"
          />
           <label htmlFor="" className="text-slate-50">Is admin?</label>
          <select name="isAdmin" id="isAdmin" placeholder="Is admin?">
            <option value={true} selected={userfound.isAdmin}>Yes</option>
            <option value={false} selected={!userfound.isAdmin}>No</option>
          </select>
          <label htmlFor="" className="text-slate-50">Is active?</label>
          <select name="isActive" id="isActive"  placeholder="Is active?">
            <option value={true} selected={userfound.isActive}>Yes</option>
            <option value={false} selected={!userfound.isActive}>No</option>
          </select>
          <input
            type="submit"
            value="Update"
            className="py-2 text-slate-900 bg-sky-400 rounded-sm hover:cursor-pointer"
          />
        </div>
      </fieldset>
    </form>
  );
};

export default EditUser;
