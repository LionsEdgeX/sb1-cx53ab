import { PaymentTransaction } from '../types/user';

class PaymentGateway {
  private static instance: PaymentGateway;

  private constructor() {}

  public static getInstance(): PaymentGateway {
    if (!PaymentGateway.instance) {
      PaymentGateway.instance = new PaymentGateway();
    }
    return PaymentGateway.instance;
  }

  async processPayment(data: {
    amount: number;
    currency: string;
    paymentMethod: PaymentTransaction['paymentMethod'];
    userId: string;
  }): Promise<PaymentTransaction> {
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    const success = Math.random() > 0.1; // 90% success rate

    if (!success) {
      throw new Error('Payment processing failed');
    }

    return {
      id: crypto.randomUUID(),
      userId: data.userId,
      amount: data.amount,
      currency: data.currency,
      status: 'COMPLETED',
      paymentMethod: data.paymentMethod,
      createdAt: new Date().toISOString()
    };
  }

  async validatePayment(paymentId: string): Promise<boolean> {
    // Simulate payment validation
    await new Promise(resolve => setTimeout(resolve, 1000));
    return true;
  }
}

export const paymentGateway = PaymentGateway.getInstance();