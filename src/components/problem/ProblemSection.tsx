import React, { useState } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "../common/GlassCard";
import { GlowingBadge } from "../common/GlowingBadge";
import { HelpCircle, AlertTriangle, Frown, Sparkles, ArrowRight } from "lucide-react";

export const ProblemSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const problemCards = [
    {
      num: "01",
      title: "CONFUSED",
      quote: "\"I do not know where my salary or pocket money goes every month.\"",
      stat: "74% of Gen Z struggle to track micro-expenses",
      solution: "FINLIT automatically tracks and groups every swipe with real-time leak detection.",
      icon: <HelpCircle className="w-5 h-5 text-[#FF3B30]" />
    },
    {
      num: "02",
      title: "INTIMIDATED",
      quote: "\"Investing feels like it is only for rich corporate professionals with lakhs to spare.\"",
      stat: "68% never invest before age 25 due to fear",
      solution: "Start with just ₹10. Micro-roundups turn everyday tea and coffee into compounding wealth.",
      icon: <AlertTriangle className="w-5 h-5 text-[#FF9500]" />
    },
    {
      num: "03",
      title: "UNENGAGED",
      quote: "\"Traditional finance textbooks and PDFs are painfully boring and abstract.\"",
      stat: "85% drop out of traditional finance courses",
      solution: "Duolingo-style 3-minute interactive quests, streaks, quizzes, and instant XP rewards.",
      icon: <Frown className="w-5 h-5 text-[#FF6B6B]" />
    },
  ];

  return (
    <section className="relative py-24 lg:py-36 bg-[#050505] overflow-hidden">
      {/* Background subtle light */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#FF3B30]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Heading */}
        <div className="max-w-3xl space-y-4 mb-16 text-left">
          <GlowingBadge text="✦ THE REALITY GAP" variant="red" />
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-tight">
            Nobody taught us <br />
            <span className="text-[#FF3B30] drop-shadow-[0_0_25px_rgba(255,59,48,0.5)]">
              how money works.
            </span>
          </h2>
          <p className="text-lg text-neutral-400 font-normal leading-relaxed">
            Budgeting. Credit scores. Inflation. Compound yield. Most young adults encounter these critical concepts only after making expensive, stressful mistakes.
          </p>
        </div>

        {/* 3 Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problemCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              onMouseEnter={() => setActiveCard(idx)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <GlassCard
                className={`p-8 h-full flex flex-col justify-between cursor-pointer border-t-2 ${
                  activeCard === idx
                    ? "border-t-[#FF3B30] border-[#FF3B30]/40 shadow-[0_0_35px_-5px_rgba(255,59,48,0.3)] bg-[#14141c]"
                    : "border-t-white/20"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-mono font-black text-neutral-600">
                      {card.num}
                    </span>
                    <div className="p-2.5 rounded-full bg-white/[0.05] border border-white/[0.08]">
                      {card.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold font-mono tracking-wider text-white mb-4">
                    {card.title}
                  </h3>

                  <blockquote className="text-sm font-medium text-neutral-300 italic border-l-2 border-[#FF3B30]/40 pl-3.5 mb-6">
                    {card.quote}
                  </blockquote>
                </div>

                <div className="pt-6 border-t border-white/[0.08] space-y-3">
                  <div className="text-xs font-mono text-neutral-400">
                    <span className="text-[#FF453A] font-semibold">{card.stat}</span>
                  </div>

                  <div className="text-xs text-neutral-300 flex items-start gap-2 bg-[#FF3B30]/10 p-3 rounded-xl border border-[#FF3B30]/20">
                    <Sparkles className="w-4 h-4 text-[#FF3B30] shrink-0 mt-0.5" />
                    <span>{card.solution}</span>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
