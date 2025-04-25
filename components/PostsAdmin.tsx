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

const PostsAdmin = ({ posts, images }: PostsAdminProps) => {
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
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p, index) => (
          <div
            key={index}
            className="relative cursor-pointer rounded-lg bg-neutral-800 shadow-lg transition hover:scale-105"
            onClick={() => setEditPost(p)}
          >
            <img
              src={p.image}
              alt={p.title}
              className="h-48 w-full rounded-t-lg object-cover"
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
