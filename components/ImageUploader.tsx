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
    <div className="mb-10 rounded-lg bg-neutral-900 p-6 shadow-md">
      <h2 className="mb-4 text-lg font-semibold text-gray-200">
        Bild hochladen
      </h2>

      <input
        type="file"
        onChange={handleChange}
        disabled={uploading}
        className="block w-full max-w-full cursor-pointer overflow-hidden rounded border border-neutral-700 bg-neutral-800 p-2 text-gray-200 file:mr-4 file:rounded file:border-0 file:bg-blue-600 file:px-4 file:py-2 file:text-white hover:file:bg-blue-700 disabled:opacity-50"
      />

      {uploading && (
        <div className="mt-4">
          <p className="text-gray-300">Upload läuft... {progress}%</p>
          <div className="mt-1 h-2 w-full overflow-hidden rounded bg-neutral-700">
            <div
              className="h-full bg-blue-600 transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {imageUrl && (
        <div className="mt-6 text-center">
          <p className="mb-2 text-gray-300">Upload abgeschlossen:</p>
          <a href={imageUrl} target="_blank" rel="noopener noreferrer">
            <img
              src={imageUrl}
              alt="Uploaded"
              className="mx-auto max-h-40 rounded shadow"
            />
          </a>
        </div>
      )}
    </div>
  );
}
