import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import SocialLinks from "@/models/SocialLinks";

export async function GET() {
  await dbConnect();
  const record = await SocialLinks.findOne();
  return NextResponse.json(record || {});
}
export async function PUT(req: Request) {
  await dbConnect();
  const data = await req.json();
  const updated = await SocialLinks.findOneAndUpdate({}, data, {
    upsert: true,
    new: true,
  });
  return NextResponse.json(updated);
}
