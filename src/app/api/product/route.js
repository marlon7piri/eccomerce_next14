import { Products } from "@/app/libs/models";
import { connectDb } from "@/app/libs/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    connectDb();
    const allproducts = await Products.find();

    if (!allproducts) return NextResponse.status(404);

    return NextResponse.json(allproducts);
  } catch (error) {
    return NextResponse.json({ message: error });
  }
}

export async function POST(req) {
  const product = await req.json();
  const { title, price, description, stock,image } = product;

  try {
    connectDb();
    const allproducts = new Products({
      title,
      price,
      description,
      stock,
      image
    });

    const productsaved = await allproducts.save()

    if (!productsaved) return NextResponse.status(404);

    return NextResponse.json(productsaved);
  } catch (error) {
    return NextResponse.json({ message: error });
  }
}
