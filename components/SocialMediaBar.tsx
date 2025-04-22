"use client";
import React, { JSX } from "react";
import {
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandFacebook,
  IconBrandYoutube,
  IconBrandTwitter,
} from "@tabler/icons-react";
import { useSocialMediaUpdater } from "@/hooks/useSocialMediaUpdater";
import { AVAILABLE_PLATFORMS } from "@/lib/utils";

const platformIcons: Record<string, JSX.Element> = {
  instagram: <IconBrandInstagram />,
  tiktok: <IconBrandTiktok />,
  facebook: <IconBrandFacebook />,
  youtube: <IconBrandYoutube />,
  twitter: <IconBrandTwitter />,
};

const hoverColors: Record<string, string> = {
  instagram: "hover:text-[#DD2A7B] active:text-[#DD2A7B]",
  tiktok: "hover:text-[#69c9d0] active:text-[#69c9d0]",
  facebook: "hover:text-[#1877F2] active:text-[#1877F2]",
  youtube: "hover:text-[#FF0000] active:text-[#FF0000]",
  twitter: "hover:text-[#1DA1F2] active:text-[#1DA1F2]",
};

const SocialMediaBar = () => {
  const { links } = useSocialMediaUpdater();

  const activePlatforms = AVAILABLE_PLATFORMS.filter(
    (platform) => links?.[platform]?.url,
  );

  if (activePlatforms.length === 0) return null;

  return (
    <div className="fixed bottom-1/4 left-0 z-50 flex flex-col items-center justify-center gap-4 rounded-r-2xl bg-black p-3 shadow-sm shadow-gray-800">
      {activePlatforms.map((platform) => (
        <a
          key={platform}
          className={hoverColors[platform] ?? "hover:text-white"}
          href={links![platform].url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {platformIcons[platform]}
        </a>
      ))}
    </div>
  );
};

export default SocialMediaBar;
