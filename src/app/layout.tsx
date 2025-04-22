
import React from 'react';
import Navbar from "./components/Navbar";
import { Inter } from "next/font/google";
import { DM_Serif_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif"
});

export const metadata = {
  title: "Crave Kitchen | Find The Best Recipes",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerif.variable}`}>
      <body>
        <nav>
          <Navbar />
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Layout;
