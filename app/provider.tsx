"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { getQueryClient } from "../lib/get-query-client";
import { SessionProvider } from "next-auth/react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <QueryClientProvider client={getQueryClient()}>
        {children}
      </QueryClientProvider>
    </SessionProvider>
  );
}
