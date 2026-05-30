import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1c3d2a] border-t border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-12 flex items-center justify-between text-xs text-white/50">
        <span>© {new Date().getFullYear()} Fröb Partner</span>
        <Link href="/villkor" className="hover:text-white/80 transition-colors">
          Allmänna villkor
        </Link>
      </div>
    </footer>
  );
}
