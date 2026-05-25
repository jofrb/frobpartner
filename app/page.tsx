export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-stone-50">
      <div className="max-w-lg mx-auto px-6 text-center">
        <h1 className="text-3xl font-bold text-stone-900 mb-4">
          Välkommen till Fröb Partner
        </h1>
        <p className="text-stone-600 text-lg leading-relaxed mb-6">
          Vi håller på att bygga en webbplats som gör det enkelt för dig att
          hitta information om maskinerna och utrustningen som vi hyr ut.
        </p>
        <p className="text-stone-800 font-medium text-lg">
          Vill du hyra något av oss? Ring:{" "}
          <a href="tel:+46706296294" className="text-amber-700 underline underline-offset-4">
            070 629 62 94
          </a>
        </p>
      </div>
    </main>
  );
}
