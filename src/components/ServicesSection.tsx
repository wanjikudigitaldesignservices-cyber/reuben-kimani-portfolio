"use client";

import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import { serviceList } from "@/lib/data";

export function ServicesSection() {
  return (
    <section id="services" className="relative pt-20 pb-28 px-4 sm:px-8 bg-[#080a14]">
      {/* Ambient background auroras in purple and blue */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Luxury Glassmorphic Dark Container */}
        <div className="relative rounded-[2.5rem] bg-gradient-to-b from-slate-900/90 via-[#0e0c24]/90 to-slate-950/90 text-white p-8 sm:p-14 lg:p-20 shadow-[0_30px_100px_rgba(5,2,20,0.8)] border border-purple-500/25 backdrop-blur-2xl overflow-hidden">
          {/* Subtle grid pattern in background */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle, #a855f7 1px, transparent 1px)`,
              backgroundSize: "28px 28px",
            }}
          />

          {/* Top Tagline */}
          <div className="text-center mb-4">
            <span className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-purple-300 bg-purple-950/60 border border-purple-500/30 rounded-full px-4 py-1.5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>Core Capabilities &amp; Web Solutions</span>
            </span>
          </div>

          {/* Section Heading */}
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-center tracking-tight text-white uppercase mb-14 sm:mb-20">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-indigo-200 to-blue-300">
              SERVICES
            </span>
          </h2>

          {/* Numbered Services Stack */}
          <div className="divide-y divide-purple-500/15">
            {serviceList.map((service, index) => {
              // Custom balanced purple-blue gradients for each service
              const gradients = [
                "from-purple-400 via-indigo-300 to-blue-400",
                "from-blue-400 via-indigo-300 to-purple-400",
                "from-indigo-400 via-purple-300 to-blue-400",
                "from-purple-300 via-blue-300 to-indigo-300",
              ];
              const gradient = gradients[index % gradients.length];

              return (
                <div
                  key={service.number}
                  className="group py-10 sm:py-14 grid grid-cols-1 md:grid-cols-[140px_1fr_auto] gap-6 md:gap-8 items-start transition-all duration-300 hover:bg-purple-950/25 rounded-2xl px-4 sm:px-6 -mx-4 sm:-mx-6"
                >
                  {/* Large Gradient Number - e.g. 01, 02, 03, 04 */}
                  <div className="flex items-center">
                    <span
                      className={`text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter bg-gradient-to-br ${gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 font-mono`}
                    >
                      {service.number}
                    </span>
                  </div>

                  {/* Title and Description */}
                  <div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white uppercase tracking-tight group-hover:text-purple-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                      {service.description}
                    </p>

                    {/* Tech tags */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1.5 text-[11px] font-mono font-medium text-purple-200 bg-purple-950/50 border border-purple-500/25 rounded-lg px-2.5 py-1"
                        >
                          <CheckCircle2 className="w-3 h-3 text-blue-400" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Arrow Icon */}
                  <div className="hidden md:flex items-center self-center justify-end">
                    <div className="w-12 h-12 rounded-full border border-purple-500/30 bg-purple-950/40 flex items-center justify-center text-purple-300 group-hover:border-purple-400 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:text-white transition-all duration-300 shadow-md">
                      <ArrowUpRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Banner inside Services */}
          <div className="mt-12 pt-8 border-t border-purple-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
            <span>// Tailored for Founders, Enterprises &amp; Fast-Growing SMEs</span>
            <a
              href="#contact"
              className="font-bold text-purple-300 hover:text-blue-300 underline transition"
            >
              Discuss your specific project requirements &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
