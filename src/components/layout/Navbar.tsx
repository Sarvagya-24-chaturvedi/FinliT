import React, { useState, useEffect } from "react";
import { useFinlit } from "../../context/FinlitContext";
import { Flame, Sparkles, Volume2, VolumeX, Menu, X, ArrowUpRight, ShieldCheck, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar: React.FC = () => {
  const { user, soundEnabled, toggleSound } = useFinlit();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Learn", href: "#learn" },
    { label: "Play", href: "#games" },
    { label: "Round-ups", href: "#roundups" },
    { label: "Invest", href: "#invest" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Health Score", href: "#health-score" },
    { label: "AI Coach", href: "#ai-coach" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-3 bg-[#050505]/80 backdrop-blur-xl border-b border-white/[0.06]" : "py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative w-8 h-8 rounded-lg bg-gradient-to-tr from-[#FF3B30] to-[#FF6B6B] flex items-center justify-center shadow-[0_0_20px_rgba(255,59,48,0.5)] group-hover:scale-105 transition-transform">
              <span className="font-display font-extrabold text-black text-base">F</span>
              <div className="absolute inset-0 rounded-lg border border-white/40" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-xl tracking-tight text-white flex items-center gap-1">
                FINLIT
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B30] animate-pulse" />
              </span>
            </div>
          </a>

          {/* Desktop Nav Pill */}
          <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#121218]/90 backdrop-blur-xl border border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            {navLinks.map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                  idx === 0
                    ? "bg-[#FF3B30] text-white shadow-[0_0_15px_rgba(255,59,48,0.4)]"
                    : "text-neutral-300 hover:text-white hover:bg-white/[0.06]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Widgets */}
          <div className="flex items-center gap-3">
            {/* Gamification Streak & XP Pills */}
            <div className="hidden sm:flex items-center gap-2 font-mono text-xs">
              <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#181820] border border-white/[0.08] text-amber-400">
                <Flame className="w-3.5 h-3.5 fill-amber-400 text-amber-400 animate-bounce" />
                <span>{user.streakDays}d Streak</span>
              </div>

              <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#181820] border border-[#FF3B30]/30 text-[#FF453A]">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="font-semibold">{user.xp.toLocaleString()} XP</span>
              </div>
            </div>

            {/* Sound Toggle */}
            <button
              onClick={toggleSound}
              title={soundEnabled ? "Mute audio cues" : "Unmute audio cues"}
              className="w-8 h-8 rounded-full bg-[#14141c] border border-white/[0.08] text-neutral-300 hover:text-white hover:border-[#FF3B30]/40 flex items-center justify-center transition-all"
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 text-[#FF453A]" />
              ) : (
                <VolumeX className="w-4 h-4 text-neutral-500" />
              )}
            </button>

            {/* Primary CTA Button */}
            <a
              href="#learn"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-white text-black hover:bg-[#FF3B30] hover:text-white transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_rgba(255,59,48,0.5)] group"
            >
              <span>Get Started</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-9 h-9 rounded-full bg-[#14141c] border border-white/[0.08] text-neutral-200 flex items-center justify-center"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[60px] z-40 bg-[#0a0a0e]/95 backdrop-blur-2xl border-b border-white/[0.08] p-6 lg:hidden"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#FF3B30]/20 flex items-center justify-center text-[#FF453A] font-bold text-xs">
                    L{user.level}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">{user.name}</div>
                    <div className="text-[10px] text-neutral-400 font-mono">{user.levelTitle}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-mono font-bold text-[#FF453A]">₹{user.simulatedBalance.toFixed(2)}</div>
                  <div className="text-[10px] text-neutral-400 font-mono">{user.xp} XP</div>
                </div>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 px-3 rounded-lg text-sm text-neutral-200 hover:text-white hover:bg-white/[0.06] transition-colors"
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-2">
                <a
                  href="#learn"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 rounded-xl bg-[#FF3B30] text-white text-center font-semibold text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,59,48,0.4)]"
                >
                  <span>Start Learning</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
