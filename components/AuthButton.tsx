"use client";

import { signIn, signOut, useSession } from "next-auth/react";

import { NavbarButton } from "@/components/ui/resizable-navbar";

export default function AuthButton() {
  const { data: session, status } = useSession();

  if (status === "loading") return null;

  return session ? (
    <NavbarButton
      variant="secondary"
      onClick={() => signOut({ callbackUrl: "/" })}
    >
      Logout
    </NavbarButton>
  ) : (
    <NavbarButton
      variant="secondary"
      onClick={() => signIn("google", { callbackUrl: "/admin" })}
    >
      Login
    </NavbarButton>
  );
}
