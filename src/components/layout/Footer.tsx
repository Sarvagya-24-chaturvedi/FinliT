import React from "react";
import { ArrowUpRight, Shield, Heart, Sparkles } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#050505] border-t border-white/[0.08] pt-20 pb-12 overflow-hidden">
      {/* Background ambient red glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-t from-[#FF3B30]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 pb-16 border-b border-white/[0.08]">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#FF3B30] to-[#FF6B6B] flex items-center justify-center shadow-[0_0_20px_rgba(255,59,48,0.5)]">
                <span className="font-display font-extrabold text-black text-base">F</span>
              </div>
              <span className="font-display font-black text-2xl tracking-tight text-white">
                FINLIT
              </span>
            </div>

            <p className="text-neutral-400 text-sm max-w-sm leading-relaxed">
              Gamified Financial Literacy + Micro-Investing for Gen Z. Learn finance through interactive games, earn XP, and turn spare change into green bonds.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                SIMULATED SANDBOX ONLINE
              </span>
            </div>
          </div>

          {/* Col 1: Product */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-widest text-neutral-400">
              Product
            </h4>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>
                <a href="#learn" className="hover:text-[#FF453A] transition-colors">
                  Interactive Lessons
                </a>
              </li>
              <li>
                <a href="#games" className="hover:text-[#FF453A] transition-colors">
                  Mini-Games & Quests
                </a>
              </li>
              <li>
                <a href="#roundups" className="hover:text-[#FF453A] transition-colors">
                  Round-up Engine
                </a>
              </li>
              <li>
                <a href="#invest" className="hover:text-[#FF453A] transition-colors">
                  Green Micro-Portfolios
                </a>
              </li>
              <li>
                <a href="#ai-coach" className="hover:text-[#FF453A] transition-colors">
                  FINLIT AI Coach
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: Curriculum */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-widest text-neutral-400">
              Curriculum
            </h4>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>
                <a href="#learn" className="hover:text-[#FF453A] transition-colors">
                  Understanding Inflation
                </a>
              </li>
              <li>
                <a href="#learn" className="hover:text-[#FF453A] transition-colors">
                  Stocks vs Bonds
                </a>
              </li>
              <li>
                <a href="#learn" className="hover:text-[#FF453A] transition-colors">
                  Building Portfolios
                </a>
              </li>
              <li>
                <a href="#learn" className="hover:text-[#FF453A] transition-colors">
                  Compound Interest 101
                </a>
              </li>
              <li>
                <a href="#learn" className="hover:text-[#FF453A] transition-colors">
                  Scam Shield & CIBIL
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Demo */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-widest text-neutral-400">
              Disclaimers
            </h4>
            <p className="text-xs text-neutral-500 leading-relaxed">
              FINLIT is a simulated educational learning platform. All currency balances (₹), portfolios, and trades are strictly virtual and hold no real monetary liabilities.
            </p>
            <div className="pt-2 flex gap-3 text-xs text-neutral-400">
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Safety</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © 2026 FINLIT Inc. Learn Money. Play Smart. Grow Slowly.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Crafted with <Heart className="w-3 h-3 text-[#FF3B30] fill-[#FF3B30]" /> for Gen Z Financial Freedom
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
