import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "../common/GlassCard";
import { GlowingBadge } from "../common/GlowingBadge";
import { useFinlit } from "../../context/FinlitContext";
import { Sprout, TrendingUp, ShieldCheck, ArrowUpRight, Zap, Info } from "lucide-react";
import { QuickInvestModal } from "./QuickInvestModal";

export const InvestmentSection: React.FC = () => {
  const { portfolios, activeInvestModal, openInvestModal, closeInvestModal } = useFinlit();

  return (
    <section id="invest" className="relative py-24 lg:py-36 bg-[#08080c] border-t border-white/[0.06] overflow-hidden">
      <div className="absolute top-1/3 left-10 w-[550px] h-[550px] bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl text-left">
            <GlowingBadge text="✦ MICRO-PORTFOLIOS" variant="green" />
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-tight">
              Start small. <br />
              <span className="text-emerald-400">Think long term.</span>
            </h2>
            <p className="text-neutral-400 text-base leading-relaxed">
              Explore curated, ESG-aligned micro-investment baskets. Start with as little as ₹10 spare change from your daily purchases.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono">
            <Info className="w-4 h-4 shrink-0 text-amber-400" />
            <span>⚠️ SIMULATED DEMO ENVIRONMENT — No real money involved</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolios.map((portfolio, idx) => (
            <motion.div
              key={portfolio.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <GlassCard className="p-8 h-full flex flex-col justify-between group hover:bg-[#131718] border-white/[0.08] hover:border-emerald-500/40">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className={"px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase border " + (portfolio.id === "green-future" ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/30" : portfolio.id === "student-growth" ? "bg-[#FF3B30]/15 text-[#FF453A] border-[#FF3B30]/30" : "bg-amber-500/15 text-amber-400 border-amber-500/30")}>
                      {portfolio.riskLevel}
                    </span>
                    <span className="text-xs font-mono text-neutral-400">
                      ESG {portfolio.esgScore}/100
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold font-sans text-white mb-1 group-hover:text-emerald-400 transition-colors">
                    {portfolio.name}
                  </h3>
                  <div className="text-xs font-mono text-neutral-400 mb-4">{portfolio.tagline}</div>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                    {portfolio.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-[#0d0f12] border border-white/[0.06] mb-6 font-mono text-xs">
                    <div>
                      <div className="text-neutral-500 text-[10px]">EXPECTED RETURN</div>
                      <div className="text-lg font-bold text-emerald-400">{portfolio.expectedReturn}</div>
                    </div>
                    <div>
                      <div className="text-neutral-500 text-[10px]">1-YR SIMULATED</div>
                      <div className="text-lg font-bold text-white">{portfolio.demoMetrics.oneYearReturn}</div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                      TOP ALLOCATION
                    </div>
                    {portfolio.allocation.map((alloc, aIdx) => (
                      <div key={aIdx} className="space-y-1 font-mono text-xs">
                        <div className="flex justify-between text-neutral-300 text-[11px]">
                          <span>{alloc.name}</span>
                          <span className="text-white font-bold">{alloc.percentage}%</span>
                        </div>
                        <div className="w-full bg-white/[0.06] h-1 rounded-full overflow-hidden">
                          <div
                            className="bg-emerald-400 h-full rounded-full"
                            style={{ width: alloc.percentage + "%" }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.08]">
                  <button
                    onClick={() => openInvestModal(portfolio)}
                    className="w-full py-3.5 rounded-xl bg-white/[0.06] group-hover:bg-[#FF3B30] text-neutral-200 group-hover:text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(255,59,48,0)] group-hover:shadow-[0_0_25px_rgba(255,59,48,0.5)]"
                  >
                    <span>Invest ₹10 (Simulated)</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      {activeInvestModal && (
        <QuickInvestModal portfolio={activeInvestModal} onClose={closeInvestModal} />
      )}
    </section>
  );
};
