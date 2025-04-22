"use client";
import React, { useState } from "react";
import { useEmailWhitelist } from "../hooks/useEmailWhitelist";
import { ConfirmDeleteModal } from "./ConfirmDeleteModal";

export function EmailWhitelistManager() {
  const { emails, add, remove, loading } = useEmailWhitelist();
  const [newEmail, setNewEmail] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emailToRemove, setEmailToRemove] = useState<string | null>(null);

  const handleRemove = (email: string) => {
    setEmailToRemove(email);
    setIsModalOpen(true);
  };

  const confirmRemove = async () => {
    if (emailToRemove) {
      await remove(emailToRemove);
    }
    setIsModalOpen(false);
    setEmailToRemove(null);
  };

  const cancelRemove = () => {
    setIsModalOpen(false);
    setEmailToRemove(null);
  };

  return (
    <div className="space-y-6 rounded-lg bg-neutral-900 p-6 text-gray-100 shadow-md">
      <h2 className="text-2xl font-bold">Email Whitelist</h2>

      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        <input
          type="email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
          placeholder="user@example.com"
          className="w-full rounded bg-neutral-800 p-2 text-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <button
          onClick={async () => {
            if (!newEmail.trim()) return;
            await add(newEmail);
            setNewEmail("");
          }}
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
          disabled={!newEmail.trim()}
        >
          Hinzufügen
        </button>
      </div>

      {loading ? (
        <p className="text-gray-400">Lade Whitelist...</p>
      ) : (
        <ul className="divide-y divide-neutral-700">
          {emails.map((email) => (
            <li
              key={email}
              className="flex flex-col items-start justify-between gap-2 py-3 sm:flex-row sm:items-center"
            >
              <span className="break-all text-gray-200">{email}</span>
              <button
                onClick={() => handleRemove(email)}
                className="rounded bg-red-600 px-4 py-2 text-sm text-white hover:bg-red-700"
              >
                Entfernen
              </button>
            </li>
          ))}
        </ul>
      )}

      <ConfirmDeleteModal
        isOpen={isModalOpen}
        email={emailToRemove || ""}
        onConfirm={confirmRemove}
        onCancel={cancelRemove}
      />
    </div>
  );
}
