import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "trxvl",
  description: "The World Awaits",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen ", inter.className)}>
        <div className="bg-background-image z-0 h-[800px]">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
