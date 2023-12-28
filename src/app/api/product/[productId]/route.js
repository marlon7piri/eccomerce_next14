import { Products } from "../../../libs/models";
import { connectDb } from "../../../libs/mongodb";
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



export async function PUT(req, { params }) {
  const id = params.productId;

  const data = await req.formData();
  const title = data.get("title");
  const price = data.get("price");
  const description = data.get("description");
  const stock = data.get("stock");
  const image = data.get("image");
  try {
    const productatupdated = { title, price, description, stock, image };
    connectDb();
    const productupdated = await Products.findByIdAndUpdate(
      id,
      productatupdated,
      { $set: true }
    );

    if (!productupdated) return NextResponse.status(404);

    return NextResponse.json(productupdated);
  } catch (error) {
    return NextResponse.json({ message: error });
  }
}


export async function DELETE(req,{params}) {
  const id = await params.productId;

  await connectDb();
  try {
    const productdeleted = await Products.findByIdAndDelete(id);

    if (!productdeleted) return NextResponse.json(404);

    return NextResponse.json(productdeleted);
  } catch (error) {
    return NextResponse.json({ message: error });
  }
}

