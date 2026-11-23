import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://reuben-kimani-portfolio.vercel.app"),
  title: "Reuben Kimani | Full-Stack Web Developer & Founder of LQD Creative",
  description:
    "Official portfolio of Reuben Kimani. High-impact websites, web applications, e-commerce platforms, and SaaS products in Nairobi, Kenya. Phone: 0740396075.",
  keywords: [
    "Reuben Kimani",
    "LQD Creative",
    "Full-Stack Engineer Kenya",
    "AI Architect Nairobi",
    "Next.js Developer Kenya",
    "Supabase Developer",
    "MikroTik RouterOS",
    "0740396075",
    "Software Engineer Nairobi",
  ],
  authors: [{ name: "Reuben Kimani", url: "https://github.com/wanjikudigitaldesignservices-cyber" }],
  creator: "Reuben Kimani",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://reuben-kimani-portfolio.vercel.app",
    title: "Reuben Kimani | Full-Stack Web Developer",
    description:
      "Crafting high-impact websites, web apps & digital platforms that grow businesses. Founder @ LQD Creative.",
    siteName: "Reuben Kimani Portfolio",
    images: [
      {
        url: "/avatar/neutral.webp",
        width: 800,
        height: 800,
        alt: "Reuben Kimani 3D Avatar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reuben Kimani | Full-Stack Engineer & AI Architect",
    description: "Crafting high-impact digital experiences, AI automation & visionary software architectures.",
    images: ["/avatar/neutral.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#080a14] text-slate-100 flex flex-col selection:bg-purple-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
