import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "الحرب الإلكترونية",
  icons: {
    icon: "/icons/map.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/icons/map.svg" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
