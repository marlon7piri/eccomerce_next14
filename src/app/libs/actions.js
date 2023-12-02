"use server";
import { revalidatePath } from "next/cache";
import { Products, User } from "./models";
import { connectDb } from "./mongodb";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { NextRequest } from "next/server";

export const addProduct = async (formData) => {
  const { title, price, description, stock, image } =
    Object.fromEntries(formData);
  console.log({ title, price, description, stock, image });

  console.log(NextRequest.file);

  try {
    connectDb();
    const newproduct = new Products({
      title,
      price,
      description,
      stock,
      image,
    });

    console.log(newproduct);

    await newproduct.save();
  } catch (error) {
    console.log(error);
    throw new Error("Failed create product");
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const addUser = async (formData) => {
  const { name, password, email, isAdmin, isActive, phone, address } =
    Object.fromEntries(formData);

  try {
    connectDb();

    const salt = await bcrypt.genSalt(10);
    const passwordhas = await bcrypt.hash(password, salt);
    const newuser = new User({
      name,
      password: passwordhas,
      email,
      isAdmin,
      isActive,
      phone,
      address,
    });

    console.log(newuser);

    await newuser.save();
  } catch (error) {
    console.log(error);
    throw new Error("Failed create user");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const getOnlyAUser = async (id) => {
  try {
    connectDb();

    const userfound = await User.findById(id);

    return userfound;
  } catch (error) {
    console.log(error);
    throw new Error("Failed founding a  user");
  }
  revalidatePath("/dashboard/users");
};
export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectDb();

    const userfound = await User.findByIdAndDelete(id);
    if (!userfound) return Response.json("error deleting users");
  } catch (error) {
    console.log(error);
    throw new Error("Failed founding a  user");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const editUser = async (formData) => {
  const { id, name, password, email, isAdmin, isActive, phone, address } =
    Object.fromEntries(formData);

  try {
    connectDb();

    const updateField = {
      name,
      password,
      email,
      isAdmin,
      isActive,
      phone,
      address,
    };

    Object.keys(updateField).forEach(
      (key) => (updateField[key] === "" || undefined) && delete updateField[key]
    );
    await User.findByIdAndUpdate(id, updateField);
  } catch (error) {
    console.log(error);
    throw new Error("Failed update user");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectDb();

    await Products.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("Failed deleted a  user");
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const editProduct = async (formData) => {
  const { id, name, password, email, isAdmin, isActive, phone, address } =
    Object.fromEntries(formData);

  try {
    connectDb();

    const updateField = {
      name,
      password,
      email,
      isAdmin,
      isActive,
      phone,
      address,
    };

    Object.keys(updateField).forEach(
      (key) => (updateField[key] === "" || undefined) && delete updateField[key]
    );
    await User.findByIdAndUpdate(id, updateField);
  } catch (error) {
    console.log(error);
    throw new Error("Failed update user");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const getOnlyAProduct = async (id) => {
  try {
    connectDb();

    const productfound = await Products.findById(id);

    return productfound;
  } catch (error) {
    console.log(error);
    throw new Error("Failed founding a  product");
  }
  revalidatePath("/dashboard/users");
};
