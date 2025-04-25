"use client";
import React, { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { BlogPost } from "@/types/BlogPost";
import { ImageData } from "@/types/ImageData";
import PostEditModal from "./PostEditModal";

interface PostsAdminProps {
  posts: BlogPost[];
  images: ImageData[];
}

const PostsAdmin: React.FC<PostsAdminProps> = ({ posts, images }) => {
  const [editPost, setEditPost] = useState<BlogPost | null>(null);
  const queryClient = useQueryClient();

  const save = async (p: BlogPost) => {
    await axios.put(`/api/posts/${p._id}`, p);
    queryClient.invalidateQueries({ queryKey: ["posts", "admin"] });
  };

  const del = async (id: string) => {
    await axios.delete(`/api/posts/${id}`);
    queryClient.invalidateQueries({ queryKey: ["posts", "admin"] });
  };

  return (
    <div>
      <h1 className="mb-6 rounded-lg bg-neutral-950/80 p-4 text-2xl font-semibold text-gray-100">
        Beiträge Übersicht
      </h1>

      {/* Mobile Ansicht (Cards) */}
      <div className="space-y-4 md:hidden">
        {posts.map((p) => (
          <div
            key={p._id}
            className="rounded-lg bg-neutral-800 p-4 shadow transition hover:bg-neutral-700"
            onClick={() => setEditPost(p)}
          >
            <div className="mb-3 flex justify-center">
              <img
                src={p.image}
                alt={p.title}
                className="h-32 w-auto rounded object-cover"
              />
            </div>
            <div className="space-y-1 text-sm text-gray-200">
              <p>
                <strong>Titel:</strong> {p.title}
              </p>
              <p>
                <strong>Autor:</strong> {p.author}
              </p>
              <p>
                <strong>Erstellt:</strong>{" "}
                {new Date(p.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Tabelle */}
      <div className="hidden overflow-x-auto rounded-lg shadow md:block">
        <table className="min-w-full border-separate border-spacing-y-2 text-left text-sm">
          <thead>
            <tr className="bg-neutral-900">
              <th className="border-b border-neutral-700 p-3">Vorschau</th>
              <th className="border-b border-neutral-700 p-3">Titel</th>
              <th className="border-b border-neutral-700 p-3">Autor</th>
              <th className="border-b border-neutral-700 p-3">Erstellt</th>
              <th className="border-b border-neutral-700 p-3">Aktualisiert</th>
              <th className="border-b border-neutral-700 p-3">Tags</th>
              <th className="border-b border-neutral-700 p-3 text-center">
                Aktion
              </th>
            </tr>
          </thead>
          <tbody>
            {posts.map((p) => (
              <tr
                key={p._id}
                className="rounded-lg bg-neutral-800 hover:bg-neutral-700"
              >
                <td className="p-2">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-16 w-auto rounded object-cover"
                  />
                </td>
                <td className="p-2 text-gray-200">{p.title}</td>
                <td className="p-2 text-gray-200">{p.author}</td>
                <td className="p-2 text-gray-200">
                  {new Date(p.createdAt).toLocaleDateString()}
                </td>
                <td className="p-2 text-gray-200">
                  {new Date(p.updatedAt).toLocaleDateString()}
                </td>
                <td className="p-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="mr-1 inline-block rounded-full bg-blue-600 px-2 py-1 text-xs text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </td>
                <td className="p-2 text-center">
                  <button
                    onClick={() => setEditPost(p)}
                    className="cursor-pointer rounded bg-blue-600 px-3 py-1 text-white hover:bg-blue-700"
                  >
                    Bearbeiten
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editPost && (
        <PostEditModal
          isOpen={!!editPost}
          post={editPost}
          images={images}
          onClose={() => setEditPost(null)}
          onSave={save}
          onDelete={del}
        />
      )}
    </div>
  );
};

export default PostsAdmin;
