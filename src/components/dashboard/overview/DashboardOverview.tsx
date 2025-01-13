import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import DailyMotivation from './DailyMotivation';
import DailyReflection from './DailyReflection';
import StreakTracker from './StreakTracker';
import { 
  TrendingUp, 
  BarChart2,
  Target,
  Trophy,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  Users,
  BookOpen
} from 'lucide-react';
import StatsGrid from './StatsGrid';
import ProgressChart from './ProgressChart';
import RecentActivity from './RecentActivity';
import PillarWheel from '../pillars/PillarWheel';
import TaskManager from '../pillars/TaskManager';
import PillarProgress from '../pillars/PillarProgress';

const DashboardOverview = () => {
  const { isDarkMode } = useTheme();

  const stats = [
    {
      title: "Win Rate",
      value: "78%",
      change: "+2.5%",
      isPositive: true,
      icon: <TrendingUp className="h-5 w-5" />
    },
    {
      title: "Goals Completed",
      value: "12/15",
      change: "+4",
      isPositive: true,
      icon: <Target className="h-5 w-5" />
    },
    {
      title: "Achievement Points",
      value: "2,450",
      change: "+350",
      isPositive: true,
      icon: <Trophy className="h-5 w-5" />
    }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className={`p-6 rounded-2xl ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      } border border-gray-200 dark:border-gray-700`}>
        <div className="flex items-center justify-between">
          <div>
            <h1 className={`text-2xl font-bold mb-2 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Welcome back, John! 👋
            </h1>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Here's what's happening with your trading journey today.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-gold text-royal-dark rounded-lg hover:bg-gold-light transition-colors">
              Start Trading
            </button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <StatsGrid stats={stats} />

      {/* Charts and Activity Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Progress Chart */}
        <div className={`lg:col-span-2 p-6 rounded-2xl ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        } border border-gray-200 dark:border-gray-700`}>
          <div className="flex items-center justify-between mb-6">
            <h2 className={`text-lg font-bold ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Trading Performance
            </h2>
            <select className={`px-3 py-1 rounded-lg text-sm ${
              isDarkMode 
                ? 'bg-gray-700 text-white border-gray-600' 
                : 'bg-gray-100 text-gray-900 border-gray-200'
            } border`}>
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
          <ProgressChart />
        </div>

        {/* Recent Activity */}
        <div className={`p-6 rounded-2xl ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        } border border-gray-200 dark:border-gray-700`}>
          <h2 className={`text-lg font-bold mb-6 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Recent Activity
          </h2>
          <RecentActivity />
        </div>
      </div>

      {/* Motivation and Reflection */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2"><PillarWheel /></div>
        <PillarProgress />
      </div>

      {/* Task Manager */}
      <TaskManager />

      {/* Motivation and Reflection */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <DailyMotivation />
        <DailyReflection />
        <StreakTracker />
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <button className={`p-6 rounded-2xl border transition-all ${
          isDarkMode 
            ? 'bg-gray-800 border-gray-700 hover:bg-gray-700' 
            : 'bg-white border-gray-200 hover:bg-gray-50'
        } group`}>
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <BarChart2 className="h-6 w-6 text-blue-500" />
            </div>
            <ArrowUpRight className={`h-5 w-5 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            } group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform`} />
          </div>
          <h3 className={`text-lg font-bold mb-1 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Live Trading
          </h3>
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Join live trading sessions with expert traders
          </p>
        </button>

        <button className={`p-6 rounded-2xl border transition-all ${
          isDarkMode 
            ? 'bg-gray-800 border-gray-700 hover:bg-gray-700' 
            : 'bg-white border-gray-200 hover:bg-gray-50'
        } group`}>
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-emerald-500/10 rounded-lg">
              <Users className="h-6 w-6 text-emerald-500" />
            </div>
            <ArrowUpRight className={`h-5 w-5 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            } group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform`} />
          </div>
          <h3 className={`text-lg font-bold mb-1 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Community
          </h3>
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Connect with fellow traders and share insights
          </p>
        </button>

        <button className={`p-6 rounded-2xl border transition-all ${
          isDarkMode 
            ? 'bg-gray-800 border-gray-700 hover:bg-gray-700' 
            : 'bg-white border-gray-200 hover:bg-gray-50'
        } group`}>
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <BookOpen className="h-6 w-6 text-purple-500" />
            </div>
            <ArrowUpRight className={`h-5 w-5 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            } group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform`} />
          </div>
          <h3 className={`text-lg font-bold mb-1 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Resources
          </h3>
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Access educational content and trading guides
          </p>
        </button>
      </div>
    </div>
  );
};

export default DashboardOverview;