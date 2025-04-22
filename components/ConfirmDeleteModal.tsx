import React from "react";

interface ConfirmDeleteModalProps {
  isOpen: boolean;
  email: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({
  isOpen,
  email,
  onConfirm,
  onCancel,
}) => {
  if (!isOpen) return null;

  return (
    <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="w-full max-w-lg rounded-lg bg-neutral-800 p-6 text-center shadow-md sm:max-w-sm">
        <h3 className="text-lg font-bold text-gray-100">E-Mail löschen?</h3>
        <p className="my-4 text-sm text-gray-300">
          Möchtest du wirklich die E-Mail &quot;{email}&quot; von der Whitelist
          entfernen?
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
          <button
            onClick={onCancel}
            className="w-full rounded bg-neutral-700 px-4 py-2 text-white hover:bg-neutral-600 sm:w-auto"
          >
            Abbrechen
          </button>
          <button
            onClick={onConfirm}
            className="w-full rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700 sm:w-auto"
          >
            Löschen
          </button>
        </div>
      </div>
    </div>
  );
};
