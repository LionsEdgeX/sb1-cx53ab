import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import type { DashboardTab } from '../types/dashboard';
import DashboardOverview from '../components/dashboard/overview/DashboardOverview';
import ProgressSection from '../components/dashboard/progress/ProgressSection';
import GoalsSection from '../components/dashboard/goals/GoalsSection';
import AchievementsSection from '../components/dashboard/achievements/AchievementsSection';
import CoursesSection from '../components/dashboard/courses/CoursesSection';
import CommunitySection from '../components/dashboard/community/CommunitySection';
import SelfEvaluationSection from '../components/dashboard/evaluation/SelfEvaluationSection';

const Dashboard = () => {
  const { isDarkMode } = useTheme();
  const [activeTab, setActiveTab] = React.useState<DashboardTab>('evaluation');

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <DashboardSidebar activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="lg:pl-64">
        <DashboardHeader />
        
        <main className="p-6 max-w-7xl mx-auto">
          {activeTab === 'overview' && <DashboardOverview />}
          {activeTab === 'progress' && <ProgressSection />}
          {activeTab === 'goals' && <GoalsSection />}
          {activeTab === 'achievements' && <AchievementsSection />}
          {activeTab === 'courses' && <CoursesSection />}
          {activeTab === 'community' && <CommunitySection />}
          {activeTab === 'evaluation' && <SelfEvaluationSection />}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;