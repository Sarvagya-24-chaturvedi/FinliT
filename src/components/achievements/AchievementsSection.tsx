import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "../common/GlassCard";
import { GlowingBadge } from "../common/GlowingBadge";
import { useFinlit } from "../../context/FinlitContext";
import { Award, Lock, Sparkles } from "lucide-react";

export const AchievementsSection: React.FC = () => {
  const { achievements } = useFinlit();

  return (
    <section className="relative py-24 lg:py-36 bg-[#08080c] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl text-left">
            <GlowingBadge text="✦ TROPHY ROOM" variant="red" />
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-tight">
              Earn your <br />
              <span className="text-[#FF3B30]">financial badges.</span>
            </h2>
            <p className="text-neutral-400 text-base leading-relaxed">
              Every lesson completed, streak maintained, and round-up saved unlocks proof of your financial growth.
            </p>
          </div>
        </div>

        {/* Sliding Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((badge, idx) => (
            <motion.div
              key={badge.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard
                className={"p-6 h-full flex flex-col justify-between border " + (badge.isUnlocked ? "border-[#FF3B30]/40 bg-[#14141e] shadow-[0_0_20px_rgba(255,59,48,0.2)]" : "border-white/[0.06] opacity-60")}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{badge.icon}</span>
                    <span className={"px-2 py-0.5 rounded text-[10px] font-mono uppercase font-bold " + (badge.rarity === "Legendary" ? "bg-amber-500/20 text-amber-400" : badge.rarity === "Rare" ? "bg-[#FF3B30]/20 text-[#FF453A]" : "bg-white/[0.05] text-neutral-400")}>
                      {badge.rarity}
                    </span>
                  </div>

                  <h4 className="text-base font-bold font-sans text-white mb-1.5">
                    {badge.title}
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                    {badge.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono">
                  <span className="text-neutral-500">{badge.category}</span>
                  <span className={badge.isUnlocked ? "text-emerald-400 font-bold" : "text-neutral-500 flex items-center gap-1"}>
                    {badge.isUnlocked ? "Unlocked ✓" : <><Lock className="w-3 h-3" /> Locked</>}
                  </span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
