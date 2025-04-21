import { NextRequest, NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3 = new S3Client({
  region: process.env.NEXT_PUBLIC_AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const fileName = searchParams.get("fileName");
  const fileType = searchParams.get("fileType");

  if (!fileName || !fileType) {
    return NextResponse.json(
      { error: "fileName und fileType benötigt" },
      { status: 400 },
    );
  }

  const key = `uploads/${Date.now()}_${fileName}`;
  const cmd = new PutObjectCommand({
    Bucket: process.env.NEXT_PUBLIC_S3_BUCKET,
    Key: key,
    ContentType: fileType,
  });

  try {
    const url = await getSignedUrl(s3, cmd, { expiresIn: 60 });
    return NextResponse.json({ url, key });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Could not sign URL" }, { status: 500 });
  }
}
