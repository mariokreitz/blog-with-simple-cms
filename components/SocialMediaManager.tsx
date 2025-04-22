"use client";
import React, { useState, useEffect } from "react";
import { useSocialMediaUpdater } from "@/hooks/useSocialMediaUpdater";
import { SocialMediaLinks } from "@/types/SocialMediaLinks";

const AVAILABLE_PLATFORMS = [
  "instagram",
  "tiktok",
  "facebook",
  "youtube",
  "twitter",
];

export function SocialMediaManager() {
  const { links, isLoading, isError, saveLinks, isSaving } =
    useSocialMediaUpdater();

  const [localLinks, setLocalLinks] = useState<SocialMediaLinks>(() => {
    const initial: SocialMediaLinks = {};
    AVAILABLE_PLATFORMS.forEach((platform) => {
      initial[platform] = { active: false, url: "" };
    });
    return initial;
  });

  useEffect(() => {
    if (!links) return;
    setLocalLinks((prev) => {
      const updated = { ...prev };
      AVAILABLE_PLATFORMS.forEach((platform) => {
        updated[platform] = {
          active: !!links[platform],
          url: links[platform]?.url || "",
        };
      });
      return updated;
    });
  }, [links]);

  const handleSave = () => {
    const activeLinks: SocialMediaLinks = {};
    for (const [platform, data] of Object.entries(localLinks)) {
      if (data.active && data.url.trim()) {
        activeLinks[platform] = {
          url: data.url.trim(),
          active: data.active,
        };
      }
    }
    saveLinks(activeLinks);
  };

  if (isLoading)
    return (
      <div className="my-14 flex flex-col items-center justify-center">
        <p className="my-6 text-3xl font-bold text-gray-200">
          Lade Social Media Links...
        </p>
      </div>
    );

  if (isError || !links)
    return (
      <div className="text-red-500">
        Fehler beim Laden der Social Media Links
      </div>
    );

  return (
    <div className="space-y-6 rounded-lg bg-neutral-900 p-6 text-gray-100 shadow-md">
      <h2 className="text-2xl font-bold">Social Media Manager</h2>

      {AVAILABLE_PLATFORMS.map((platform) => (
        <div
          key={platform}
          className="rounded-md bg-neutral-800 p-4 shadow transition hover:bg-neutral-700"
        >
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={localLinks[platform]?.active}
              onChange={() =>
                setLocalLinks((prev) => ({
                  ...prev,
                  [platform]: {
                    ...prev[platform],
                    active: !prev[platform].active,
                  },
                }))
              }
              className="h-4 w-4 accent-blue-500"
            />
            <span className="text-lg capitalize">{platform}</span>
          </label>

          {localLinks[platform]?.active && (
            <input
              type="url"
              value={localLinks[platform]?.url || ""}
              onChange={(e) =>
                setLocalLinks((prev) => ({
                  ...prev,
                  [platform]: {
                    ...prev[platform],
                    url: e.target.value,
                  },
                }))
              }
              placeholder={`${platform} URL`}
              className="mt-2 w-full rounded bg-neutral-700 p-2 text-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          )}
        </div>
      ))}

      <button
        onClick={handleSave}
        className="w-full rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
        disabled={isSaving}
      >
        {isSaving ? "Speichern..." : "Speichern"}
      </button>
    </div>
  );
}
