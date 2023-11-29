"use client";

import Link from "next/link";
import React  from "react";
import { IoStorefrontSharp } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";


import { usePathname } from "next/navigation";

function Aside() {
 

  const pathname = usePathname();

 

  const links = [
    
      {
        label: "Dashboard",
        href: "/dashboard",
        icon: <MdSpaceDashboard />,
      },{
      label: "Products",
      href: "/dashboard/products",
      icon: <IoStorefrontSharp />,
    },
    {
      label: "Users",
      href: "/dashboard/users",
      icon: <FaUsers />,
    },
    {
      label: "Settings",
      href: "/dashboard/settings",
      icon: <IoIosSettings />,
    }

  ];

  
  return (
    <div className="bg-gray-800 flex flex-col gap-2">
      {links.map((link) => {
        return (
          <Link
            href={link.href}
            className={`mt-4 w-full flex gap-2 hover:bg-gray-900 duration-300 text-gray-50  px-4 py-2  ${
              pathname === link.href ? "bg-gray-900 text-gray-50" : ""
            }`}
          
           key={link.label}>
            <span className="text-gray-50">{link.icon}</span> 
            <p className="">{link.label}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default Aside;
