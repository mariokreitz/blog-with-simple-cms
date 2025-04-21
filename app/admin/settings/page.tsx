import { EmailWhitelistManager } from "@/components/EmailWhitelistManager";
import { SocialMediaManager } from "@/components/SocialMediaManager";
import React from "react";

const page = () => {
  return (
    <>
      <SocialMediaManager />
      <EmailWhitelistManager />
    </>
  );
};

export default page;
