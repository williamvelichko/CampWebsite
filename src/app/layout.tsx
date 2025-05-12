import type { Metadata } from "next";
import { Inter, Quicksand } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });
const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BibleCamp",
  description: "TheBibleCamp",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} ${quicksand.className}`}>
      <body>
        <Header />
        <main className="container mx-auto px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
