import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import { v2 as cloudinary } from "cloudinary";
import { Products } from "../../libs/models";
import { connectDb } from "../../libs/mongodb";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true,
});

export async function POST(req) {
  const { title, price, description, stock, rating, imageUrl,publicId } = await req.json();
console.log(publicId);
  try {
    if (!imageUrl) {
      return NextResponse.json("No se ha subido la imagen ", { status: 400 });
    }
    /* const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes); */

    //crear la ruta del archivo
    //const rutaarchivo = path.join(process.cwd(), "public", image.name);
    //console.log(rutaarchivo);
    //guardar el archivo en la ruta
    //await writeFile(rutaarchivo, buffer);
    //const response = await cloudinary.uploader.upload(rutaarchivo);

    //metodo sin guardar en memoria
    /* const response = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({}, (error, result) => {
          if (error) {
            reject(error);
          }
          resolve(result);
        })
        .end(buffer);
    }); */

    await connectDb();
    const newproduct = await new Products({
      title,
      price,
      description,
      stock,
      rating,
      imageUrl,
      publicId
    });

    const productsaved = await newproduct.save();
    if (!productsaved) return NextResponse.status(404);

    return NextResponse.json(productsaved);
  } catch (error) {
    return NextResponse.json({ message: error });
  }
}
