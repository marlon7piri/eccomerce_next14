import React, { Suspense } from "react";
import Loading from "../loading";
import Link from "next/link";
import { deleteUser } from "@/app/libs/actions";

const ListOfUsers = ({ data }) => {
  console.log(data);

  return (
    <Suspense>
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
          <tbody>
            {data?.map((e) => {
              return (
                <tr
                  className=" mt-4 bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={e.id}
                >
                  <th
                    scope="row"
                    className=" px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <span
                      style={{
                        width: "20px",
                        height: "20px",
                        fontWeigth: "black",
                        color: "white",
                        padding: "10px",
                        borderRadius: "50%",
                        backgroundColor: "red",
                      }}
                    >
                      {e.name?.substring(0, 2)}
                    </span>{" "}
                    {e.name}
                  </th>
                  <td className="px-6 py-4">{e.email}</td>
                  <td className="px-6 py-4">{e.phone}</td>
                  <td className="px-6 py-4">{e.address}</td>
                  <td className="px-6 py-4">
                    {(e.isAdmin === true ? "admin" : "client").toString()}
                  </td>
                  <td className={e.isActive === true ? `text-green-500 px-6 py-4` : `text-red-500 px-6 py-4` }>
                    {(e.isActive === true ? "activo" : "inactivo").toString()}
                  </td>

                  <td className="px-2 py-2  flex gap-1 justify-center items-center">
                    <Link
                      href={`/dashboard/users/${e._id}`}
                      className="px-4 py-1 rounded bg-sky-500 font-medium text-slate-900 dark:text-blue-500 hover:bg-sky-700"
                    >
                      Edit
                    </Link>
                    <form action={deleteUser}>
                        <input type="hidden"  name="id" value={e.id}/>
                        <button className="px-4 py-1 rounded bg-red-500 font-medium text-slate-900   dark:text-blue-500 hover:bg-red-700">
                      Delete
                    </button>
                    </form>
                    
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

export default ListOfUsers;
