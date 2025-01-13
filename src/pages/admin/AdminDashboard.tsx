import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import AdminSidebar from '../../components/admin/AdminSidebar';
import AdminHeader from '../../components/admin/AdminHeader';
import SystemOverview from '../../components/admin/overview/SystemOverview';
import UserManagement from '../../components/admin/users/UserManagement';
import ContentManager from '../../components/admin/content/ContentManager';
import CourseBuilder from '../../components/admin/courses/CourseBuilder';
import CoachPortal from '../../components/admin/coaches/CoachPortal';
import TeamManager from '../../components/admin/teams/TeamManager';
import SystemConfig from '../../components/admin/system/SystemConfig';

export type AdminTab = 
  | 'overview'
  | 'users'
  | 'content'
  | 'courses'
  | 'coaches'
  | 'teams'
  | 'config';

const AdminDashboard = () => {
  const { isDarkMode } = useTheme();
  const [activeTab, setActiveTab] = useState<AdminTab>('overview');

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <AdminSidebar activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="lg:pl-64">
        <AdminHeader />
        
        <main className="p-6">
          {activeTab === 'overview' && <SystemOverview />}
          {activeTab === 'users' && <UserManagement />}
          {activeTab === 'content' && <ContentManager />}
          {activeTab === 'courses' && <CourseBuilder />}
          {activeTab === 'coaches' && <CoachPortal />}
          {activeTab === 'teams' && <TeamManager />}
          {activeTab === 'config' && <SystemConfig />}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;