import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const trades = [
  {
    id: 1,
    pair: 'BTC/USDT',
    type: 'Long',
    entry: 45000,
    exit: 46500,
    profit: 1500,
    date: '2024-01-15',
    isWin: true
  },
  {
    id: 2,
    pair: 'ETH/USDT',
    type: 'Short',
    entry: 2800,
    exit: 2750,
    profit: 50,
    date: '2024-01-14',
    isWin: true
  },
  {
    id: 3,
    pair: 'BTC/USDT',
    type: 'Long',
    entry: 44500,
    exit: 44000,
    profit: -500,
    date: '2024-01-14',
    isWin: false
  },
  {
    id: 4,
    pair: 'SOL/USDT',
    type: 'Long',
    entry: 95,
    exit: 98,
    profit: 300,
    date: '2024-01-13',
    isWin: true
  }
];

const TradeHistory = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`rounded-2xl ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    } border border-gray-200 dark:border-gray-700 overflow-hidden`}>
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h2 className={`text-lg font-bold ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Recent Trades
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className={`text-sm ${
            isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-50 text-gray-600'
          }`}>
            <tr>
              <th className="px-6 py-3 text-left">Pair</th>
              <th className="px-6 py-3 text-left">Type</th>
              <th className="px-6 py-3 text-right">Entry</th>
              <th className="px-6 py-3 text-right">Exit</th>
              <th className="px-6 py-3 text-right">Profit/Loss</th>
              <th className="px-6 py-3 text-left">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {trades.map((trade) => (
              <tr key={trade.id} className={`text-sm ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    {trade.isWin ? (
                      <ArrowUpRight className="h-4 w-4 text-emerald-500 mr-2" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4 text-red-500 mr-2" />
                    )}
                    {trade.pair}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    trade.type === 'Long'
                      ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200'
                      : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                  }`}>
                    {trade.type}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">${trade.entry}</td>
                <td className="px-6 py-4 text-right">${trade.exit}</td>
                <td className={`px-6 py-4 text-right font-medium ${
                  trade.profit >= 0 
                    ? 'text-emerald-500' 
                    : 'text-red-500'
                }`}>
                  ${Math.abs(trade.profit)}
                </td>
                <td className="px-6 py-4">{trade.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TradeHistory;