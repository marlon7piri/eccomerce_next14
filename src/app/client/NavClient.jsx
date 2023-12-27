"use client";
import Link from "next/link";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import HamburguesaIcon from "../components/icons/HamburguesaIcon";
import { button } from "@nextui-org/react";

const NavClient = () => {
  const { data: session, status } = useSession();


  if (!session?.user) {
    redirect("/");
  }else{
    redirect("/dashboard");
  }

  const openMenu = () => {
    const menu = document.querySelector(".menu")
    menu.classList.toggle("show_menu");
  };

  return (
    <div className=" bg-slate-50 w-full  p-4 overflow-hidden">
      <div className="w-full flex justify-between items-center overflow-hidden">
        <h2>Pizzas.Hub</h2>
        <span>{session?.user?.name}</span>
        {status === "loading" ? "loading..." : ""}

        <ul className="menu">
          <li>Home</li>
          <li>Productos</li>
          <li>Contacto</li>
          {!session?.user?.name ? (
            <button onClick={signIn}>Login</button>
          ) : (
            <div>
              <button onClick={signOut}>Logout</button>
              <Link href='/dashboard'>Dashboard</Link>
            </div>
          )}
        </ul>
        <div className="menu_hamburguesa" onClick={() => openMenu()}>
          <HamburguesaIcon className="w-14 h-14" />
        </div>
      </div>
    </div>
  );
};

export default NavClient;
