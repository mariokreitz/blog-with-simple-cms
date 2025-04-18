import React from "react";
import { authConfig } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const AdminPage = async () => {
  const session = await getServerSession(authConfig);
  if (!session) redirect("/");
  return (
    <div className="container mx-auto space-y-8 px-4 py-24">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
    </div>
  );
};

export default AdminPage;
