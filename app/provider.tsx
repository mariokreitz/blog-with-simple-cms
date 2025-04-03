"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { getQueryClient } from "../lib/get-query-client";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={getQueryClient()}>
      {children}
    </QueryClientProvider>
  );
}
