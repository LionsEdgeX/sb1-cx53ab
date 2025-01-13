import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { Quote, RefreshCw, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';

const quotes = [
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs"
  }
];

const DailyMotivation = () => {
  const { isDarkMode } = useTheme();
  const [quoteIndex, setQuoteIndex] = React.useState(0);
  const [isRefreshing, setIsRefreshing] = React.useState(false);

  const refreshQuote = () => {
    setIsRefreshing(true);
    setQuoteIndex((prev) => (prev + 1) % quotes.length);
    // Simulate API call
    setTimeout(() => {
      setIsRefreshing(false);
      toast.success('New quote loaded!');
    }, 500);
  };

  return (
    <div className={`p-6 rounded-2xl ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    } border border-gray-200 dark:border-gray-700`}>
      <div className="flex items-center justify-between mb-4">
        <h2 className={`text-lg font-bold ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Daily Motivation
        </h2>
        <button 
          onClick={refreshQuote}
          disabled={isRefreshing}
          className={`p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors ${
            isRefreshing ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isRefreshing ? (
            <Loader2 className="h-5 w-5 text-gold animate-spin" />
          ) : (
            <RefreshCw className="h-5 w-5 text-gold" />
          )}
        </button>
      </div>
      
      <div className="relative">
        <Quote className="absolute -top-2 -left-2 h-8 w-8 text-gold/20" />
        <blockquote className="pl-8 pr-4">
          <p className={`text-lg mb-2 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            {quotes[quoteIndex].text}
          </p>
          <footer className={`text-sm ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            — {quotes[quoteIndex].author}
          </footer>
        </blockquote>
      </div>
    </div>
  );
};

export default DailyMotivation;