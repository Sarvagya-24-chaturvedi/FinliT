import { UserProfile, Transaction, Lesson, MiniGame, InvestmentPortfolio, AchievementBadge, AIChatMessage } from "../types/finlit";

export const initialUserProfile: UserProfile = {
  name: "Aarav Sharma",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  xp: 1240,
  level: 4,
  levelTitle: "INVESTMENT EXPLORER",
  streakDays: 7,
  simulatedBalance: 2845.20,
  monthlyRoundups: 183.50,
  totalRoundupsSaved: 1420.00,
  financialScore: 78,
  completedLessonIds: ["lesson-1"],
  activeHoldings: [
    { portfolioId: "green-future", amount: 1536.40, sharePercent: 54 },
    { portfolioId: "student-growth", amount: 882.00, sharePercent: 31 },
    { portfolioId: "balanced-future", amount: 426.80, sharePercent: 15 }
  ],
  unlockedBadgeIds: ["badge-1", "badge-2", "badge-3"]
};

export const mockTransactions: Transaction[] = [
  {
    id: "tx-1",
    merchant: "Blue Tokai Coffee",
    category: "Food & Drink",
    originalAmount: 127.00,
    roundedAmount: 130.00,
    roundupAmount: 3.00,
    timestamp: "Today, 10:24 AM",
    icon: "Coffee",
    isInvested: true,
    targetPortfolio: "green-future"
  },
  {
    id: "tx-2",
    merchant: "Delhi Metro Smart Card",
    category: "Transit",
    originalAmount: 43.00,
    roundedAmount: 45.00,
    roundupAmount: 2.00,
    timestamp: "Today, 8:45 AM",
    icon: "Train",
    isInvested: true,
    targetPortfolio: "green-future"
  },
  {
    id: "tx-3",
    merchant: "Swiggy Gourmet",
    category: "Food & Drink",
    originalAmount: 327.00,
    roundedAmount: 330.00,
    roundupAmount: 3.00,
    timestamp: "Yesterday, 8:15 PM",
    icon: "Utensils",
    isInvested: true,
    targetPortfolio: "student-growth"
  },
  {
    id: "tx-4",
    merchant: "Blinkit Grocery Delivery",
    category: "Groceries",
    originalAmount: 276.00,
    roundedAmount: 280.00,
    roundupAmount: 4.00,
    timestamp: "Yesterday, 5:30 PM",
    icon: "ShoppingBag",
    isInvested: false,
    targetPortfolio: "green-future"
  },
  {
    id: "tx-5",
    merchant: "BookMyShow Cinema",
    category: "Entertainment",
    originalAmount: 342.00,
    roundedAmount: 350.00,
    roundupAmount: 8.00,
    timestamp: "17 Aug, 7:00 PM",
    icon: "Film",
    isInvested: true,
    targetPortfolio: "balanced-future"
  },
  {
    id: "tx-6",
    merchant: "Amazon Essentials",
    category: "Shopping",
    originalAmount: 849.00,
    roundedAmount: 850.00,
    roundupAmount: 1.00,
    timestamp: "16 Aug, 3:12 PM",
    icon: "Package",
    isInvested: true,
    targetPortfolio: "student-growth"
  }
];

export const mockLessons: Lesson[] = [
  {
    id: "lesson-1",
    title: "Understanding Inflation",
    category: "Economics 101",
    xpReward: 20,
    progressPercent: 80,
    durationMinutes: 3,
    difficulty: "Beginner",
    description: "Why ₹100 today buys fewer items tomorrow, and how to beat the silent wealth killer.",
    keyTakeaways: [
      "Inflation is the gradual decrease in the purchasing power of your money.",
      "If inflation is 6%, an item costing ₹100 today will cost ₹106 next year.",
      "Keeping idle cash in a low-interest bank account actually loses you real wealth over time."
    ],
    conceptBreakdown: [
      {
        heading: "The Chai Index",
        text: "In 2010, a cup of cutting chai cost ₹5. Today, the same cup costs ₹15-20. The tea did not get 4x better — your currency simply lost purchasing power.",
        statHighlight: "Avg 6.2% Indian CPI inflation over the last decade"
      },
      {
        heading: "The Fix: Real vs Nominal Returns",
        text: "If your savings account pays 3.5% interest, but inflation is 6%, your REAL return is -2.5%! You need growth assets that outpace inflation.",
        statHighlight: "Real Return = Interest Rate minus Inflation"
      }
    ],
    quiz: {
      id: "q-1",
      question: "If you have ₹10,000 in a savings account earning 3% interest, but annual inflation is 6%, what happens to your purchasing power after 1 year?",
      options: [
        "It increases by 3%",
        "It stays exactly the same",
        "It decreases by approximately 3%",
        "It doubles automatically"
      ],
      correctIndex: 2,
      explanation: "Your nominal balance becomes ₹10,300, but because goods became 6% more expensive (needing ₹10,600), you can buy 3% less than before!"
    }
  },
  {
    id: "lesson-2",
    title: "Stocks vs Bonds",
    category: "Investing Basics",
    xpReward: 30,
    progressPercent: 60,
    durationMinutes: 4,
    difficulty: "Beginner",
    description: "Ownership vs Lending: The two fundamental building blocks of all modern wealth creation.",
    keyTakeaways: [
      "Buying a stock means you own a micro-slice of that business (equity).",
      "Buying a bond means you loaned money to a company or government for fixed interest (debt).",
      "Stocks have higher upside with higher volatility; bonds provide steady income with lower volatility."
    ],
    conceptBreakdown: [
      {
        heading: "Equity: Partnering with Giants",
        text: "When Apple or Tata sells more products, their valuation goes up and you share in that profit as a shareholder.",
        statHighlight: "Equity delivers ~12-14% CAGR over 10+ year horizons"
      },
      {
        heading: "Bonds: The Reliable IOUs",
        text: "When the government builds solar highways, they issue Green Sovereign Bonds that pay you a guaranteed coupon every year.",
        statHighlight: "Sovereign Green Bonds: 7.1% fixed sovereign yield"
      }
    ],
    quiz: {
      id: "q-2",
      question: "What is the primary difference between holding a stock vs holding a government bond?",
      options: [
        "Stocks give you ownership in a company; bonds are loans that pay fixed interest",
        "Bonds always have higher risk than any stock",
        "Stocks are issued by governments; bonds are issued by startups",
        "There is no difference between them"
      ],
      correctIndex: 0,
      explanation: "Stocks make you a co-owner of the company, while bonds make you a lender earning predictable contractual interest."
    }
  },
  {
    id: "lesson-3",
    title: "Build Your First Portfolio",
    category: "Portfolio Strategy",
    xpReward: 50,
    progressPercent: 30,
    durationMinutes: 5,
    difficulty: "Intermediate",
    description: "The golden rule of asset allocation: Never put all your eggs in one volatile basket.",
    keyTakeaways: [
      "Diversification minimizes risk without sacrificing expected long-term returns.",
      "The 50/30/20 budget framework helps allocate income before investing.",
      "Automated micro-investing turns daily spare change into a compounding basket."
    ],
    conceptBreakdown: [
      {
        heading: "The 3-Pillar Allocation",
        text: "A resilient Gen Z portfolio blends Growth (broad market index), Stability (green & sovereign debt), and Liquid Reserves (emergency buffer).",
        statHighlight: "A 70/30 diversified basket survives 85% of market shocks"
      }
    ],
    quiz: {
      id: "q-3",
      question: "Why do modern financial advisors universally recommend asset diversification?",
      options: [
        "To guarantee 100% gains every single day",
        "To reduce total portfolio risk so a single bad asset does not wipe out your capital",
        "Because the government legally mandates holding 10 different stocks",
        "To pay more broker transaction fees"
      ],
      correctIndex: 1,
      explanation: "When one sector dips, others hold firm or rise, smoothing your overall trajectory and shielding your hard-earned savings."
    }
  },
  {
    id: "lesson-4",
    title: "The Magic of Compound Interest",
    category: "Wealth Mechanics",
    xpReward: 35,
    progressPercent: 0,
    durationMinutes: 4,
    difficulty: "Beginner",
    description: "Why starting at age 20 with ₹10/day beats starting at age 35 with ₹100/day.",
    keyTakeaways: [
      "Compounding is interest earning interest on itself exponential over time.",
      "Time in the market matters far more than timing the market.",
      "Starting 5 years earlier can double your total retirement corpus."
    ],
    conceptBreakdown: [
      {
        heading: "The Snowball Formula",
        text: "Albert Einstein famously called compound interest the 8th wonder of the world. He who understands it, earns it; he who does not, pays it.",
        statHighlight: "₹100/day at 12% for 20 years turns into ₹29.9 Lakhs!"
      }
    ],
    quiz: {
      id: "q-4",
      question: "Which factor has the greatest mathematical multiplier on the final value of compound interest?",
      options: [
        "The stock broker you choose",
        "The total duration of time your money stays invested",
        "Checking the stock app every 10 minutes",
        "Investing only on Mondays"
      ],
      correctIndex: 1,
      explanation: "Time is the exponent in the compounding formula. Doubling your time horizon can multiply your total return exponentially!"
    }
  },
  {
    id: "lesson-5",
    title: "Credit Scores Demystified",
    category: "Credit & Safety",
    xpReward: 25,
    progressPercent: 0,
    durationMinutes: 3,
    difficulty: "Intermediate",
    description: "How credit bureaus track your financial reputation, and how to maintain a 750+ score.",
    keyTakeaways: [
      "Credit score ranges from 300 to 900 in India.",
      "Keep your credit card credit utilization ratio below 30%.",
      "Never miss a bill payment date — payment history is 35% of your score."
    ],
    conceptBreakdown: [
      {
        heading: "Credit is Trust Quantified",
        text: "A high credit score gets you lower home loan rates, premium credit cards with lounge access, and zero-deposit apartment rentals.",
        statHighlight: "750+ is the benchmark for prime lending rates"
      }
    ],
    quiz: {
      id: "q-5",
      question: "If your credit card has a limit of ₹50,000, what is the ideal maximum amount you should spend in a month to maintain a prime credit score?",
      options: [
        "₹49,999 (use all of it)",
        "₹15,000 (staying under 30% utilization)",
        "₹0 (never swipe the card)",
        "₹75,000 (overdraft limit)"
      ],
      correctIndex: 1,
      explanation: "Using under 30% of your available limit signals to credit bureaus that you are responsible and not reliant on emergency credit."
    }
  }
];

export const mockMiniGames: MiniGame[] = [
  {
    id: "game-money-map",
    gameNumber: "01",
    title: "MONEY MAP",
    tagline: "Can you balance a ₹35,000 monthly budget?",
    description: "Distribute a fresh graduate salary between rent, food deliveries, essentials, SIP investments, and emergency savings before running out of funds!",
    difficulty: "Easy",
    xpReward: 40,
    category: "Budgeting & Cashflow",
    badgeEarned: "BUDGET MASTER",
    icon: "MapPin"
  },
  {
    id: "game-risk-reward",
    gameNumber: "02",
    title: "RISK OR REWARD",
    tagline: "Would you take the risk in a volatile market?",
    description: "Navigate 3 unpredictable financial cycles: a roaring bull market, a sudden tech correction, and a clean-tech boom. Will you panic sell or dollar-cost average?",
    difficulty: "Medium",
    xpReward: 50,
    category: "Market Psychology",
    badgeEarned: "MARKET EXPLORER",
    icon: "TrendingUp"
  },
  {
    id: "game-scam-detector",
    gameNumber: "03",
    title: "SCAM DETECTOR",
    tagline: "Can you spot the financial phishing traps?",
    description: "Analyze real-world spoofed UPI messages, fake loan app permissions, and guaranteed 200% return schemes to protect your digital money.",
    difficulty: "Hard",
    xpReward: 60,
    category: "Financial Safety",
    badgeEarned: "SCAM SHIELD",
    icon: "ShieldAlert"
  }
];

export const mockPortfolios: InvestmentPortfolio[] = [
  {
    id: "green-future",
    name: "GREEN FUTURE",
    tagline: "Clean Energy & Sovereign ESG Bonds",
    riskLevel: "LOW RISK",
    expectedReturn: "6.5%",
    esgScore: 92,
    color: "#10B981",
    description: "Simulated micro-allocations into Sovereign Green Bonds, solar infrastructure trusts, and certified carbon-neutral industry innovators.",
    allocation: [
      { name: "Sovereign Green Bonds", percentage: 45 },
      { name: "Solar & Wind Energy InvITs", percentage: 35 },
      { name: "EV Mobility Debt Basket", percentage: 20 }
    ],
    minInvestment: 10,
    demoMetrics: {
      oneYearReturn: "+7.4%",
      volatility: "Low (0.42)",
      greenImpact: "2.4 Tons CO2 Offset / ₹10K"
    }
  },
  {
    id: "student-growth",
    name: "STUDENT GROWTH",
    tagline: "Diversified Broad Market & Gen Z Tech Index",
    riskLevel: "MEDIUM RISK",
    expectedReturn: "9.0%",
    esgScore: 82,
    color: "#FF3B30",
    description: "Simulated index tracking top 50 national companies, consumer tech leaders, and digital payment infrastructure with high student relevance.",
    allocation: [
      { name: "Nifty Top 50 Index Fund", percentage: 50 },
      { name: "Digital Consumer Tech Leaders", percentage: 30 },
      { name: "Fintech & Cloud Giants", percentage: 20 }
    ],
    minInvestment: 10,
    demoMetrics: {
      oneYearReturn: "+11.2%",
      volatility: "Moderate (0.78)",
      greenImpact: "A-Grade Governance"
    }
  },
  {
    id: "balanced-future",
    name: "BALANCED FUTURE",
    tagline: "All-Weather Gold, Debt & Equity Trio",
    riskLevel: "MEDIUM RISK",
    expectedReturn: "8.0%",
    esgScore: 75,
    color: "#F59E0B",
    description: "A Ray Dalio inspired all-weather basket designed to protect your capital against inflation while capturing market rallies.",
    allocation: [
      { name: "Large Cap Index", percentage: 40 },
      { name: "Government Treasury Bills", percentage: 40 },
      { name: "Sovereign Gold Bonds", percentage: 20 }
    ],
    minInvestment: 10,
    demoMetrics: {
      oneYearReturn: "+8.9%",
      volatility: "Low-Medium (0.55)",
      greenImpact: "Balanced Neutral"
    }
  }
];

export const mockAchievements: AchievementBadge[] = [
  {
    id: "badge-1",
    icon: "🏆",
    title: "FIRST LESSON",
    description: "Completed your first financial literacy lesson",
    category: "Learning",
    isUnlocked: true,
    unlockedDate: "12 Aug 2026",
    rarity: "Common"
  },
  {
    id: "badge-2",
    icon: "🔥",
    title: "7 DAY STREAK",
    description: "Maintained a 7-day continuous learning streak",
    category: "Streaks",
    isUnlocked: true,
    unlockedDate: "18 Aug 2026",
    rarity: "Rare"
  },
  {
    id: "badge-3",
    icon: "💰",
    title: "FIRST ROUND-UP",
    description: "Saved and invested your first spare change transaction",
    category: "Investing",
    isUnlocked: true,
    unlockedDate: "15 Aug 2026",
    rarity: "Common"
  },
  {
    id: "badge-4",
    icon: "🌱",
    title: "GREEN INVESTOR",
    description: "Invested in your first ESG Green Future portfolio",
    category: "Investing",
    isUnlocked: true,
    unlockedDate: "16 Aug 2026",
    rarity: "Rare"
  },
  {
    id: "badge-5",
    icon: "📈",
    title: "MARKET EXPLORER",
    description: "Completed investment basics and simulated first portfolio",
    category: "Learning",
    isUnlocked: false,
    rarity: "Rare"
  },
  {
    id: "badge-6",
    icon: "🛡️",
    title: "SCAM SHIELD",
    description: "Achieved a perfect score in the Scam Detector challenge",
    category: "Gaming",
    isUnlocked: false,
    rarity: "Legendary"
  },
  {
    id: "badge-7",
    icon: "🎯",
    title: "BUDGET MASTER",
    description: "Balanced the monthly budget without taking emergency debt",
    category: "Gaming",
    isUnlocked: false,
    rarity: "Legendary"
  }
];

export const initialAIChat: AIChatMessage[] = [
  {
    id: "ai-1",
    sender: "user",
    text: "Why should I care about inflation?",
    timestamp: "10:14 AM"
  },
  {
    id: "ai-2",
    sender: "ai",
    text: `Think of inflation as your money slowly losing purchasing power.

If ₹100 buys 5 cutting chais today, with 6% annual inflation, that same ₹100 will only buy 4 chais in a few years.

Keeping cash under your mattress or in a 3% savings account means your wealth is silently shrinking. That is why micro-investing into assets that beat inflation is key!`,
    timestamp: "10:15 AM",
    suggestedFollowUps: [
      "How do round-ups fight inflation?",
      "What is the difference between SIP and lumpsum?",
      "How much should a college student invest?"
    ]
  }
];

export const aiKnowledgeBase: Record<string, string> = {
  "inflation": "Inflation is the rate at which general prices increase. Over time, it silently erodes cash purchasing power. Investing into assets like index funds and green bonds helps your money grow faster than inflation.",
  "round-up": "Round-ups automatically round your daily debit card or UPI transactions to the nearest ₹10 or ₹50 and invest the spare change. For example, a ₹127 coffee rounds to ₹130, investing ₹3 into your Green Future Bond!",
  "sip": "SIP (Systematic Investment Plan) is a disciplined method of investing a fixed micro-amount regularly (daily, weekly, or monthly). It leverages rupee cost averaging so you do not have to stress over market timing.",
  "student": "As a student, time is your greatest superpower! Even investing ₹10 to ₹50 a day from spare change can turn into lakhs over your college years thanks to compound interest.",
  "emergency": "An emergency fund is 3 to 6 months of living expenses kept in safe, instantly liquid assets for unexpected repairs, medical bills, or job transitions.",
  "credit": "Your credit score (300-900) is your financial trust meter. A score above 750 unlocks lower interest rates and zero-security deposit perks. Never miss bill due dates and keep credit utilization below 30%!",
  "green": "Green Bonds are fixed-income instruments specifically earmarked to fund climate and environmental projects like solar grids, clean water plants, and electric mass transit."
};
