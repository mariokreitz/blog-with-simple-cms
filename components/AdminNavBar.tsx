import Link from "next/link";
import React from "react";

const AdminNavBar = () => {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between">
        <div className="flex flex-wrap space-x-4">
          <Link href="/admin" className="text-white hover:text-gray-300">
            Übersicht
          </Link>
          <Link
            href="/admin/aws/images"
            className="text-white hover:text-gray-300"
          >
            Bilder
          </Link>
          <Link href="/admin/news" className="text-white hover:text-gray-300">
            Beiträge
          </Link>
          <Link
            href="/admin/settings"
            className="text-white hover:text-gray-300"
          >
            Einstellungen
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavBar;
