"use client";
import { useState } from "react";
import axios from "axios";

export default function ImageUploader() {
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [progress, setProgress] = useState<number>(0);

  const uploadFile = async (file: File) => {
    try {
      setUploading(true);
      setProgress(0);

      // 1) Presigned URL vom Next.js‑Backend anfordern
      const signRes = await axios.get("/api/aws", {
        params: {
          fileName: file.name,
          fileType: file.type,
        },
      });
      const { url, key } = signRes.data;

      // 2) Direkt zu S3 uploaden
      await axios.put(url, file, {
        headers: {
          "Content-Type": file.type,
        },
        onUploadProgress: (e) => {
          if (e.total) {
            setProgress(Math.round((e.loaded * 100) / e.total));
          }
        },
      });

      // 3) Öffentliche URL zusammensetzen
      const publicUrl =
        `https://s3.${process.env.NEXT_PUBLIC_AWS_REGION}.amazonaws.com/` +
        `${process.env.NEXT_PUBLIC_S3_BUCKET}/${key}`;
      setImageUrl(publicUrl);
    } catch (err) {
      console.error("Upload-Fehler:", err);
      alert("Upload fehlgeschlagen");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        disabled={uploading}
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) uploadFile(file);
        }}
      />

      {uploading && <p>Upload läuft… {progress}%</p>}

      {imageUrl && (
        <div style={{ marginTop: 16 }}>
          <p>Erfolgreich hochgeladen:</p>
          <a href={imageUrl} target="_blank">
            <img src={imageUrl} alt="Uploaded" style={{ maxWidth: "300px" }} />
          </a>
        </div>
      )}
    </div>
  );
}
