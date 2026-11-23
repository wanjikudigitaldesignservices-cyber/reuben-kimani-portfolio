"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Volume2, VolumeX, Eye, Flame, Camera, User, CheckCircle2 } from "lucide-react";
import { emotions, profileData, EmotionState } from "@/lib/data";

const ceoPhotoVariants = [
  {
    id: "hero",
    label: "Executive Focus",
    image: "/photos/reuben-hero.webp",
    badge: "CEO & Lead Architect",
    caption: "Building digital products that convert attention into revenue.",
  },
  {
    id: "uploaded",
    label: "Campus / Field",
    image: "/photos/reuben-uploaded.webp",
    badge: "Founder in Nairobi",
    caption: "On-site directing digital systems across Kenya.",
  },
  {
    id: "seated",
    label: "Full Seated Portrait",
    image: "/photos/reuben-1.webp",
    badge: "LQD Creative Founder",
    caption: "Architecting high-velocity web platforms for East Africa.",
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
  const heroRef = useRef<HTMLDivElement>(null);

  const currentEmotion = emotions[currentEmotionIndex];
  const currentPhoto = ceoPhotoVariants[currentPhotoIndex];

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
        x: -normY * 8,
        y: normX * 12,
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
    } else {
      setCurrentEmotionIndex((prev) => (prev + 1) % emotions.length);
      setBubbleKey((prev) => prev + 1);
      playEmotionTone();
    }
  };

  const selectEmotion = (index: number) => {
    setCurrentEmotionIndex(index);
    setBubbleKey((prev) => prev + 1);
    playEmotionTone();
  };

  const playEmotionTone = () => {
    if (!soundEnabled || typeof window === "undefined") return;
    try {
      const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(440 + currentEmotionIndex * 70, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.3);
    } catch {
      // AudioContext not allowed or unsupported
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between pt-28 pb-12 px-6 sm:px-10 overflow-hidden bg-[#07090e]"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-cyan-600/15 via-indigo-600/10 to-pink-600/15 rounded-full blur-[120px]" />
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Floating 3D Stickers */}
      <div className="hidden lg:block absolute left-12 top-1/3 -translate-y-1/2 pointer-events-none z-10 animate-float">
        <Image
          src="/stickers/neon-smile.svg"
          alt="Neon Smile"
          width={88}
          height={88}
          className="drop-shadow-[0_0_25px_rgba(236,72,153,0.6)]"
        />
      </div>
      <div className="hidden lg:block absolute right-14 top-1/3 -translate-y-1/2 pointer-events-none z-10 animate-float-reverse">
        <Image
          src="/stickers/neon-cursor.svg"
          alt="Neon Cursor"
          width={76}
          height={76}
          className="drop-shadow-[0_0_20px_rgba(56,189,248,0.6)]"
        />
      </div>

      {/* Top Banner / Mode Switcher Pill */}
      <div className="relative z-20 mx-auto text-center mt-2 flex flex-col items-center gap-2">
        <div className="inline-flex items-center gap-1.5 p-1 rounded-full border border-white/14 bg-slate-950/80 backdrop-blur-xl shadow-xl">
          <button
            onClick={() => setDisplayMode("photo")}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              displayMode === "photo"
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-[0_0_20px_rgba(56,189,248,0.5)] scale-105"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Camera className="w-3.5 h-3.5" />
            <span>Real Photo (Reuben)</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          </button>

          <button
            onClick={() => setDisplayMode("avatar")}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              displayMode === "avatar"
                ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-[0_0_20px_rgba(236,72,153,0.5)] scale-105"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>3D Avatar (Interactive)</span>
          </button>
        </div>
      </div>

      {/* Centerpiece: Giant Typography + Portrait/Avatar Card */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center my-auto w-full max-w-6xl mx-auto">
        {/* Giant Bold Background Typography */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <h1 className="text-[13vw] sm:text-[11vw] md:text-[9.5vw] font-black tracking-[-0.04em] text-white/[0.08] uppercase text-center leading-none whitespace-nowrap">
            HI, I&apos;M REUBEN
          </h1>
        </div>

        {/* Dynamic Interactive Card with 3D perspective tracking */}
        <div className="relative flex flex-col items-center justify-center pt-2">
          {/* Comic speech bubble with dynamic thought */}
          <div
            key={bubbleKey}
            className="mb-3 relative transition-all duration-300 animate-in fade-in zoom-in-90"
            style={{
              transform: `translate3d(${mousePos.x * 6}px, ${mousePos.y * 4}px, 0)`,
            }}
          >
            <div className="relative bg-slate-900/90 border border-cyan-400/30 rounded-2xl px-5 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-xl max-w-xs sm:max-w-md text-center">
              <p className="text-xs sm:text-sm font-semibold text-white">
                {displayMode === "photo" ? (
                  <>
                    <span className="mr-1.5">🚀</span>
                    &ldquo;{currentPhoto.caption}&rdquo;
                  </>
                ) : (
                  <>
                    <span className="mr-1.5">{currentEmotion.emoji}</span>
                    &ldquo;{currentEmotion.speech}&rdquo;
                  </>
                )}
              </p>
              <p className="text-[10px] text-cyan-300/80 font-mono mt-0.5">
                {displayMode === "photo" ? currentPhoto.badge : currentEmotion.subtitle}
              </p>

              {/* Speech bubble tail pointer */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-slate-900 border-r border-b border-cyan-400/30 rotate-45" />
            </div>
          </div>

          {/* Visual Container (Real Photo vs 3D Avatar) */}
          <div
            onClick={cycleDisplay}
            className="group relative cursor-pointer select-none"
            style={{
              perspective: "1200px",
            }}
            title={displayMode === "photo" ? "Click to see more photos of Reuben!" : "Click to cycle emotions!"}
          >
            {/* Ambient Glow */}
            <div
              className="absolute inset-0 -m-6 rounded-full blur-2xl opacity-40 transition-colors duration-500 pointer-events-none"
              style={{
                background:
                  displayMode === "photo"
                    ? "radial-gradient(circle, #06b6d4 0%, transparent 70%)"
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
                <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-cyan-400/60 shadow-[0_20px_50px_rgba(0,0,0,0.85)] bg-slate-950">
                  <Image
                    src={currentPhoto.image}
                    alt="Reuben Kimani - Real CEO Photo"
                    fill
                    priority
                    className="object-cover object-top filter contrast-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-75" />
                  
                  {/* Floating Badges on Photo */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-slate-950/80 border border-cyan-400/40 px-3 py-1 text-[11px] font-mono text-cyan-300 backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Real Reuben Kimani</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase font-bold block">
                      FOUNDER &amp; LEAD DEVELOPER
                    </span>
                    <h3 className="text-lg font-black text-white uppercase tracking-tight">
                      REUBEN KIMANI
                    </h3>
                    <p className="text-[11px] text-slate-300 font-mono flex items-center gap-2 mt-0.5">
                      <span>Nairobi, Kenya</span>
                      <span>&bull;</span>
                      <span className="text-emerald-400 font-bold">0740396075</span>
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
                    className="absolute inset-0 rounded-3xl pointer-events-none opacity-20 bg-gradient-to-tr from-cyan-400/0 via-white/10 to-transparent transition-opacity"
                    style={{
                      transform: `translate3d(${mousePos.x * 10}px, ${mousePos.y * 10}px, 20px)`,
                    }}
                  />
                </div>
              )}
            </div>

            {/* Interactive hint badge */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-slate-950/90 border border-cyan-400/30 backdrop-blur-md rounded-full px-3 py-1 text-[11px] font-mono text-cyan-300 opacity-90 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 shadow-lg whitespace-nowrap">
              <Eye className="w-3 h-3 text-cyan-400 animate-pulse" />
              <span>{displayMode === "photo" ? "Click to view next photo" : "Click avatar to switch emotion"}</span>
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
                  }}
                  className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 ${
                    idx === currentPhotoIndex
                      ? "bg-cyan-400 text-slate-950 shadow-[0_0_20px_rgba(56,189,248,0.5)] scale-105 font-bold"
                      : "bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10"
                  }`}
                >
                  <Camera className="w-3 h-3" />
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
                        ? "bg-white text-slate-950 shadow-[0_0_20px_rgba(255,255,255,0.4)] scale-105"
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
                <Volume2 className="w-3.5 h-3.5 text-cyan-400" />
              ) : (
                <VolumeX className="w-3.5 h-3.5 text-slate-500" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Hero Bottom Bar */}
      <div className="relative z-20 max-w-7xl mx-auto w-full pt-8 flex flex-col md:flex-row items-center md:items-end justify-between gap-6">
        <div className="max-w-md text-center md:text-left">
          <p className="text-xs sm:text-sm font-extrabold tracking-widest text-slate-200 uppercase leading-relaxed">
            CRAFTING HIGH-IMPACT WEBSITES, WEB APPS &amp; DIGITAL PLATFORMS THAT GROW BUSINESSES
          </p>
          <div className="mt-2 flex items-center justify-center md:justify-start gap-4 text-xs font-mono text-cyan-400/90">
            <span>// Nairobi, Kenya</span>
            <span>// Founder @ LQD Creative</span>
            <span>// 0740396075</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-xs sm:text-sm font-black uppercase tracking-wider text-white transition-all duration-300 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:scale-105 neon-pink-border"
          >
            <span>CONTACT ME</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
