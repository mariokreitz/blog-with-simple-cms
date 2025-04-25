"use client";
import React, { FormEvent, useState } from "react";
import HashloaderWrapper from "./ui/hash-loader";
import { useCreatePost } from "@/hooks/useCreatePost";
import { ImageData } from "@/types/ImageData";

export interface NewPostFormData {
  title: string;
  image: string;
  description: string;
  content: string;
  author: string;
  tags: string[];
}

interface NewPostFormProps {
  images: ImageData[];
  onSuccess: () => void;
}

const NewPostForm = ({ images, onSuccess }: NewPostFormProps) => {
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
    const tagsRaw = form.get("tags")?.toString() ?? "";

    const tags = tagsRaw
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    const payload: NewPostFormData = {
      title,
      image,
      description,
      content,
      author,
      tags,
    };

    createPost(payload, {
      onSuccess: () => {
        onSuccess();
      },
    });

    e.currentTarget.reset();
    setSelectedUrl("");
  };

  return (
    <div className="mb-8">
      {isCreating && (
        <div className="mb-4 flex items-center text-gray-200">
          <HashloaderWrapper size={24} />
          <span className="ml-2">Beitrag wird erstellt...</span>
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className={`space-y-4 rounded-lg bg-neutral-800 p-6 shadow-md ${
          isCreating ? "pointer-events-none opacity-50" : ""
        }`}
      >
        <input
          name="title"
          placeholder="Titel"
          className="w-full rounded border border-neutral-700 bg-neutral-700 px-3 py-2 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        />

        <input
          name="description"
          placeholder="Beschreibung"
          className="w-full rounded border border-neutral-700 bg-neutral-700 px-3 py-2 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        />

        <input
          name="author"
          placeholder="Autor"
          className="w-full rounded border border-neutral-700 bg-neutral-700 px-3 py-2 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        />

        <div>
          <label htmlFor="image" className="mb-1 block text-gray-200">
            Bild auswählen
          </label>
          <select
            name="image"
            id="image"
            value={selectedUrl}
            onChange={(e) => setSelectedUrl(e.target.value)}
            className="w-full rounded border border-neutral-700 bg-neutral-700 px-3 py-2 text-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
        </div>

        <textarea
          name="content"
          placeholder="Inhalt"
          className="w-full rounded border border-neutral-700 bg-neutral-700 px-3 py-2 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          rows={4}
          required
        />

        <input
          name="tags"
          placeholder="Tags (kommagetrennt)"
          className="w-full rounded border border-neutral-700 bg-neutral-700 px-3 py-2 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        />

        <button
          type="submit"
          disabled={isCreating}
          className="w-full rounded bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {isCreating ? "Erstelle..." : "Erstellen"}
        </button>

        {createError && (
          <p className="mt-2 text-red-400">Fehler: {createError.message}</p>
        )}
      </form>
    </div>
  );
};

export default NewPostForm;
