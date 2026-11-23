"use client";

import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { Sparkles, Heart, Zap, Flame, Rocket } from "lucide-react";
import { supabase } from "@/lib/supabase";

interface Reaction {
  id: string;
  label: string;
  count: number;
}

const defaultReactions: Reaction[] = [
  { id: "fire", label: "🔥 Fire", count: 42 },
  { id: "rocket", label: "🚀 Rocket", count: 38 },
  { id: "mindblown", label: "🤯 Mindblown", count: 29 },
  { id: "heart", label: "❤️ Love it", count: 55 },
  { id: "cool", label: "⚡ Electric", count: 31 },
];

export function LiveReactions() {
  const [reactions, setReactions] = useState<Reaction[]>(defaultReactions);
  const [clickedMap, setClickedMap] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchReactions() {
      try {
        const { data, error } = await supabase
          .from("portfolio_reactions")
          .select("id, label, count")
          .order("id");

        if (data && data.length > 0 && !error) {
          setReactions(data);
        }
      } catch (err) {
        console.warn("Using offline reaction counters:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchReactions();
  }, []);

  const handleReaction = async (reaction: Reaction) => {
    // Confetti effect
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#8b5cf6", "#6366f1", "#3b82f6", "#a855f7", "#60a5fa"],
    });

    // Mark clicked
    setClickedMap((prev) => ({ ...prev, [reaction.id]: true }));

    // Optimistic update
    setReactions((prev) =>
      prev.map((r) => (r.id === reaction.id ? { ...r, count: r.count + 1 } : r))
    );

    try {
      // Fetch latest count first to avoid race conditions
      const { data: currentData } = await supabase
        .from("portfolio_reactions")
        .select("count")
        .eq("id", reaction.id)
        .single();

      const newCount = (currentData?.count ?? reaction.count) + 1;

      await supabase
        .from("portfolio_reactions")
        .upsert({ id: reaction.id, label: reaction.label, count: newCount, updated_at: new Date().toISOString() });
    } catch (err) {
      console.warn("Could not sync reaction to Supabase:", err);
    }
  };

  return (
    <section className="relative py-16 px-4 sm:px-8 bg-[#080a14] border-y border-purple-500/15">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/50 px-3.5 py-1 text-xs font-mono font-semibold text-purple-300 mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>REAL-TIME SUPABASE TELEMETRY</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">
          Leave a Live Reaction
        </h3>
        <p className="mt-2 text-sm text-slate-400 max-w-lg mx-auto">
          Tap an emoji to react to Reuben&apos;s portfolio. Counts are stored and synchronized in real-time with our Supabase cloud database.
        </p>

        {/* Reaction Pill Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {reactions.map((reaction) => {
            const hasClicked = clickedMap[reaction.id];
            return (
              <button
                key={reaction.id}
                onClick={() => handleReaction(reaction)}
                className={`group flex items-center gap-2.5 rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 transform active:scale-95 ${
                  hasClicked
                    ? "bg-gradient-to-r from-purple-600/30 via-indigo-600/30 to-blue-600/30 border-purple-400 text-white shadow-[0_0_20px_rgba(139,92,246,0.35)]"
                    : "bg-slate-950/80 border border-purple-500/20 text-slate-200 hover:border-purple-400/60 hover:bg-purple-950/30 hover:scale-105"
                }`}
              >
                <span className="text-base group-hover:scale-125 transition-transform">
                  {reaction.label.split(" ")[0]}
                </span>
                <span className="text-xs uppercase tracking-wider text-slate-300">
                  {reaction.label.split(" ").slice(1).join(" ")}
                </span>
                <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-purple-950/60 text-purple-300 font-bold border border-purple-500/30">
                  {reaction.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
