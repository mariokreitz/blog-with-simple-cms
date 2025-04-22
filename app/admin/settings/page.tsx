import { EmailWhitelistManager } from "@/components/EmailWhitelistManager";
import { SocialMediaManager } from "@/components/SocialMediaManager";
import React from "react";

const page = () => {
  return (
    <div className="grid grid-cols-1 gap-6 px-4 py-8 lg:grid-cols-2">
      <SocialMediaManager />
      <EmailWhitelistManager />
    </div>
  );
};

export default page;
