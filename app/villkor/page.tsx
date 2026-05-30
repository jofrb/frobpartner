import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Allmänna villkor – Fröb Partner",
};

export default function Villkor() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-8">
        Allmänna villkor
      </h1>
      <p className="text-stone-500 italic">Villkor publiceras här inom kort.</p>
    </div>
  );
}
