import React, { Suspense } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Link from "next/link";
import { deleteUser } from "@/app/libs/actions";
import TablaOFUsers from "./TablaOFUsers";

const ListOfUsers = ({ data }) => {
  console.log(data);

  return (
    
      <div className="flex justify-center items-center w-full relative overflow-x-auto shadow-md sm:rounded-lg p-4">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-50 uppercase bg-gray-900 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nombre
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Telefono
              </th>
              <th scope="col" className="px-6 py-3">
                Direccion
              </th>
              <th scope="col" className="px-6 py-3">
                Rol
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>

              <th scope="col" className="px-6 py-3">
                Accion
              </th>
            </tr>
          </thead>
          
          <tbody >
            <Suspense fallback={<Skeleton/>}>
           <TablaOFUsers data={data}/>
           </Suspense>
          </tbody>
          
        </table>
      </div>
    
  );
};

export default ListOfUsers;
