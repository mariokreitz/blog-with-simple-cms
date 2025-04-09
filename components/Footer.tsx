import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex h-24 flex-col items-center justify-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} lipp.tattoos. Alle Rechte vorbehalten.
      </p>
      <div className="mt-2 flex space-x-4">
        <Link href="/privacy" className="text-sm underline">
          Datenschutz
        </Link>
        <Link href="/imprint" className="text-sm underline">
          Impressum
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
