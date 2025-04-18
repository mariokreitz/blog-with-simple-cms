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
      <h1>Admin</h1>
      <p>admin page works</p>
      <h1>Welcome {session.user?.name}</h1>
      <p>This is a protected dashboard page.</p>
    </div>
  );
};

export default page;
