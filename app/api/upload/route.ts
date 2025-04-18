/* eslint-disable @typescript-eslint/no-explicit-any */
import multer from "multer";
import { NextResponse } from "next/server";
import path from "path";

export const config = { api: { bodyParser: false } };

const upload = multer({
  storage: multer.diskStorage({
    destination: path.join(process.cwd(), "/public/uploads"),
    filename: (_req, file, cb) =>
      cb(null, `${Date.now()}_${file.originalname}`),
  }),
});

function runMiddleware(request: Request, fn: any) {
  return new Promise<void>((resolve, reject) => {
    const req = request as any;
    const res = {} as any;
    fn(req, res, (err: any) => {
      if (err) reject(err);
      else resolve();
    });
  });
}

export async function POST(request: Request) {
  // Apply multer middleware
  await runMiddleware(request, upload.single("file"));
  const req = request as any;
  const file = req.file;
  if (!file) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }
  const url = `/uploads/${file.filename}`;
  return NextResponse.json({ url });
}
