import Link from "next/link";

export default function AccessDenied() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-6xl font-bold">Zugang verweigert</h1>
      <p className="mb-8 text-2xl">
        Du bist nicht berechtigt, dich anzumelden.
      </p>
      <Link href="/" className="text-blue-500 hover:underline">
        Zurück zur Startseite
      </Link>
    </div>
  );
}
