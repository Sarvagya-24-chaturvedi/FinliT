import React, { useState } from "react";
import { motion } from "framer-motion";
import { useFinlit } from "../../context/FinlitContext";
import { X, CheckCircle, AlertTriangle, Sparkles, Award } from "lucide-react";

export const MoneyMapGame: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { completeGame } = useFinlit();
  const totalIncome = 35000;

  const [allocations, setAllocations] = useState<{ [key: string]: number }>({
    rent: 12000,
    groceries: 6000,
    party: 5000,
    sip: 7000,
    emergency: 5000,
  });

  const [hasSubmitted, setHasSubmitted] = useState(false);

  const currentTotal = Object.values(allocations).reduce((a, b) => a + b, 0);
  const remaining = totalIncome - currentTotal;

  const handleChange = (category: string, value: number) => {
    setAllocations((prev) => ({
      ...prev,
      [category]: Math.max(0, value),
    }));
  };

  const handleEvaluate = () => {
    setHasSubmitted(true);
    if (remaining === 0 && allocations.emergency >= 3500 && allocations.sip >= 4000) {
      completeGame("game-money-map", 100, 40);
    }
  };

  const isSuccess = remaining === 0 && allocations.emergency >= 3500 && allocations.sip >= 4000;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-xl bg-[#0f0f14] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(255,59,48,0.25)] overflow-hidden"
      >
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#FF3B30]/15 text-[#FF453A] border border-[#FF3B30]/30">
              GAME 01 • MONEY MAP
            </span>
            <span className="text-xs font-mono text-emerald-400">+40 XP REWARD</span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/[0.05] hover:bg-white/10 text-neutral-400 hover:text-white flex items-center justify-center"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="my-6 p-4 rounded-2xl bg-[#14141c] border border-white/[0.08] flex items-center justify-between font-mono">
          <div>
            <div className="text-xs text-neutral-400">MONTHLY INCOME</div>
            <div className="text-xl font-bold text-white">₹{totalIncome.toLocaleString()}</div>
          </div>
          <div className="text-right">
            <div className="text-xs text-neutral-400">UNALLOCATED CASH</div>
            <div
              className={"text-xl font-bold " + (remaining === 0 ? "text-emerald-400" : remaining > 0 ? "text-amber-400" : "text-rose-500")}
            >
              ₹{remaining.toLocaleString()}
            </div>
          </div>
        </div>

        <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
          {[
            { key: "rent", label: "🏠 Rent & Utilities", min: 5000, max: 20000, step: 500 },
            { key: "groceries", label: "🥑 Groceries & Dining", min: 2000, max: 15000, step: 500 },
            { key: "party", label: "🎉 Weekend Outings & Shopping", min: 0, max: 15000, step: 500 },
            { key: "sip", label: "📈 Green Micro-SIP & Equity", min: 1000, max: 15000, step: 500 },
            { key: "emergency", label: "🛡️ Emergency Liquid Fund", min: 1000, max: 15000, step: 500 },
          ].map((item) => (
            <div key={item.key} className="space-y-1 text-xs font-mono">
              <div className="flex justify-between text-neutral-300">
                <span>{item.label}</span>
                <span className="text-white font-bold">₹{allocations[item.key].toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={item.min}
                max={item.max}
                step={item.step}
                value={allocations[item.key]}
                onChange={(e) => handleChange(item.key, Number(e.target.value))}
                className="w-full accent-[#FF3B30] bg-[#1a1a24] h-1.5 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          ))}
        </div>

        {hasSubmitted && (
          <div
            className={"mt-4 p-4 rounded-2xl text-xs font-mono border " + (isSuccess ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300" : "bg-rose-500/10 border-rose-500/30 text-rose-300")}
          >
            {isSuccess
              ? "🎯 Brilliant! You achieved the 50/30/20 balanced rule with solid emergency backup and growth investments! +40 XP & BUDGET MASTER Badge unlocked!"
              : remaining !== 0
              ? "⚠️ Your budget does not balance to ₹0. Adjust your sliders until exactly ₹0 is unallocated."
              : "⚠️ Ensure at least ₹3,500 goes to Emergency Fund and ₹4,000 into Micro-SIP for financial stability."}
          </div>
        )}

        <div className="mt-6 flex gap-3">
          <button
            onClick={isSuccess ? onClose : handleEvaluate}
            className="flex-1 py-3.5 rounded-xl bg-[#FF3B30] hover:bg-[#FF453A] text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(255,59,48,0.4)] transition-all"
          >
            {isSuccess ? "Claim +40 XP & Close" : "Submit Budget Plan"}
          </button>
        </div>
      </motion.div>
    </div>
  );
};
