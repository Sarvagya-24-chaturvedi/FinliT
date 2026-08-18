import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "../common/GlassCard";
import { GlowingBadge } from "../common/GlowingBadge";
import { useFinlit } from "../../context/FinlitContext";
import { Coffee, Train, Utensils, ShoppingBag, ArrowDown, Sparkles, Sprout, ArrowRight, Calculator } from "lucide-react";

export const RoundupsSection: React.FC = () => {
  const { transactions, triggerRoundup, user } = useFinlit();
  const [selectedTx, setSelectedTx] = useState(transactions[0]);
  const [customExpense, setCustomExpense] = useState("187");
  const [animatingId, setAnimatingId] = useState<string | null>(null);

  const parsedExpense = parseFloat(customExpense) || 0;
  const customRounded = Math.ceil(parsedExpense / 10) * 10 || parsedExpense + 10;
  const customRoundup = +(customRounded - parsedExpense).toFixed(2);
  const projectedYearly = Math.round(customRoundup * 30 * 12 * 1.08);

  const handleRoundupClick = (txId: string) => {
    setAnimatingId(txId);
    triggerRoundup(txId);
    setTimeout(() => setAnimatingId(null), 1200);
  };

  return (
    <section id="roundups" className="relative py-24 lg:py-36 bg-[#050505] overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#FF3B30]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16 text-left">
          <GlowingBadge text="✦ MICRO-INVESTING ENGINE" variant="red" />
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-tight">
            Every purchase <br />
            can become a <span className="text-[#FF3B30]">tiny investment.</span>
          </h2>
          <p className="text-lg text-neutral-400 font-normal leading-relaxed">
            Whenever you buy a coffee, order food, or pay for the metro, FINLIT rounds up the transaction to the nearest ₹10 and automatically routes the spare change into a compounding green bond portfolio.
          </p>
        </div>

        {/* Interactive Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Transaction Stream */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-neutral-400 px-2">
              <span>RECENT TRANSACTIONS</span>
              <span>CLICK TO SIMULATE ROUND-UP</span>
            </div>

            <div className="space-y-3">
              {transactions.slice(0, 4).map((tx) => {
                const isSelected = selectedTx.id === tx.id;
                const isCurrentAnimating = animatingId === tx.id;

                return (
                  <motion.div
                    key={tx.id}
                    whileHover={{ x: 4 }}
                    onClick={() => setSelectedTx(tx)}
                    className="cursor-pointer"
                  >
                    <GlassCard
                      className={`p-4 transition-all flex items-center justify-between border ${
                        isSelected
                          ? "border-[#FF3B30]/60 bg-[#15151e] shadow-[0_0_20px_rgba(255,59,48,0.2)]"
                          : "border-white/[0.08] hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="w-10 h-10 rounded-xl bg-[#1c1c24] border border-white/[0.08] flex items-center justify-center text-[#FF3B30]">
                          {tx.category === "Food & Drink" ? (
                            <Coffee className="w-5 h-5" />
                          ) : tx.category === "Transit" ? (
                            <Train className="w-5 h-5" />
                          ) : (
                            <ShoppingBag className="w-5 h-5" />
                          )}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white">{tx.merchant}</div>
                          <div className="text-xs text-neutral-500 font-mono">{tx.timestamp}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="text-right font-mono">
                          <div className="text-sm text-neutral-300">₹{tx.originalAmount.toFixed(2)}</div>
                          <div className="text-xs text-[#FF453A] font-semibold">
                            +₹{tx.roundupAmount.toFixed(2)}
                          </div>
                        </div>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRoundupClick(tx.id);
                          }}
                          disabled={tx.isInvested}
                          className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                            tx.isInvested
                              ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                              : "bg-[#FF3B30] text-white hover:bg-[#FF453A] shadow-[0_0_15px_rgba(255,59,48,0.4)]"
                          }`}
                        >
                          {tx.isInvested ? "Invested ✓" : isCurrentAnimating ? "Rounding..." : "Round Up"}
                        </button>
                      </div>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>

            {/* Total round-ups this month meter */}
            <GlassCard className="p-6 bg-gradient-to-r from-[#12121a] to-[#181216] border-[#FF3B30]/30">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-1">
                    TOTAL ROUND-UPS THIS MONTH
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold font-mono text-white">
                    ₹{user.monthlyRoundups.toFixed(2)}
                  </div>
                </div>
                <div className="text-right font-mono text-xs space-y-1">
                  <div className="text-emerald-400 font-semibold">+18.5% vs last month</div>
                  <div className="text-neutral-400">Total Lifetime: ₹{user.totalRoundupsSaved.toFixed(2)}</div>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Right Column: Live Animated Mechanism Visualizer & Custom Calculator */}
          <div className="lg:col-span-6 space-y-6">
            <GlassCard className="p-8 border-[#FF3B30]/30 text-center relative overflow-hidden">
              <div className="text-xs font-mono uppercase tracking-widest text-[#FF453A] mb-4 flex items-center justify-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                LIVE STEP-BY-STEP ANIMATION
              </div>

              {/* Visual Round-up Flow */}
              <div className="py-6 flex flex-col items-center gap-4 font-mono">
                {/* Step 1: Purchase */}
                <div className="p-4 rounded-2xl bg-[#14141c] border border-white/[0.08] w-full max-w-[280px] flex items-center justify-between">
                  <span className="text-neutral-400 text-xs">{selectedTx.merchant}</span>
                  <span className="text-lg font-bold text-white">₹{selectedTx.originalAmount.toFixed(2)}</span>
                </div>

                {/* Arrow */}
                <div className="flex flex-col items-center">
                  <ArrowDown className="w-5 h-5 text-[#FF3B30] animate-bounce" />
                  <span className="text-[10px] text-neutral-400 uppercase tracking-widest">
                    Round up to nearest ₹10
                  </span>
                </div>

                {/* Step 2: Rounded amount */}
                <div className="p-4 rounded-2xl bg-[#14141c] border border-[#FF3B30]/40 w-full max-w-[280px] flex items-center justify-between">
                  <span className="text-neutral-400 text-xs">Total Billed</span>
                  <span className="text-lg font-bold text-white">₹{selectedTx.roundedAmount.toFixed(2)}</span>
                </div>

                {/* Arrow */}
                <div className="flex flex-col items-center">
                  <ArrowDown className="w-5 h-5 text-emerald-400 animate-bounce" />
                  <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">
                    Spare Change Diverted
                  </span>
                </div>

                {/* Step 3: Micro-Investment Target */}
                <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 w-full max-w-[320px] flex items-center justify-between shadow-[0_0_30px_rgba(16,185,129,0.15)]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <Sprout className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-bold text-white">GREEN FUTURE BOND</div>
                      <div className="text-[10px] text-emerald-400 font-mono">6.5% Sovereign Yield</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold font-mono text-emerald-400">
                      +₹{selectedTx.roundupAmount.toFixed(2)}
                    </div>
                    <div className="text-[10px] text-neutral-400">Invested</div>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Custom Expense Tester */}
            <GlassCard className="p-6 bg-[#0e0e14]">
              <div className="flex items-center gap-2 mb-4">
                <Calculator className="w-4 h-4 text-[#FF3B30]" />
                <h4 className="text-sm font-bold font-mono text-white">
                  CUSTOM PURCHASE SIMULATOR
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                <div>
                  <label className="text-xs text-neutral-400 font-mono block mb-1.5">
                    Enter any expense amount (₹):
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 font-mono text-sm">
                      ₹
                    </span>
                    <input
                      type="number"
                      value={customExpense}
                      onChange={(e) => setCustomExpense(e.target.value)}
                      className="w-full pl-8 pr-4 py-2.5 rounded-xl bg-[#161620] border border-white/10 text-white font-mono text-sm focus:outline-none focus:border-[#FF3B30]"
                    />
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#14141e] border border-white/[0.08] text-xs font-mono space-y-1">
                  <div className="flex justify-between text-neutral-300">
                    <span>Round-up:</span>
                    <span className="text-[#FF453A] font-bold">+₹{customRoundup.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-neutral-300">
                    <span>1-Year Compounded:</span>
                    <span className="text-emerald-400 font-bold">~₹{projectedYearly.toLocaleString()}</span>
                  </div>
                  <div className="text-[10px] text-neutral-500">Based on 1 daily round-up at 8% CAGR</div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};
