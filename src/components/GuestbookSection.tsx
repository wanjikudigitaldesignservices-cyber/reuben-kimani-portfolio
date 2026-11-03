"use client";

import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { MessageSquarePlus, Send, Sparkles, CheckCircle2 } from "lucide-react";
import { supabase } from "@/lib/supabase";

interface GuestbookEntry {
  id: string;
  name: string;
  avatar_emoji: string;
  message: string;
  created_at: string;
}

const fallbackEntries: GuestbookEntry[] = [
  {
    id: "1",
    name: "Brian Mwangi",
    avatar_emoji: "⚡",
    message: "Top-tier UI and architecture. Reuben built our hotel booking system flawlessly.",
    created_at: "2026-11-01T14:30:00.000Z",
  },
  {
    id: "2",
    name: "Faith Wanjiku",
    avatar_emoji: "✨",
    message: "The AI automations saved our sales team over 20 hours every week. Pure magic!",
    created_at: "2026-11-02T09:15:00.000Z",
  },
  {
    id: "3",
    name: "Kelvin Omondi",
    avatar_emoji: "🔥",
    message: "This portfolio is insanely good. The avatar emotions are next level!",
    created_at: "2026-11-03T11:45:00.000Z",
  },
];

const emojiOptions = ["🚀", "🔥", "⚡", "✨", "💡", "🎯"];

export function GuestbookSection() {
  const [entries, setEntries] = useState<GuestbookEntry[]>(fallbackEntries);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState("🚀");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    async function loadGuestbook() {
      try {
        const { data, error } = await supabase
          .from("portfolio_guestbook")
          .select("id, name, avatar_emoji, message, created_at")
          .order("created_at", { ascending: false })
          .limit(10);

        if (data && data.length > 0 && !error) {
          setEntries(data);
        }
      } catch (err) {
        console.warn("Could not load guestbook from Supabase:", err);
      }
    }

    loadGuestbook();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);
    setSuccess(false);

    const newEntry: GuestbookEntry = {
      id: (typeof crypto !== "undefined" && crypto.randomUUID) ? crypto.randomUUID() : String(Date.now()),
      name: name.trim(),
      avatar_emoji: selectedEmoji,
      message: message.trim(),
      created_at: new Date().toISOString(),
    };

    // Optimistic UI update
    setEntries((prev) => [newEntry, ...prev]);

    // Confetti celebration
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.8 },
      colors: ["#38bdf8", "#34d399", "#a855f7"],
    });

    try {
      await supabase.from("portfolio_guestbook").insert([
        {
          name: newEntry.name,
          avatar_emoji: newEntry.avatar_emoji,
          message: newEntry.message,
        },
      ]);
      setSuccess(true);
      setName("");
      setMessage("");
    } catch (err) {
      console.warn("Failed to insert into Supabase:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-20 px-4 sm:px-8 bg-[#07090e] border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-xs font-mono font-semibold text-purple-400 mb-3">
            <MessageSquarePlus className="w-3.5 h-3.5" />
            <span>LIVE VISITOR GUESTBOOK</span>
          </div>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
            COMMUNITY &amp; FOUNDER KUDOS
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-400">
            Leave a quick note, review, or greeting. Live entries sync instantly to Supabase.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sign Guestbook Form */}
          <div className="lg:col-span-5 rounded-3xl border border-white/12 bg-slate-950/70 p-6 sm:p-7 backdrop-blur-xl">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Sign the Guestbook
            </h4>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Emoji Selector */}
              <div>
                <label className="text-[11px] font-mono text-slate-400 block mb-1.5">
                  Choose Your Badge:
                </label>
                <div className="flex gap-2">
                  {emojiOptions.map((emoji) => (
                    <button
                      type="button"
                      key={emoji}
                      onClick={() => setSelectedEmoji(emoji)}
                      className={`w-9 h-9 rounded-xl flex items-center justify-center text-lg transition-transform ${
                        selectedEmoji === emoji
                          ? "bg-white/20 border-2 border-cyan-400 scale-110 shadow-sm"
                          : "bg-white/5 border border-white/10 hover:bg-white/10"
                      }`}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-[11px] font-mono text-slate-400 block mb-1">
                  Your Name / Handle:
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Wanjala"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl bg-white/5 border border-white/12 px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono text-slate-400 block mb-1">
                  Your Message:
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Love the interactive avatar! Let's connect on a project..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-xl bg-white/5 border border-white/12 px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 py-3 text-xs sm:text-sm font-bold text-slate-950 hover:brightness-110 transition shadow-[0_0_15px_rgba(56,189,248,0.3)] disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? "Syncing to Supabase..." : "Sign Guestbook"}</span>
              </button>

              {success && (
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 rounded-xl p-2.5">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>Kudos recorded in Supabase! Asante sana!</span>
                </div>
              )}
            </form>
          </div>

          {/* Guestbook List */}
          <div className="lg:col-span-7 space-y-3.5 max-h-[460px] overflow-y-auto pr-2">
            {entries.map((entry) => (
              <div
                key={entry.id}
                className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 sm:p-5 backdrop-blur-md transition-all hover:border-white/20"
              >
                <div className="flex items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl">{entry.avatar_emoji || "🚀"}</span>
                    <span className="text-sm font-bold text-white">{entry.name}</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">
                    {new Date(entry.created_at).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-8">
                  &ldquo;{entry.message}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
