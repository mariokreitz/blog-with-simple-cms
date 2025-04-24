import { BlogPost } from "@/types/BlogPost";
import React, { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";

interface PostsAdminProps {
  posts: BlogPost[];
}

const PostsAdmin: React.FC<PostsAdminProps> = ({ posts }) => {
  const [postList, setPostList] = useState<BlogPost[]>(posts);
  const [editableIndex, setEditableIndex] = useState<number | null>(null);
  const [editedPost, setEditedPost] = useState<BlogPost | null>(null);

  const queryClient = useQueryClient();

  const handleEditClick = (post: BlogPost, index: number) => {
    setEditableIndex(index);
    setEditedPost({ ...post });
  };

  function handleInputChange<K extends keyof BlogPost>(
    field: K,
    value: BlogPost[K],
  ) {
    if (!editedPost) return;
    setEditedPost({ ...editedPost, [field]: value });
  }

  const handleSave = async () => {
    if (editableIndex === null || !editedPost) return;

    setPostList((prev) => {
      const updated = [...prev];
      updated[editableIndex] = editedPost;
      return updated;
    });
    setEditableIndex(null);
    setEditedPost(null);
    queryClient.invalidateQueries({ queryKey: ["posts", "admin"] });
  };

  const handleDelete = async (index: number) => {
    const id = postList[index]._id;

    setPostList((prev) => prev.filter((_, i) => i !== index));
    if (editableIndex === index) {
      setEditableIndex(null);
      setEditedPost(null);
    }

    try {
      await axios.delete(`/api/posts/${id}`);
    } catch (err) {
      console.error("Failed to delete post", err);
    }

    queryClient.invalidateQueries({ queryKey: ["posts", "admin"] });
  };

  return postList.map((post, index) => (
    <div
      key={post._id || index}
      className="overflow-hidden rounded-lg bg-neutral-800 shadow-lg transition hover:scale-[1.02] hover:bg-neutral-700"
      onClick={() => handleEditClick(post, index)}
    >
      {editableIndex === index ? (
        <div className="p-4">
          <input
            type="text"
            value={editedPost?.title ?? ""}
            onChange={(e) => handleInputChange("title", e.target.value)}
            className="mb-2 w-full border-b border-gray-400 bg-transparent text-lg font-semibold text-gray-100"
          />
          <textarea
            value={editedPost?.description ?? ""}
            onChange={(e) => handleInputChange("description", e.target.value)}
            className="mb-2 w-full border-b border-gray-400 bg-transparent font-medium text-gray-300"
          />
          <textarea
            value={editedPost?.content ?? ""}
            onChange={(e) => handleInputChange("content", e.target.value)}
            className="mb-2 w-full border-b border-gray-400 bg-transparent text-gray-300"
          />
          <input
            type="text"
            value={editedPost?.author ?? ""}
            onChange={(e) => handleInputChange("author", e.target.value)}
            className="mb-2 w-full border-b border-gray-400 bg-transparent text-sm text-gray-400"
          />

          <div className="mb-4 flex flex-wrap gap-2">
            {(editedPost?.tags ?? []).map((tag, i) => (
              <input
                key={i}
                type="text"
                value={tag}
                onChange={(e) => {
                  const newTags = [...(editedPost?.tags || [])];
                  newTags[i] = e.target.value;
                  handleInputChange("tags", newTags as BlogPost["tags"]);
                }}
                className="rounded border-b border-gray-400 bg-transparent px-2 py-1 text-xs text-white"
              />
            ))}
          </div>

          <div className="flex gap-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleSave();
              }}
              className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
            >
              Speichern
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(index);
              }}
              className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
            >
              Löschen
            </button>
          </div>
        </div>
      ) : (
        <>
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
            <p className="mt-2 line-clamp-3 text-gray-300">{post.content}</p>
            <p className="mt-2 text-sm text-gray-400">von {post.author}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {post.tags.map((tag, i) => (
                <span
                  key={i + tag}
                  className="rounded bg-blue-600 px-2 py-1 text-xs text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  ));
};

export default PostsAdmin;
