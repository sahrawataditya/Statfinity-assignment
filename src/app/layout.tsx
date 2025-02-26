import Layout from "@/components/common/Layout";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const interMono = Inter({
  variable: "--font-inter-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interSans.variable} ${interMono.variable} antialiased font-thin`}
      >
        <NextTopLoader showSpinner={false} color="#1f2937" />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
