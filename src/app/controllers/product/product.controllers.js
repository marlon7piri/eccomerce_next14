import { redirect } from "next/dist/server/api-utils";

const url = "http://localhost:3000";
const url2 = "https://eccomerce-next14.vercel.app/dashboard";

export const getAllProduct = async () => {
  const res = await fetch(
    `${url2}/api/product`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
    {
      cache: "no-cache",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export const getOnlyAProduct = async (id) => {
  const res = await fetch(`${url2}/api/product/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  

  return res.json();
};

export const deleteAProduct = async (id) => {
  const res = await fetch(
    `${url2}/api/product/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    },
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to deleted data");
  }
  return res.json();
  
};

export const createProduct = async (newproduct) => {
 

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
