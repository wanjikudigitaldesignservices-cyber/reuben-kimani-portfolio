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
  title: "Reuben Kimani | Full-Stack Engineer, AI Architect & Founder of LQD Creative",
  description:
    "Official portfolio of Reuben Kimani. High-impact full-stack web applications, AI multi-agent workflows, Cisco & MikroTik network architecture, and digital empire systems in Nairobi, Kenya.",
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
    title: "Reuben Kimani | Full-Stack Engineer & AI Systems Architect",
    description:
      "Crafting high-impact digital experiences, AI automation, and visionary software architectures. Founder @ LQD Creative.",
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
      <body className="min-h-screen bg-[#080a10] text-slate-100 flex flex-col selection:bg-cyan-400 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
