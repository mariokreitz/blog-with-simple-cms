import Link from "next/link";
import React from "react";

const AdminNavBar = () => {
  return (
    <nav>
      <Link href="/admin">Übersicht</Link>
      <Link href="/admin/aws/images">Bilder</Link>
    </nav>
  );
};

export default AdminNavBar;
