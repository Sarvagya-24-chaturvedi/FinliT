import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useFinlit } from '../../context/FinlitContext';
import { X, TrendingUp, Award } from 'lucide-react';

export const RiskRewardGame: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { completeGame } = useFinlit();
  const [currentScenario, setCurrentScenario] = useState(0);
  const [balance, setBalance] = useState(10000);
  const [gameFinished, setGameFinished] = useState(false);

  const scenarios = [
    {
      title: 'SCENARIO 1: The AI Tech Boom',
      description: 'Markets are up 25% this quarter. Your friends are all hyping speculative meme tokens.',
      choices: [
        { label: 'FOMO all-in on 1 meme coin', impact: -3000, reason: 'Speculative hype dumped 40% next week!' },
        { label: 'Stick to your diversified Green & Tech SIP', impact: 2200, reason: 'Steady 22% growth with zero sleepless nights.' },
        { label: 'Keep everything in 2.5% savings account', impact: 250, reason: 'Safe, but lost real purchasing power to 6% inflation.' },
      ]
    },
    {
      title: 'SCENARIO 2: The Flash Market Correction',
      description: 'Global news causes an 18% market dip. Headlines scream doom and gloom.',
      choices: [
        { label: 'Panic sell everything at the bottom', impact: -2500, reason: 'Locked in temporary paper losses as permanent losses.' },
        { label: 'Dollar-Cost Average and buy quality bonds/indices at a discount', impact: 3500, reason: 'Captured the explosive recovery rally!' },
        { label: 'Pause all investments for 2 years', impact: 0, reason: 'Missed the entire market rebound.' },
      ]
    },
    {
      title: 'SCENARIO 3: Clean Energy Policy Shift',
      description: 'Government announces huge tax incentives for Solar and Green Sovereign Bonds.',
      choices: [
        { label: 'Allocate round-up spare change into Green Future Bonds', impact: 2800, reason: 'Earned 8.5% steady sovereign-backed yields!' },
        { label: 'Ignore the policy entirely', impact: 400, reason: 'Minimal change.' },
        { label: 'Borrow high-interest money on credit cards to gamble', impact: -4000, reason: '18% credit card interest crushed your profits.' },
      ]
    }
  ];

  const handleChoice = (impact: number) => {
    const nextBal = balance + impact;
    setBalance(nextBal);

    if (currentScenario + 1 < scenarios.length) {
      setCurrentScenario(currentScenario + 1);
    } else {
      setGameFinished(true);
      completeGame('game-risk-reward', nextBal, 50);
    }
  };

  const scenario = scenarios[currentScenario];

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
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/15 text-amber-400 border border-amber-500/30">
              GAME 02 • RISK OR REWARD
            </span>
            <span className="text-xs font-mono text-emerald-400">+50 XP</span>
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
            <div className="text-xs text-neutral-400">SIMULATED CAPITAL</div>
            <div className="text-xl font-bold text-white">₹{balance.toLocaleString()}</div>
          </div>
          <div className="text-right">
            <div className="text-xs text-neutral-400">STAGE</div>
            <div className="text-sm font-bold text-amber-400">
              {currentScenario + 1} / {scenarios.length}
            </div>
          </div>
        </div>

        {!gameFinished ? (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-display font-bold text-white mb-2">{scenario.title}</h3>
              <p className="text-sm text-neutral-300 leading-relaxed">{scenario.description}</p>
            </div>

            <div className="space-y-3">
              {scenario.choices.map((choice, idx) => (
                <button
                  key={idx}
                  onClick={() => handleChoice(choice.impact)}
                  className="w-full p-4 rounded-2xl text-left bg-[#161622] hover:bg-[#1f1f2e] border border-white/[0.08] hover:border-[#FF3B30]/50 transition-all group"
                >
                  <div className="text-sm font-bold text-white group-hover:text-[#FF453A] mb-1">
                    {choice.label}
                  </div>
                  <div className="text-xs text-neutral-400">{choice.reason}</div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="py-8 text-center space-y-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Award className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-display font-bold text-white">Simulation Completed!</h3>
              <p className="text-sm text-neutral-400">
                Final Portfolio Value:{' '}
                <span className="text-emerald-400 font-bold font-mono">₹{balance.toLocaleString()}</span>
              </p>
              <p className="text-xs text-neutral-500">
                You proved your long-term discipline! +50 XP and MARKET EXPLORER badge unlocked.
              </p>
            </div>

            <button
              onClick={onClose}
              className="px-8 py-3.5 rounded-full bg-[#FF3B30] text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(255,59,48,0.5)]"
            >
              Collect Rewards & Close
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};
