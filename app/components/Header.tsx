import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-[#1c3d2a]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-white text-xl tracking-wide">
          Fröb Partner
        </Link>
        <nav className="flex gap-6 text-sm font-medium text-white/70">
          <Link href="/" className="hover:text-white transition-colors">
            Hem
          </Link>
          <Link href="/villkor" className="hover:text-white transition-colors">
            Allmänna villkor
          </Link>
        </nav>
      </div>
    </header>
  );
}
