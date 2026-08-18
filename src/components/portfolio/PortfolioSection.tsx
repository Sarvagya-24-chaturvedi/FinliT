import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "../common/GlassCard";
import { GlowingBadge } from "../common/GlowingBadge";
import { useFinlit } from "../../context/FinlitContext";
import { PortfolioChart } from "./PortfolioChart";
import { TrendingUp, ArrowUpRight, ShieldCheck, Sprout, PieChart } from "lucide-react";

export const PortfolioSection: React.FC = () => {
  const { user } = useFinlit();

  return (
    <section id="portfolio" className="relative py-24 lg:py-36 bg-[#050505] overflow-hidden">
      <div className="absolute top-1/2 right-10 w-[600px] h-[600px] bg-[#FF3B30]/8 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl space-y-4 mb-16 text-left">
          <GlowingBadge text="✦ SIMULATED WEALTH DASHBOARD" variant="red" />
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-tight">
            Watch your spare change <br />
            <span className="text-[#FF3B30]">grow into habits.</span>
          </h2>
          <p className="text-lg text-neutral-400 font-normal leading-relaxed">
            Real-time simulated tracking of your micro-roundups, portfolio distribution, and ESG environmental impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Chart Card */}
          <div className="lg:col-span-8">
            <GlassCard className="p-8 border-[#FF3B30]/30 shadow-[0_0_35px_-10px_rgba(255,59,48,0.2)]">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 border-b border-white/[0.08]">
                <div>
                  <div className="text-xs uppercase font-mono tracking-widest text-neutral-400">
                    YOUR SIMULATED PORTFOLIO
                  </div>
                  <div className="text-4xl sm:text-5xl font-extrabold font-mono text-white tracking-tight mt-1">
                    ₹{user.simulatedBalance.toFixed(2)}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="px-3 py-1.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4" />
                    <span>+₹245.20 (+8.42%)</span>
                  </div>
                </div>
              </div>

              {/* Chart Component */}
              <div className="pt-6">
                <PortfolioChart />
              </div>
            </GlassCard>
          </div>

          {/* Allocation & Impact Column */}
          <div className="lg:col-span-4 space-y-6">
            {/* Holdings Breakdown Card */}
            <GlassCard className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-xs uppercase font-mono tracking-wider text-neutral-400 flex items-center gap-2">
                  <PieChart className="w-4 h-4 text-[#FF3B30]" />
                  <span>ASSET ALLOCATION</span>
                </div>
                <span className="text-xs font-mono text-emerald-400">Balanced</span>
              </div>

              <div className="space-y-4">
                {[
                  { name: "Green Future Bonds", share: 54, color: "bg-emerald-400", yieldStr: "6.5% Yld" },
                  { name: "Student Growth Index", share: 31, color: "bg-[#FF3B30]", yieldStr: "9.0% Yld" },
                  { name: "Balanced Multi-Asset", share: 15, color: "bg-amber-400", yieldStr: "8.0% Yld" },
                ].map((item, idx) => (
                  <div key={idx} className="space-y-1.5 font-mono text-xs">
                    <div className="flex justify-between text-neutral-300">
                      <span>{item.name}</span>
                      <span className="text-white font-bold">{item.share}%</span>
                    </div>
                    <div className="w-full bg-white/[0.08] h-1.5 rounded-full overflow-hidden">
                      <div
                        className={item.color + " h-full rounded-full"}
                        style={{ width: item.share + "%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* ESG Green Impact Badge Card */}
            <GlassCard className="p-6 bg-gradient-to-br from-[#0c1412] to-[#12161c] border-emerald-500/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Sprout className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white font-mono">ESG IMPACT SCORE</div>
                  <div className="text-[11px] text-emerald-400 font-mono">92/100 (Tier 1 Sovereign)</div>
                </div>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Your simulated micro-investments offset ~180 kg CO₂ emissions via renewable sovereign green bonds.
              </p>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};
