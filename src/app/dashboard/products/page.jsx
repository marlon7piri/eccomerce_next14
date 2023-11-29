import React from "react";
import ListOfProducts from "./ListProducts";
import { fetchProducts } from "@/app/libs/data";
import SearchProducts from "./SearchProducts";

export default async function Products() {

const products = await fetchProducts()
console.log(products)

  return (
    <div>
        <SearchProducts/>
      <ListOfProducts  products={products}/>
    </div>
  );
}
