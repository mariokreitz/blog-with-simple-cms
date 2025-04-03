import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lipp Tattoo",
  description:
    "Lipp Tattoo - Professionelle Tattowierung in Schorndorf. Ich helfe dir, deine Träume auf deiner Haut zu verwirklichen.",
  authors: [
    { name: "Lipp Tattoo", url: "https://lipp-tattoo.de" },
    { name: "Mario Kreitz", url: "https://www.mario-kreitz.dev" },
  ],
  creator: "Mario Kreitz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${roboto.className} antialiased`}>{children}</body>
    </html>
  );
}
