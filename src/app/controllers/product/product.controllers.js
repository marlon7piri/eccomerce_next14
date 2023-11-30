import { redirect } from "next/dist/server/api-utils";

const url = "https://eccomerce-next14.vercel.app";

export const getAllProduct = async () => {
  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();

  return Response.json(data);
};

export const getOnlyAProduct = async (id) => {
  const res = await fetch(`${url}/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const deleteAProduct = async (id) => {
  const res = await fetch(
    `${url}/${id}`,
    {
      method: "DELETE",
    },
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();

  return Response.json(data);
};

export const createProduct = async (newproduct) => {
  const res = await fetch(
    `${url}/products`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newproduct),
    },
    { cache: "no-store" },
    {}
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();

  return Response.json(data);
};
