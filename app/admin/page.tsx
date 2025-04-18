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
    </div>
  );
};

export default page;
