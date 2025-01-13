export type AdminRole = 'SUPER_ADMIN' | 'SYSTEM_ADMIN' | 'CONTENT_MANAGER' | 'COACH' | 'TEAM_LEAD';

export interface AdminUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: AdminRole;
  permissions: string[];
  mfaEnabled: boolean;
  lastLogin: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  createdAt: string;
  updatedAt: string;
}

export interface AuditLog {
  id: string;
  userId: string;
  action: string;
  entityType: string;
  entityId: string;
  changes: Record<string, any>;
  ipAddress: string;
  userAgent: string;
  timestamp: string;
}

export interface SystemConfig {
  id: string;
  key: string;
  value: any;
  category: 'API' | 'SECURITY' | 'EMAIL' | 'PAYMENT' | 'GENERAL';
  description: string;
  lastModified: string;
  modifiedBy: string;
}

export interface BackupConfig {
  enabled: boolean;
  frequency: 'DAILY' | 'WEEKLY' | 'MONTHLY';
  retention: number;
  lastBackup: string;
  nextBackup: string;
  storageType: 'LOCAL' | 'S3' | 'GOOGLE_CLOUD';
  config: Record<string, any>;
}

export interface PerformanceMetrics {
  cpu: number;
  memory: number;
  disk: number;
  activeUsers: number;
  requestsPerMinute: number;
  averageResponseTime: number;
  errorRate: number;
  timestamp: string;
}