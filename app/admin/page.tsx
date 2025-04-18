import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth();

  if (!session) {
    return redirect("/");
  }
  return (
    <div className="container mx-auto px-4 py-24">
      <h1>Dashboard</h1>
      <p>Willkommen {session.user?.name} im Dashboard.</p>
      <p>Hier hast du Zugriff auf alle Funktionen, die du als Admin nutzt.</p>
      <p>
        Beachte bitte, dass du nur Zugriff auf die Funktionen hast, die du
        brauchst, um die Website zu verwalten.
      </p>
      <div className="mt-8 grid grid-cols-3 gap-4">
        <div className="rounded-md bg-white p-4 shadow-md">
          <h2 className="text-lg font-bold">Beiträge</h2>
          <p className="text-sm">Liste aller Beiträge</p>
          <a
            href="/admin/posts"
            className="text-blue-500 underline hover:text-blue-700"
          >
            Zur Beitragsübersicht
          </a>
        </div>
        <div className="rounded-md bg-white p-4 shadow-md">
          <h2 className="text-lg font-bold">Bilder</h2>
          <p className="text-sm">Liste aller Bilder</p>
          <a
            href="/admin/images"
            className="text-blue-500 underline hover:text-blue-700"
          >
            Zur Bilddateiübersicht
          </a>
        </div>
        <div className="rounded-md bg-white p-4 shadow-md">
          <h2 className="text-lg font-bold">Pages</h2>
          <p className="text-sm">Liste aller Seiten</p>
          <a
            href="/admin/pages"
            className="text-blue-500 underline hover:text-blue-700"
          >
            Zur Seitenübersicht
          </a>
        </div>
      </div>
    </div>
  );
};

export default page;
