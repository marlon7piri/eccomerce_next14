import { User } from "../../libs/models";
import { connectDb } from "../../libs/mongodb"
import { NextResponse } from "next/server"; 

 export async function GET () {

   try {
    connectDb();
    const allusers = await User.find();

    if(!allusers) return NextResponse.status(404)

    return NextResponse.json(allusers)
  } catch (error) {
    return NextResponse.json({message:error})
  } 
}




