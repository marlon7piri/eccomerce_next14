"use client";
import React, { useEffect, useState } from "react";
import ListOfProducts from "./ListProducts";
import SearchProducts from "./SearchProducts";

import { getAllProduct } from "@/app/controllers/product/product.controllers";

export default function Products() {
  const [productos, setProductos] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const fetchall = async () => {
      const data = await getAllProduct();

      setProductos(data);
    };
    fetchall();
  }, [reload]);

  return (
    <div>
      <SearchProducts />
      <ListOfProducts
        productos={productos}
        setProductos={setProductos}
        reload={reload}
        setReload={setReload}
      />
    </div>
  );
}
