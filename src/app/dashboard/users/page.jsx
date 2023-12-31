import React from "react";
import SearchUsers from "./SearchUsers";
import ListOfUsers from "./ListOfUsers";
import { fetchUser } from "../../libs/data";
import Pagination from "./Pagination";

export default async function Users( {searchParams}) {
    const q = searchParams?.query || ""

  const data = await fetchUser(q);

 



  return (
    
       
      <div className="w-full h-full overflow-y-scroll">
        <h1 className="text-center text-gray-900 font-bold text-2xl">Users</h1>

        <SearchUsers />
        <ListOfUsers  data={data}/>
        <Pagination />
      </div>
     
    
  );
}
