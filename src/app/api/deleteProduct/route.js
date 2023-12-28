import { connectDb } from "../../libs/mongodb";
import { NextResponse } from "next/server";
import { Products } from "../../libs/models";
import { removeImage } from "../removeimage/route";

export async function DELETE(req) {
  const producto = await req.json();

  console.log(producto);
  await connectDb();
  try {
    const productdeleted = await Products.findByIdAndDelete(producto._id);
    await removeImage(producto.image);

    if (!productdeleted) return NextResponse.json(404);

    return NextResponse.json(productdeleted);
  } catch (error) {
    return NextResponse.json({ message: error });
  }
}
