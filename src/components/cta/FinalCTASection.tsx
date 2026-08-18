import React from "react";
import { motion } from "framer-motion";
import { GlowingBadge } from "../common/GlowingBadge";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

export const FinalCTASection: React.FC = () => {
  return (
    <section className="relative py-28 lg:py-40 bg-[#050505] overflow-hidden">
      {/* Radiant glow background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF3B30]/15 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-[#FF3B30]/20 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlowingBadge text="✦ START TODAY" variant="red" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight text-white leading-tight"
        >
          Your future <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3B30] via-[#FF5E55] to-[#FF9500] drop-shadow-[0_0_35px_rgba(255,59,48,0.6)]">
            starts with ₹1.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed"
        >
          Learn better financial habits, play games, and turn spare change into smarter compounding investments.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#learn"
            className="px-9 py-4 rounded-full bg-[#FF3B30] hover:bg-[#FF453A] text-white font-bold text-sm uppercase tracking-wider flex items-center gap-3 shadow-[0_0_35px_rgba(255,59,48,0.6)] hover:shadow-[0_0_50px_rgba(255,59,48,0.8)] transition-all group"
          >
            <span>Start Your Journey</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
