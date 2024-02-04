import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Naveen Portfolio",
  description: "This is My Portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="top" className={`${inter.className} relative`}>
        <>
          {children}

          {/* Scroll to top */}
        </>
        <ScrollToTop />
      </body>
    </html>
  );
}
