"use client";
import React, { useState, useEffect } from "react";
import { BlogPost } from "@/types/BlogPost";
import { ImageData } from "@/types/ImageData";

interface PostEditModalProps {
  isOpen: boolean;
  post: BlogPost | null;
  images: ImageData[];
  onClose: () => void;
  onSave: (updated: BlogPost) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
}

const PostEditModal: React.FC<PostEditModalProps> = ({
  isOpen,
  post,
  images,
  onClose,
  onSave,
  onDelete,
}) => {
  const [edited, setEdited] = useState<BlogPost | null>(post);
  const [loading, setLoading] = useState({ save: false, del: false });

  useEffect(() => {
    setEdited(post);
  }, [post]);
  if (!isOpen || !edited) return null;

  const change = <K extends keyof BlogPost>(field: K, value: BlogPost[K]) =>
    setEdited({ ...edited, [field]: value });
  const addTag = () => setEdited({ ...edited, tags: [...edited.tags, ""] });
  const updateTag = (i: number, v: string) => {
    const t = [...edited.tags];
    t[i] = v;
    setEdited({ ...edited, tags: t });
  };
  const removeTag = (i: number) =>
    setEdited({ ...edited, tags: edited.tags.filter((_, idx) => idx !== i) });

  const save = async () => {
    setLoading((s) => ({ ...s, save: true }));
    await onSave(edited);
    setLoading((s) => ({ ...s, save: false }));
    onClose();
  };
  const del = async () => {
    setLoading((s) => ({ ...s, del: true }));
    await onDelete(edited._id!);
    setLoading((s) => ({ ...s, del: false }));
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="bg-opacity-60 absolute inset-0 bg-black"
        onClick={onClose}
      ></div>
      <div className="relative z-10 w-full max-w-2xl rounded-2xl bg-neutral-900 p-6 shadow-2xl">
        <h3 className="mb-4 text-2xl font-semibold text-gray-100">
          Beitrag bearbeiten
        </h3>
        <div className="space-y-4">
          <input
            value={edited.title}
            onChange={(e) => change("title", e.target.value)}
            className="w-full rounded-lg bg-neutral-800 px-4 py-2 text-gray-100"
            placeholder="Titel"
          />
          <select
            value={edited.image}
            onChange={(e) => change("image", e.target.value)}
            className="w-full rounded-lg bg-neutral-800 px-4 py-2 text-gray-100"
          >
            {images.map((img) => (
              <option key={img.key} value={img.url}>
                {img.key}
              </option>
            ))}
          </select>
          <textarea
            value={edited.description}
            onChange={(e) => change("description", e.target.value)}
            className="w-full rounded-lg bg-neutral-800 px-4 py-2 text-gray-100"
            placeholder="Beschreibung"
            rows={3}
          />
          <textarea
            value={edited.content}
            onChange={(e) => change("content", e.target.value)}
            className="w-full rounded-lg bg-neutral-800 px-4 py-2 text-gray-100"
            placeholder="Inhalt"
            rows={5}
          />
          <input
            value={edited.author}
            onChange={(e) => change("author", e.target.value)}
            className="w-full rounded-lg bg-neutral-800 px-4 py-2 text-gray-100"
            placeholder="Autor"
          />
          <div className="space-y-2">
            {edited.tags.map((tag, i) => (
              <div key={i} className="flex items-center gap-2">
                <input
                  value={tag}
                  onChange={(e) => updateTag(i, e.target.value)}
                  className="flex-1 rounded-lg bg-neutral-800 px-4 py-2 text-gray-100"
                />
                <button
                  type="button"
                  onClick={() => removeTag(i)}
                  className="text-red-400 hover:opacity-80"
                >
                  ×
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addTag}
              className="text-blue-400 hover:underline"
            >
              + Tag hinzufügen
            </button>
          </div>
        </div>
        <div className="mt-6 flex justify-end gap-4">
          <button
            onClick={onClose}
            className="rounded-lg bg-gray-700 px-5 py-2 hover:bg-gray-600"
          >
            Abbrechen
          </button>
          <button
            onClick={del}
            disabled={loading.del}
            className="rounded-lg bg-red-600 px-5 py-2 hover:bg-red-500 disabled:opacity-50"
          >
            {loading.del ? "Löschen..." : "Löschen"}
          </button>
          <button
            onClick={save}
            disabled={loading.save}
            className="rounded-lg bg-green-600 px-5 py-2 hover:bg-green-500 disabled:opacity-50"
          >
            {loading.save ? "Speichern..." : "Speichern"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostEditModal;
