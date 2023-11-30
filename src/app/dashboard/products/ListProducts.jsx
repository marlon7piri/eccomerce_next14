'use client'
import Link from "next/link";
import React, { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import { redirect } from "next/navigation";

const ListOfProducts = ({ products,deleteAProductControllers }) => {
 
  /*  const router = useRouter(); */
  /* 
  router.refresh();

  console.log(products); */



  return (
    <Suspense>
      <div className="w-full h-full relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full h-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-50 uppercase bg-gray-900 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Product
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>

              <th scope="col" className="px-6 py-3">
                Stock
              </th>
              <th scope="col" className="px-6 py-3">
                Created At
              </th>

              <th scope="col" className="px-6 py-3">
                Accion
              </th>
            </tr>
          </thead>
          <tbody className=" w-full m-auto text-center ">
            {products.length === 0 ? <h1 className="text-center text-2xl text-slate-50">No hay productos  </h1> : products?.map((product) => {
              return (
                <tr
                  className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={product._id}
                >
                  {/* <td
                scope="row"
                className=" px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
              
                {e.title}
              </td> */}
                  <th>
                    <Image
                      src={product.image}
                      width={38}
                      height={38}
                      alt="una imagen"
                      className="object-cover"
                    />
                  </th>
                  <td className="px-6 py-4 text-gray-900">{product.title}</td>
                  <td className="px-6 py-4">${product.price}</td>
                  {/* <td className="px-6 py-4">{product.description}</td> */}
                  <td className="px-6 py-4">{product.stock}</td>
                  <td className="px-6 py-4">
                    {product.createdAt?.toString().slice(4, 16)}
                  </td>
                  {/* <td className="px-6 py-4">{(e.isAdmin).toString()}</td>
              <td className="px-6 py-4">{(e.isActive).toString()}</td> */}

                  <td className="px-2 py-2  flex gap-1 justify-center items-center">
                    <Link
                      href={`/dashboard/products/${product._id}`}
                      className="px-4 py-1 rounded bg-sky-500 font-medium text-slate-900 dark:text-blue-500 hover:bg-sky-700"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() => deleteAProductControllers(product._id)}
                      className="px-4 py-1 rounded bg-red-500 font-medium text-slate-900   dark:text-blue-500 hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Suspense>
  );
};

export default ListOfProducts;
