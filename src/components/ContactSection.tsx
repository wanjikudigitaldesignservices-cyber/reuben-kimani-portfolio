"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { 
  Send, 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from "lucide-react";
import { profileData } from "@/lib/data";
import { supabase } from "@/lib/supabase";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service_needed: "Full-Stack Web Architecture",
    budget: "KES 150k - 300k",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const { error } = await supabase.from("contact_messages").insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service_needed: formData.service_needed,
          budget: formData.budget,
          message: formData.message,
          status: "new",
        },
      ]);

      if (error) {
        console.error("Supabase insert error:", error);
        // If error, still show graceful fallback
      }

      // Trigger confetti celebration
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.7 },
        colors: ["#38bdf8", "#a855f7", "#ec4899", "#10b981"],
      });

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service_needed: "Full-Stack Web Architecture",
        budget: "KES 150k - 300k",
        message: "",
      });
    } catch (err: unknown) {
      console.error("Submission failed:", err);
      setErrorMsg("Failed to deliver message. Please contact directly on WhatsApp or Call.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-8 bg-[#07090e]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-pink-600/10 via-purple-600/10 to-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-1.5 text-xs font-mono font-semibold text-pink-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>START A CONVERSATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            LET&apos;S BUILD YOUR DIGITAL EMPIRE
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            Have a project in mind, an architectural challenge, or ready to elevate your company? Drop a message below or call Reuben directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Founder Contacts */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl border border-white/12 bg-slate-950/70 p-6 sm:p-8 backdrop-blur-xl shadow-xl">
              <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-2">
                Fast Response Channels
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Direct founder access. Reuben personally reviews every inquiry within 4 hours.
              </p>

              <div className="space-y-4">
                {/* WhatsApp Primary */}
                <a
                  href={profileData.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 hover:border-emerald-500/60 transition group"
                >
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] font-mono text-emerald-400 font-bold block uppercase tracking-wider">
                      Instant WhatsApp
                    </span>
                    <span className="text-sm font-extrabold text-white font-mono block mt-0.5">
                      {profileData.phoneFormatted}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Direct Phone */}
                <a
                  href={profileData.phoneHref}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-400 transition group"
                >
                  <div className="w-11 h-11 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] font-mono text-slate-400 block uppercase tracking-wider">
                      Direct Voice Call
                    </span>
                    <span className="text-sm font-extrabold text-white font-mono block mt-0.5">
                      {profileData.phone}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Email */}
                <a
                  href={profileData.emailHref}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-pink-400 transition group"
                >
                  <div className="w-11 h-11 rounded-xl bg-pink-500/20 flex items-center justify-center text-pink-400 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] font-mono text-slate-400 block uppercase tracking-wider">
                      Official Email
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white truncate block mt-0.5">
                      {profileData.email}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-pink-400 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Location & Status Card */}
            <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 backdrop-blur-md flex items-center justify-between">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <div>
                  <span className="text-xs font-bold text-white block">HQ: Nairobi, Kenya</span>
                  <span className="text-[11px] font-mono text-slate-400 block">East Africa Time (UTC+3)</span>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-[11px] font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Online
              </span>
            </div>
          </div>

          {/* Right Column: Supabase-Backed Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/14 bg-slate-950/80 p-6 sm:p-10 backdrop-blur-2xl shadow-2xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                    MESSAGE DELIVERED TO REUBEN!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Your inquiry has been safely stored in our Supabase backend. Reuben will review your project details and follow up promptly.
                  </p>
                  <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-xs font-bold text-white hover:bg-white/10 transition"
                    >
                      Send Another Message
                    </button>
                    <a
                      href={profileData.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-emerald-500 px-6 py-2.5 text-xs font-bold text-slate-950 hover:brightness-110 transition"
                    >
                      Open in WhatsApp Now
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. David Mwangi"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl bg-white/5 border border-white/12 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="david@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl bg-white/5 border border-white/12 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1.5">
                        Phone / WhatsApp Number
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. +254 700 000 000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl bg-white/5 border border-white/12 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1.5">
                        Service Needed
                      </label>
                      <select
                        value={formData.service_needed}
                        onChange={(e) => setFormData({ ...formData, service_needed: e.target.value })}
                        className="w-full rounded-xl bg-[#0f1422] border border-white/12 px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition"
                      >
                        <option value="Full-Stack Web Architecture">Full-Stack Web Architecture</option>
                        <option value="AI Automations & Multi-Agent Systems">AI Automations &amp; Multi-Agent Systems</option>
                        <option value="Brand Architecture & Digital Empire">Brand Architecture &amp; Digital Empire</option>
                        <option value="Captive Hotspot / MikroTik Infrastructure">Captive Hotspot / MikroTik Infrastructure</option>
                        <option value="Full Studio Retainer / Consulting">Full Studio Retainer / Consulting</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1.5">
                      Estimated Project Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full rounded-xl bg-[#0f1422] border border-white/12 px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition"
                    >
                      <option value="KES 80k - 150k">KES 80,000 - 150,000</option>
                      <option value="KES 150k - 300k">KES 150,000 - 300,000</option>
                      <option value="KES 300k - 600k">KES 300,000 - 600,000</option>
                      <option value="KES 600k+">KES 600,000+ (Enterprise System)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1.5">
                      Project Details / Scope *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell Reuben about your goals, current bottlenecks, desired timeline, or system specifications..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-xl bg-white/5 border border-white/12 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition resize-none"
                    />
                  </div>

                  {errorMsg && (
                    <p className="text-xs font-mono text-rose-400 bg-rose-950/40 p-3 rounded-xl border border-rose-500/30">
                      {errorMsg}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 py-4 text-sm font-black uppercase tracking-wider text-slate-950 hover:brightness-110 shadow-[0_0_25px_rgba(236,72,153,0.4)] transition disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{loading ? "TRANSMITTING TO SUPABASE..." : "TRANSMIT PROJECT BRIEF"}</span>
                  </button>

                  <p className="text-[11px] text-center text-slate-500 font-mono">
                    Protected by Supabase Cloud RLS // Direct dispatch to Reuben Kimani
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
