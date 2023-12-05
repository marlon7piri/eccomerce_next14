"use client";

import React, { useEffect } from "react";

import { useForm } from "react-hook-form";
import Image from "next/image";
import {getOnlyAProduct} from '@/app/controllers/product/product.controllers'

 function EditProduct({params}) {

  const {register,handleSubmit,formState:{errors}} =useForm()


  useEffect(()=>{
const getAproduct=async ()=>{
  const productupdated  =  await getOnlyAProduct(params.idProduct)
   console.log(productupdated) 
}
getAproduct()
  },[])
  
    
  return (
    <form className="w-full h-full p-4">
     

      <fieldset className="w-full h-full border border-gray-200 p-1 flex gap-4">
        
        <div className="w-80 h-80 p-4 bg-slate-200">
        <Image src={"/next.svg"} alt="una imagen" width={84} height={84} />
      </div>
      <legend className="text-center text-gray-50 text-2xl">
          Edit Products
        </legend>
        <div className="w-full flex flex-col gap-4">
          <input type="text" placeholder="Title.." className=" p-1 border-none rounded-sm"   {...register("title",{})}/>
          <input type="number" placeholder="Price.." className=" p-1 border-none rounded-sm"   {...register("price",{})}/>
          <textarea name="" id="" cols="30" rows="10" className="w-full resize-none p-2" placeholder="Description...." {...register("description",{})} />
          <input type="number" placeholder="Stock.." className=" p-1 border-none rounded-sm"   {...register("stock",{})}/>
          <input type="submit" value="Editar" className="py-2 text-slate-900 bg-sky-400 rounded-sm hover:cursor-pointer" />
        </div>
      </fieldset>
    </form>
  );
}

export default EditProduct;
