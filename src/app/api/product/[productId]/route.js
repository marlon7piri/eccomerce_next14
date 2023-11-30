import { Products } from "@/app/libs/models";
import { connectDb } from "@/app/libs/mongodb";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const id = params.productId;

  try {
    connectDb();
    const productfound = await Products.findById(id);

    if (!productfound) return NextResponse.status(404);

    return NextResponse.json(productfound);
  } catch (error) {
    return NextResponse.json({ message: error });
  }
}

export async function DELETE(req, { params }) {
  const id = params.productId;

  try {
    connectDb();
    const productfound = await Products.findByIdAndDelete(id);

    if (!productfound) return NextResponse.status(404);

    return NextResponse.json(productfound);
  } catch (error) {
    return NextResponse.json({ message: error });
  }
}

export async function PUT(req, { params }) {
  const id = params.productId;

  const product = await req.json();
  const { title, price, description, stock } = product;



  try {
    const productatupdated = { title, price, description, stock };
    connectDb();
    const productupdated = await Products.findByIdAndUpdate(id, productatupdated,{$set:true});

    if (!productupdated) return NextResponse.status(404);

    return NextResponse.json(productupdated);
  } catch (error) {
    return NextResponse.json({ message: error });
  }
}


  
