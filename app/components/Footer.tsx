import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-stone-200 bg-stone-50">
      <div className="max-w-4xl mx-auto px-4 h-12 flex items-center justify-between text-xs text-stone-500">
        <span>© {new Date().getFullYear()} Fröb Partner</span>
        <Link href="/villkor" className="hover:text-stone-700 transition-colors">
          Allmänna villkor
        </Link>
      </div>
    </footer>
  );
}
