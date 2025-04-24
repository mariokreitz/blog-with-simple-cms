import { NextResponse } from "next/server";
import dbConnect from "../../../lib/mongoose";
import Post from "../../../models/Post";

export async function GET() {
  await dbConnect();

  try {
    const posts = await Post.find({}).sort({ createdAt: -1 }).limit(6);
    return NextResponse.json({ success: true, posts }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch posts" },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  const body = await req.json();
  await dbConnect();
  try {
    const newPost = await Post.create(body);
    return NextResponse.json({ success: true, newPost }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Failed to create post" },
      { status: 500 },
    );
  }
}
