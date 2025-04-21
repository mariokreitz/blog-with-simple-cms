"use client";
import { getPosts } from "@/lib/dataFetching";
import { BlogPost } from "@/types/BlogPost";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";
import HashloaderWrapper from "./ui/hash-loader";

export default function NewsManager() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["posts", "admin"],
    queryFn: getPosts,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    const uploadRes = await fetch("/api/upload", {
      method: "POST",
      body: form,
    });
    const { url } = await uploadRes.json();
    const payload = {
      title: form.get("title"),
      content: form.get("content"),
      imageUrl: url,
    };
    await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  };

  if (isLoading)
    return (
      <div className="my-14 flex flex-col items-center justify-center">
        <p className="my-12 text-3xl font-bold md:text-5xl">
          News werden geladen...
        </p>
        <HashloaderWrapper />
      </div>
    );

  if (error instanceof Error) return <p>{error.message}</p>;

  if (!data || data.length === 0) {
    return (
      <div className="my-14 flex flex-col items-center justify-center px-8">
        <p className="text-3xl font-bold md:text-5xl">Keine News verfügbar</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Post</h2>
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="space-y-4"
      >
        <input name="title" placeholder="Title" className="input" required />
        <textarea
          name="content"
          placeholder="Content"
          className="textarea"
          required
        ></textarea>
        <input type="file" name="file" accept="image/*" required />
        <button type="submit" className="btn">
          Create
        </button>
      </form>
      <ul className="space-y-2">
        {data.map((post: BlogPost, index) => (
          <li key={index} className="rounded border p-2">
            <Image
              src={`/upload/${post.image}`}
              alt={post.title}
              width={200}
              height={200}
              className="h-32 w-32 object-cover"
            />
            <h3 className="font-semibold">{post.title}</h3>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
