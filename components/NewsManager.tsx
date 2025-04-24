"use client";
import { getPosts, getImages } from "@/lib/dataFetching";
import { BlogPost } from "@/types/BlogPost";
import { ImageData } from "@/types/ImageData";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import HashloaderWrapper from "./ui/hash-loader";

export default function NewsManager() {
  const queryClient = useQueryClient();

  const {
    data: posts,
    error: postError,
    isLoading: postsLoading,
  } = useQuery<BlogPost[]>({
    queryKey: ["posts", "admin"],
    queryFn: getPosts,
  });

  const {
    data: images,
    error: imagesError,
    isLoading: imagesLoading,
  } = useQuery<ImageData[]>({
    queryKey: ["images", "admin"],
    queryFn: getImages,
  });

  const [selectedUrl, setSelectedUrl] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);

    const title = form.get("title");
    const image = form.get("image");
    const description = form.get("description");
    const content = form.get("content");
    const author = form.get("author");
    const tagsRaw = form.get("tags") as string;
    const tags = tagsRaw
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    const payload = {
      title,
      image,
      description,
      content,
      author,
      tags,
    };

    await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    queryClient.invalidateQueries({ queryKey: ["posts", "admin"] });
  };

  if (postsLoading || imagesLoading)
    return (
      <div className="my-14 flex flex-col items-center justify-center">
        <p className="my-12 text-3xl font-bold text-gray-200 md:text-5xl">
          Lade Daten...
        </p>
        <HashloaderWrapper />
      </div>
    );

  if (postError instanceof Error || imagesError instanceof Error)
    return (
      <p className="text-red-500">{(postError || imagesError)?.message}</p>
    );

  return (
    <div className="container mx-auto p-4">
      <h2 className="mb-6 text-2xl font-semibold text-gray-100">
        News Manager
      </h2>

      {/* Formular mit Schema-Feldern */}
      <form
        onSubmit={handleSubmit}
        className="mb-8 space-y-4 rounded-lg bg-neutral-800 p-6 shadow-md"
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
            {images?.map((img) => (
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
          className="w-full rounded bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
        >
          Erstellen
        </button>
      </form>

      {/* Posts Grid */}
      {!posts || posts.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-10">
          <p className="text-3xl font-bold text-gray-200">
            Keine News verfügbar
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg bg-neutral-800 shadow-lg transition hover:scale-[1.02] hover:bg-neutral-700"
            >
              <img
                src={post.image}
                alt={post.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="mb-2 text-lg font-semibold text-gray-100">
                  {post.title}
                </h3>
                <p className="font-medium text-gray-300">{post.description}</p>
                <p className="mt-2 line-clamp-3 text-gray-300">
                  {post.content}
                </p>
                <p className="mt-2 text-sm text-gray-400">von {post.author}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index + tag}
                      className="rounded bg-blue-600 px-2 py-1 text-xs text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
