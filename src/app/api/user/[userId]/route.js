
import { User } from "@/app/libs/models";
import { connectDb } from "@/app/libs/mongodb"
import { NextResponse } from "next/server"; 

export async function GET (request,{params}) {
    const userId =  params.userId
  
   
  
   try {
     connectDb();
     const userfound = await User.findById(userId);
  
     if(!userfound) return NextResponse.status(404)
  
     return NextResponse.json(userfound)
   } catch (error) {
     return NextResponse.json({message:error})
   }  
  }