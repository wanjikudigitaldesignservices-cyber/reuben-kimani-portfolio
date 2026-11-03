"use client";

import Image from "next/image";
import { ArrowUpRight, ExternalLink, Check, Code2 } from "lucide-react";
import { featuredProjects, ProjectItem } from "@/lib/data";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export function FeaturedProjects() {
  return (
    <section id="projects" className="relative py-24 px-4 sm:px-8 bg-[#07090e]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-mono font-semibold text-cyan-400 mb-4">
              <span>// REUBEN KIMANI PORTFOLIO ARCHIVES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              FEATURED ENGINEERING &amp; SYSTEMS
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Production full-stack platforms, telemetry dashboards, network captive portals, and digital agency systems engineered for real-world reliability.
          </p>
        </div>

        {/* Projects Showcase Bento Cards - matching frame 11 */}
        <div className="space-y-12">
          {featuredProjects.map((project: ProjectItem) => (
            <div
              key={project.id}
              className="relative rounded-3xl border border-white/12 bg-slate-950/70 backdrop-blur-xl p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.7)] transition-all duration-300 hover:border-cyan-400/40"
            >
              {/* Card Header matching frame 11 */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/10">
                <div className="flex items-center gap-5">
                  {/* Big Neon Gradient Number */}
                  <span className="text-4xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                    {project.number}
                  </span>

                  <div>
                    <span className="text-[11px] font-mono tracking-widest text-cyan-400 uppercase font-bold block">
                      {project.category}
                    </span>
                    <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight uppercase mt-0.5">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Right Action: Oval "LIVE PROJECT" button like frame 11 */}
                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full border border-white/14 bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 transition"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border-2 border-white/25 px-5 py-2 text-xs font-bold uppercase tracking-wider text-white hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all duration-200"
                    >
                      <span>LIVE PROJECT</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Tagline and description */}
              <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <p className="text-sm sm:text-base font-semibold text-cyan-200">
                    {project.tagline}
                  </p>
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Key Outcomes */}
                <div className="space-y-2 bg-white/[0.02] border border-white/8 rounded-2xl p-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block font-bold">
                    Key Outcomes
                  </span>
                  {project.outcomes.map((outcome, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                      <Check className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Media Bento Mockup Layout - Exactly from Frame 11 */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-4">
                {/* Left Column: Two stacked smaller cards */}
                <div className="md:col-span-5 flex flex-col gap-4">
                  <div className="relative h-44 sm:h-52 rounded-2xl overflow-hidden border border-white/10 bg-slate-900 group">
                    <Image
                      src={project.secondaryImages[0] || project.primaryImage}
                      alt={`${project.title} Preview 1`}
                      fill
                      className="object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 text-[11px] font-mono text-cyan-300 bg-slate-950/80 px-2.5 py-1 rounded-md border border-white/10">
                      UI Component Matrix
                    </div>
                  </div>

                  <div className="relative h-44 sm:h-52 rounded-2xl overflow-hidden border border-white/10 bg-slate-900 group">
                    <Image
                      src={project.secondaryImages[1] || project.primaryImage}
                      alt={`${project.title} Preview 2`}
                      fill
                      className="object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 text-[11px] font-mono text-cyan-300 bg-slate-950/80 px-2.5 py-1 rounded-md border border-white/10">
                      Telemetry &amp; Database Sync
                    </div>
                  </div>
                </div>

                {/* Right Column: Large featured interactive preview screen */}
                <div className="md:col-span-7 relative h-92 sm:h-[432px] rounded-2xl overflow-hidden border border-white/12 bg-slate-900 group shadow-2xl">
                  <Image
                    src={project.primaryImage}
                    alt={`${project.title} Primary Architecture`}
                    fill
                    className="object-cover object-top group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/80 border border-white/15 px-3 py-1 text-[11px] font-mono text-emerald-400 backdrop-blur-md">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Live Verified
                    </span>
                  </div>
                </div>
              </div>

              {/* Tech Stack Pills Footer */}
              <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-mono uppercase text-slate-400 mr-2 font-bold">
                    Stack:
                  </span>
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono text-slate-300 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition flex items-center gap-1"
                >
                  <span>Build something similar</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
