import { useState } from 'react';
import { PaymentTransaction } from '../types/user';
import { paymentGateway } from '../lib/payment';
import { emailService } from '../lib/email';
import toast from 'react-hot-toast';

export const usePayment = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const processPayment = async (data: {
    amount: number;
    currency: string;
    paymentMethod: PaymentTransaction['paymentMethod'];
    userId: string;
    email: string;
  }) => {
    setLoading(true);
    setError(null);

    try {
      const transaction = await paymentGateway.processPayment({
        amount: data.amount,
        currency: data.currency,
        paymentMethod: data.paymentMethod,
        userId: data.userId
      });

      if (transaction.status === 'COMPLETED') {
        // Send confirmation email
        await emailService.sendNotification({
          to: data.email,
          subject: 'Payment Confirmation',
          template: 'PAYMENT_CONFIRMATION',
          data: {
            amount: data.amount,
            currency: data.currency,
            transactionId: transaction.id,
            date: new Date().toLocaleDateString()
          }
        });

        toast.success('Payment processed successfully');
        return transaction;
      }

      throw new Error('Payment failed');
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Payment processing failed';
      setError(message);
      toast.error(message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    processPayment,
    loading,
    error
  };
};