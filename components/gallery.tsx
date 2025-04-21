"use client";

import { getImages } from "@/lib/dataFetching";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { CSSProperties } from "react";
import { HashLoader } from "react-spinners";
import type { ImageData } from "@/types/ImageData";
import axios from "axios";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

async function deleteImage(key: string) {
  const response = await axios.delete("/api/aws/images", {
    data: { key },
  });

  if (response.status !== 200) throw new Error("Löschen fehlgeschlagen");

  return key;
}

export default function GalleryPage() {
  const queryClient = useQueryClient();

  const { data, error, isLoading } = useQuery<ImageData[]>({
    queryKey: ["images", "admin"],
    queryFn: getImages,
  });

  const mutation = useMutation({
    mutationFn: deleteImage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["images", "admin"] });
    },
  });

  if (isLoading)
    return (
      <div className="my-14 flex flex-col items-center justify-center">
        <p className="my-12 text-3xl font-bold md:text-5xl">
          Bilder werden geladen...
        </p>
        <HashLoader
          color="gray"
          loading={true}
          cssOverride={override}
          size={100}
          aria-label="Loading Spinner"
        />
      </div>
    );

  if (error instanceof Error) return <p>{error.message}</p>;

  if (!data || data.length === 0) {
    return (
      <div className="my-14 flex flex-col items-center justify-center px-8">
        <p className="text-3xl font-bold md:text-5xl">Keine Bilder verfügbar</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-semibold text-gray-800">
        📸 Bildergalerie
      </h1>
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full border border-gray-200 bg-white text-left text-sm">
          <thead className="bg-gray-50 text-gray-700">
            <tr>
              <th className="border p-3">Vorschau</th>
              <th className="border p-3">Dateiname</th>
              <th className="border p-3">Größe (KB)</th>
              <th className="border p-3">Zuletzt geändert</th>
              <th className="border p-3 text-center">Aktion</th>
            </tr>
          </thead>
          <tbody>
            {data.map((img) => (
              <tr key={img.key} className="transition hover:bg-gray-50">
                <td className="border p-2">
                  <img
                    src={img.url}
                    alt={img.key}
                    className="h-16 w-auto rounded object-cover"
                  />
                </td>
                <td className="border p-2">{img.key}</td>
                <td className="border p-2">{(img.size / 1024).toFixed(2)}</td>
                <td className="border p-2">
                  {new Date(img.lastModified).toLocaleString()}
                </td>
                <td className="border p-2 text-center">
                  <button
                    onClick={() => {
                      const confirmed = confirm(
                        `Bild wirklich löschen?\n${img.key}`,
                      );
                      if (confirmed) mutation.mutate(img.key);
                    }}
                    className="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600 disabled:opacity-50"
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending ? "Lösche..." : "Löschen"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
