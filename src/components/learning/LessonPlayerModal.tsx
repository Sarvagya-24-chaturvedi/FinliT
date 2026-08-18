import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useFinlit } from "../../context/FinlitContext";
import { X, CheckCircle, AlertCircle, Sparkles, Award, ArrowRight, HelpCircle } from "lucide-react";
import { Lesson } from "../../types/finlit";

interface LessonPlayerModalProps {
  lesson: Lesson;
  onClose: () => void;
}

export const LessonPlayerModal: React.FC<LessonPlayerModalProps> = ({ lesson, onClose }) => {
  const { completeLesson } = useFinlit();
  const [currentStep, setCurrentStep] = useState<"learn" | "quiz" | "completed">("learn");
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleOptionSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    const correct = index === lesson.quiz.correctIndex;
    setIsCorrect(correct);

    if (correct) {
      setTimeout(() => {
        completeLesson(lesson.id);
        setCurrentStep("completed");
      }, 1400);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-2xl bg-[#0f0f14] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(255,59,48,0.2)] overflow-hidden"
      >
        {/* Top bar */}
        <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#FF3B30]/15 text-[#FF453A] border border-[#FF3B30]/30">
              {lesson.category}
            </span>
            <span className="text-xs text-neutral-400 font-mono">{lesson.durationMinutes} min read</span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/[0.05] hover:bg-white/10 text-neutral-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content body */}
        <div className="py-6">
          {currentStep === "learn" && (
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
                  {lesson.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{lesson.description}</p>
              </div>

              {/* Concept breakdowns */}
              <div className="space-y-4">
                {lesson.conceptBreakdown.map((block, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-[#14141c] border border-white/[0.06] space-y-2">
                    <h4 className="text-sm font-bold text-[#FF453A] font-mono">{block.heading}</h4>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">{block.text}</p>
                    {block.statHighlight && (
                      <div className="text-xs font-mono text-emerald-400 pt-1 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>{block.statHighlight}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Key takeaways */}
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                  KEY TAKEAWAYS
                </div>
                <ul className="space-y-1.5">
                  {lesson.keyTakeaways.map((point, idx) => (
                    <li key={idx} className="text-xs text-neutral-300 flex items-start gap-2">
                      <span className="text-[#FF3B30] font-bold">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action */}
              <button
                onClick={() => setCurrentStep("quiz")}
                className="w-full py-3.5 rounded-2xl bg-[#FF3B30] text-white font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(255,59,48,0.5)] hover:bg-[#FF453A] transition-all"
              >
                <span>Take Knowledge Check (+{lesson.xpReward} XP)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {currentStep === "quiz" && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FF453A]">
                <HelpCircle className="w-4 h-4" />
                <span>KNOWLEDGE CHECK</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                {lesson.quiz.question}
              </h3>

              {/* Options */}
              <div className="space-y-3">
                {lesson.quiz.options.map((option, idx) => {
                  const isChosen = selectedOption === idx;
                  const isCorrectChoice = idx === lesson.quiz.correctIndex;

                  let borderStyle = "border-white/[0.08] bg-[#14141c] hover:border-white/20";
                  if (isAnswered) {
                    if (isCorrectChoice) {
                      borderStyle = "border-emerald-500 bg-emerald-500/15 text-white";
                    } else if (isChosen && !isCorrectChoice) {
                      borderStyle = "border-rose-500 bg-rose-500/15 text-white";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleOptionSelect(idx)}
                      disabled={isAnswered}
                      className={`w-full p-4 rounded-2xl text-left text-sm font-medium transition-all flex items-center justify-between border ${borderStyle}`}
                    >
                      <span className="text-neutral-200">{option}</span>
                      {isAnswered && isCorrectChoice && (
                        <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                      )}
                      {isAnswered && isChosen && !isCorrectChoice && (
                        <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation */}
              {isAnswered && (
                <div
                  className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed border ${
                    isCorrect
                      ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
                      : "bg-rose-500/10 border-rose-500/30 text-rose-300"
                  }`}
                >
                  <div className="font-bold font-mono mb-1">
                    {isCorrect ? "Correct! Well Done!" : "Not quite right!"}
                  </div>
                  <p>{lesson.quiz.explanation}</p>
                </div>
              )}
            </div>
          )}

          {currentStep === "completed" && (
            <div className="py-8 text-center space-y-6">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-[#FF3B30] to-[#FF9500] flex items-center justify-center text-white shadow-[0_0_40px_rgba(255,59,48,0.6)]">
                <Award className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h3 className="text-3xl font-display font-extrabold text-white">
                  Lesson Completed!
                </h3>
                <p className="text-sm text-neutral-400">
                  You earned <span className="text-[#FF453A] font-bold font-mono">+{lesson.xpReward} XP</span> and improved your Financial Health score.
                </p>
              </div>

              <button
                onClick={onClose}
                className="px-8 py-3.5 rounded-full bg-white text-black font-bold text-sm hover:bg-[#FF3B30] hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              >
                Continue Learning →
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
