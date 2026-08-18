import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck, Play, ArrowUpRight } from "lucide-react";
import { FinancialOrbCanvas } from "./FinancialOrbCanvas";
import { FloatingHeroCards } from "./FloatingHeroCards";
import { GlowingBadge } from "../common/GlowingBadge";
import { GlassCard } from "../common/GlassCard";

export const HeroSection: React.FC = () => {
  const stats = [
    { value: "12K+", label: "Young Investors", subtitle: "Active daily learners" },
    { value: "₹4.8L", label: "Micro-Invested", subtitle: "Simulated spare change" },
    { value: "87%", label: "Course Completion", subtitle: "Gamified streak retention" },
    { value: "92/100", label: "Avg Financial Score", subtitle: "Gen Z benchmark" },
  ];

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#FF3B30]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#FF9500]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Editorial Typography & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Top pill badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <GlowingBadge text="✦ FINANCIAL LITERACY, REIMAGINED" variant="red" />
            </motion.div>

            {/* Main Editorial Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-display font-extrabold tracking-tighter text-white leading-[1.02]"
            >
              Your money <br />
              shouldn&apos;t be <br />
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#FF3B30] via-[#FF5E55] to-[#FF9500] drop-shadow-[0_0_35px_rgba(255,59,48,0.6)]">
                boring.
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-lg sm:text-xl text-neutral-400 font-normal max-w-xl leading-relaxed"
            >
              Learn finance through games. Turn spare change from daily UPI & card swipes into simulated micro-investments in green bonds.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#learn"
                className="px-8 py-4 rounded-full bg-[#FF3B30] hover:bg-[#FF453A] text-white font-bold text-sm tracking-wide flex items-center gap-3 shadow-[0_0_30px_rgba(255,59,48,0.5)] hover:shadow-[0_0_45px_rgba(255,59,48,0.7)] transition-all group"
              >
                <span>Start Learning</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#roundups"
                className="px-7 py-4 rounded-full bg-[#14141c]/80 hover:bg-[#1a1a24] text-neutral-200 hover:text-white font-medium text-sm border border-white/[0.1] hover:border-white/20 transition-all flex items-center gap-2 backdrop-blur-xl"
              >
                <Play className="w-3.5 h-3.5 text-[#FF3B30] fill-[#FF3B30]" />
                <span>Explore How It Works</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Generative 3D Financial Orb & Floating Widgets */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-[500px]">
              {/* Financial Orb 3D canvas */}
              <FinancialOrbCanvas />
              {/* Floating Realtime Cards */}
              <FloatingHeroCards />
            </div>
          </div>
        </div>

        {/* Floating Demo Statistics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 pt-8 border-t border-white/[0.08]"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((item, idx) => (
              <GlassCard key={idx} className="p-5 text-left group">
                <div className="text-3xl sm:text-4xl font-bold font-sans tracking-tight text-white group-hover:text-[#FF453A] transition-colors">
                  {item.value}
                </div>
                <div className="text-xs uppercase font-mono tracking-wider text-neutral-300 mt-1">
                  {item.label}
                </div>
                <div className="text-[11px] text-neutral-500 font-mono mt-0.5">
                  {item.subtitle}
                </div>
              </GlassCard>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
