"use client";
import React, { useState, useEffect } from "react";

export function SocialMediaManager() {
  const [links, setLinks] = useState<{ instagram?: string; tiktok?: string }>(
    {},
  );
  useEffect(() => {
    fetch("/api/social-links")
      .then((r) => r.json())
      .then((data) => setLinks(data));
  }, []);
  const save = async () => {
    await fetch("/api/social-links", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(links),
    });
  };
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Social Media</h2>
      <input
        value={links.instagram || ""}
        onChange={(e) =>
          setLinks((prev) => ({ ...prev, instagram: e.target.value }))
        }
        placeholder="Instagram URL"
        className="input"
      />
      <input
        value={links.tiktok || ""}
        onChange={(e) =>
          setLinks((prev) => ({ ...prev, tiktok: e.target.value }))
        }
        placeholder="TikTok URL"
        className="input"
      />
      <button onClick={save} className="btn">
        Save
      </button>
    </div>
  );
}
