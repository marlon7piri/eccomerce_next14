import cloudinary from "cloudinary";
import { NextResponse } from "next/server";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true,
});
export const removeImage = async (publicId) => {

  console.log(publicId);
  try {
    const res = await cloudinary.v2.uploader.destroy(publicId);
    console.log("image removed");
  } catch (error) {
    console.log(error);
  }
};

export async function POST(req) {
  const { publicId } = await req.json();
  console.log(publicId);
  await removeImage(publicId);
  return NextResponse.json({ message: "success" });
}
