"use client";
import { BlogPost } from "@/types/BlogPost";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function NewsManager() {
  const [items, setItems] = useState<BlogPost[]>([]);
  const load = async () => {
    const res = await fetch("/api/posts");
    const data = await res.json();
    setItems(data.posts);
  };
  useEffect(() => {
    load();
  }, []);

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
    load();
  };

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
        {items.map((n) => (
          <li key={n._id} className="rounded border p-2">
            <Image
              src={`/upload/${n.image}`}
              alt={n.title}
              width={200}
              height={200}
              className="h-32 w-32 object-cover"
            />
            <h3 className="font-semibold">{n.title}</h3>
            <p>{n.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
