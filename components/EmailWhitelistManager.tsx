"use client";
import React, { useState, useEffect } from "react";

export function EmailWhitelistManager() {
  const [emails, setEmails] = useState<string[]>([]);
  const [newEmail, setNewEmail] = useState("");
  const load = async () => {
    setEmails(await (await fetch("/api/whitelist")).json());
  };
  useEffect(() => {
    load();
  }, []);
  const add = async () => {
    await fetch("/api/whitelist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: newEmail }),
    });
    setNewEmail("");
    load();
  };
  const remove = async (e: string) => {
    await fetch("/api/whitelist", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: e }),
    });
    load();
  };
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Email Whitelist</h2>
      <div className="flex space-x-2">
        <input
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
          placeholder="user@example.com"
          className="input"
        />
        <button onClick={add} className="btn">
          Add
        </button>
      </div>
      <ul>
        {emails.map((e) => (
          <li key={e} className="flex justify-between">
            <span>{e}</span>
            <button onClick={() => remove(e)} className="text-red-500">
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
