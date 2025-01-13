export interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  address?: {
    street: string;
    city: string;
    country: string;
    region: string;
    postalCode: string;
  };
  accountStatus: 'ACTIVE' | 'INACTIVE';
  paymentStatus: 'PAID' | 'UNPAID' | 'PENDING';
  subscription: {
    plan: 'FREE' | 'PRO' | 'ELITE';
    startDate: string;
    endDate: string;
    autoRenew: boolean;
  };
  createdAt: string;
  updatedAt: string;
}

export interface PaymentTransaction {
  id: string;
  userId: string;
  amount: number;
  currency: string;
  status: 'PENDING' | 'COMPLETED' | 'FAILED';
  paymentMethod: 'CRYPTO' | 'CARD' | 'COD' | 'MMG';
  createdAt: string;
  metadata?: Record<string, any>;
}

export interface EmailNotification {
  to: string;
  subject: string;
  template: 'PAYMENT_CONFIRMATION' | 'ACCOUNT_ACTIVATION' | 'PASSWORD_RESET';
  data: Record<string, any>;
}