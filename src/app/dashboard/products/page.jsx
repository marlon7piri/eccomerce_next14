
import React from "react";
import ListOfProducts from "./ListProducts";
import SearchProducts from "./SearchProducts";

import axios from "axios";

export default async function Products() {
  const productos = await axios.get('http://localhost:3000/api/product');
  console.log(productos.data)

  return (
    <div>
      <SearchProducts />
      <ListOfProducts productos={productos.data} />
    </div>
  );
}
