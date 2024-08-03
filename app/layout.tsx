import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Product Saas",
  description: "A saas landing page created  y Yassir imzi using NextJs and tailwind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-[#060B27] w-full min-h-[100vh] overflow-clip">
          <Navbar />
          <main className="max-w-7xl mx-auto h-full">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
