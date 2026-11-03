"use client";

import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { serviceList } from "@/lib/data";

export function ServicesSection() {
  return (
    <section id="services" className="relative pt-20 pb-28 px-4 sm:px-8 bg-[#07090e]">
      {/* Floating 3D stickers flanking the services section */}
      <div className="absolute left-8 -top-12 pointer-events-none z-20 animate-float hidden md:block">
        <Image
          src="/stickers/neon-smile.svg"
          alt="3D Neon Smile"
          width={90}
          height={90}
          className="drop-shadow-[0_0_30px_rgba(236,72,153,0.5)]"
        />
      </div>

      <div className="absolute right-10 -top-8 pointer-events-none z-20 animate-float-reverse hidden md:block">
        <Image
          src="/stickers/neon-cursor.svg"
          alt="3D Neon Cursor"
          width={80}
          height={80}
          className="drop-shadow-[0_0_25px_rgba(56,189,248,0.5)]"
        />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* The Curved Light Container exactly from frame 08 & 09 */}
        <div className="relative rounded-[2.5rem] bg-[#f7f6f0] text-slate-900 p-8 sm:p-14 lg:p-20 shadow-[0_30px_100px_rgba(0,0,0,0.6)] overflow-hidden">
          {/* Subtle decorative grid/dots in background */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle, #000000 1.5px, transparent 1.5px)`,
              backgroundSize: "24px 24px",
            }}
          />

          {/* Top Tagline */}
          <div className="text-center mb-4">
            <span className="inline-block text-xs font-mono font-bold tracking-widest uppercase text-slate-500 bg-slate-200/70 rounded-full px-4 py-1">
              Core Capabilities &amp; Architecture
            </span>
          </div>

          {/* 3D Extruded Heading: SERVICES - exactly like frame 08 */}
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-center tracking-tight text-slate-900 text-3d uppercase mb-14 sm:mb-20">
            SERVICES
          </h2>

          {/* Numbered Services Stack - exactly like frame 09 */}
          <div className="divide-y divide-slate-300/80">
            {serviceList.map((service) => (
              <div
                key={service.number}
                className="group py-10 sm:py-14 grid grid-cols-1 md:grid-cols-[140px_1fr_auto] gap-6 md:gap-8 items-start transition-all duration-300 hover:bg-white/60 rounded-2xl px-4 sm:px-6 -mx-4 sm:-mx-6"
              >
                {/* Large Gradient Number - e.g. 01, 02, 03, 04 */}
                <div className="flex items-center">
                  <span
                    className={`text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter bg-gradient-to-br ${service.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}
                  >
                    {service.number}
                  </span>
                </div>

                {/* Title and Description */}
                <div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 uppercase tracking-tight group-hover:text-cyan-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                    {service.description}
                  </p>

                  {/* Tech tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-slate-700 bg-white border border-slate-300/70 rounded-lg px-2.5 py-1 shadow-xs"
                      >
                        <CheckCircle2 className="w-3 h-3 text-cyan-600" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Arrow Icon */}
                <div className="hidden md:flex items-center self-center justify-end">
                  <div className="w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center text-slate-400 group-hover:border-slate-900 group-hover:text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300 shadow-xs">
                    <ArrowUpRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Banner inside Services */}
          <div className="mt-12 pt-8 border-t border-slate-300/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
            <span>// Tailored for Founders, Enterprises &amp; Fast-Growing Tech Teams</span>
            <a
              href="#contact"
              className="font-bold text-slate-900 underline hover:text-cyan-600 transition"
            >
              Discuss your specific technical scope &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
