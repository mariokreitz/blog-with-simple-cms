import React from "react";
import { IconBrandInstagram, IconBrandTiktok } from "@tabler/icons-react";

const SocialMediaBar = () => {
  return (
    <div className="fixed bottom-1/4 left-0 z-50 flex flex-col items-center justify-center gap-4 rounded-r-2xl bg-black p-3 shadow-sm shadow-gray-800">
      <a
        className="hover:text-[#DD2A7B] active:text-[#DD2A7B]"
        href="https://www.instagram.com/lipp.tattoos/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconBrandInstagram />
      </a>
      <a
        className="hover:text-[#69c9d0] active:text-[#69c9d0]"
        href="https://www.tiktok.com/@lipp.tattoos"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconBrandTiktok />
      </a>
    </div>
  );
};

export default SocialMediaBar;
