import AdminNavBar from "@/components/AdminNavBar";

export const metadata = {
  title: "Lipp Tattoo - Admin",
  description: "Lipp Tattoo - CMS",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="container mx-auto min-h-screen space-y-8 px-4 py-24">
      <AdminNavBar />
      {children}
    </main>
  );
};

export default Layout;
