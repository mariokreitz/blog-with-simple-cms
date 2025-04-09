export const metadata = {
  title: "Admin",
  description: "Lipp Tattoo - CMS",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <main className="min-h-screen">{children}</main>;
};

export default Layout;
