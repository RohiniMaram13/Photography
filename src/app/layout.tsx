import type { Metadata } from "next";
// Our new, curated font pairing
import { Rozha_One, Poppins } from "next/font/google";
import "./globals.css";
import Header from "../components/Header"; 

const rozha = Rozha_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-rozha",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Deep Depicts |Photography",
  description: "Vibrant, timeless stories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rozha.variable} ${poppins.variable}`}>
        <Header />
        <main>
        {children}
        </main>
      </body>
    </html>
  );
}