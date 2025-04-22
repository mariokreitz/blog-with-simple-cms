import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import SocialLinks from "@/models/SocialLinks";

export async function GET() {
  await dbConnect();
  const record = await SocialLinks.find().lean();
  console.log(record);
  return NextResponse.json(record[0]?.links || {});
}

export async function PUT(request: NextRequest) {
  await dbConnect();
  const data = await request.json();

  const updated = await SocialLinks.findOneAndUpdate(
    { links: data },
    { upsert: true, new: true },
  );

  return NextResponse.json(updated);
}
