import { NextResponse } from "next/server";
import dbConnect from "../../../../lib/dbConnect";
import Post from "../../../../schema/Post";
import { BlogPost } from "../../../../types/BlogPost";

export async function GET() {
  await dbConnect();

  try {
    const posts = await Post.find<BlogPost>({});
    return NextResponse.json({ success: true, posts }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch posts" },
      { status: 500 },
    );
  }
}
