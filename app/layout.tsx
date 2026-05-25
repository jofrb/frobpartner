import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fröb Partner – Maskinhyra",
  description: "Hyr grävmaskin, byggställning och padda i Stockholmsregionen.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body>{children}</body>
    </html>
  );
}
