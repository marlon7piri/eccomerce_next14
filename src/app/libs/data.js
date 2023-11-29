import { User, Products } from "./models";
import { connectDb } from "./mongodb";

export const fetchUser = async (query) => {
  const regex = new RegExp(query, "i");
 

  
  try {
    connectDb();
    const allusers = await User.find({ name: { $regex: regex } });
   

    return  allusers 
  } catch (error) {
    throw new Error("Failed to fetch users desde el backend");
  }
};

export const fetchProducts = async () => {
  try {
    connectDb();
    const products = await Products.find();
    console.log(products);
    return products;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch products desde el backend");
  }
};
