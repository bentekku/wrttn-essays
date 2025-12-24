import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "wrttn essays",
  icons: "/favicon.ico",
  description:
    "Personally written essays, crude, imperfect, and potential grammatically wrong. On my way to develop analysing, thinking and written skills- aimming to understand more about myself and the magnificient world.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`antialiased min-h-screen bg-neutral-50`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
