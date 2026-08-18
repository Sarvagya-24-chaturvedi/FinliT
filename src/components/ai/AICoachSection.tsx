import React, { useState } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "../common/GlassCard";
import { GlowingBadge } from "../common/GlowingBadge";
import { useFinlit } from "../../context/FinlitContext";
import { Bot, Send, Sparkles, User, HelpCircle } from "lucide-react";

export const AICoachSection: React.FC = () => {
  const { aiChat, sendAIMessage } = useFinlit();
  const [inputVal, setInputVal] = useState("");

  const quickPrompts = [
    "Why should I care about inflation?",
    "How do round-ups fight inflation?",
    "What is compound interest in practice?",
    "Tell me about Green Bonds vs Stocks",
  ];

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    sendAIMessage(inputVal);
    setInputVal("");
  };

  return (
    <section id="ai-coach" className="relative py-24 lg:py-36 bg-[#050505] overflow-hidden">
      <div className="absolute top-1/3 left-10 w-[600px] h-[600px] bg-[#FF3B30]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl space-y-4 mb-16 text-left">
          <GlowingBadge text="✦ 24/7 FINANCIAL MENTOR" variant="red" />
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-tight">
            Meet your <br />
            <span className="text-[#FF3B30]">financial coach.</span>
          </h2>
          <p className="text-lg text-neutral-400 font-normal leading-relaxed">
            Get straightforward, no-BS answers about investing, budgeting, CIBIL scores, and smart habits formatted for Gen Z.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <GlassCard className="p-6 sm:p-8 border-[#FF3B30]/30 shadow-[0_0_40px_-5px_rgba(255,59,48,0.25)]">
            {/* Coach Header */}
            <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FF3B30] to-[#FF9500] flex items-center justify-center text-white shadow-[0_0_20px_rgba(255,59,48,0.5)]">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    FINLIT AI Coach
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <div className="text-[11px] text-neutral-400 font-mono">Specialized in Gen Z Wealth & Micro-Investing</div>
                </div>
              </div>
            </div>

            {/* Chat message bubbles */}
            <div className="py-6 space-y-4 max-h-[380px] overflow-y-auto pr-2">
              {aiChat.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={"flex gap-3 " + (msg.sender === "user" ? "justify-end" : "justify-start")}
                >
                  {msg.sender === "ai" && (
                    <div className="w-7 h-7 rounded-lg bg-[#FF3B30]/20 border border-[#FF3B30]/30 flex items-center justify-center text-[#FF453A] shrink-0 mt-1">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div
                    className={"max-w-[85%] p-4 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-line font-sans " + (msg.sender === "user" ? "bg-[#FF3B30] text-white rounded-br-none shadow-[0_0_15px_rgba(255,59,48,0.3)]" : "bg-[#14141e] border border-white/[0.08] text-neutral-200 rounded-bl-none")}
                  >
                    {msg.text}
                    <div className="text-[10px] text-neutral-400 font-mono mt-2 text-right">
                      {msg.timestamp}
                    </div>
                  </div>

                  {msg.sender === "user" && (
                    <div className="w-7 h-7 rounded-lg bg-white/[0.1] border border-white/[0.1] flex items-center justify-center text-white shrink-0 mt-1">
                      <User className="w-3.5 h-3.5" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Quick Prompts Pills */}
            <div className="pt-2 pb-4 flex flex-wrap gap-2">
              {quickPrompts.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => sendAIMessage(q)}
                  className="px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-[#FF3B30]/15 border border-white/[0.08] hover:border-[#FF3B30]/40 text-neutral-300 hover:text-white font-mono text-[11px] transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSend} className="relative flex items-center">
              <input
                type="text"
                placeholder="Ask anything about money, SIPs, inflation, or credit..."
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                className="w-full pl-5 pr-14 py-4 rounded-2xl bg-[#12121a] border border-white/10 text-white placeholder-neutral-500 font-sans text-sm focus:outline-none focus:border-[#FF3B30] transition-colors"
              />
              <button
                type="submit"
                className="absolute right-2 p-3 rounded-xl bg-[#FF3B30] text-white hover:bg-[#FF453A] transition-all shadow-[0_0_15px_rgba(255,59,48,0.4)]"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
