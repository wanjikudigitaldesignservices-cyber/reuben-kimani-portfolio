"use client";

import Link from "next/link";
import { ArrowUp, Heart, Terminal, Sparkles } from "lucide-react";
import { profileData } from "@/lib/data";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#05070b] border-t border-white/10 pt-16 pb-12 px-6 sm:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 text-slate-950 font-black text-lg">
                RK
              </div>
              <span className="text-xl font-extrabold text-white tracking-wider">
                REUBEN KIMANI
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Full-Stack Software Engineer, AI Systems Architect &amp; Founder of LQD Creative. Helping founders, ISPs, and enterprises build high-velocity digital empires.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <Terminal className="w-3.5 h-3.5" />
              <span>Nairobi, Kenya &bull; Direct: 0740396075</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold block">
              Navigation
            </span>
            <div className="flex flex-col gap-2 text-sm text-slate-300">
              <Link href="#home" className="hover:text-cyan-400 transition">
                Home
              </Link>
              <Link href="#projects" className="hover:text-cyan-400 transition">
                Featured Projects
              </Link>
              <Link href="#services" className="hover:text-cyan-400 transition">
                Services &amp; Capabilities
              </Link>
              <Link href="#about" className="hover:text-cyan-400 transition">
                About Reuben
              </Link>
              <Link href="#contact" className="hover:text-cyan-400 transition">
                Contact &amp; Hire
              </Link>
            </div>
          </div>

          {/* Social Channels */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold block">
              Connect &amp; Follow
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
              {profileData.socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-400/60 hover:bg-white/10 transition"
                >
                  <span className="block font-bold text-white">{s.name}</span>
                  <span className="text-[10px] text-slate-400 font-mono">{s.username}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>
            &copy; 2026 Reuben Kimani. All rights reserved. Built with Next.js, Supabase &amp; Vercel.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-slate-300 hover:text-white hover:border-cyan-400 transition group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
