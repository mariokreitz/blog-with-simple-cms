"use client";

import { useImageUpload } from "@/hooks/useImageUpload";

export default function ImageUploader() {
  const { uploading, imageUrl, progress, uploadFile } = useImageUpload();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      uploadFile(file);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleChange} disabled={uploading} />
      {uploading && <p>Uploading: {progress}%</p>}
      {imageUrl && (
        <img src={imageUrl} alt="Uploaded" style={{ maxWidth: 300 }} />
      )}
    </div>
  );
}
