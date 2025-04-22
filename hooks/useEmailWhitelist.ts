import { useEffect, useState } from "react";
import {
  fetchWhitelist,
  addToWhitelist,
  removeFromWhitelist,
} from "../lib/dataFetching";

export const useEmailWhitelist = () => {
  const [emails, setEmails] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const load = async () => {
    setLoading(true);
    try {
      const data = await fetchWhitelist();
      setEmails(data);
    } catch (error) {
      console.error("Fehler beim Laden der Whitelist:", error);
    } finally {
      setLoading(false);
    }
  };

  const add = async (email: string) => {
    await addToWhitelist(email);
    await load();
  };

  const remove = async (email: string) => {
    await removeFromWhitelist(email);
    await load();
  };

  useEffect(() => {
    load();
  }, []);

  return {
    emails,
    loading,
    add,
    remove,
    reload: load,
  };
};
