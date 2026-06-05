function LogoA() {
  // Concept A: Bold serif wordmark — "FRÖB" large + "PARTNER" tracked out below
  return (
    <svg
      viewBox="0 0 260 80"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
    >
      <text
        x="10"
        y="52"
        fontFamily="Georgia, serif"
        fontSize="52"
        fontWeight="700"
        fill="white"
        letterSpacing="-1"
      >
        FRÖB
      </text>
      <text
        x="12"
        y="72"
        fontFamily="Georgia, serif"
        fontSize="16"
        fontWeight="400"
        fill="#4a8c62"
        letterSpacing="8"
      >
        PARTNER
      </text>
    </svg>
  );
}

function LogoB() {
  // Concept B: Monogram mark "FP" in a circle + wordmark to the right
  return (
    <svg
      viewBox="0 0 280 72"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
    >
      {/* Circle */}
      <circle
        cx="36"
        cy="36"
        r="34"
        fill="none"
        stroke="white"
        strokeWidth="2"
      />
      {/* FP monogram */}
      <text
        x="36"
        y="46"
        fontFamily="Georgia, serif"
        fontSize="26"
        fontWeight="700"
        fill="white"
        textAnchor="middle"
        letterSpacing="-1"
      >
        FP
      </text>
      {/* Wordmark */}
      <text
        x="82"
        y="32"
        fontFamily="Georgia, serif"
        fontSize="24"
        fontWeight="700"
        fill="white"
        letterSpacing="1"
      >
        Fröb Partner
      </text>
      <text
        x="84"
        y="52"
        fontFamily="Georgia, serif"
        fontSize="11"
        fontWeight="400"
        fill="#4a8c62"
        letterSpacing="5"
      >
        DIN HYRESPARTNER
      </text>
    </svg>
  );
}

function LogoC() {
  // Concept C: Minimal — "Fröb" in serif + thin vertical divider + "Partner" in lighter weight
  return (
    <svg
      viewBox="0 0 280 56"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
    >
      <text
        x="0"
        y="42"
        fontFamily="Georgia, serif"
        fontSize="42"
        fontWeight="700"
        fill="white"
        letterSpacing="-1"
      >
        Fröb
      </text>
      {/* Vertical divider */}
      <line x1="118" y1="8" x2="118" y2="50" stroke="#d97706" strokeWidth="2" />
      <text
        x="130"
        y="30"
        fontFamily="Georgia, serif"
        fontSize="18"
        fontWeight="400"
        fill="white"
        letterSpacing="2"
      >
        Partner
      </text>
      <text
        x="131"
        y="48"
        fontFamily="Georgia, serif"
        fontSize="10"
        fontWeight="400"
        fill="#4a8c62"
        letterSpacing="3.5"
      >
        MASKINHYRA
      </text>
    </svg>
  );
}

const logos = [
  {
    id: "A",
    label: "A — Stark & enkel",
    description:
      '"FRÖB" i fet stil, "PARTNER" luftigt nedanför. Lättläst i alla storlekar.',
    component: <LogoA />,
    width: "w-48",
  },
  {
    id: "B",
    label: "B — Monogram + wordmark",
    description:
      '"FP" i cirkel med full text bredvid. Mer formell, passar bra på dokument och profilering.',
    component: <LogoB />,
    width: "w-64",
  },
  {
    id: "C",
    label: "C — Delad med accentlinje",
    description:
      '"Fröb" och "Partner" separerade av en amber-linje. Luftig och modern.',
    component: <LogoC />,
    width: "w-64",
  },
];

export default function LogotypPage() {
  return (
    <div className="flex-1 bg-[#f5f2ec] py-14 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold text-[#1c3d2a] mb-2">
          Logotypalternativ
        </h1>
        <p className="text-[#3a3a35] mb-10 text-sm">
          Tre koncept — visas mot den gröna headerbakgrunden som de faktiskt
          används på.
        </p>

        <div className="flex flex-col gap-8">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="rounded-xl overflow-hidden border border-[#1c3d2a]/10"
            >
              {/* Preview on dark green */}
              <div className="bg-[#1c3d2a] px-10 py-10 flex items-center justify-start">
                <div className={logo.width}>{logo.component}</div>
              </div>
              {/* Preview on light */}
              <div className="bg-white px-10 py-6 flex items-center justify-start border-t border-[#1c3d2a]/10">
                <div
                  className={`${logo.width} [&_text]:!fill-[#1c3d2a] [&_circle]:!stroke-[#1c3d2a]`}
                >
                  {logo.component}
                </div>
              </div>
              {/* Description */}
              <div className="bg-[#f5f2ec] px-6 py-4 border-t border-[#1c3d2a]/10">
                <p className="font-bold text-[#1c3d2a] text-sm mb-1">
                  {logo.label}
                </p>
                <p className="text-[#3a3a35] text-sm">{logo.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
