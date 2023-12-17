
import React from "react";
import ListOfProducts from "./ListProducts";
import SearchProducts from "./SearchProducts";

import axios from "axios";
const url = "http://localhost:3000";
const url2 = "https://eccomerce-next14.vercel.app"
export default async function Products() {
  const productos = await axios.get(`${url2}/api/product`);

  return (
    <div>
      <SearchProducts />
      <ListOfProducts productos={productos.data} />
    </div>
  );
}
