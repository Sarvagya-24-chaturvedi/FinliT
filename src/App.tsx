import React from "react";
import { FinlitProvider } from "./context/FinlitContext";
import { CustomCursor } from "./components/common/CustomCursor";
import { Navbar } from "./components/layout/Navbar";
import { HeroSection } from "./components/hero/HeroSection";
import { ProblemSection } from "./components/problem/ProblemSection";
import { SolutionSection } from "./components/solution/SolutionSection";
import { RoundupsSection } from "./components/roundups/RoundupsSection";
import { LearningSection } from "./components/learning/LearningSection";
import { GamesSection } from "./components/games/GamesSection";
import { InvestmentSection } from "./components/investments/InvestmentSection";
import { PortfolioSection } from "./components/portfolio/PortfolioSection";
import { HealthScoreSection } from "./components/health/HealthScoreSection";
import { AICoachSection } from "./components/ai/AICoachSection";
import { AchievementsSection } from "./components/achievements/AchievementsSection";
import { FinalCTASection } from "./components/cta/FinalCTASection";
import { Footer } from "./components/layout/Footer";

export const App: React.FC = () => {
  return (
    <FinlitProvider>
      <div className="min-h-screen bg-[#050505] text-white selection:bg-[#FF3B30] selection:text-white relative">
        {/* Viewport Frame subtle glowing outline inspired by editorial reference */}
        <div className="viewport-frame hidden xl:block" />

        {/* Custom Trailing Glowing Cursor */}
        <CustomCursor />

        {/* Floating Top Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main>
          <HeroSection />
          <ProblemSection />
          <SolutionSection />
          <RoundupsSection />
          <LearningSection />
          <GamesSection />
          <InvestmentSection />
          <PortfolioSection />
          <HealthScoreSection />
          <AICoachSection />
          <AchievementsSection />
          <FinalCTASection />
        </main>

        {/* Editorial Footer */}
        <Footer />
      </div>
    </FinlitProvider>
  );
};

export default App;
