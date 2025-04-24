"use client";
import React, { FormEvent, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPosts, getImages } from "@/lib/dataFetching";
import { BlogPost } from "@/types/BlogPost";
import { ImageData } from "@/types/ImageData";
import HashloaderWrapper from "./ui/hash-loader";
import PostsAdmin from "./PostsAdmin";

import { useCreatePost } from "@/hooks/useCreatePost";

interface NewPost {
  title: string;
  image: string;
  description: string;
  content: string;
  author: string;
  tags: string[];
}

export default function NewsManager() {
  const {
    data: posts,
    error: postError,
    isLoading: postsLoading,
    refetch: refetchPosts,
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

  const {
    mutate: createPost,
    isPending: isCreating,
    error: createError,
  } = useCreatePost();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);

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

    const payload: NewPost = {
      title,
      image,
      description,
      content,
      author,
      tags,
    };

    createPost(payload, {
      onSuccess: () => {
        refetchPosts();
      },
    });
  };

  if (postsLoading || imagesLoading) {
    return (
      <div className="my-14 flex flex-col items-center justify-center">
        <p className="my-12 text-3xl font-bold text-gray-200 md:text-5xl">
          Lade Daten...
        </p>
        <HashloaderWrapper />
      </div>
    );
  }

  if ((postError || imagesError) instanceof Error) {
    return (
      <p className="text-red-500">{(postError || imagesError)!.message}</p>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="mb-6 text-2xl font-semibold text-gray-100">
        News Manager
      </h2>

      {/* Feedback beim Erstellen */}
      {isCreating && (
        <div className="mb-4 flex items-center text-gray-200">
          <HashloaderWrapper size={24} />
          <span className="ml-2">Beitrag wird erstellt...</span>
        </div>
      )}

      {/* Formular zum Erstellen neuer Posts */}
      <form
        onSubmit={handleSubmit}
        className={`mb-8 space-y-4 rounded-lg bg-neutral-800 p-6 shadow-md ${
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
          disabled={isCreating}
          className="w-full rounded bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {isCreating ? "Erstelle..." : "Erstellen"}
        </button>

        {createError && (
          <p className="mt-2 text-red-400">Fehler: {createError.message}</p>
        )}
      </form>

      {/* Beiträge-Grid */}
      {!posts || posts.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-10">
          <p className="text-3xl font-bold text-gray-200">
            Keine News verfügbar
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <PostsAdmin posts={posts} />
        </div>
      )}
    </div>
  );
}
