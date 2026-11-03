"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Volume2, VolumeX, Eye, Flame } from "lucide-react";
import { emotions, profileData, EmotionState } from "@/lib/data";

export function HeroSection() {
  const [currentEmotionIndex, setCurrentEmotionIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [targetRotate, setTargetRotate] = useState({ x: 0, y: 0 });
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [bubbleKey, setBubbleKey] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  const currentEmotion = emotions[currentEmotionIndex];

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
        x: -normY * 10,
        y: normX * 14,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Cycle emotion on avatar click
  const cycleEmotion = () => {
    setCurrentEmotionIndex((prev) => (prev + 1) % emotions.length);
    setBubbleKey((prev) => prev + 1);
    playEmotionTone();
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
        {/* Soft radial glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-cyan-600/15 via-indigo-600/10 to-pink-600/15 rounded-full blur-[120px]" />
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />

        {/* Subtle grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Floating 3D Stickers from the video */}
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

      {/* Top Banner / Tag Pill */}
      <div className="relative z-20 mx-auto text-center mt-2">
        <div className="inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/5 backdrop-blur-xl px-4 py-1.5 text-xs font-semibold text-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Interactive 3D Portfolio // Live Emotional Engine</span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
        </div>
      </div>

      {/* Centerpiece: Giant Typography + 3D Male Avatar */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center my-auto w-full max-w-6xl mx-auto">
        {/* Giant Bold Background Typography - exactly as in video */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <h1 className="text-[13vw] sm:text-[11vw] md:text-[9.5vw] font-black tracking-[-0.04em] text-white/[0.08] uppercase text-center leading-none whitespace-nowrap">
            HI, I&apos;M REUBEN
          </h1>
        </div>

        {/* Dynamic Interactive Avatar Card with 3D perspective tracking */}
        <div className="relative flex flex-col items-center justify-center pt-4">
          {/* Comic speech bubble with dynamic thought */}
          <div
            key={bubbleKey}
            className="mb-4 relative transition-all duration-300 animate-in fade-in zoom-in-90"
            style={{
              transform: `translate3d(${mousePos.x * 6}px, ${mousePos.y * 4}px, 0)`,
            }}
          >
            <div className="relative bg-slate-900/90 border border-cyan-400/30 rounded-2xl px-5 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-xl max-w-xs sm:max-w-md text-center">
              <p className="text-xs sm:text-sm font-semibold text-white">
                <span className="mr-1.5">{currentEmotion.emoji}</span>
                &ldquo;{currentEmotion.speech}&rdquo;
              </p>
              <p className="text-[10px] text-cyan-300/80 font-mono mt-0.5">
                {currentEmotion.subtitle}
              </p>

              {/* Speech bubble tail pointer */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-slate-900 border-r border-b border-cyan-400/30 rotate-45" />
            </div>
          </div>

          {/* Avatar Container with Real-time 3D Mouse Parallax */}
          <div
            onClick={cycleEmotion}
            className="group relative cursor-pointer select-none"
            style={{
              perspective: "1200px",
            }}
            title="Click to cycle emotions!"
          >
            {/* Ambient Avatar Glow */}
            <div
              className="absolute inset-0 -m-6 rounded-full blur-2xl opacity-40 transition-colors duration-500 pointer-events-none"
              style={{
                background: `radial-gradient(circle, ${currentEmotion.accentColor} 0%, transparent 70%)`,
              }}
            />

            {/* Avatar 3D Rotating Frame */}
            <div
              className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 transition-transform duration-150 ease-out"
              style={{
                transform: `rotateX(${targetRotate.x}deg) rotateY(${targetRotate.y}deg) scale(${
                  1 + Math.abs(mousePos.x) * 0.02
                })`,
                transformStyle: "preserve-3d",
              }}
            >
              <Image
                src={currentEmotion.image}
                alt={`Reuben Kimani 3D Male Avatar - ${currentEmotion.label}`}
                fill
                priority
                className="object-contain drop-shadow-[0_20px_45px_rgba(0,0,0,0.85)] filter contrast-[1.03] rounded-3xl"
              />

              {/* Gaze tracking cursor reflection highlight */}
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none opacity-20 bg-gradient-to-tr from-cyan-400/0 via-white/10 to-transparent transition-opacity"
                style={{
                  transform: `translate3d(${mousePos.x * 10}px, ${mousePos.y * 10}px, 20px)`,
                }}
              />
            </div>

            {/* Interactive hint badge */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-slate-950/80 border border-white/10 backdrop-blur-md rounded-full px-3 py-1 text-[11px] font-mono text-slate-300 opacity-90 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 shadow-lg whitespace-nowrap">
              <Eye className="w-3 h-3 text-cyan-400 animate-pulse" />
              <span>Click avatar to switch emotion</span>
            </div>
          </div>

          {/* Emotion Controls Bar - Pick any emotion */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 max-w-xl">
            {emotions.map((emotion, idx) => {
              const active = idx === currentEmotionIndex;
              return (
                <button
                  key={emotion.id}
                  onClick={() => selectEmotion(idx)}
                  className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 ${
                    active
                      ? "bg-white text-slate-950 shadow-[0_0_20px_rgba(255,255,255,0.4)] scale-105"
                      : "bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:border-white/20"
                  }`}
                >
                  <span>{emotion.emoji}</span>
                  <span>{emotion.label}</span>
                </button>
              );
            })}

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

      {/* Hero Bottom Bar - Matching video layout exactly */}
      <div className="relative z-20 max-w-7xl mx-auto w-full pt-8 flex flex-col md:flex-row items-center md:items-end justify-between gap-6">
        {/* Bottom Left: Tagline in bold uppercase */}
        <div className="max-w-md text-center md:text-left">
          <p className="text-xs sm:text-sm font-extrabold tracking-widest text-slate-200 uppercase leading-relaxed">
            CRAFTING HIGH-IMPACT DIGITAL EXPERIENCES, AI AUTOMATION &amp; VISIONARY SOFTWARE ARCHITECTURES
          </p>
          <div className="mt-2 flex items-center justify-center md:justify-start gap-4 text-xs font-mono text-cyan-400/90">
            <span>// Nairobi, Kenya</span>
            <span>// Founder @ LQD Creative</span>
          </div>
        </div>

        {/* Bottom Right: Pill Button with glowing neon pink/cyan border */}
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
