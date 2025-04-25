import React, { useState } from "react";
import NewPostForm from "./ui/NewPostForm";
import { ImageData } from "@/types/ImageData";
import {
  IconPlus,
  IconChevronDown,
  IconChevronRight,
} from "@tabler/icons-react";

interface AccordionNewPostProps {
  images: ImageData[];
  onSuccess: () => void;
}

const AccordionNewPost = ({ images, onSuccess }: AccordionNewPostProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6 rounded-lg bg-neutral-900 shadow-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full cursor-pointer items-center justify-between rounded-t-lg bg-neutral-950 px-4 py-3 text-left text-lg font-semibold text-gray-100 hover:bg-neutral-800"
      >
        <span className="flex items-center gap-2">
          <IconPlus size={20} />
          Neuen Beitrag erstellen
        </span>
        {isOpen ? (
          <IconChevronDown size={20} />
        ) : (
          <IconChevronRight size={20} />
        )}
      </button>

      {isOpen && (
        <div className="border-t border-neutral-800">
          <NewPostForm
            images={images}
            onSuccess={() => {
              setIsOpen(false);
              onSuccess();
            }}
          />
        </div>
      )}
    </div>
  );
};

export default AccordionNewPost;
