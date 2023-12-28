"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { EditIcon } from "../../components/icons/EditIcon";
import { DeleteIcon } from "../../components/icons/DeleteIcon";
import toast from "react-hot-toast";

const url = "http://localhost:3000";
const url2 = "https://eccomerce-next14.vercel.app";

const Buttons = ({ allproducto }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  console.log(allproducto);

  const deleteImagen = async (publicId) => {
    try {
      const res = await fetch(`${url2}/api/removeimage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ publicId }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async () => {
    try {
      if (confirm("Seguro desea eliminar el producto")) {
        setLoading(true);
        const res = await fetch(
          `${url2}/api/product/${allproducto._id}`,
          {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
          }
        );

        if (!res.ok) {
          toast.error("Error al borrar el producto");
        } else {
          const producto = await res.json();
          const { publicId } = producto;
          await deleteImagen(publicId);
          toast.success("Producto eliminado");
          router.refresh();
        }

        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div className="w-full flex">
      <Link
        href={`/dashboard/products/${allproducto._id}`}
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
