import { deleteUser } from '@/app/libs/actions';
import Link from 'next/link';
import React from 'react'

const TablaOFUsers = ({data}) => {
  return (

    <>
    {  data?.map((e) => {
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
          )
      })}
      </>)
      
}

export default TablaOFUsers