import Link from "next/link";
import React, { Suspense} from "react";
import Image from "next/image";
import { Skeleton } from "@nextui-org/react";


import Buttons from "./Buttons";

const ListOfProducts = ({ productos }) => {

 
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
                Rating
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
                   {product.image && <th>
                      <Image
                        src={product?.image}
                        width={38}
                        height={38}
                        alt="una imagen"
                        className="object-cover"
                      />
                    </th>}
                    <td className="px-6 py-4 text-gray-900">{product.title}</td>
                    <td className="px-6 py-4">${product.price}</td>

                    <td className="px-6 py-4">{product.stock}</td>
                    <td className="px-6 py-4">
                      {product.createdAt?.replace("T", " ").substring(0, 10)}
                    </td>
                   <td className="px-6 py-4">{product.rating}</td> 

                    <td className="w-max px-2 py-2  flex gap-1 justify-center items-center">
                      <Buttons productid={product._id} />
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
