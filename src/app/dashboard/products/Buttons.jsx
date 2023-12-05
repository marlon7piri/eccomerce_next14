"use client";

import Link from "next/link";
import { DeleteIcon } from "@/app/components/icons/DeleteIcon";
import { EditIcon } from "@/app/components/icons/EditIcon";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import axios from "axios";

const url = "http://localhost:3000";
const url2 = "https://eccomerce-next14.vercel.app"

const Buttons = ({ productid }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const deleteProduct = async () => {
    try {
      if (confirm("Seguro desea eliminar el producto")) {
        setLoading(true);
        const res = await axios.delete(`${url2}/api/product/${productid}`);

        router.refresh();

        setLoading(false);
      }
    } catch (error) {
        console.log(error)
    }
    setLoading(false);
  };

  return (
    <div className="w-full flex">
      <Link
        href={`/dashboard/products/${productid}`}
        className="px-4 py-1 rounded bg-sky-500 font-medium text-slate-900 dark:text-blue-500 hover:bg-sky-700"
      >
        <EditIcon />
      </Link>
      <span
        onClick={deleteProduct}
        className="px-4 py-1 rounded bg-red-500 font-medium text-slate-900   dark:text-blue-500 hover:bg-red-700 hover:cursor-pointer"
      >
        <DeleteIcon />
      </span>
    </div>
  );
};

export default Buttons;
