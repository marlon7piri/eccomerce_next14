import React from "react";
import Aside from "../components/Aside";


const layout = ({ children }) => {
  return (
    <div className="flex w-full h-screen">
      <Aside />
<div className="bg-gray-900 w-full h-screen p-4  ">
{children}
</div>
      
    </div>
  );
};

export default layout;