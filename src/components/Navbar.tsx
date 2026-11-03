"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, MessageCircle, Sparkles, Menu, X, ArrowUpRight } from "lucide-react";
import { profileData } from "@/lib/data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080a10]/80 backdrop-blur-xl border-b border-white/10 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="#home"
          className="group flex items-center gap-3 text-white transition duration-200"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 text-slate-950 font-black text-lg shadow-[0_0_20px_rgba(56,189,248,0.5)] group-hover:scale-105 transition-transform">
            RK
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
          </div>
          <div>
            <span className="font-extrabold tracking-wider text-base sm:text-lg block group-hover:text-cyan-300 transition-colors">
              REUBEN KIMANI
            </span>
            <span className="text-[11px] text-slate-400 block tracking-widest uppercase">
              Full-Stack &amp; AI Architect
            </span>
          </div>
        </Link>

        {/* Center Navigation Links - Exactly like the video */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wider text-slate-300">
          <Link
            href="#home"
            className="hover:text-cyan-400 transition-colors uppercase tracking-widest text-xs"
          >
            HOME
          </Link>
          <Link
            href="#projects"
            className="hover:text-cyan-400 transition-colors uppercase tracking-widest text-xs"
          >
            PROJECT
          </Link>
          <Link
            href="#services"
            className="hover:text-cyan-400 transition-colors uppercase tracking-widest text-xs"
          >
            SERVICES
          </Link>
          <Link
            href="#about"
            className="hover:text-cyan-400 transition-colors uppercase tracking-widest text-xs"
          >
            ABOUT ME
          </Link>
          <Link
            href="#contact"
            className="hover:text-cyan-400 transition-colors uppercase tracking-widest text-xs"
          >
            CONTACT
          </Link>
        </nav>

        {/* Right Action / Contact CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={profileData.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-400 hover:bg-emerald-500/20 transition hover:border-emerald-500/50"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>0740396075</span>
          </a>

          <Link
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 px-4 py-1.5 text-xs font-bold text-slate-950 hover:brightness-110 shadow-[0_0_15px_rgba(34,211,238,0.4)] transition hover:-translate-y-0.5"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 hover:text-white"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0d17]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 transition-all">
          <nav className="flex flex-col gap-4 text-sm font-semibold tracking-wider text-slate-200">
            <Link
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-cyan-400"
            >
              HOME
            </Link>
            <Link
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-cyan-400"
            >
              PROJECT
            </Link>
            <Link
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-cyan-400"
            >
              SERVICES
            </Link>
            <Link
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-cyan-400"
            >
              ABOUT ME
            </Link>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-cyan-400"
            >
              CONTACT
            </Link>
          </nav>
          <div className="mt-6 pt-6 border-t border-white/10 flex flex-col gap-3">
            <a
              href={profileData.phoneHref}
              className="flex items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 py-2.5 text-xs font-semibold text-slate-200"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>Call: 0740396075</span>
            </a>
            <a
              href={profileData.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-emerald-500 py-2.5 text-xs font-bold text-slate-950"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
