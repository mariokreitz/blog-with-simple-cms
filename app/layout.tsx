import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import NavbarWrapper from "@/components/ResizeableNavbar";
import Footer from "@/components/Footer";
import Providers from "./provider";
import { ScrollToTopButton } from "@/components/ui/scrollToTop-button";

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
  keywords: ["Tattoo", "Tattowierung", "Schorndorf", "Lipp Tattoo", "Body Art"],
  openGraph: {
    title: "Lipp Tattoo",
    description:
      "Professionelle Tattowierung in Schorndorf. Verwirkliche deine Träume auf der Haut mit Lipp Tattoo.",
    url: "https://vercel.app/lipp-tattoo.de",
    siteName: "Lipp Tattoo",
    images: [
      {
        url: "https://vercel.app/lipp-tattoo.de/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Lipp Tattoo - Professionelle Tattowierung",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lipp Tattoo",
    description:
      "Professionelle Tattowierung in Schorndorf. Verwirkliche deine Träume auf der Haut mit Lipp Tattoo.",
    images: ["https://vercel.app/lipp-tattoo.de/logo.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${roboto.className} antialiased`}>
        <NavbarWrapper />
        <Providers>{children}</Providers>
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
