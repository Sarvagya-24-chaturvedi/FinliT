import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "../common/GlassCard";
import { GlowingBadge } from "../common/GlowingBadge";
import { useFinlit } from "../../context/FinlitContext";
import { ShieldCheck, ArrowRight, Zap, Target } from "lucide-react";

export const HealthScoreSection: React.FC = () => {
  const { user, openLessonModal, lessons } = useFinlit();

  const metrics = [
    { label: "Saving Habit", score: 82, color: "bg-emerald-400" },
    { label: "Budgeting Discipline", score: 75, color: "bg-[#FF3B30]" },
    { label: "Investing Basics", score: 64, color: "bg-amber-400" },
    { label: "Financial Safety & Anti-Scam", score: 91, color: "bg-emerald-400" },
    { label: "Economic Knowledge", score: 78, color: "bg-cyan-400" },
  ];

  const handleNextChallenge = () => {
    if (lessons.length > 2) {
      openLessonModal(lessons[2]);
    }
  };

  return (
    <section id="health-score" className="relative py-24 lg:py-36 bg-[#08080c] border-t border-white/[0.06] overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-[#FF3B30]/8 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl space-y-4 mb-16 text-left">
          <GlowingBadge text="✦ FINANCIAL DIAGNOSTICS" variant="red" />
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-tight">
            Your financial health, <br />
            <span className="text-[#FF3B30]">quantified.</span>
          </h2>
          <p className="text-lg text-neutral-400 font-normal leading-relaxed">
            FINLIT analyzes your budgeting, round-up frequency, anti-scam vigilance, and quiz accuracy into a single actionable score.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Circular Dial */}
          <div className="lg:col-span-5 flex justify-center">
            <GlassCard className="p-8 w-full max-w-sm text-center relative flex flex-col items-center border-[#FF3B30]/30 shadow-[0_0_35px_-5px_rgba(255,59,48,0.25)]">
              <div className="relative w-48 h-48 flex items-center justify-center my-4">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  {/* Track */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#1c1c24"
                    strokeWidth="8"
                  />
                  {/* Progress */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#FF3B30"
                    strokeWidth="8"
                    strokeDasharray={251.2}
                    strokeDashoffset={251.2 * (1 - user.financialScore / 100)}
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-out drop-shadow-[0_0_12px_rgba(255,59,48,0.7)]"
                  />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center font-mono">
                  <span className="text-5xl font-black text-white font-sans">{user.financialScore}</span>
                  <span className="text-xs text-neutral-400 uppercase tracking-widest mt-1">/100 SCORE</span>
                </div>
              </div>

              <div className="text-xs font-mono font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                EXCELLENT TRAJECTORY
              </div>
            </GlassCard>
          </div>

          {/* Right: Breakdown & Direct Challenge CTA */}
          <div className="lg:col-span-7 space-y-6">
            <GlassCard className="p-8 space-y-5">
              <div className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                SCORE BREAKDOWN
              </div>

              <div className="space-y-4">
                {metrics.map((item, idx) => (
                  <div key={idx} className="space-y-1.5 font-mono text-xs">
                    <div className="flex justify-between text-neutral-300">
                      <span>{item.label}</span>
                      <span className="text-white font-bold">{item.score}/100</span>
                    </div>
                    <div className="w-full bg-white/[0.08] h-2 rounded-full overflow-hidden">
                      <div
                        className={item.color + " h-full rounded-full transition-all duration-700"}
                        style={{ width: item.score + "%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Next Challenge Link */}
              <div className="pt-6 border-t border-white/[0.08]">
                <div className="p-4 rounded-2xl bg-gradient-to-r from-[#161622] to-[#1c141a] border border-[#FF3B30]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="text-[11px] font-mono text-neutral-400 uppercase">
                      RECOMMENDED NEXT CHALLENGE
                    </div>
                    <div className="text-sm font-bold text-white font-sans">
                      Understanding Investment Risk
                    </div>
                    <div className="text-xs font-mono text-[#FF453A]">+30 XP • +3 Health Score</div>
                  </div>

                  <button
                    onClick={handleNextChallenge}
                    className="px-5 py-2.5 rounded-xl bg-[#FF3B30] hover:bg-[#FF453A] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(255,59,48,0.4)] transition-all shrink-0"
                  >
                    <span>Take Challenge</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};
