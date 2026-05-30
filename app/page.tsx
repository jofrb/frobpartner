export default function Home() {
  return (
    <div className="flex-1 flex flex-col">
      {/* Hero */}
      <section className="bg-[#1c3d2a] text-white py-20 sm:py-28 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#4a8c62] text-sm font-semibold uppercase tracking-widest mb-3">
            Maskinhyra i Luleåområdet
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Rätt utrustning.<br />
            Rätt pris.<br />
            Direkt.
          </h1>
          <p className="text-white/70 text-lg sm:text-xl max-w-xl leading-relaxed mb-10">
            Grävmaskin, plattvibrator och byggställning — välskött utrustning
            för ditt projekt i Luleåområdet. Inget krångel, ring och boka.
          </p>
          <a
            href="tel:+46706296294"
            className="inline-flex items-center gap-3 bg-[#d97706] hover:bg-[#b45309] text-white font-bold text-lg sm:text-xl px-8 py-4 rounded-lg transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 shrink-0"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                clipRule="evenodd"
              />
            </svg>
            070 629 62 94
          </a>
          <p className="mt-4 text-white/40 text-sm">
            Fråga efter Emanuel
          </p>
          <a
            href="/utrustning"
            className="inline-block mt-6 text-white/50 hover:text-white/80 text-sm underline underline-offset-4 transition-colors"
          >
            Se vad vi hyr ut →
          </a>
        </div>
      </section>

      {/* Divider strip */}
      <div className="h-1.5 bg-[#d97706]" />

      {/* Why us */}
      <section className="bg-[#f5f2ec] py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1c3d2a] mb-10">
            Varför Fröb Partner?
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                title: "Personlig service",
                body: "Du pratar direkt med oss — inte ett callcenter. Vi hjälper dig hitta rätt utrustning för jobbet.",
              },
              {
                title: "Flexibla perioder",
                body: "Hyr för en dag, en vecka eller längre. Vi anpassar oss efter ditt projekt.",
              },
              {
                title: "Välskött utrustning",
                body: "Allt underhålls löpande. Du kan lita på att maskinen du hyr faktiskt fungerar.",
              },
            ].map((item) => (
              <div key={item.title} className="border-l-4 border-[#1c3d2a] pl-5">
                <h3 className="font-bold text-[#1c3d2a] text-lg mb-2">{item.title}</h3>
                <p className="text-[#3a3a35] leading-relaxed text-sm sm:text-base">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA bottom */}
      <section className="bg-[#2d5c3e] text-white py-14 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-xl sm:text-2xl font-bold mb-1">Redo att boka?</p>
            <p className="text-white/60">Ring oss direkt — vi svarar snabbt.</p>
          </div>
          <a
            href="tel:+46706296294"
            className="inline-flex items-center gap-2 bg-[#d97706] hover:bg-[#b45309] text-white font-bold px-7 py-3 rounded-lg transition-colors whitespace-nowrap"
          >
            Ring 070 629 62 94
          </a>
        </div>
      </section>
    </div>
  );
}
