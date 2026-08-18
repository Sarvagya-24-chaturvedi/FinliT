export interface UserProfile {
  name: string;
  avatar: string;
  xp: number;
  level: number;
  levelTitle: string;
  streakDays: number;
  simulatedBalance: number;
  monthlyRoundups: number;
  totalRoundupsSaved: number;
  financialScore: number;
  completedLessonIds: string[];
  activeHoldings: {
    portfolioId: string;
    amount: number;
    sharePercent: number;
  }[];
  unlockedBadgeIds: string[];
}

export interface Transaction {
  id: string;
  merchant: string;
  category: string;
  originalAmount: number;
  roundedAmount: number;
  roundupAmount: number;
  timestamp: string;
  icon: string;
  isInvested: boolean;
  targetPortfolio: string;
}

export interface LessonQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Lesson {
  id: string;
  title: string;
  category: string;
  xpReward: number;
  progressPercent: number;
  durationMinutes: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  keyTakeaways: string[];
  conceptBreakdown: {
    heading: string;
    text: string;
    statHighlight?: string;
  }[];
  quiz: LessonQuestion;
}

export interface MiniGame {
  id: string;
  gameNumber: string;
  title: string;
  tagline: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  xpReward: number;
  category: string;
  badgeEarned: string;
  icon: string;
}

export interface InvestmentPortfolio {
  id: string;
  name: string;
  tagline: string;
  riskLevel: 'LOW RISK' | 'MEDIUM RISK' | 'GROWTH';
  expectedReturn: string;
  esgScore: number;
  color: string;
  description: string;
  allocation: { name: string; percentage: number }[];
  minInvestment: number;
  demoMetrics: {
    oneYearReturn: string;
    volatility: string;
    greenImpact: string;
  };
}

export interface AchievementBadge {
  id: string;
  icon: string;
  title: string;
  description: string;
  category: 'Learning' | 'Investing' | 'Streaks' | 'Gaming';
  isUnlocked: boolean;
  unlockedDate?: string;
  rarity: 'Common' | 'Rare' | 'Legendary';
}

export interface AIChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
  suggestedFollowUps?: string[];
}
