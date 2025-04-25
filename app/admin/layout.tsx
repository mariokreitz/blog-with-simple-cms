import { getAuthSession } from "@/auth";
import AdminNavBar from "@/components/AdminNavBar";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Lipp Tattoo - Admin",
  description: "Lipp Tattoo - CMS",
};

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getAuthSession();
  if (!session) {
    redirect("/");
  }
  return (
    <main className="container mx-auto min-h-screen space-y-8 px-4 py-24">
      <AdminNavBar />
      {children}
    </main>
  );
};

export default Layout;
