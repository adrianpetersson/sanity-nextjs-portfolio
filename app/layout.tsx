import "./globals.css";

import type { Metadata } from "next";

import { Layout } from "../layout/Layout";

export const metadata: Metadata = {
  description: "Frontend and UX portfolio of Adrian Petersson",
  title: "Adrian Petersson portfolio",
};

import { Heebo } from "next/font/google";

const heebo = Heebo({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={heebo.className} lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
