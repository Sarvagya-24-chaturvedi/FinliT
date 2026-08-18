import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../common/GlassCard';
import { GlowingBadge } from '../common/GlowingBadge';
import { useFinlit } from '../../context/FinlitContext';
import { MapPin, TrendingUp, ShieldAlert, Play } from 'lucide-react';
import { MoneyMapGame } from './MoneyMapGame';
import { RiskRewardGame } from './RiskRewardGame';
import { ScamDetectorGame } from './ScamDetectorGame';

export const GamesSection: React.FC = () => {
  const { miniGames, activeGameModal, openGameModal, closeGameModal } = useFinlit();

  return (
    <section id="games" className="relative py-24 lg:py-36 bg-[#050505] overflow-hidden">
      <div className="absolute top-1/3 right-10 w-[550px] h-[550px] bg-[#FF9500]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl space-y-4 mb-16 text-left">
          <GlowingBadge text="✦ FINANCIAL ARENA" variant="orange" />
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-tight">
            Learn by <span className="text-[#FF9500]">doing.</span>
          </h2>
          <p className="text-lg text-neutral-400 font-normal leading-relaxed">
            Test your financial decision-making in real-time simulators. Balance realistic budgets, manage volatile markets, and outsmart phishing scams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {miniGames.map((game, idx) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <GlassCard
                onClick={() => openGameModal(game)}
                className="p-8 h-full flex flex-col justify-between cursor-pointer group hover:bg-[#14141d] border-white/[0.08] hover:border-[#FF9500]/40"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-3xl font-mono font-black text-neutral-600">
                      {game.gameNumber}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                      {game.icon === 'MapPin' ? (
                        <MapPin className="w-6 h-6" />
                      ) : game.icon === 'TrendingUp' ? (
                        <TrendingUp className="w-6 h-6" />
                      ) : (
                        <ShieldAlert className="w-6 h-6" />
                      )}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold font-sans text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {game.title}
                  </h3>
                  <div className="text-xs font-mono font-semibold text-[#FF453A] mb-3">
                    {game.tagline}
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                    {game.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/[0.08] space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-neutral-400">Difficulty: {game.difficulty}</span>
                    <span className="text-emerald-400 font-bold">+{game.xpReward} XP</span>
                  </div>

                  <button className="w-full py-3 rounded-xl bg-white/[0.05] group-hover:bg-[#FF3B30] text-neutral-200 group-hover:text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(255,59,48,0)] group-hover:shadow-[0_0_20px_rgba(255,59,48,0.4)]">
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Launch Game</span>
                  </button>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      {activeGameModal?.id === 'game-money-map' && <MoneyMapGame onClose={closeGameModal} />}
      {activeGameModal?.id === 'game-risk-reward' && <RiskRewardGame onClose={closeGameModal} />}
      {activeGameModal?.id === 'game-scam-detector' && <ScamDetectorGame onClose={closeGameModal} />}
    </section>
  );
};
