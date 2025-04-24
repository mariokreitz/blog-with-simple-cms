import dbConnect from "@/lib/mongoose";
import Post from "@/models/Post";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = await params;

  await dbConnect();
  try {
    await Post.findByIdAndDelete(id);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Löschen des Posts fehlgeschlagen" },
      { status: 500 },
    );
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  const body = await req.json();

  await dbConnect();

  try {
    const updatedPost = await Post.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!updatedPost) {
      return NextResponse.json(
        { success: false, error: "Post nicht gefunden" },
        { status: 404 },
      );
    }

    return NextResponse.json({ success: true, data: updatedPost });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Update fehlgeschlagen" },
      { status: 500 },
    );
  }
}
