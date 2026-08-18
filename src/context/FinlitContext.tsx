import React, { createContext, useContext, useState } from "react";
import { UserProfile, Transaction, Lesson, MiniGame, InvestmentPortfolio, AchievementBadge, AIChatMessage } from "../types/finlit";
import { initialUserProfile, mockTransactions, mockLessons, mockMiniGames, mockPortfolios, mockAchievements, initialAIChat, aiKnowledgeBase } from "../data/mockData";
import { soundManager } from "../components/common/AudioFeedback";
import confetti from "canvas-confetti";

interface FinlitContextType {
  user: UserProfile;
  transactions: Transaction[];
  lessons: Lesson[];
  miniGames: MiniGame[];
  portfolios: InvestmentPortfolio[];
  achievements: AchievementBadge[];
  aiChat: AIChatMessage[];
  soundEnabled: boolean;
  activeLessonModal: Lesson | null;
  activeGameModal: MiniGame | null;
  activeInvestModal: InvestmentPortfolio | null;
  
  toggleSound: () => void;
  addXP: (amount: number, reason?: string) => void;
  triggerRoundup: (txId: string) => void;
  investAmount: (portfolioId: string, amount: number) => void;
  completeLesson: (lessonId: string) => void;
  completeGame: (gameId: string, score: number, xpReward: number) => void;
  sendAIMessage: (text: string) => void;
  openLessonModal: (lesson: Lesson) => void;
  closeLessonModal: () => void;
  openGameModal: (game: MiniGame) => void;
  closeGameModal: () => void;
  openInvestModal: (portfolio: InvestmentPortfolio) => void;
  closeInvestModal: () => void;
  triggerConfetti: () => void;
}

const FinlitContext = createContext<FinlitContextType | undefined>(undefined);

export const FinlitProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile>(initialUserProfile);
  const [transactions, setTransactions] = useState<Transaction[]>(mockTransactions);
  const [lessons, setLessons] = useState<Lesson[]>(mockLessons);
  const [miniGames] = useState<MiniGame[]>(mockMiniGames);
  const [portfolios] = useState<InvestmentPortfolio[]>(mockPortfolios);
  const [achievements, setAchievements] = useState<AchievementBadge[]>(mockAchievements);
  const [aiChat, setAiChat] = useState<AIChatMessage[]>(initialAIChat);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  
  const [activeLessonModal, setActiveLessonModal] = useState<Lesson | null>(null);
  const [activeGameModal, setActiveGameModal] = useState<MiniGame | null>(null);
  const [activeInvestModal, setActiveInvestModal] = useState<InvestmentPortfolio | null>(null);

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    soundManager.setEnabled(next);
    if (next) soundManager.playPop();
  };

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#FF3B30", "#FF453A", "#FF9500", "#FFFFFF", "#10B981"]
      });
    } catch {
      // Confetti fallback
    }
  };

  const addXP = (amount: number, _reason?: string) => {
    soundManager.playSuccess();
    setUser(prev => {
      const newXP = prev.xp + amount;
      const nextLevel = Math.floor(newXP / 350) + 1;
      const leveledUp = nextLevel > prev.level;
      if (leveledUp) {
        soundManager.playLevelUp();
        triggerConfetti();
      }
      return {
        ...prev,
        xp: newXP,
        level: nextLevel,
        financialScore: Math.min(100, prev.financialScore + Math.floor(amount / 20))
      };
    });
  };

  const triggerRoundup = (txId: string) => {
    const tx = transactions.find(t => t.id === txId);
    if (!tx || tx.isInvested) return;

    soundManager.playCoin();
    triggerConfetti();

    setTransactions(prev => prev.map(t => t.id === txId ? { ...t, isInvested: true } : t));
    setUser(prev => {
      const added = tx.roundupAmount;
      return {
        ...prev,
        simulatedBalance: +(prev.simulatedBalance + added).toFixed(2),
        monthlyRoundups: +(prev.monthlyRoundups + added).toFixed(2),
        totalRoundupsSaved: +(prev.totalRoundupsSaved + added).toFixed(2),
        xp: prev.xp + 15
      };
    });

    setAchievements(prev => prev.map(b => b.id === "badge-3" ? { ...b, isUnlocked: true } : b));
  };

  const investAmount = (portfolioId: string, amount: number) => {
    soundManager.playSuccess();
    triggerConfetti();

    setUser(prev => {
      const newBal = +(prev.simulatedBalance + amount).toFixed(2);
      const holdings = prev.activeHoldings.map(h => {
        if (h.portfolioId === portfolioId) {
          return { ...h, amount: +(h.amount + amount).toFixed(2) };
        }
        return h;
      });
      const totalH = holdings.reduce((sum, item) => sum + item.amount, 0);
      const updatedHoldings = holdings.map(h => ({
        ...h,
        sharePercent: Math.round((h.amount / totalH) * 100)
      }));

      return {
        ...prev,
        simulatedBalance: newBal,
        activeHoldings: updatedHoldings,
        xp: prev.xp + 25
      };
    });

    if (portfolioId === "green-future") {
      setAchievements(prev => prev.map(b => b.id === "badge-4" ? { ...b, isUnlocked: true } : b));
    }
  };

  const completeLesson = (lessonId: string) => {
    const lesson = lessons.find(l => l.id === lessonId);
    if (!lesson) return;

    addXP(lesson.xpReward);
    triggerConfetti();

    setLessons(prev => prev.map(l => l.id === lessonId ? { ...l, progressPercent: 100 } : l));
    setUser(prev => {
      const alreadyCompleted = prev.completedLessonIds.includes(lessonId);
      const completed = alreadyCompleted ? prev.completedLessonIds : [...prev.completedLessonIds, lessonId];
      return {
        ...prev,
        completedLessonIds: completed,
        financialScore: Math.min(100, prev.financialScore + 3)
      };
    });

    setAchievements(prev => prev.map(b => b.id === "badge-1" ? { ...b, isUnlocked: true } : b));
  };

  const completeGame = (gameId: string, _score: number, xpReward: number) => {
    addXP(xpReward);
    triggerConfetti();

    if (gameId === "game-scam-detector") {
      setAchievements(prev => prev.map(b => b.id === "badge-6" ? { ...b, isUnlocked: true } : b));
    } else if (gameId === "game-money-map") {
      setAchievements(prev => prev.map(b => b.id === "badge-7" ? { ...b, isUnlocked: true } : b));
    } else if (gameId === "game-risk-reward") {
      setAchievements(prev => prev.map(b => b.id === "badge-5" ? { ...b, isUnlocked: true } : b));
    }
  };

  const sendAIMessage = (text: string) => {
    if (!text.trim()) return;
    soundManager.playPop();

    const userMsg: AIChatMessage = {
      id: "msg-" + Date.now(),
      sender: "user",
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    setAiChat(prev => [...prev, userMsg]);

    setTimeout(() => {
      const lower = text.toLowerCase();
      let reply: string = "That is a great question about managing money. As a Gen Z investor, building daily consistency through small round-ups and compounding is 10x more powerful than trying to time market swings!";
      
      for (const [k, v] of Object.entries(aiKnowledgeBase)) {
        if (lower.includes(k)) {
          reply = v;
          break;
        }
      }

      const aiMsg: AIChatMessage = {
        id: "msg-ai-" + Date.now(),
        sender: "ai",
        text: reply,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        suggestedFollowUps: [
          "How do round-ups help my score?",
          "What is compound interest in practice?",
          "Tell me about Green Bonds vs Stocks"
        ]
      };

      setAiChat(prev => [...prev, aiMsg]);
      soundManager.playSuccess();
    }, 600);
  };

  return (
    <FinlitContext.Provider value={{
      user,
      transactions,
      lessons,
      miniGames,
      portfolios,
      achievements,
      aiChat,
      soundEnabled,
      activeLessonModal,
      activeGameModal,
      activeInvestModal,
      toggleSound,
      addXP,
      triggerRoundup,
      investAmount,
      completeLesson,
      completeGame,
      sendAIMessage,
      openLessonModal: setActiveLessonModal,
      closeLessonModal: () => setActiveLessonModal(null),
      openGameModal: setActiveGameModal,
      closeGameModal: () => setActiveGameModal(null),
      openInvestModal: setActiveInvestModal,
      closeInvestModal: () => setActiveInvestModal(null),
      triggerConfetti
    }}>
      {children}
    </FinlitContext.Provider>
  );
};

export const useFinlit = () => {
  const context = useContext(FinlitContext);
  if (!context) throw new Error("useFinlit must be used within a FinlitProvider");
  return context;
};
