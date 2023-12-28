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



