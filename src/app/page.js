import React from "react";
import Link from "next/link";
import NavClient from "./client/NavClient";
import Header from "./client/Header";
import InfoProductos from "./client/InfoProductos";
import Footer from "./client/Footer";
import PromocionesInfo from "./client/PromocionesInfo";
import Newsletter from "./client/Newsletter";

export default function Home() {
  return (
    <section className="bg-gray-50  w-full h-full overflow-hidden">
      <Header />

      <InfoProductos />
      <PromocionesInfo />
      <Newsletter />
      <Footer />
    </section>
  );
}
