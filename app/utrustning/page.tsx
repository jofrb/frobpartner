import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Utrustning att hyra – Fröb Partner",
  description:
    "Vi hyr ut grävmaskin, markvibrator och byggställning i Norrbotten. Ring Emanuel för bokning.",
};

const equipment = [
  {
    name: "Kubota grävmaskin (2 ton)",
    description:
      "Kompakt 2-tonsgrävare som levereras på eget boggisläp (80 km/h) — smidig att få in på trånga tomter och villafastigheter. Passar utmärkt för mindre mark- och schaktarbeten. Maskinen levereras med tre skoptyper: grävskopa, planeringsskopa och smalkopa.",
    useCases: [
      "Schaktning & markarbeten",
      "Dränering",
      "Trädgårdsarbete",
      "Grundläggning",
    ],
    icon: (
      <svg
        viewBox="0 0 72 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-14 h-12"
      >
        {/* Tracks */}
        <rect x="2" y="46" width="38" height="10" rx="5" fill="#1c3d2a" />
        <rect x="5" y="48" width="32" height="6" rx="3" fill="#2d5c3e" />
        <circle
          cx="8"
          cy="51"
          r="4"
          fill="#1c3d2a"
          stroke="#d97706"
          strokeWidth="1.5"
        />
        <circle
          cx="34"
          cy="51"
          r="4"
          fill="#1c3d2a"
          stroke="#d97706"
          strokeWidth="1.5"
        />
        {/* Body / cab */}
        <rect x="4" y="30" width="32" height="18" rx="3" fill="#1c3d2a" />
        <rect x="8" y="33" width="14" height="10" rx="2" fill="#4a8c62" />
        {/* Boom arm */}
        <path
          d="M34 34 L56 18"
          stroke="#1c3d2a"
          strokeWidth="5"
          strokeLinecap="round"
        />
        {/* Stick */}
        <path
          d="M56 18 L66 30"
          stroke="#2d5c3e"
          strokeWidth="4"
          strokeLinecap="round"
        />
        {/* Bucket (grävskopa) */}
        <path d="M63 29 Q70 32 68 40 L60 38 Z" fill="#1c3d2a" />
        {/* Teeth */}
        <line
          x1="63"
          y1="39"
          x2="62"
          y2="43"
          stroke="#d97706"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="66"
          y1="39"
          x2="66"
          y2="43"
          stroke="#d97706"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "Padda (markvibrator)",
    description:
      "Kompaktvibrator för att packa grus, sand och asfalt. Perfekt inför plattsättning, uppfartsvägar och markarbeten.",
    useCases: [
      "Packning av grus & sand",
      "Inför plattsättning",
      "Uppfartsvägar",
      "Asfaltarbeten",
    ],
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12"
      >
        {/* Plate (bottom) */}
        <rect x="8" y="44" width="48" height="10" rx="2" fill="#1c3d2a" />
        {/* Vibration lines under plate */}
        <line
          x1="16"
          y1="56"
          x2="16"
          y2="60"
          stroke="#d97706"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="24"
          y1="56"
          x2="24"
          y2="60"
          stroke="#d97706"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="32"
          y1="56"
          x2="32"
          y2="60"
          stroke="#d97706"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="40"
          y1="56"
          x2="40"
          y2="60"
          stroke="#d97706"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="48"
          y1="56"
          x2="48"
          y2="60"
          stroke="#d97706"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Engine block */}
        <rect x="16" y="28" width="32" height="18" rx="2" fill="#2d5c3e" />
        <rect x="20" y="31" width="10" height="8" rx="1" fill="#1c3d2a" />
        <circle cx="40" cy="35" r="5" fill="#1c3d2a" />
        <circle cx="40" cy="35" r="2.5" fill="#d97706" />
        {/* Handle bar */}
        <path
          d="M22 28 L18 10 M42 28 L46 10"
          stroke="#1c3d2a"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M14 10 L50 10"
          stroke="#1c3d2a"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="14" cy="10" r="2.5" fill="#d97706" />
        <circle cx="50" cy="10" r="2.5" fill="#d97706" />
      </svg>
    ),
  },
  {
    name: "Byggställning",
    description:
      "Modulär rullställning i aluminium som passar för fasadarbete, målning, takarbete och liknande jobb. Upp till 8 meters arbetshöjd. På den 135 cm djupa ställningen rymmer du dubbla platformar på varje nivå",
    useCases: [
      "Fasadrenovering",
      "Målning & puts",
      "Takarbeten",
      "Fönsterbyte",
    ],
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12"
      >
        <rect x="10" y="8" width="6" height="52" rx="2" fill="#1c3d2a" />
        <rect x="48" y="8" width="6" height="52" rx="2" fill="#1c3d2a" />
        <rect x="10" y="16" width="44" height="4" rx="1.5" fill="#2d5c3e" />
        <rect x="10" y="30" width="44" height="4" rx="1.5" fill="#2d5c3e" />
        <rect x="10" y="44" width="44" height="4" rx="1.5" fill="#2d5c3e" />
        <rect x="20" y="8" width="4" height="52" rx="1" fill="#4a8c62" />
        <rect x="40" y="8" width="4" height="52" rx="1" fill="#4a8c62" />
      </svg>
    ),
  },
  {
    name: "Släp",
    description:
      "Stort släp med kåpa — fungerar bra för skotertransport och flyttningar. Kåpan skyddar lasten från väder och vind. Flakmått: 220 x 400 cm. Lastvikt 800 kg, Totalvikt: 1250 kg, Dras på B-kort med de flesta bilar",
    useCases: ["Maskintransport", "Tung utrustning", "Verktyg & material"],
    icon: (
      <svg
        viewBox="0 0 72 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-14 h-12"
      >
        {/* Kåp (enclosed box) */}
        <rect x="4" y="16" width="64" height="28" rx="3" fill="#1c3d2a" />
        <rect x="7" y="19" width="58" height="22" rx="2" fill="#2d5c3e" />
        {/* Kåp roof ridge */}
        <path
          d="M4 16 Q36 8 68 16"
          stroke="#1c3d2a"
          strokeWidth="2"
          fill="#1c3d2a"
        />
        {/* Rear door lines */}
        <line
          x1="36"
          y1="19"
          x2="36"
          y2="41"
          stroke="#1c3d2a"
          strokeWidth="1.5"
        />
        <circle cx="34" cy="31" r="1.5" fill="#d97706" />
        <circle cx="38" cy="31" r="1.5" fill="#d97706" />
        {/* Chassis */}
        <rect x="4" y="42" width="64" height="6" rx="1" fill="#1c3d2a" />
        {/* 2 axlar */}
        <circle cx="22" cy="52" r="6" fill="#1c3d2a" />
        <circle cx="22" cy="52" r="3" fill="#2d5c3e" />
        <circle cx="50" cy="52" r="6" fill="#1c3d2a" />
        <circle cx="50" cy="52" r="3" fill="#2d5c3e" />
        {/* Towbar */}
        <rect x="0" y="44" width="6" height="3" rx="1" fill="#4a8c62" />
      </svg>
    ),
    tentative: true,
  },
];

export default function UtrustningPage() {
  return (
    <div className="flex-1 bg-[#f5f2ec]">
      {/* Header strip */}
      <div className="bg-[#1c3d2a] py-10 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#4a8c62] text-sm font-semibold uppercase tracking-widest mb-2">
            Vad vi hyr ut
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Utrustning
          </h1>
          <p className="text-white/60 mt-2 max-w-xl">
            Vi har ett litet men välskött sortiment. Ring oss så hittar vi rätt
            lösning för ditt projekt.
          </p>
        </div>
      </div>

      <div className="h-1.5 bg-[#d97706]" />

      {/* Equipment list */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-2 gap-6">
          {equipment.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-xl border border-[#1c3d2a]/10 overflow-hidden flex flex-col"
            >
              <div className="p-6 flex gap-4 items-start flex-1">
                <div className="shrink-0 mt-1">{item.icon}</div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="text-lg font-bold text-[#1c3d2a]">
                      {item.name}
                    </h2>
                    {item.tentative && (
                      <span className="text-xs bg-amber-100 text-amber-700 font-semibold px-2 py-0.5 rounded-full">
                        Fråga om tillgänglighet
                      </span>
                    )}
                  </div>
                  <p className="text-[#3a3a35] text-sm mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="border-t border-[#1c3d2a]/10 px-6 py-4 bg-[#f5f2ec]/60">
                <p className="text-xs font-semibold text-[#1c3d2a] uppercase tracking-wider mb-2">
                  Passar till
                </p>
                <ul className="flex flex-wrap gap-2">
                  {item.useCases.map((uc) => (
                    <li
                      key={uc}
                      className="text-xs bg-white border border-[#1c3d2a]/20 text-[#1c3d2a] px-3 py-1 rounded-full"
                    >
                      {uc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 bg-[#1c3d2a] rounded-xl px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-white font-bold text-lg">Redo att boka?</p>
            <p className="text-white/60 text-sm mt-1">
              Ring Emanuel direkt — vi svarar snabbt.
            </p>
          </div>
          <a
            href="tel:+46706296294"
            className="inline-flex items-center gap-2 bg-[#d97706] hover:bg-[#b45309] text-white font-bold px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
          >
            070 629 62 94
          </a>
        </div>
      </div>
    </div>
  );
}
