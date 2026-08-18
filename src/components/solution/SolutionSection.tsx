import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "../common/GlassCard";
import { GlowingBadge } from "../common/GlowingBadge";
import { BookOpen, Gamepad2, TrendingUp, CheckCircle, ArrowRight, Flame } from "lucide-react";

export const SolutionSection: React.FC = () => {
  return (
    <section className="relative py-24 lg:py-36 bg-[#08080b] border-y border-white/[0.06] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-[550px] h-[550px] bg-[#FF3B30]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-20 text-left">
          <GlowingBadge text="✦ THE ECOSYSTEM" variant="red" />
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white">
            Learn. <br />
            <span className="text-[#FF3B30]">Play.</span> <br />
            Invest.
          </h2>
          <p className="text-lg text-neutral-400 font-normal leading-relaxed">
            FINLIT turns everyday financial decisions into an interactive, high-retention learning experience.
          </p>
        </div>

        {/* 3 Large Visual Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1: LEARN */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="p-8 h-full flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-[#FF3B30]/15 border border-[#FF3B30]/30 flex items-center justify-center text-[#FF453A]">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
                    STEP 01
                  </span>
                </div>

                <h3 className="text-2xl font-bold font-sans text-white mb-2 group-hover:text-[#FF453A] transition-colors">
                  LEARN
                </h3>
                <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
                  Bite-sized, 3-minute visual lessons that actually make sense. Master inflation, compound growth, and stocks.
                </p>

                {/* Mock Visual Widget */}
                <div className="p-4 rounded-xl bg-[#0e0e14] border border-white/[0.08] space-y-3 font-mono text-xs">
                  <div className="flex justify-between items-center text-neutral-300">
                    <span>Lesson: Inflation 101</span>
                    <span className="text-emerald-400">+20 XP</span>
                  </div>
                  <div className="w-full bg-white/[0.08] h-2 rounded-full overflow-hidden">
                    <div className="bg-[#FF3B30] h-full w-[80%] rounded-full" />
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-neutral-400">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>80% Complete • 1 min remaining</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <a
                  href="#learn"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#FF453A] hover:text-white transition-colors"
                >
                  <span>Explore Lessons</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </GlassCard>
          </motion.div>

          {/* Card 2: PLAY */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <GlassCard className="p-8 h-full flex flex-col justify-between group border-[#FF9500]/20">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Gamepad2 className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
                    STEP 02
                  </span>
                </div>

                <h3 className="text-2xl font-bold font-sans text-white mb-2 group-hover:text-amber-400 transition-colors">
                  PLAY
                </h3>
                <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
                  Games, weekly challenges, and streak bonuses keep you addicted to smart financial habits.
                </p>

                {/* Mock Visual Widget */}
                <div className="p-4 rounded-xl bg-[#0e0e14] border border-white/[0.08] space-y-3 font-mono text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-200">Quest: Money Map</span>
                    <span className="flex items-center gap-1 text-amber-400 font-bold">
                      <Flame className="w-3.5 h-3.5 fill-amber-400" />
                      7d Streak
                    </span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300 text-[11px]">
                    🎯 Balance your ₹35K monthly budget without taking emergency debt!
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <a
                  href="#games"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400 hover:text-white transition-colors"
                >
                  <span>Play Mini-Games</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </GlassCard>
          </motion.div>

          {/* Card 3: INVEST */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <GlassCard className="p-8 h-full flex flex-col justify-between group border-emerald-500/20">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
                    STEP 03
                  </span>
                </div>

                <h3 className="text-2xl font-bold font-sans text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  INVEST
                </h3>
                <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
                  Turn spare change into simulated micro-investments. Auto-roundup daily purchases into clean energy bonds.
                </p>

                {/* Mock Visual Widget */}
                <div className="p-4 rounded-xl bg-[#0e0e14] border border-white/[0.08] space-y-2.5 font-mono text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-200">🌱 Green Future Bond</span>
                    <span className="text-emerald-400 font-bold">+8.42%</span>
                  </div>
                  <div className="text-xl font-bold text-white">₹2,845.20</div>
                  <div className="text-[10px] text-neutral-400">
                    54% Allocation • ESG Score: 92/100
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <a
                  href="#invest"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 hover:text-white transition-colors"
                >
                  <span>Explore Portfolios</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
