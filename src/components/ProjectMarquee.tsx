"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { marqueeItems } from "@/lib/data";

export function ProjectMarquee() {
  const rowOne = [...marqueeItems, ...marqueeItems];
  const rowTwo = [...marqueeItems.slice().reverse(), ...marqueeItems.slice().reverse()];

  return (
    <section className="relative py-12 overflow-hidden bg-[#07090e] border-y border-white/5">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-48 bg-cyan-500/5 blur-[90px] pointer-events-none" />

      {/* Row 1 - Sliding Left */}
      <div className="flex overflow-hidden py-3">
        <div className="animate-marquee-left flex gap-6 items-center">
          {rowOne.map((item, idx) => (
            <Link
              key={`row1-${idx}`}
              href="#projects"
              className="group relative flex-shrink-0 w-72 sm:w-80 h-44 rounded-2xl overflow-hidden border border-white/10 bg-slate-900/60 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/50 hover:scale-[1.02] shadow-[0_8px_25px_rgba(0,0,0,0.4)]"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover object-top opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-4 flex flex-col justify-end">
                <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase">
                  {item.category}
                </span>
                <div className="flex items-center justify-between gap-2 mt-1">
                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h4>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Row 2 - Sliding Right */}
      <div className="flex overflow-hidden py-3">
        <div className="animate-marquee-right flex gap-6 items-center">
          {rowTwo.map((item, idx) => (
            <Link
              key={`row2-${idx}`}
              href="#projects"
              className="group relative flex-shrink-0 w-72 sm:w-80 h-44 rounded-2xl overflow-hidden border border-white/10 bg-slate-900/60 backdrop-blur-md transition-all duration-300 hover:border-purple-400/50 hover:scale-[1.02] shadow-[0_8px_25px_rgba(0,0,0,0.4)]"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover object-top opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-4 flex flex-col justify-end">
                <span className="text-[10px] font-mono tracking-widest text-purple-400 uppercase">
                  {item.category}
                </span>
                <div className="flex items-center justify-between gap-2 mt-1">
                  <h4 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h4>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
