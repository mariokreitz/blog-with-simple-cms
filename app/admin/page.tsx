import React from "react";
import { redirect } from "next/navigation";
import { getAuthSession } from "@/auth";

const AdminPage = async () => {
  const session = await getAuthSession();
  if (!session) redirect("/");
  return (
    <>
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <h3>Managers</h3>
    </>
  );
};

export default AdminPage;
