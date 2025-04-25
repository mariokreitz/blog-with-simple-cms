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
    <>
      <div className="hidden overflow-x-auto rounded-lg bg-neutral-800 shadow-lg md:block">
        <table className="min-w-full table-auto">
          <thead className="bg-neutral-700">
            <tr>
              <th className="px-4 py-2 text-left text-gray-100">Bild</th>
              <th className="px-4 py-2 text-left text-gray-100">Titel</th>
              <th className="px-4 py-2 text-left text-gray-100">Autor</th>
              <th className="px-4 py-2 text-left text-gray-100">Erstellt</th>
              <th className="px-4 py-2 text-left text-gray-100">
                Aktualisiert
              </th>
              <th className="px-4 py-2 text-left text-gray-100">Tags</th>
              <th className="px-4 py-2 text-left text-gray-100">Aktion</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((p) => (
              <tr
                key={p._id}
                className="border-b border-neutral-700 hover:bg-neutral-700"
              >
                <td className="px-4 py-2">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-12 w-12 rounded object-cover"
                  />
                </td>
                <td className="px-4 py-2 text-gray-200">{p.title}</td>
                <td className="px-4 py-2 text-gray-200">{p.author}</td>
                <td className="px-4 py-2 text-gray-200">
                  {new Date(p.createdAt).toLocaleDateString()}
                </td>
                <td className="px-4 py-2 text-gray-200">
                  {new Date(p.updatedAt).toLocaleDateString()}
                </td>
                <td className="px-4 py-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="mr-1 inline-block rounded-full bg-blue-600 px-2 py-1 text-xs text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => setEditPost(p)}
                    className="text-sm text-blue-400 hover:underline"
                  >
                    Bearbeiten
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="grid grid-cols-1 gap-6 md:hidden">
        {posts.map((p) => (
          <div
            key={p._id}
            className="cursor-pointer overflow-hidden rounded-lg bg-neutral-800 shadow-lg hover:shadow-xl"
            onClick={() => setEditPost(p)}
          >
            <img
              src={p.image}
              alt={p.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-100">{p.title}</h3>
              <p className="line-clamp-3 text-gray-300">{p.content}</p>
            </div>
          </div>
        ))}
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
    </>
  );
};

export default PostsAdmin;
