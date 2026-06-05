import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Allmänna hyresvillkor – Fröb Partner",
};

const sections = [
  {
    title: "1. Allmänt",
    items: [
      "Genom bokning, hämtning, leverans eller användning av utrustning accepterar Hyrestagaren dessa villkor.",
      "Utrustningen uthyrs endast för tillfällig användning och förutsätter att Hyrestagaren har erforderlig kompetens, utbildning och behörighet.",
    ],
  },
  {
    title: "2. Hyresobjekt",
    items: [
      "Hyresobjektet omfattar den maskin, utrustning eller tillbehör som anges i hyresavtal, orderbekräftelse eller faktura.",
      "Utrustningen är Uthyrarens egendom och får inte säljas, pantsättas, hyras ut i andra hand eller överlåtas.",
    ],
  },
  {
    title: "3. Hyrestid",
    items: [
      "Hyrestiden löper från avtalad uthämtning/leverans till dess att utrustningen återlämnats och godkänts av Uthyraren.",
      "Försenad återlämning debiteras enligt gällande prislista samt eventuella följdskador eller utebliven uthyrning.",
    ],
  },
  {
    title: "4. Hyrestagarens ansvar",
    items: [
      "Hyrestagaren ansvarar för att utrustningen används korrekt, säkert och enligt tillverkarens instruktioner samt gällande lagar och föreskrifter.",
      "Hyrestagaren ansvarar för att endast behöriga och kompetenta personer använder utrustningen.",
      "Hyrestagaren ansvarar för daglig tillsyn, kontroll, smörjning, drivmedel, laddning, enklare service samt säker användning under hela hyrestiden.",
      "Hyrestagaren ansvarar fullt ut för skador på person, egendom, mark, byggnad eller annan följd av användningen.",
    ],
  },
  {
    title: "5. Användning sker på egen risk",
    items: [
      "All användning av hyrd utrustning sker helt på Hyrestagarens egen risk.",
      "Uthyraren ansvarar inte för olyckor, personskador, sakskador, driftstopp, produktionsbortfall, inkomstförlust eller annan direkt eller indirekt skada som uppstår under hyrestiden eller till följd av användning av utrustningen.",
      "Uthyraren ansvarar alltid i den utsträckning tvingande lag kräver.",
    ],
  },
  {
    title: "6. Kontroll vid utlämning",
    items: [
      "Hyrestagaren ska vid mottagandet kontrollera att utrustningen är i fungerande skick.",
      "Eventuella fel eller brister ska anmälas omedelbart före användning.",
      "Om utrustningen används anses den godkänd av Hyrestagaren.",
    ],
  },
  {
    title: "7. Skador, förlust och stöld",
    items: [
      "Hyrestagaren ansvarar för all skada på utrustningen under hyrestiden, oavsett orsak, med undantag för normalt slitage.",
      "Vid förlust, stöld eller totalskada ersätter Hyrestagaren återanskaffningsvärde samt eventuella kostnader.",
      "Stöld ska omedelbart polisanmälas och anmälas till Uthyraren på 070 629 62 94.",
    ],
  },
  {
    title: "8. Service och driftstopp",
    items: [
      "Vid tekniskt fel ska användningen omedelbart avbrytas och Uthyraren kontaktas på 070 629 62 94.",
      "Hyrestagaren har inte rätt att själv reparera utrustningen utan skriftligt godkännande.",
      "Uthyraren ansvarar inte för kostnader eller skador till följd av driftstopp.",
    ],
  },
  {
    title: "9. Betalning",
    items: [
      "Betalning sker enligt avtalad prislista och fakturavillkor.",
      "Vid försenad betalning debiteras dröjsmålsränta enligt räntelagen samt påminnelse- och inkassoavgifter.",
    ],
  },
  {
    title: "10. Rengöring och återlämning",
    items: [
      "Utrustningen ska återlämnas rengjord och i samma skick som vid utlämning, med undantag för normalt slitage.",
      "Kostnader för rengöring, reparation eller återställande debiteras Hyrestagaren.",
    ],
  },
  {
    title: "11. Force majeure",
    items: [
      "Uthyraren ansvarar inte för hinder utanför Uthyrarens kontroll, såsom strejk, brand, leveransstörning, myndighetsbeslut eller liknande omständighet.",
    ],
  },
  {
    title: "12. Tvist och lagval",
    items: [
      "Tvist med anledning av detta avtal ska avgöras enligt svensk rätt i allmän domstol med Luleå tingsrätt som första instans.",
    ],
  },
  {
    title: "13. Personuppgifter",
    items: [
      "Personuppgifter behandlas i den omfattning som krävs för att administrera hyresförhållandet enligt gällande dataskyddslagstiftning.",
    ],
  },
];

export default function Villkor() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-2">
        Allmänna hyresvillkor
      </h1>
      <p className="text-stone-500 text-sm mb-2">
        för uthyrning av bygg- och anläggningsmaskiner samt byggutrustning
      </p>
      <p className="text-stone-600 text-sm mb-10">
        Dessa allmänna hyresvillkor gäller mellan{" "}
        <strong>Fröb Partner AB</strong>, org.nr 559570-0799, nedan kallat
        "Uthyraren", och kund som hyr utrustning, nedan kallad "Hyrestagaren".
      </p>

      <div className="space-y-8">
        {sections.map((section) => (
          <div key={section.title}>
            <h2 className="font-bold text-stone-900 mb-3">{section.title}</h2>
            <ol className="space-y-2 list-none">
              {section.items.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-stone-700 text-sm leading-relaxed"
                >
                  <span className="text-stone-400 shrink-0 font-mono text-xs pt-0.5">
                    {section.title.split(".")[0]}.{i + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>

      <p className="mt-12 text-stone-400 text-xs">
        Kontakt: 070 629 62 94 · frobpartner.se
      </p>
    </div>
  );
}
