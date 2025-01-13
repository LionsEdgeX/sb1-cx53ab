import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createChart } from 'lightweight-charts';
import { useTheme } from '../contexts/ThemeContext';
import {
  TrendingUp, 
  Clock,
  Home,
  Settings,
  Calculator,
  DollarSign,
  Newspaper,
  Bell,
  ChevronDown,
  Search,
  ArrowUpRight,
  ArrowDownRight,
  ChevronRight,
  Users,
  BookOpen,
  Table,
  Layout,
  Activity,
  Wallet,
  Sliders,
  Target,
  BarChart2
} from 'lucide-react';

const MarketSamuraiPlatform = () => {
  const { isDarkMode } = useTheme();
  const [activeTimeframe, setActiveTimeframe] = useState('1H');
  const navigate = useNavigate();
  const chartContainerRef = React.useRef<HTMLDivElement>(null);
  const chartRef = React.useRef<any>(null);

  React.useEffect(() => {
    if (chartContainerRef.current) {
      const chart = createChart(chartContainerRef.current, {
        layout: {
          background: { color: '#00274D' },
          textColor: '#DDD',
        },
        grid: {
          vertLines: { color: 'rgba(255, 255, 255, 0.1)' },
          horzLines: { color: 'rgba(255, 255, 255, 0.1)' },
        },
        width: chartContainerRef.current.clientWidth,
        height: 400,
      });

      const candlestickSeries = chart.addCandlestickSeries({
        upColor: '#50C878',
        downColor: '#FF4136',
        borderVisible: false,
        wickUpColor: '#50C878',
        wickDownColor: '#FF4136',
      });

      // Sample data
      const data = [
        { time: '2024-01-01', open: 45000, high: 47000, low: 44800, close: 46500 },
        { time: '2024-01-02', open: 46500, high: 48000, low: 46200, close: 47800 },
        { time: '2024-01-03', open: 47800, high: 48500, low: 47000, close: 48200 },
        // Add more data points as needed
      ];

      candlestickSeries.setData(data);
      chartRef.current = chart;

      const handleResize = () => {
        if (chartContainerRef.current && chartRef.current) {
          chartRef.current.applyOptions({
            width: chartContainerRef.current.clientWidth,
          });
        }
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        if (chartRef.current) {
          chartRef.current.remove();
        }
      };
    }
  }, []);

  const stats = [
    { value: '$2,478.90', label: 'Total Balance', change: '+3.02%', isPositive: true },
    { value: '$3,27.23', label: 'Profit & Loss', change: '-1.45%', isPositive: false },
    { value: '$2,478.90', label: 'Total Deposit', change: '+2.80%', isPositive: true }
  ];

  const orderBook = Array(15).fill(null).map((_, i) => ({
    price: (19852.63 + (i * 0.5)).toFixed(2),
    size: (0.050300 + (i * 0.000001)).toFixed(6),
    total: (2.362877 + (i * 0.000001)).toFixed(6)
  }));

  const marketPreviews = [
    { pair: 'LTC/USDT', price: '120.45', change: '+1.24%', isPositive: true },
    { pair: 'BTC/USDT', price: '120.45', change: '+2.34%', isPositive: true },
    { pair: 'ETH/USDT', price: '120.45', change: '-2.24%', isPositive: false },
    { pair: 'XRP/USDT', price: '120.45', change: '-2.54%', isPositive: false },
    { pair: 'ADA/USDT', price: '120.45', change: '-2.24%', isPositive: false }
  ];

  const sidebarItems = [
    { icon: <Layout className="h-5 w-5" />, label: 'Dashboard' },
    { icon: <Activity className="h-5 w-5" />, label: 'Market' },
    { icon: <TrendingUp className="h-5 w-5" />, label: 'ICO Listing' },
    { icon: <Users className="h-5 w-5" />, label: 'P2P' },
    { icon: <BarChart2 className="h-5 w-5" />, label: 'Future' },
    { icon: <Clock className="h-5 w-5" />, label: 'Intraday Trading' },
    { icon: <Calculator className="h-5 w-5" />, label: 'Compound Calculator' },
    { icon: <DollarSign className="h-5 w-5" />, label: 'Networth Calculator' },
    { icon: <Newspaper className="h-5 w-5" />, label: 'Cashflow Tool' },
    { icon: <Newspaper className="h-5 w-5" />, label: 'News' },
    { icon: <BookOpen className="h-5 w-5" />, label: 'Reports' },
    { icon: <Wallet className="h-5 w-5" />, label: 'Crypto' },
    { icon: <Target className="h-5 w-5" />, label: 'Apps' }
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      {/* Left Sidebar */}
      <div className="fixed left-0 top-0 bottom-0 w-64 bg-royal-dark border-r border-gray-800 p-4">
        <div className="flex items-center space-x-3 mb-8">
          <BarChart2 className="h-8 w-8 text-gold" />
          <span className="text-xl font-bold text-white">Market Samurai</span>
        </div>

        <div className="space-y-2">
          {sidebarItems.map((item, index) => (
            <button
              key={index}
              className="w-full flex items-center space-x-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
              title={item.label}
              onClick={() => {
                // Handle menu item click
                console.log(`Clicked: ${item.label}`);
              }}
            >
              {item.icon}
              <span>{item.label}</span>
              {(item.label === 'Future' || item.label === 'P2P') && (
                <div className="ml-auto px-2 py-0.5 text-xs bg-gold/20 text-gold rounded-full">New</div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64">
        {/* Top Navigation */}
        <nav className="bg-royal-dark border-b border-gray-800 sticky top-0 z-50">
          <div className="max-w-full mx-auto px-6">
            <div className="flex items-center justify-between h-16">
              <div className="relative w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="search"
                  placeholder="Search here..."
                  className="w-full bg-gray-800 text-white pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50"
                />
              </div>
              
              <div className="flex items-center space-x-6">
                <button 
                  onClick={() => navigate('/')}
                  className="flex items-center space-x-2 text-gold hover:text-gold-light transition-colors"
                >
                  <Home className="h-5 w-5" />
                  <span className="text-sm font-medium">Home</span>
                </button>
                <button className="text-gold hover:text-gold-light">
                  <Bell className="h-5 w-5" />
                </button>
                <button className="text-gold hover:text-gold-light">
                  <Settings className="h-5 w-5" />
                </button>
                <div className="flex items-center space-x-3 text-white cursor-pointer hover:text-gold transition-colors">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
                    alt="Profile"
                    className="h-8 w-8 rounded-full border-2 border-gold object-cover ring-2 ring-gold/20 ring-offset-2 ring-offset-royal-dark"
                  />
                  <span>John Doe</span>
                  <ChevronDown className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content Area */}
        <div className="p-6 space-y-6">
          {/* Hero Section */}
          <div className="bg-royal-dark rounded-xl p-8 relative overflow-hidden">
            <div className="absolute right-0 top-0 bottom-0 w-1/3">
              <img
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80"
                alt="Trading"
                className="w-full h-full object-cover opacity-10"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-royal-dark" />
            </div>
            <div className="relative z-10 max-w-2xl">
              <h1 className="text-3xl font-bold text-white mb-4">
                Buy & Sell 100+ coins instantly
              </h1>
              <p className="text-gray-400 mb-6">
                Trade cryptocurrencies with advanced tools and real-time market data
              </p>
              <button className="bg-emerald-500 text-white px-6 py-2 rounded-lg hover:bg-emerald-600 transition-colors">
                Buy Coin
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-royal-dark rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-400">{stat.label}</h3>
                  <span className={`text-sm ${stat.isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
                    {stat.change}
                  </span>
                </div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="mt-4 h-12 bg-gray-800 rounded-lg overflow-hidden">
                  {/* Placeholder for sparkline chart */}
                </div>
              </div>
            ))}
          </div>

          {/* Trading Section */}
          <div className="grid grid-cols-12 gap-6">
            {/* Chart */}
            <div className="col-span-8 bg-royal-dark rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <h2 className="text-xl font-bold text-white">BTC/USDT</h2>
                  <span className="text-emerald-400 font-medium">$47,890.23</span>
                  <span className="text-emerald-400">+2.34%</span>
                </div>
                <div className="flex items-center space-x-2">
                  {['1H', '4H', '1D', '1W'].map((timeframe) => (
                    <button
                      key={timeframe}
                      onClick={() => setActiveTimeframe(timeframe)}
                      className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                        activeTimeframe === timeframe
                          ? 'bg-gold text-royal-dark font-medium'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {timeframe}
                    </button>
                  ))}
                </div>
              </div>
              <div ref={chartContainerRef} className="h-[400px] w-full rounded-lg overflow-hidden" />
            </div>

            {/* Order Book */}
            <div className="col-span-4 bg-royal-dark rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-white">Order Book</h3>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 text-sm bg-emerald-500 text-white rounded-lg hover:bg-emerald-600">
                    Buy
                  </button>
                  <button className="px-4 py-2 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600">
                    Sell
                  </button>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-3 text-sm text-gray-400 pb-2 border-b border-gray-800">
                  <span>Price</span>
                  <span className="text-right">Size</span>
                  <span className="text-right">Total</span>
                </div>
                
                <div className="space-y-1.5">
                  {orderBook.map((order, index) => (
                    <div key={index} className="grid grid-cols-3 text-sm">
                      <span className={index < 7 ? 'text-red-400' : 'text-emerald-400'}>
                        {order.price}
                      </span>
                      <span className="text-gray-400 text-right">{order.size}</span>
                      <span className="text-gray-400 text-right">{order.total}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-12 gap-6">
            {/* Asset Allocation */}
            <div className="col-span-4 bg-royal-dark rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-6">Assets Allocation</h3>
              <div className="relative aspect-square">
                {/* Placeholder for pie chart */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">30</div>
                    <div className="text-sm text-gray-400">In-Store Sales</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Market Previews */}
            <div className="col-span-4 bg-royal-dark rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-6">Market Previews</h3>
              <div className="space-y-4">
                {marketPreviews.map((market, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                        <TrendingUp className="h-4 w-4 text-gold" />
                      </div>
                      <div>
                        <div className="text-white font-medium">{market.pair}</div>
                        <div className="text-sm text-gray-400">January</div>
                      </div>
                    </div>
                    <div className={market.isPositive ? 'text-emerald-400' : 'text-red-400'}>
                      {market.change}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Server Status */}
            <div className="col-span-4 bg-royal-dark rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-6">Server Status</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white font-medium">7,842</div>
                    <div className="text-sm text-gray-400">Total emails Subscriber</div>
                  </div>
                  <button className="px-4 py-2 bg-gold text-royal-dark rounded-lg hover:bg-gold-light transition-colors">
                    Buy Coin
                  </button>
                </div>
                <div className="grid grid-cols-6 gap-2 mt-4">
                  {[96, 80, 60, 40, 90, 55].map((value, index) => (
                    <div key={index} className="space-y-2">
                      <div className="h-24 bg-gray-800 rounded-lg relative overflow-hidden">
                        <div
                          className="absolute bottom-0 left-0 right-0 bg-gold"
                          style={{ height: `${value}%` }}
                        />
                      </div>
                      <div className="text-center text-sm text-gray-400">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketSamuraiPlatform;