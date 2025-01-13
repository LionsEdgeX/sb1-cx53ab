import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import SystemMetrics from './SystemMetrics';
import SystemHealth from './SystemHealth';
import RecentActivity from './RecentActivity';
import BackupStatus from './BackupStatus';

const SystemOverview = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="space-y-6">
      {/* System Metrics */}
      <SystemMetrics />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* System Health */}
        <div className="lg:col-span-2">
          <SystemHealth />
        </div>

        {/* Backup Status */}
        <BackupStatus />
      </div>

      {/* Recent Activity */}
      <RecentActivity />
    </div>
  );
};

export default SystemOverview;