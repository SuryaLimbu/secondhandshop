import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import NavbarUI from "./components/navbar/navbar";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <NavbarUI />
          <main className="bg-white mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">{children}</main>
        </Providers>
      </body>
    </html>
  );
}