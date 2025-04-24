import dbConnect from "@/lib/mongoose";
import Post from "@/models/Post";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params;

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
