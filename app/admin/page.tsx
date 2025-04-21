import React from "react";
import { redirect } from "next/navigation";
import NewsManager from "@/components/NewsManager";
import { SocialMediaManager } from "@/components/SocialMediaManager";
import { EmailWhitelistManager } from "@/components/EmailWhitelistManager";
import { getAuthSession } from "@/auth";
import ImageUploader from "@/components/ImageUploader";

const AdminPage = async () => {
  const session = await getAuthSession();
  if (!session) redirect("/");
  return (
    <div className="container mx-auto space-y-8 px-4 py-24">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <h2>Image Uploader</h2>
      <ImageUploader />
      <NewsManager />
      <SocialMediaManager />
      <EmailWhitelistManager />
    </div>
  );
};

export default AdminPage;
