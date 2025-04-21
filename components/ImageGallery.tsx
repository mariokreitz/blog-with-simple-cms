"use client";

import { getImages } from "@/lib/dataFetching";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import type { ImageData } from "@/types/ImageData";
import axios from "axios";
import HashloaderWrapper from "./ui/hash-loader";

async function deleteImage(key: string) {
  const response = await axios.delete("/api/aws/images", {
    data: { key },
  });

  if (response.status !== 200) throw new Error("Löschen fehlgeschlagen");

  return key;
}

export default function ImageGallery() {
  const queryClient = useQueryClient();

  const { data, error, isLoading } = useQuery<ImageData[]>({
    queryKey: ["images", "admin"],
    queryFn: getImages,
    staleTime: 0,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });

  const mutation = useMutation({
    mutationFn: deleteImage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["images", "admin"] });
    },
    onError: (err) => console.error(err),
  });

  if (isLoading)
    return (
      <div className="my-14 flex flex-col items-center justify-center">
        <p className="my-12 text-3xl font-bold text-gray-200 md:text-5xl">
          Bilder werden geladen...
        </p>
        <HashloaderWrapper />
      </div>
    );

  if (error instanceof Error)
    return <p className="text-gray-200">{error.message}</p>;

  if (!data || data.length === 0) {
    return (
      <div className="my-14 flex flex-col items-center justify-center px-8">
        <p className="text-3xl font-bold text-gray-200 md:text-5xl">
          Keine Bilder verfügbar
        </p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="mb-6 bg-neutral-950/80 text-2xl font-semibold text-gray-100">
        Bildergalerie
      </h1>

      {/* Mobile Ansicht (Cards) */}
      <div className="space-y-4 md:hidden">
        {data.map((img) => (
          <div
            key={img.key}
            className="rounded-lg bg-neutral-800 p-4 shadow transition hover:bg-neutral-700"
          >
            <div className="mb-3 flex justify-center">
              <a href={img.url} target="_blank">
                <img
                  src={img.url}
                  alt={img.key}
                  className="h-32 w-auto rounded object-cover"
                />
              </a>
            </div>
            <div className="space-y-1 text-sm text-gray-200">
              <p>
                <strong>Dateiname:</strong> {img.key}
              </p>
              <p>
                <strong>Größe:</strong> {(img.size / 1024).toFixed(2)} KB
              </p>
              <p>
                <strong>Geändert:</strong>{" "}
                {new Date(img.lastModified).toLocaleString()}
              </p>
            </div>
            <button
              onClick={() => {
                const confirmed = confirm(`Bild wirklich löschen?\n${img.key}`);
                if (confirmed) mutation.mutate(img.key);
              }}
              className="mt-4 w-full rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700 disabled:opacity-50"
              disabled={mutation.isPending}
            >
              {mutation.isPending ? "Lösche..." : "Löschen"}
            </button>
          </div>
        ))}
      </div>

      {/* Desktop Tabelle */}
      <div className="hidden overflow-x-auto rounded-lg shadow md:block">
        <table className="min-w-full border-separate border-spacing-y-2 text-left text-sm">
          <thead>
            <tr className="bg-neutral-900">
              <th className="border-b border-neutral-700 p-3">Vorschau</th>
              <th className="border-b border-neutral-700 p-3">Dateiname</th>
              <th className="border-b border-neutral-700 p-3">Größe (KB)</th>
              <th className="border-b border-neutral-700 p-3">
                Zuletzt geändert
              </th>
              <th className="border-b border-neutral-700 p-3 text-center">
                Aktion
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((img) => (
              <tr
                key={img.key}
                className="rounded-lg bg-neutral-800 hover:bg-neutral-700"
              >
                <td className="p-2">
                  <a href={img.url} target="_blank">
                    <img
                      src={img.url}
                      alt={img.key}
                      className="h-16 w-auto rounded object-cover"
                    />
                  </a>
                </td>
                <td className="p-2">{img.key}</td>
                <td className="p-2">{(img.size / 1024).toFixed(2)}</td>
                <td className="p-2">
                  {new Date(img.lastModified).toLocaleString()}
                </td>
                <td className="p-2 text-center">
                  <button
                    onClick={() => {
                      const confirmed = confirm(
                        `Bild wirklich löschen?\n${img.key}`,
                      );
                      if (confirmed) mutation.mutate(img.key);
                    }}
                    className="cursor-pointer rounded bg-red-600 px-3 py-1 text-white hover:bg-red-700 disabled:opacity-50"
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
