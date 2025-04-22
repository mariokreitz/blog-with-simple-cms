"use client";
import React from "react";
import { useSocialMediaUpdater } from "@/hooks/useSocialMediaUpdater";

export function SocialMediaManager() {
  const { links, isLoading, isError, saveLinks, isSaving } =
    useSocialMediaUpdater();

  const handleSave = () => {
    if (!links) return;
    saveLinks(links);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError || !links) return <div>Error loading social media links</div>;

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Social Media</h2>
      <input
        value={links.instagram ?? ""}
        onChange={(e) => saveLinks({ ...links, instagram: e.target.value })}
        placeholder="Instagram URL"
        className="input"
      />
      <input
        value={links.tiktok ?? ""}
        onChange={(e) => saveLinks({ ...links, tiktok: e.target.value })}
        placeholder="TikTok URL"
        className="input"
      />
      <button onClick={handleSave} className="btn" disabled={isSaving}>
        {isSaving ? "Saving..." : "Save"}
      </button>
    </div>
  );
}
