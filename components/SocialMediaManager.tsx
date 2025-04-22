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

  const [localLinks, setLocalLinks] = useState<SocialMediaLinks>({});

  useEffect(() => {
    const initialLinks: Record<string, { active: boolean; url: string }> = {};
    AVAILABLE_PLATFORMS.forEach((platform) => {
      initialLinks[platform] = {
        active: !!links?.[platform],
        url: links?.[platform]?.url || "",
      };
    });
    setLocalLinks(initialLinks);
  }, [links]);

  const handleSave = () => {
    const activeLinks: SocialMediaLinks = {};

    const entries = Object.entries(localLinks as SocialMediaLinks);

    for (const [platform, data] of entries) {
      if (data.active && data.url.trim()) {
        activeLinks[platform] = {
          url: data.url.trim(),
          active: data.active,
        };
      }
    }

    saveLinks(activeLinks);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError || !links) return <div>Error loading social media links</div>;

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Social Media Manager</h2>

      {AVAILABLE_PLATFORMS.map((platform) => (
        <div key={platform} className="space-y-2">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={localLinks[platform]?.active}
              onChange={() =>
                setLocalLinks((prev) => ({
                  ...prev,
                  [platform]: {
                    ...prev[platform],
                    active: !prev[platform].active, // Toggle active status
                  },
                }))
              }
            />
            <span className="capitalize">{platform}</span>
          </label>

          {localLinks[platform]?.active && (
            <input
              type="url"
              value={localLinks[platform].url}
              onChange={(e) =>
                setLocalLinks((prev) => ({
                  ...prev,
                  [platform]: {
                    ...prev[platform],
                    url: e.target.value, // Update the URL
                  },
                }))
              }
              placeholder={`${platform} URL`}
              className="input w-full"
            />
          )}
        </div>
      ))}

      <button onClick={handleSave} className="btn mt-4" disabled={isSaving}>
        {isSaving ? "Saving..." : "Save"}
      </button>
    </div>
  );
}
