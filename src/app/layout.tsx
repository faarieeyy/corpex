import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransitionProvider from "@/components/PageTransitionProvider";
import CustomCursor from "@/components/CustomCursor";
import NoiseOverlay from "@/components/NoiseOverlay";

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
        <CustomCursor />
        <NoiseOverlay />
        <SmoothScroll>
          <PageTransitionProvider>
            <Navbar />
            <main className="flex-grow w-full overflow-hidden">
              {children}
            </main>
            <Footer />
          </PageTransitionProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
