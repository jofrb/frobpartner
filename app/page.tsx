export default function Home() {
  return (
    <div className="flex-1 flex items-center justify-center bg-stone-50 px-4 py-12">
      <div className="w-full max-w-lg text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-4">
          Välkommen till Fröb Partner
        </h1>
        <p className="text-stone-600 text-base sm:text-lg leading-relaxed mb-6">
          Vi håller på att bygga en webbplats som gör det enkelt för dig att
          hitta information om maskinerna och utrustningen som vi hyr ut.
        </p>
        <p className="text-stone-800 font-medium text-base sm:text-lg">
          Vill du hyra något av oss? Ring då Emanuel:
        </p>
        <a
          href="tel:+46706296294"
          className="inline-block mt-3 text-amber-700 underline underline-offset-4 font-semibold text-lg sm:text-xl py-2"
        >
          070 629 62 94
        </a>
      </div>
    </div>
  );
}
