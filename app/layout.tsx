import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const roboto = Roboto_Mono({
  weight: "400",
  style: "normal",
  preload: true,
  display: "auto",
  variable: "--font-roboto-mono",
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
      <body className={`${roboto.variable} antialiased`}>{children}</body>
    </html>
  );
}
