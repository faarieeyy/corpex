import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const baskerville = Libre_Baskerville({
  variable: "--font-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Corpex Consulting | Your Business Growth Partner",
  description: "Beyond Consulting. Built for Growth. Strategy. Compliance. Branding. Technology. The essentials your business needs to grow — under one trusted partner.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${baskerville.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-corpex-white text-corpex-black">
        <Navbar />
        <main className="flex-grow w-full overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
