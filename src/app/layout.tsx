import type { Metadata } from "next";
import React from "react";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/custom/Header";
import { Toaster } from "@/components/ui/toaster";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Lazziz Pizzeria",
  description:
    " Lazziz Pizzeria is a restaurant in the heart of the city. We offer a wide range of pizzas, pastas, and salads. We also have a variety of desserts and drinks. Come and enjoy our delicious food and friendly service!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>
        <Header />
        <main>
          <Toaster />
          {children}
        </main>
      </body>
    </html>
  );
}
