import React from "react";
import Aside from "../components/Aside";
import { Toaster } from "react-hot-toast";


const layout = ({ children }) => {
  return (
    <div className="flex w-full h-screen ">
      <Aside />
<div className="bg-slate-200 w-full h-screen p-4 overflow-scroll">
{children}
</div>
      <Toaster/>
    </div>
  );
};

export default layout;