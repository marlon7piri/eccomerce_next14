import { connectDb } from "../../libs/mongodb";
import { NextResponse } from "next/server";
import { Products } from "../../libs/models";

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
  const data = await req.formData();
  const title = data.get("title");
  const price = data.get("price");
  const description = data.get("description");
  const stock = data.get("stock");
  const image = data.get("image");
  const rating = data.get("rating");



  const productnew = {
    title,
    price,
    description,
    stock,
    rating,
    image:image || "",
  }
  try {
    await connectDb();
    const allproducts = await new Products(productnew);


   
    const productsaved = await allproducts.save();

    if (!productsaved) return NextResponse.status(404);

    return NextResponse.json(productsaved);
  } catch (error) {
    return NextResponse.json({ message: error });
  }
}
