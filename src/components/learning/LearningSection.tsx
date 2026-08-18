import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "../common/GlassCard";
import { GlowingBadge } from "../common/GlowingBadge";
import { useFinlit } from "../../context/FinlitContext";
import { Flame, Sparkles, CheckCircle2, Play, Award, Zap } from "lucide-react";
import { LessonPlayerModal } from "./LessonPlayerModal";

export const LearningSection: React.FC = () => {
  const { lessons, user, activeLessonModal, openLessonModal, closeLessonModal } = useFinlit();

  return (
    <section id="learn" className="relative py-24 lg:py-36 bg-[#08080c] border-t border-white/[0.06] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-[#FF3B30]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl text-left">
            <GlowingBadge text="✦ GAMIFIED CURRICULUM" variant="red" />
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-tight">
              Finance, <br />
              <span className="text-[#FF3B30]">but make it a game.</span>
            </h2>
            <p className="text-neutral-400 text-base leading-relaxed">
              Master personal finance through 3-minute interactive lessons. Complete quests, build streaks, and unlock micro-investing power.
            </p>
          </div>

          {/* User Gamification Live Dashboard Header */}
          <GlassCard className="p-5 w-full md:w-auto min-w-[300px] border-[#FF3B30]/30">
            <div className="flex items-center justify-between text-xs font-mono mb-2">
              <span className="text-[#FF453A] font-bold">LEVEL 0{user.level}</span>
              <span className="text-neutral-400">{user.levelTitle}</span>
            </div>

            <div className="w-full bg-white/[0.08] h-2 rounded-full overflow-hidden mb-3">
              <div
                className="bg-gradient-to-r from-[#FF3B30] to-[#FF9500] h-full rounded-full transition-all duration-700"
                style={{ width: `${(user.xp % 350) / 3.5}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-1 text-white font-bold">
                <Sparkles className="w-3.5 h-3.5 text-[#FF3B30]" />
                <span>{user.xp.toLocaleString()} XP</span>
              </div>
              <div className="flex items-center gap-1 text-amber-400 font-bold">
                <Flame className="w-3.5 h-3.5 fill-amber-400" />
                <span>{user.streakDays} DAY STREAK</span>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Lesson Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson, idx) => {
            const isCompleted = user.completedLessonIds.includes(lesson.id) || lesson.progressPercent === 100;

            return (
              <motion.div
                key={lesson.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <GlassCard
                  onClick={() => openLessonModal(lesson)}
                  className="p-6 h-full flex flex-col justify-between cursor-pointer group border-white/[0.08] hover:border-[#FF3B30]/50 hover:bg-[#13131c]"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-4">
                      <span className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/[0.08]">
                        {lesson.category}
                      </span>
                      <span className="text-[#FF453A] font-bold">+{lesson.xpReward} XP</span>
                    </div>

                    <h3 className="text-xl font-bold font-sans text-white mb-2 group-hover:text-[#FF453A] transition-colors">
                      {lesson.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                      {lesson.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.08] space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-neutral-400">{lesson.durationMinutes} min</span>
                      <span className={isCompleted ? "text-emerald-400 font-bold" : "text-neutral-400"}>
                        {isCompleted ? "Completed ✓" : `${lesson.progressPercent}%`}
                      </span>
                    </div>

                    <div className="w-full bg-white/[0.08] h-1.5 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          isCompleted ? "bg-emerald-400" : "bg-[#FF3B30]"
                        }`}
                        style={{ width: `${isCompleted ? 100 : lesson.progressPercent}%` }}
                      />
                    </div>

                    <div className="pt-2 flex items-center justify-between text-xs font-mono text-neutral-300 group-hover:text-white">
                      <span className="flex items-center gap-1.5">
                        {isCompleted ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Play className="w-3.5 h-3.5 text-[#FF3B30]" />
                        )}
                        <span>{isCompleted ? "Review Lesson" : "Start Lesson"}</span>
                      </span>
                      <span className="text-[#FF453A]">→</span>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Interactive Modal Player */}
      {activeLessonModal && (
        <LessonPlayerModal lesson={activeLessonModal} onClose={closeLessonModal} />
      )}
    </section>
  );
};
