import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Receipt, Download, CreditCard, Bitcoin, DollarSign, Building } from 'lucide-react';

interface Transaction {
  id: string;
  date: string;
  amount: number;
  status: 'completed' | 'pending' | 'failed';
  paymentMethod: 'CARD' | 'CRYPTO' | 'COD' | 'MMG';
}

const transactions: Transaction[] = [
  {
    id: 'INV-001',
    date: '2024-01-15',
    amount: 197,
    status: 'completed',
    paymentMethod: 'CARD'
  },
  {
    id: 'INV-002',
    date: '2023-12-15',
    amount: 197,
    status: 'completed',
    paymentMethod: 'CRYPTO'
  }
];

const BillingHistory = () => {
  const { isDarkMode } = useTheme();

  const getPaymentIcon = (method: Transaction['paymentMethod']) => {
    switch (method) {
      case 'CARD': return <CreditCard className="h-5 w-5" />;
      case 'CRYPTO': return <Bitcoin className="h-5 w-5" />;
      case 'COD': return <DollarSign className="h-5 w-5" />;
      case 'MMG': return <Building className="h-5 w-5" />;
    }
  };

  const getStatusColor = (status: Transaction['status']) => {
    switch (status) {
      case 'completed': return 'text-emerald-500 bg-emerald-500/10';
      case 'pending': return 'text-yellow-500 bg-yellow-500/10';
      case 'failed': return 'text-red-500 bg-red-500/10';
    }
  };

  return (
    <div className={`p-6 rounded-xl ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    } border border-gray-200 dark:border-gray-700`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Receipt className="h-6 w-6 text-gold" />
          <h2 className={`text-lg font-bold ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Billing History
          </h2>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className={`text-sm ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <th className="text-left pb-4">Invoice</th>
              <th className="text-left pb-4">Date</th>
              <th className="text-left pb-4">Amount</th>
              <th className="text-left pb-4">Status</th>
              <th className="text-left pb-4">Payment Method</th>
              <th className="text-right pb-4">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className={`py-4 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {transaction.id}
                </td>
                <td className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                  {new Date(transaction.date).toLocaleDateString()}
                </td>
                <td className="text-gold font-medium">
                  ${transaction.amount}
                </td>
                <td>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    getStatusColor(transaction.status)
                  }`}>
                    {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                  </span>
                </td>
                <td>
                  <div className="flex items-center space-x-2">
                    {getPaymentIcon(transaction.paymentMethod)}
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                      {transaction.paymentMethod}
                    </span>
                  </div>
                </td>
                <td className="text-right">
                  <button className={`inline-flex items-center space-x-1 ${
                    isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  } transition-colors`}>
                    <Download className="h-4 w-4" />
                    <span>PDF</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BillingHistory;