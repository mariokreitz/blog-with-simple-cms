import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import Whitelist from "@/models/Whitelist";

export async function GET() {
  await dbConnect();
  const emails = await Whitelist.find().select("email -_id");
  return NextResponse.json(emails.map((e) => e.email));
}
export async function POST(req: Request) {
  await dbConnect();
  const { email } = await req.json();
  await Whitelist.create({ email });
  return NextResponse.json({ email });
}
export async function DELETE(req: Request) {
  await dbConnect();
  const { email } = await req.json();
  await Whitelist.deleteOne({ email });
  return NextResponse.json({ email });
}
