import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Sparkles, Flame, Sprout, ArrowUpRight } from "lucide-react";
import { GlassCard } from "../common/GlassCard";
import { useFinlit } from "../../context/FinlitContext";

export const FloatingHeroCards: React.FC = () => {
  const { user } = useFinlit();

  return (
    <>
      {/* Floating Card 1: Live Round-up Stream (Top Left) */}
      <motion.div
        initial={{ opacity: 0, x: -30, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-6 left-0 sm:left-4 z-20"
      >
        <GlassCard className="p-3.5 sm:p-4 w-[210px] sm:w-[230px] border-[#FF3B30]/30 shadow-[0_0_25px_-5px_rgba(255,59,48,0.3)] animate-float-slow">
          <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 mb-1.5">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B30] animate-ping" />
              ROUND-UP
            </span>
            <span className="text-emerald-400 font-semibold">+12.4%</span>
          </div>
          <div className="text-xl sm:text-2xl font-bold font-mono text-white tracking-tight">
            ₹{user.monthlyRoundups.toFixed(2)}
          </div>
          <div className="mt-1.5 flex items-center justify-between text-[10px] text-neutral-400">
            <span>Spare change invested</span>
            <span className="text-[#FF453A] font-semibold">Auto-saved</span>
          </div>
        </GlassCard>
      </motion.div>

      {/* Floating Card 2: XP & Streak Level (Bottom Left) */}
      <motion.div
        initial={{ opacity: 0, x: -30, y: 30 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute bottom-8 left-2 sm:left-8 z-20"
      >
        <GlassCard className="p-3.5 sm:p-4 w-[200px] sm:w-[220px] animate-float-delayed">
          <div className="flex items-center justify-between text-[11px] font-mono mb-1">
            <span className="text-neutral-400">FINANCIAL XP</span>
            <span className="flex items-center gap-1 text-amber-400 font-bold">
              <Flame className="w-3 h-3 fill-amber-400" />
              {user.streakDays}D STREAK
            </span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-xl sm:text-2xl font-bold font-mono text-white">
              {user.xp.toLocaleString()}
            </span>
            <span className="text-[11px] text-[#FF453A] font-mono font-bold">L0{user.level}</span>
          </div>
          <div className="mt-2 w-full bg-white/[0.08] h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-[#FF3B30] to-[#FF9500] h-full rounded-full transition-all duration-500"
              style={{ width: `${(user.xp % 350) / 3.5}%` }}
            />
          </div>
        </GlassCard>
      </motion.div>

      {/* Floating Card 3: Green Portfolio Yield (Top Right) */}
      <motion.div
        initial={{ opacity: 0, x: 30, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute top-12 right-0 sm:right-6 z-20"
      >
        <GlassCard className="p-3.5 sm:p-4 w-[210px] sm:w-[230px] border-emerald-500/30 animate-float-delayed">
          <div className="flex items-center justify-between text-[11px] font-mono mb-1.5">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <Sprout className="w-3.5 h-3.5" />
              GREEN BONDS
            </span>
            <span className="text-emerald-400 font-semibold">+8.42%</span>
          </div>
          <div className="text-xl sm:text-2xl font-bold font-mono text-white">
            ₹{user.simulatedBalance.toFixed(2)}
          </div>
          <div className="mt-1 flex items-center justify-between text-[10px] text-neutral-400 font-mono">
            <span>ESG Score: 92/100</span>
            <span className="text-emerald-400">Zero Carbon</span>
          </div>
        </GlassCard>
      </motion.div>
    </>
  );
};
