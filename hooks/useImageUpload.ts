import { useState } from "react";
import axios from "axios";
import { useQueryClient } from "@tanstack/react-query";

export function useImageUpload() {
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const queryClient = useQueryClient();

  const uploadFile = async (file: File) => {
    try {
      setUploading(true);
      setProgress(0);

      const signRes = await axios.get("/api/aws/upload", {
        params: {
          fileName: file.name,
          fileType: file.type,
        },
      });

      const { url, key } = signRes.data;

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

      const publicUrl = `https://s3.${process.env.NEXT_PUBLIC_AWS_REGION}.amazonaws.com/${process.env.NEXT_PUBLIC_S3_BUCKET}/${key}`;
      setImageUrl(publicUrl);

      queryClient.invalidateQueries({ queryKey: ["images", "admin"] });
    } catch (err) {
      console.error("Upload-Fehler:", err);
      alert("Upload fehlgeschlagen");
    } finally {
      setUploading(false);
    }
  };

  return {
    uploading,
    imageUrl,
    progress,
    uploadFile,
  };
}
