"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Sparkles, 
  Volume2, 
  VolumeX, 
  Eye, 
  Camera, 
  Code2, 
  Layers, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  Flame, 
  Zap,
  TrendingUp,
  Globe2
} from "lucide-react";
import { emotions, profileData, EmotionState } from "@/lib/data";

const ceoPhotoVariants = [
  {
    id: "hero",
    label: "Executive Focus",
    image: "/photos/reuben-hero.webp",
    badge: "CEO & Lead Architect",
    caption: "I engineer high-converting web applications that scale effortlessly.",
  },
  {
    id: "uploaded",
    label: "Campus / Field",
    image: "/photos/reuben-uploaded.webp",
    badge: "Founder in Nairobi",
    caption: "On-site directing digital systems and client launches across Kenya.",
  },
  {
    id: "seated",
    label: "Full Seated Portrait",
    image: "/photos/reuben-1.webp",
    badge: "LQD Creative Founder",
    caption: "Transforming ambitious businesses with world-class web presence.",
  },
];

export function HeroSection() {
  const [displayMode, setDisplayMode] = useState<"photo" | "avatar">("photo");
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [currentEmotionIndex, setCurrentEmotionIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [targetRotate, setTargetRotate] = useState({ x: 0, y: 0 });
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [bubbleKey, setBubbleKey] = useState(0);
  const [timeString, setTimeString] = useState("");
  const heroRef = useRef<HTMLDivElement>(null);

  const currentEmotion = emotions[currentEmotionIndex];
  const currentPhoto = ceoPhotoVariants[currentPhotoIndex];

  // Dynamic live clock for Nairobi (UTC+3)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString("en-US", {
          timeZone: "Africa/Nairobi",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Mouse move tracking for 3D parallax head rotation
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Normalized coordinates from -1 to 1
      const normX = Math.max(-1, Math.min(1, (e.clientX - centerX) / (rect.width / 2)));
      const normY = Math.max(-1, Math.min(1, (e.clientY - centerY) / (rect.height / 2)));

      setMousePos({ x: normX, y: normY });
      // Pitch (X) and Yaw (Y) in degrees
      setTargetRotate({
        x: -normY * 7,
        y: normX * 11,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Cycle emotion or photo on click
  const cycleDisplay = () => {
    if (displayMode === "photo") {
      setCurrentPhotoIndex((prev) => (prev + 1) % ceoPhotoVariants.length);
      setBubbleKey((prev) => prev + 1);
      playEmotionTone(520);
    } else {
      setCurrentEmotionIndex((prev) => (prev + 1) % emotions.length);
      setBubbleKey((prev) => prev + 1);
      playEmotionTone(440 + currentEmotionIndex * 60);
    }
  };

  const selectEmotion = (index: number) => {
    setCurrentEmotionIndex(index);
    setBubbleKey((prev) => prev + 1);
    playEmotionTone(440 + index * 60);
  };

  const playEmotionTone = (freq = 480) => {
    if (!soundEnabled || typeof window === "undefined") return;
    try {
      const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.25);
    } catch {
      // AudioContext fallback
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-[96vh] sm:min-h-screen flex flex-col justify-between pt-26 pb-10 px-4 sm:px-8 overflow-hidden bg-[#080a14]"
    >
      {/* Background ambient lighting - balanced deep purple and rich electric blue */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Shifting radial auroras */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[850px] bg-gradient-to-tr from-purple-700/20 via-indigo-600/15 to-blue-600/20 rounded-full blur-[140px] animate-pulse-glow" />
        <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-purple-600/15 rounded-full blur-[110px]" />
        <div className="absolute -bottom-32 -right-32 w-[450px] h-[450px] bg-blue-600/15 rounded-full blur-[110px]" />
        <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[90px]" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(circle, #a855f7 1px, transparent 1px)`,
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      {/* Floating interactive ambient badges in purple/blue */}
      <div className="hidden xl:block absolute left-10 top-1/3 pointer-events-none z-10 animate-float">
        <div className="purple-glass rounded-2xl p-3.5 shadow-2xl max-w-[200px] border border-purple-500/30">
          <div className="flex items-center gap-2 text-xs font-bold text-purple-300">
            <Zap className="w-4 h-4 text-purple-400" />
            <span>40+ Shipped Web Apps</span>
          </div>
          <p className="text-[11px] text-slate-400 font-mono mt-1">
            Production ERPs, booking portals, POS &amp; SaaS
          </p>
        </div>
      </div>

      <div className="hidden xl:block absolute right-10 top-1/3 pointer-events-none z-10 animate-float-reverse">
        <div className="purple-glass rounded-2xl p-3.5 shadow-2xl max-w-[210px] border border-blue-500/30">
          <div className="flex items-center gap-2 text-xs font-bold text-blue-300">
            <Globe2 className="w-4 h-4 text-blue-400" />
            <span>Sub-2s Web Velocity</span>
          </div>
          <p className="text-[11px] text-slate-400 font-mono mt-1">
            Next.js App Router, Tailwind &amp; Supabase Cloud
          </p>
        </div>
      </div>

      {/* Top Status & Time Bar */}
      <div className="relative z-20 mx-auto text-center mt-2 flex flex-col items-center gap-3">
        <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 rounded-full border border-purple-500/25 bg-slate-950/70 backdrop-blur-xl px-4 py-1.5 text-xs text-slate-300 shadow-[0_4px_25px_rgba(124,58,237,0.15)]">
          <div className="flex items-center gap-1.5 text-purple-300 font-mono font-semibold">
            <MapPin className="w-3.5 h-3.5 text-purple-400" />
            <span>Nairobi, Kenya</span>
          </div>
          <span className="text-slate-600">&bull;</span>
          <div className="flex items-center gap-1.5 text-slate-400 font-mono">
            <Clock className="w-3.5 h-3.5 text-blue-400" />
            <span>{timeString || "EAT (UTC+3)"}</span>
          </div>
          <span className="text-slate-600">&bull;</span>
          <div className="flex items-center gap-1.5 text-emerald-400 font-mono font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Open for Q4/Q1 Projects</span>
          </div>
        </div>

        {/* View Switcher Pill: Real Reuben vs 3D Avatar */}
        <div className="inline-flex items-center gap-1 p-1 rounded-full border border-purple-500/30 bg-slate-950/90 backdrop-blur-xl shadow-xl">
          <button
            onClick={() => {
              setDisplayMode("photo");
              playEmotionTone(520);
            }}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
              displayMode === "photo"
                ? "bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.45)] scale-105"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Camera className="w-3.5 h-3.5 text-blue-300" />
            <span>Real Reuben (CEO)</span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-300 animate-pulse" />
          </button>

          <button
            onClick={() => {
              setDisplayMode("avatar");
              playEmotionTone(440);
            }}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
              displayMode === "avatar"
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(147,51,234,0.45)] scale-105"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-300" />
            <span>3D Avatar (Interactive)</span>
          </button>
        </div>
      </div>

      {/* Centerpiece: Giant Typography + Portrait/Avatar Card */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center my-auto w-full max-w-6xl mx-auto py-4">
        {/* Giant Bold Background Typography with subtle purple glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <h1 className="text-[13vw] sm:text-[11vw] md:text-[9.5vw] font-black tracking-[-0.04em] text-white/[0.04] uppercase text-center leading-none whitespace-nowrap">
            REUBEN KIMANI
          </h1>
        </div>

        {/* Dynamic Interactive Card with 3D perspective tracking */}
        <div className="relative flex flex-col items-center justify-center pt-2">
          {/* Comic speech bubble with dynamic thought */}
          <div
            key={bubbleKey}
            className="mb-3 relative transition-all duration-300 animate-in fade-in zoom-in-95"
            style={{
              transform: `translate3d(${mousePos.x * 6}px, ${mousePos.y * 4}px, 0)`,
            }}
          >
            <div className="relative bg-slate-950/90 border border-purple-500/35 rounded-2xl px-5 py-2 shadow-[0_15px_35px_rgba(0,0,0,0.7)] backdrop-blur-xl max-w-xs sm:max-w-md text-center">
              <p className="text-xs sm:text-sm font-semibold text-white">
                {displayMode === "photo" ? (
                  <>
                    <span className="mr-1.5">⚡</span>
                    &ldquo;{currentPhoto.caption}&rdquo;
                  </>
                ) : (
                  <>
                    <span className="mr-1.5">{currentEmotion.emoji}</span>
                    &ldquo;{currentEmotion.speech}&rdquo;
                  </>
                )}
              </p>
              <p className="text-[10px] text-purple-300/90 font-mono mt-0.5">
                {displayMode === "photo" ? currentPhoto.badge : currentEmotion.subtitle}
              </p>

              {/* Speech bubble tail pointer */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-slate-950 border-r border-b border-purple-500/35 rotate-45" />
            </div>
          </div>

          {/* Visual Container (Real Photo vs 3D Avatar) */}
          <div
            onClick={cycleDisplay}
            className="group relative cursor-pointer select-none"
            style={{
              perspective: "1200px",
            }}
            title={displayMode === "photo" ? "Click to view next photo of Reuben!" : "Click avatar to cycle emotions!"}
          >
            {/* Ambient Purple-Blue Glow */}
            <div
              className="absolute inset-0 -m-6 rounded-full blur-2xl opacity-50 transition-all duration-500 pointer-events-none"
              style={{
                background:
                  displayMode === "photo"
                    ? "radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 75%)"
                    : `radial-gradient(circle, ${currentEmotion.accentColor} 0%, transparent 70%)`,
              }}
            />

            {/* 3D Rotating Frame */}
            <div
              className="relative w-64 h-72 sm:w-80 sm:h-96 md:w-88 md:h-[420px] transition-transform duration-150 ease-out"
              style={{
                transform: `rotateX(${targetRotate.x}deg) rotateY(${targetRotate.y}deg) scale(${
                  1 + Math.abs(mousePos.x) * 0.02
                })`,
                transformStyle: "preserve-3d",
              }}
            >
              {displayMode === "photo" ? (
                /* REAL PHOTO CARD */
                <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-purple-500/50 shadow-[0_20px_50px_rgba(10,5,30,0.9)] bg-slate-950">
                  <Image
                    src={currentPhoto.image}
                    alt="Reuben Kimani - Founder & Lead Developer"
                    fill
                    priority
                    className="object-cover object-top filter contrast-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent opacity-80" />

                  {/* Floating Badges on Photo */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-slate-950/80 border border-purple-400/40 px-3 py-1 text-[11px] font-mono text-purple-200 backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Reuben Kimani (CEO)</span>
                  </div>

                  <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-blue-950/80 border border-blue-400/40 px-2.5 py-1 text-[10px] font-mono text-blue-200 backdrop-blur-md">
                    <Flame className="w-3 h-3 text-amber-400" />
                    <span>Founder</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[10px] font-mono tracking-widest text-purple-400 uppercase font-bold block">
                      FOUNDER &bull; LQD CREATIVE
                    </span>
                    <h3 className="text-xl font-black text-white uppercase tracking-tight">
                      REUBEN KIMANI
                    </h3>
                    <p className="text-[11px] text-slate-300 font-mono flex items-center gap-2 mt-1">
                      <span>Nairobi, Kenya</span>
                      <span>&bull;</span>
                      <span className="text-emerald-400 font-bold font-mono">0740396075</span>
                    </p>
                  </div>
                </div>
              ) : (
                /* 3D AVATAR */
                <div className="relative w-full h-full">
                  <Image
                    src={currentEmotion.image}
                    alt={`Reuben Kimani 3D Male Avatar - ${currentEmotion.label}`}
                    fill
                    priority
                    className="object-contain drop-shadow-[0_20px_45px_rgba(0,0,0,0.85)] filter contrast-[1.03] rounded-3xl"
                  />
                  <div
                    className="absolute inset-0 rounded-3xl pointer-events-none opacity-20 bg-gradient-to-tr from-purple-400/0 via-white/10 to-transparent transition-opacity"
                    style={{
                      transform: `translate3d(${mousePos.x * 10}px, ${mousePos.y * 10}px, 20px)`,
                    }}
                  />
                </div>
              )}
            </div>

            {/* Interactive hint badge */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-slate-950/90 border border-purple-500/35 backdrop-blur-md rounded-full px-3 py-1 text-[11px] font-mono text-purple-300 opacity-90 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 shadow-lg whitespace-nowrap">
              <Eye className="w-3 h-3 text-purple-400 animate-pulse" />
              <span>{displayMode === "photo" ? "Click card to switch photo" : "Click avatar to switch emotion"}</span>
            </div>
          </div>

          {/* Controls Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 max-w-xl">
            {displayMode === "photo" ? (
              /* Photo variant buttons */
              ceoPhotoVariants.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => {
                    setCurrentPhotoIndex(idx);
                    setBubbleKey((prev) => prev + 1);
                    playEmotionTone(500 + idx * 40);
                  }}
                  className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 ${
                    idx === currentPhotoIndex
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.5)] scale-105 font-bold"
                      : "bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10"
                  }`}
                >
                  <Camera className="w-3 h-3 text-blue-300" />
                  <span>{p.label}</span>
                </button>
              ))
            ) : (
              /* 3D Emotion buttons */
              emotions.map((emotion, idx) => {
                const active = idx === currentEmotionIndex;
                return (
                  <button
                    key={emotion.id}
                    onClick={() => selectEmotion(idx)}
                    className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 ${
                      active
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.4)] scale-105"
                        : "bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10"
                    }`}
                  >
                    <span>{emotion.emoji}</span>
                    <span>{emotion.label}</span>
                  </button>
                );
              })
            )}

            {/* Sound toggle button */}
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition"
              title={soundEnabled ? "Mute interaction tones" : "Enable interaction tones"}
            >
              {soundEnabled ? (
                <Volume2 className="w-3.5 h-3.5 text-purple-400" />
              ) : (
                <VolumeX className="w-3.5 h-3.5 text-slate-500" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Dynamic Stats Ticker Bar */}
      <div className="relative z-20 max-w-6xl mx-auto w-full my-4 py-3 px-6 rounded-2xl bg-gradient-to-r from-purple-950/40 via-slate-950/70 to-blue-950/40 border border-purple-500/20 backdrop-blur-xl">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              40+
            </div>
            <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
              Websites &amp; Apps Shipped
            </div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              5+ Years
            </div>
            <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
              Engineering Experience
            </div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              99.98%
            </div>
            <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
              System Uptime Guarantee
            </div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-emerald-400">
              100%
            </div>
            <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
              Client Satisfaction Rate
            </div>
          </div>
        </div>
      </div>

      {/* Hero Bottom Bar */}
      <div className="relative z-20 max-w-7xl mx-auto w-full pt-4 flex flex-col md:flex-row items-center md:items-end justify-between gap-6">
        <div className="max-w-lg text-center md:text-left">
          <p className="text-xs sm:text-sm font-extrabold tracking-widest text-slate-200 uppercase leading-relaxed">
            HIGH-CONVERTING WEBSITES &bull; FULL-STACK APPS &bull; E-COMMERCE &bull; DIGITAL PLATFORMS
          </p>
          <div className="mt-1.5 flex items-center justify-center md:justify-start gap-4 text-xs font-mono text-purple-300">
            <span>// Nairobi, Kenya</span>
            <span>// Founder @ LQD Creative</span>
            <span>// 0740396075</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profileData.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 hover:border-emerald-500/60 transition"
          >
            <span>WhatsApp Reuben</span>
          </a>

          <Link
            href="#contact"
            className="group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-xs sm:text-sm font-black uppercase tracking-wider text-white transition-all duration-300 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:scale-105 shadow-[0_0_25px_rgba(124,58,237,0.45)]"
          >
            <span>START A PROJECT</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
