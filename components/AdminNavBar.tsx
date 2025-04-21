import Link from "next/link";
import React from "react";

const AdminNavBar = () => {
  return (
    <nav>
      <Link href="/admin">Übersicht</Link>
      <Link href="/admin/aws/images">Bilder</Link>
      <Link href="/admin/news">Neue Post</Link>
      <Link href="/admin/social-media">Social Media</Link>
    </nav>
  );
};

export default AdminNavBar;
