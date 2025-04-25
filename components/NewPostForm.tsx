"use client";
import React, { FormEvent, useState } from "react";
import HashloaderWrapper from "./ui/hash-loader";
import { useCreatePost } from "@/hooks/useCreatePost";
import { ImageData } from "@/types/ImageData";

interface NewPostFormProps {
  images: ImageData[];
  onSuccess: () => void;
}

const NewPostForm: React.FC<NewPostFormProps> = ({ images, onSuccess }) => {
  const [selectedUrl, setSelectedUrl] = useState<string>("");
  const {
    mutate: createPost,
    isPending: isCreating,
    error: createError,
  } = useCreatePost();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const title = form.get("title")?.toString() ?? "";
    const image = form.get("image")?.toString() ?? "";
    const description = form.get("description")?.toString() ?? "";
    const content = form.get("content")?.toString() ?? "";
    const author = form.get("author")?.toString() ?? "";
    const tags = (form.get("tags")?.toString() ?? "")
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    createPost(
      { title, image, description, content, author, tags },
      { onSuccess: () => onSuccess() },
    );
    e.currentTarget.reset();
    setSelectedUrl("");
  };

  return (
    <div className="mb-8 rounded-lg bg-neutral-800 shadow-lg">
      <h1 className="mb-6 rounded-t-lg bg-neutral-950/80 p-4 text-2xl font-semibold text-gray-100">
        Neuer Beitrag
      </h1>
      <div className="p-6">
        {isCreating && (
          <div className="mb-4 flex items-center text-gray-200">
            <HashloaderWrapper size={24} />
            <span className="ml-2">Beitrag wird erstellt...</span>
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="title"
            placeholder="Titel"
            className="w-full rounded-lg border border-neutral-700 bg-neutral-700 px-3 py-2 text-gray-100"
            required
          />
          <input
            name="description"
            placeholder="Beschreibung"
            className="w-full rounded-lg border border-neutral-700 bg-neutral-700 px-3 py-2 text-gray-100"
            required
          />
          <input
            name="author"
            placeholder="Autor"
            className="w-full rounded-lg border border-neutral-700 bg-neutral-700 px-3 py-2 text-gray-100"
            required
          />
          <select
            name="image"
            value={selectedUrl}
            onChange={(e) => setSelectedUrl(e.target.value)}
            className="w-full rounded-lg border border-neutral-700 bg-neutral-700 px-3 py-2 text-gray-100"
            required
          >
            <option value="" disabled>
              -- bitte wählen --
            </option>
            {images.map((img) => (
              <option key={img.key} value={img.url}>
                {img.key}
              </option>
            ))}
          </select>
          <textarea
            name="content"
            placeholder="Inhalt"
            rows={4}
            className="w-full rounded-lg border border-neutral-700 bg-neutral-700 px-3 py-2 text-gray-100"
            required
          />
          <input
            name="tags"
            placeholder="Tags (kommagetrennt)"
            className="w-full rounded-lg border border-neutral-700 bg-neutral-700 px-3 py-2 text-gray-100"
            required
          />
          <button
            type="submit"
            disabled={isCreating}
            className="w-full rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {isCreating ? "Erstelle..." : "Erstellen"}
          </button>
          {createError && (
            <p className="mt-2 text-red-400">Fehler: {createError.message}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default NewPostForm;
