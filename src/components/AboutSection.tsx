"use client";

import Image from "next/image";
import { 
  Terminal, 
  MapPin, 
  Phone, 
  Mail, 
  Award, 
  ShieldCheck, 
  Cpu, 
  ArrowUpRight,
  Code2,
  Workflow
} from "lucide-react";
import { profileData, techStackCategories } from "@/lib/data";

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-8 bg-[#07090e] overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-mono font-semibold text-cyan-400 mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>WHO IS REUBEN KIMANI</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            BUILDING WEBSITES THAT GROW BUSINESSES
          </h2>
        </div>

        {/* 2-Column Grid: Left Story & Bio, Right Interactive Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Portrait & Founder Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative rounded-3xl border border-white/12 bg-slate-950/70 p-6 sm:p-8 backdrop-blur-xl shadow-xl">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-white/10">
                {/* Real Photo */}
                <div className="relative w-24 h-24 rounded-2xl overflow-hidden border-2 border-cyan-400 shadow-[0_0_20px_rgba(56,189,248,0.4)] flex-shrink-0">
                  <Image
                    src="/photos/reuben-1.jpg"
                    alt="Reuben Kimani Portrait"
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-black text-white uppercase">
                    REUBEN KIMANI
                  </h3>
                  <p className="text-sm font-semibold text-cyan-300 mt-0.5">
                    {profileData.role}
                  </p>
                  <p className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-pink-400" />
                    <span>Nairobi, Kenya // Operating Globally</span>
                  </p>
                </div>
              </div>

              {/* Bio copy */}
              <div className="mt-6 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I don&apos;t just write code or assemble templates. I build complete web solutions that solve real business problems and drive measurable revenue growth.
                </p>
                <p>
                  With 40+ shipped projects — from POS systems and hospital ERPs to coffee brand websites and booking engines — I&apos;ve helped SMEs, startups, and enterprises across East Africa launch digital products that actually convert.
                </p>
                <p>
                  As the founder of <span className="text-white font-bold">LQD Creative</span>, my mission is simple: give every ambitious business a web presence that matches the quality they actually deliver. Fast-loading, beautifully designed, mobile-first websites and web apps that turn visitors into customers.
                </p>
              </div>

              {/* Founder Quote */}
              <div className="mt-6 rounded-2xl bg-cyan-950/30 border border-cyan-400/20 p-4 text-xs font-mono text-cyan-200">
                &ldquo;Good design grabs attention. Solid systems turn attention into unstoppable, repeatable growth.&rdquo;
                <span className="block mt-1 text-slate-400 text-[11px]">&mdash; Reuben Kimani</span>
              </div>
            </div>

            {/* Metrics cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-center">
                <div className="text-2xl sm:text-3xl font-black text-white">{profileData.experienceYears}</div>
                <div className="text-[11px] font-mono text-slate-400 mt-1 uppercase">Years Shipping</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-center">
                <div className="text-2xl sm:text-3xl font-black text-cyan-300">{profileData.projectsCompleted}</div>
                <div className="text-[11px] font-mono text-slate-400 mt-1 uppercase">Deployments</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-center">
                <div className="text-2xl sm:text-3xl font-black text-emerald-400">{profileData.uptimeRate}</div>
                <div className="text-[11px] font-mono text-slate-400 mt-1 uppercase">System Uptime</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-center">
                <div className="text-2xl sm:text-3xl font-black text-pink-400">{profileData.clientSatisfaction}</div>
                <div className="text-[11px] font-mono text-slate-400 mt-1 uppercase">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Column: Technical Matrix & Direct Contact Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Tech Stack by Category */}
            <div className="rounded-3xl border border-white/12 bg-slate-950/70 p-6 sm:p-8 backdrop-blur-xl">
              <h4 className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase mb-6 flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                <span>Technical Stack Matrix</span>
              </h4>

              <div className="space-y-5">
                {techStackCategories.map((group) => (
                  <div key={group.category}>
                    <span className="text-xs font-bold text-white uppercase tracking-wider block mb-2">
                      {group.category}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] font-mono text-slate-300 bg-white/5 border border-white/10 rounded-md px-2.5 py-1"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Connect Quick Card */}
            <div className="rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-cyan-950/40 via-slate-950/80 to-purple-950/40 p-6 sm:p-8 backdrop-blur-xl shadow-xl">
              <h4 className="text-base font-extrabold text-white uppercase tracking-tight">
                Direct Founder Contact
              </h4>
              <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                Skip the middlemen and reach Reuben directly for architectural reviews, engineering contracts, or agency projects.
              </p>

              <div className="mt-5 space-y-3">
                <a
                  href={profileData.phoneHref}
                  className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 hover:bg-white/10 transition group"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <div>
                      <span className="text-[11px] font-mono text-slate-400 block">Direct Phone</span>
                      <span className="text-xs sm:text-sm font-bold text-white font-mono">{profileData.phone}</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-cyan-400 group-hover:translate-x-1 transition-transform">Call &rarr;</span>
                </a>

                <a
                  href={profileData.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 hover:border-emerald-500/50 hover:bg-emerald-500/20 transition group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <div>
                      <span className="text-[11px] font-mono text-emerald-400 block">WhatsApp Direct</span>
                      <span className="text-xs sm:text-sm font-bold text-white font-mono">{profileData.phoneFormatted}</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-400 group-hover:translate-x-1 transition-transform">Chat &rarr;</span>
                </a>

                <a
                  href={profileData.emailHref}
                  className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:border-pink-400 hover:bg-white/10 transition group"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-pink-400" />
                    <div>
                      <span className="text-[11px] font-mono text-slate-400 block">Email Inquiries</span>
                      <span className="text-xs font-bold text-white truncate max-w-[190px] block">{profileData.email}</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-pink-400 group-hover:translate-x-1 transition-transform">Send &rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CEO Visual Gallery - Reuben Kimani in the field */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
                // LEADERSHIP &amp; FOUNDER
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase mt-1">
                REUBEN KIMANI &bull; IN THE FIELD
              </h3>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              Nairobi, Kenya &bull; Lead Architect @ LQD Creative
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { src: "/photos/reuben-1.jpg", caption: "Executive Focus" },
              { src: "/photos/reuben-2.jpg", caption: "Strategy & Vision" },
              { src: "/photos/reuben-3.jpg", caption: "On-Site Direction" },
              { src: "/photos/reuben-4.jpg", caption: "Founder & Architect" },
            ].map((photo, i) => (
              <div
                key={i}
                className="group relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-white/10 bg-slate-900 shadow-lg"
              >
                <Image
                  src={photo.src}
                  alt={`Reuben Kimani - ${photo.caption}`}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-cyan-300 bg-slate-950/80 px-2 py-0.5 rounded border border-white/10">
                    {photo.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
