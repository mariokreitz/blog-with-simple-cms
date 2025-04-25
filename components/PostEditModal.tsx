"use client";

import { BlogPost } from "@/types/BlogPost";
import React, { useState, useEffect } from "react";
import { IconX } from "@tabler/icons-react";

interface PostEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  post: BlogPost;
  onSave: (post: BlogPost) => void;
  onDelete: (id: string) => void;
  images: { key: string; url: string }[];
}

const PostEditModal = ({
  isOpen,
  onClose,
  post,
  onSave,
  onDelete,
  images,
}: PostEditModalProps) => {
  const [editedPost, setEditedPost] = useState<BlogPost>(post);
  const [confirmDelete, setConfirmDelete] = useState(false);

  useEffect(() => {
    setEditedPost(post);
    setConfirmDelete(false);
  }, [post]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleInputChange = <K extends keyof BlogPost>(
    field: K,
    value: BlogPost[K],
  ) => {
    setEditedPost({ ...editedPost, [field]: value });
  };

  const handleTagChange = (index: number, value: string) => {
    const newTags = [...editedPost.tags];
    newTags[index] = value;
    setEditedPost({ ...editedPost, tags: newTags });
  };

  const handleRemoveTag = (index: number) => {
    const newTags = editedPost.tags.filter((_, i) => i !== index);
    setEditedPost({ ...editedPost, tags: newTags });
  };

  const handleAddTag = () => {
    setEditedPost({ ...editedPost, tags: [...editedPost.tags, ""] });
  };

  const handleDelete = () => {
    if (!confirmDelete) {
      setConfirmDelete(true);
    } else {
      onDelete(post._id!);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto sm:px-6">
      <div
        className="bg-opacity-60 absolute inset-0 bg-black"
        onClick={onClose}
      />

      <div className="relative z-10 max-h-full w-full max-w-2xl overflow-y-auto bg-neutral-900 p-6 shadow-2xl sm:rounded-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
          aria-label="Close"
        >
          <IconX size={24} />
        </button>

        <h2 className="mb-6 text-2xl font-semibold text-gray-100">
          Beitrag bearbeiten
        </h2>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            value={editedPost.title}
            onChange={(e) => handleInputChange("title", e.target.value)}
            placeholder="Titel"
            className="w-full rounded-lg bg-neutral-800 px-4 py-2 text-white placeholder-gray-500"
          />

          <select
            value={editedPost.image}
            onChange={(e) => handleInputChange("image", e.target.value)}
            className="w-full rounded-lg bg-neutral-800 px-4 py-2 text-gray-100"
          >
            {images.map((img) => (
              <option key={img.key} value={img.url}>
                {img.key}
              </option>
            ))}
          </select>

          <textarea
            value={editedPost.description}
            onChange={(e) => handleInputChange("description", e.target.value)}
            placeholder="Beschreibung"
            className="w-full rounded-lg bg-neutral-800 px-4 py-2 text-white placeholder-gray-500"
            rows={3}
          />

          <textarea
            value={editedPost.content}
            onChange={(e) => handleInputChange("content", e.target.value)}
            placeholder="Inhalt"
            className="w-full rounded-lg bg-neutral-800 px-4 py-2 text-white placeholder-gray-500"
            rows={5}
          />

          <input
            type="text"
            value={editedPost.author}
            onChange={(e) => handleInputChange("author", e.target.value)}
            placeholder="Autor"
            className="w-full rounded-lg bg-neutral-800 px-4 py-2 text-white placeholder-gray-500"
          />

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-100">
              Tags
            </label>
            <div className="space-y-2">
              {editedPost.tags.map((tag, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-2 sm:flex-row sm:items-center"
                >
                  <input
                    type="text"
                    value={tag}
                    onChange={(e) => handleTagChange(i, e.target.value)}
                    className="flex-1 rounded-lg bg-neutral-800 px-4 py-2 text-white placeholder-gray-500"
                    placeholder={`Tag ${i + 1}`}
                  />
                  <button
                    onClick={() => handleRemoveTag(i)}
                    className="w-full rounded bg-red-600 px-3 py-2 text-white hover:bg-red-700 sm:w-auto"
                  >
                    Entfernen
                  </button>
                </div>
              ))}
              <button
                onClick={handleAddTag}
                className="mt-2 rounded bg-blue-600 px-3 py-2 text-white hover:bg-blue-700"
              >
                Tag hinzufügen
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-between">
          <button
            onClick={onClose}
            className="w-full rounded-lg bg-gray-600 px-5 py-2 text-white hover:bg-gray-700 sm:w-auto"
          >
            Abbrechen
          </button>

          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              onClick={handleDelete}
              className={`w-full rounded-lg px-5 py-2 text-white sm:w-auto ${confirmDelete ? "bg-red-900 hover:bg-red-950" : "bg-red-700 hover:bg-red-800"}`}
            >
              {confirmDelete ? "Wirklich löschen?" : "Löschen"}
            </button>

            <button
              onClick={() => onSave(editedPost)}
              className="w-full rounded-lg bg-green-600 px-5 py-2 text-white hover:bg-green-700 sm:w-auto"
            >
              Speichern
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostEditModal;
