"use client";

import React, { useEffect, useState } from "react";
import ListOfProducts from "./ListProducts";
import SearchProducts from "./SearchProducts";
import { deleteAProduct } from "@/app/controllers/product/product.controllers";

import { getAllProduct } from "@/app/controllers/product/product.controllers";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const data = await getAllProduct();
      const res = await data.json();

      setProducts(res);
    };
    getProduct();
  }, []);

  const deleteAProductControllers = async (id) => {
    const res = await deleteAProduct(id);
    const data = await res.json();

    const result = products.filter((e) => e._id !== data._id);

    setProducts(result);
  };

  return (
    <div>
      <SearchProducts />
      <ListOfProducts
        products={products}
        deleteAProductControllers={deleteAProductControllers}
      />
    </div>
  );
}
