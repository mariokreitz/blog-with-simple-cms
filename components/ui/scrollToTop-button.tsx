"use client";
import { scrollToTop } from "@/lib/scrollToTop";
import { IconArrowUp } from "@tabler/icons-react";
import { useState, useEffect } from "react";

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <button
      title="Scroll to top"
      type="button"
      className={`${isVisible ? "" : "hidden"} fixed right-0 bottom-0 z-50 mb-[71px] flex cursor-pointer items-center gap-2 rounded-s-full bg-black px-4 py-2 text-xs shadow-sm shadow-gray-800`}
      onClick={scrollToTop}
    >
      <IconArrowUp className="inline-block h-4 w-4" />
    </button>
  );
};
