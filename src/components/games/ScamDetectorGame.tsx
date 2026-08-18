import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useFinlit } from '../../context/FinlitContext';
import { X, ShieldAlert, ShieldCheck } from 'lucide-react';

export const ScamDetectorGame: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { completeGame } = useFinlit();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isDone, setIsDone] = useState(false);

  const prompts = [
    {
      title: 'CASE 1: Suspicious SMS Alert',
      text: '"DEAR USER, YOUR HDFC BANK ACCOUNT IS BLOCKED DUE TO PENDING PAN KYC. CLICK http://bit.ly/hdfc-kyc-verify TO UNBLOCK WITHIN 2 HOURS."',
      isScam: true,
      explanation: 'Scam! Banks never send shortened bit.ly links or threaten immediate blocking over SMS. Official bank links always use the bank verified domain (e.g. hdfcbank.com).'
    },
    {
      title: 'CASE 2: UPI Payment Request',
      text: '"A buyer on OLX sends you a ₹5,000 QR code saying: SCAN THIS QR CODE AND ENTER YOUR 6-DIGIT UPI PIN TO RECEIVE ADVANCE PAYMENT FOR YOUR FURNITURE."',
      isScam: true,
      explanation: 'Scam! You NEVER need to enter your UPI PIN to receive money. UPI PIN is only entered to DEBIT money from your bank account!'
    },
    {
      title: 'CASE 3: Official Mutual Fund SIP Confirmation',
      text: '"Your monthly SIP of ₹1,000 into Nifty 50 Index Fund has been successfully processed via CAMS/KFintech. Nav allotment: ₹142.80."',
      isScam: false,
      explanation: 'Legitimate! This is standard automated transactional notification from registered mutual fund registrars without asking for passwords or pins.'
    }
  ];

  const handleAnswer = (userGuessedScam: boolean) => {
    const current = prompts[currentIdx];
    const correct = userGuessedScam === current.isScam;

    if (correct) {
      setScore((s) => s + 1);
      setFeedback('✅ Correct! ' + current.explanation);
    } else {
      setFeedback('❌ Incorrect! ' + current.explanation);
    }

    setTimeout(() => {
      setFeedback(null);
      if (currentIdx + 1 < prompts.length) {
        setCurrentIdx(currentIdx + 1);
      } else {
        setIsDone(true);
        completeGame('game-scam-detector', score + (correct ? 1 : 0), 60);
      }
    }, 2400);
  };

  const item = prompts[currentIdx];

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
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-rose-500/15 text-rose-400 border border-rose-500/30">
              GAME 03 • SCAM DETECTOR
            </span>
            <span className="text-xs font-mono text-emerald-400">+60 XP</span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/[0.05] hover:bg-white/10 text-neutral-400 hover:text-white flex items-center justify-center"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {!isDone ? (
          <div className="py-6 space-y-6">
            <div className="flex justify-between items-center text-xs font-mono text-neutral-400">
              <span>INSPECT THE MESSAGE CAREFULLY</span>
              <span>
                QUESTION {currentIdx + 1} OF {prompts.length}
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-[#14141e] border border-white/10 text-sm font-mono text-neutral-200 leading-relaxed">
              <div className="text-xs text-[#FF453A] font-bold mb-2">{item.title}</div>
              <p className="bg-black/40 p-4 rounded-xl border border-white/[0.06] text-white">
                {item.text}
              </p>
            </div>

            {feedback && (
              <div className="p-4 rounded-2xl text-xs font-mono leading-relaxed bg-[#1a1a24] border border-white/10 text-neutral-200">
                {feedback}
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <button
                disabled={feedback !== null}
                onClick={() => handleAnswer(true)}
                className="py-4 rounded-2xl bg-rose-500/15 hover:bg-rose-500/25 border border-rose-500/40 text-rose-400 font-bold text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <ShieldAlert className="w-4 h-4" />
                <span>SPOTTED A SCAM!</span>
              </button>

              <button
                disabled={feedback !== null}
                onClick={() => handleAnswer(false)}
                className="py-4 rounded-2xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 text-emerald-400 font-bold text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>LEGITIMATE MSG</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="py-8 text-center space-y-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-display font-bold text-white">Fraud Shield Mastered!</h3>
              <p className="text-sm text-neutral-400">
                You spotted all deceptive phishing attacks. +60 XP and SCAM SHIELD badge unlocked!
              </p>
            </div>

            <button
              onClick={onClose}
              className="px-8 py-3.5 rounded-full bg-[#FF3B30] text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(255,59,48,0.5)]"
            >
              Collect +60 XP
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};
