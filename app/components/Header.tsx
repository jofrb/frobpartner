import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-stone-200 bg-stone-50">
      <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-bold text-stone-900 text-lg">
          Fröb Partner
        </Link>
        <nav className="flex gap-6 text-sm font-medium text-stone-600">
          <Link href="/" className="hover:text-stone-900 transition-colors">
            Hem
          </Link>
          <Link href="/villkor" className="hover:text-stone-900 transition-colors">
            Allmänna villkor
          </Link>
        </nav>
      </div>
    </header>
  );
}
