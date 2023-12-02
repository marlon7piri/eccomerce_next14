import Link from "next/link";
import React, { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import { Skeleton } from "@nextui-org/react";

import { DeleteIcon } from "@/app/components/icons/DeleteIcon";
import { EditIcon } from "@/app/components/icons/EditIcon";

const ListOfProducts = ({ productos, setProductos, reload, setReload }) => {
  const [loading, setLoading] = useState(false);
  const deleteAProductControllers = async (id) => {
    try {
      setLoading(true);
      const data = await fetch(`/api/product/${id}`, {
        method: "DELETE",
      });
      const productdeleted = await data.json();

      setProductos(productos.filter((item) => item._id !== productdeleted._id));

      setReload(!reload);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <Suspense fallback={<Skeleton isLoaded={true} />}>
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
          <tbody className=" w-full  text-center ">
            {productos?.length === 0 ? (
              <h1 className="text-center text-2xl text-slate-50">
                No hay productos{" "}
              </h1>
            ) : (
              productos?.map((product) => {
                return (
                  <tr
                    className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    key={product._id}
                  >
                    <th>
                      <Image
                        src={product?.image}
                        width={38}
                        height={38}
                        alt="una imagen"
                        className="object-cover"
                      />
                    </th>
                    <td className="px-6 py-4 text-gray-900">{product.title}</td>
                    <td className="px-6 py-4">${product.price}</td>
                   
                    <td className="px-6 py-4">{product.stock}</td>
                    <td className="px-6 py-4">
                      {product.createdAt?.replace("T", " ").substring(0, 10)}
                    </td>
                 

                    <td className="w-max px-2 py-2  flex gap-1 justify-center items-center">
                      <Link
                        href={`/dashboard/products/${product._id}`}
                        className="px-4 py-1 rounded bg-sky-500 font-medium text-slate-900 dark:text-blue-500 hover:bg-sky-700"
                      >
                        <EditIcon />
                      </Link>
                      <span
                        onClick={() => deleteAProductControllers(product._id)}
                        className="px-4 py-1 rounded bg-red-500 font-medium text-slate-900   dark:text-blue-500 hover:bg-red-700 hover:cursor-pointer"
                      >
                        <DeleteIcon />
                      </span>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
      {/* <div>
        <Table aria-label="Example table with dynamic content">
          <TableHeader columns={columns} className="text-white">
            {(column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            )}
          </TableHeader>
          <TableBody items={productos}>
            {productos.map((item) => {
              return (
                <TableRow key={item._id}>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>{item.stock}</TableCell>
                  <TableCell>
                    <div>
                      <EditIcon />
                      <DeleteIcon />
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div> */}
    </Suspense>
  );
};

export default ListOfProducts;
