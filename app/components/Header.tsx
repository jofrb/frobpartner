import Link from "next/link";

function Logo() {
  return (
    <svg viewBox="0 0 220 52" xmlns="http://www.w3.org/2000/svg" className="h-9 w-auto">
      <circle cx="26" cy="26" r="24" fill="none" stroke="white" strokeWidth="1.5" />
      <text
        x="26"
        y="34"
        fontFamily="Georgia, serif"
        fontSize="19"
        fontWeight="700"
        fill="white"
        textAnchor="middle"
        letterSpacing="-0.5"
      >
        FP
      </text>
      <text
        x="62"
        y="22"
        fontFamily="Georgia, serif"
        fontSize="18"
        fontWeight="700"
        fill="white"
        letterSpacing="0.5"
      >
        Fröb Partner
      </text>
      <text
        x="64"
        y="37"
        fontFamily="Georgia, serif"
        fontSize="8.5"
        fontWeight="400"
        fill="#4a8c62"
        letterSpacing="4"
      >
        DIN HYRESPARTNER
      </text>
    </svg>
  );
}

export default function Header() {
  return (
    <header className="w-full bg-[#1c3d2a]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" aria-label="Fröb Partner – startsida">
          <Logo />
        </Link>
        <nav className="flex gap-6 text-sm font-medium text-white/70">
          <Link href="/" className="hover:text-white transition-colors">
            Hem
          </Link>
          <Link href="/utrustning" className="hover:text-white transition-colors">
            Utrustning
          </Link>
          <Link href="/villkor" className="hover:text-white transition-colors">
            Villkor
          </Link>
        </nav>
      </div>
    </header>
  );
}
