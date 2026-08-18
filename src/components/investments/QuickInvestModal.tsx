import React, { useState } from "react";
import { motion } from "framer-motion";
import { useFinlit } from "../../context/FinlitContext";
import { InvestmentPortfolio } from "../../types/finlit";
import { X, CheckCircle, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";

interface QuickInvestModalProps {
  portfolio: InvestmentPortfolio;
  onClose: () => void;
}

export const QuickInvestModal: React.FC<QuickInvestModalProps> = ({ portfolio, onClose }) => {
  const { investAmount } = useFinlit();
  const [selectedAmount, setSelectedAmount] = useState<number>(10);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState(false);

  const amountToInvest = customAmount ? parseFloat(customAmount) || 0 : selectedAmount;

  const handleInvest = () => {
    if (amountToInvest <= 0) return;
    investAmount(portfolio.id, amountToInvest);
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-lg bg-[#0f0f14] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(255,59,48,0.25)] overflow-hidden"
      >
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
              {portfolio.riskLevel}
            </span>
            <span className="text-xs font-mono text-neutral-400">ESG {portfolio.esgScore}/100</span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/[0.05] hover:bg-white/10 text-neutral-400 hover:text-white flex items-center justify-center"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {!isSuccess ? (
          <div className="py-6 space-y-6">
            <div>
              <h3 className="text-2xl font-display font-bold text-white mb-1">
                Invest into {portfolio.name}
              </h3>
              <p className="text-xs text-neutral-400 font-mono">{portfolio.tagline}</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#14141e] border border-white/[0.08] space-y-3 font-mono text-xs">
              <div className="text-neutral-400 uppercase tracking-wider text-[10px]">
                PORTFOLIO ALLOCATION
              </div>
              {portfolio.allocation.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center text-neutral-300">
                  <span>{item.name}</span>
                  <span className="font-bold text-white">{item.percentage}%</span>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <label className="text-xs text-neutral-400 font-mono block">
                CHOOSE MICRO-INVESTMENT AMOUNT (₹):
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[10, 25, 50, 100].map((amt) => (
                  <button
                    key={amt}
                    onClick={() => {
                      setSelectedAmount(amt);
                      setCustomAmount("");
                    }}
                    className={"py-2.5 rounded-xl font-mono text-sm font-bold transition-all " + (selectedAmount === amt && !customAmount ? "bg-[#FF3B30] text-white shadow-[0_0_15px_rgba(255,59,48,0.4)]" : "bg-[#14141c] text-neutral-300 border border-white/[0.08] hover:border-white/20")}
                  >
                    ₹{amt}
                  </button>
                ))}
              </div>

              <div className="pt-2">
                <input
                  type="number"
                  placeholder="Or enter custom amount (e.g. ₹250)"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#14141c] border border-white/10 text-white font-mono text-xs focus:outline-none focus:border-[#FF3B30]"
                />
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-[11px] text-neutral-400 flex items-center gap-2 font-mono">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Simulated Sandbox • Zero real money or financial liabilities</span>
            </div>

            <button
              onClick={handleInvest}
              className="w-full py-4 rounded-2xl bg-[#FF3B30] hover:bg-[#FF453A] text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(255,59,48,0.5)] transition-all flex items-center justify-center gap-2"
            >
              <span>Confirm Simulated Investment (₹{amountToInvest})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="py-8 text-center space-y-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <CheckCircle className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-display font-bold text-white">Investment Confirmed!</h3>
              <p className="text-sm text-neutral-300 font-mono">
                Successfully allocated <span className="text-emerald-400 font-bold">₹{amountToInvest.toFixed(2)}</span> into {portfolio.name}
              </p>
              <p className="text-xs text-neutral-500 font-mono">+25 XP added to your profile</p>
            </div>
            <button
              onClick={onClose}
              className="px-8 py-3.5 rounded-full bg-white text-black hover:bg-[#FF3B30] hover:text-white font-bold text-xs uppercase tracking-wider transition-all"
            >
              View Updated Portfolio
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};
