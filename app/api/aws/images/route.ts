import { NextRequest, NextResponse } from "next/server";
import {
  S3Client,
  ListObjectsV2Command,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";

const s3 = new S3Client({
  region: process.env.NEXT_PUBLIC_AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function GET() {
  const bucket = process.env.NEXT_PUBLIC_S3_BUCKET!;

  try {
    const command = new ListObjectsV2Command({
      Bucket: bucket,
      Prefix: "uploads/",
    });

    const result = await s3.send(command);

    const images =
      result.Contents?.map((item) => ({
        key: item.Key,
        url: `https://${bucket}.s3.${process.env.NEXT_PUBLIC_AWS_REGION}.amazonaws.com/${item.Key}`,
        size: item.Size,
        lastModified: item.LastModified,
      })) ?? [];

    return NextResponse.json({ images });
  } catch (err) {
    console.error("S3 Error:", err);
    return new NextResponse("Failed to list images", { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { key } = await req.json();

    if (!key) {
      return NextResponse.json({ error: "Key fehlt" }, { status: 400 });
    }

    await s3.send(
      new DeleteObjectCommand({
        Bucket: process.env.NEXT_PUBLIC_S3_BUCKET!,
        Key: key,
      }),
    );

    return NextResponse.json({ message: "Bild gelöscht" });
  } catch (err) {
    console.error("Fehler beim Löschen:", err);
    return NextResponse.json(
      { error: "Löschen fehlgeschlagen" },
      { status: 500 },
    );
  }
}
