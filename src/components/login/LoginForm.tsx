import React, { useState } from 'react';
import { Mail, Lock, ArrowRight, Loader2, BarChart2, RefreshCw } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Header from './Header';

const LoginForm = () => {
  const [isLabMode, setIsLabMode] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accessCode, setAccessCode] = useState('');
  const { signIn, loading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLabMode) {
      if (accessCode === 'LNX-BBP') {
        toast.success('Access granted! Welcome to Market Samurai');
        navigate('/market-samurai-platform');
      } else {
        toast.error('Invalid access code');
      }
    } else {
      await signIn(email, password);
    }
  };

  const toggleMode = () => {
    setIsLabMode(!isLabMode);
    setEmail('');
    setPassword('');
    setAccessCode('');
  };

  return (
    <div className="w-full max-w-md space-y-8">
      <div className="relative">
        <button
          onClick={toggleMode}
          className="absolute -top-4 -right-4 p-2 bg-gold hover:bg-gold-light text-royal-dark rounded-full transform hover:scale-110 transition-all duration-300 group shadow-lg hover:shadow-xl"
          title={isLabMode ? "Switch to University Login" : "Switch to LAB Access"}
        >
          <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
        </button>
        {isLabMode ? (
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gold/20 rounded-xl">
                <BarChart2 className="h-8 w-8 text-gold" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gold mb-2">Trading LAB Access</h2>
            <p className="text-royal-light">Enter your access code to unlock the platform</p>
          </div>
        ) : (
          <Header />
        )}
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        {isLabMode ? (
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gold" />
            <input
              type="text"
              value={accessCode}
              onChange={(e) => setAccessCode(e.target.value.toUpperCase())}
              placeholder="Enter Access Code"
              className="w-full pl-10 pr-4 py-4 bg-royal-dark border-2 border-gold/20 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent text-white placeholder-gold/70 text-center tracking-widest"
              required
            />
          </div>
        ) : (
          <div className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gold" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="w-full pl-10 pr-4 py-3 bg-royal-dark border border-gold/20 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent text-white placeholder-gold/70"
              required
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gold" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full pl-10 pr-4 py-3 bg-royal-dark border border-gold/20 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent text-white placeholder-gold/70"
              required
            />
          </div>
        </div>)}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gold hover:bg-gold-light text-royal-dark py-3 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center space-x-2 font-bold disabled:opacity-70"
        >
          {loading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <>{isLabMode ? (
              <span>Access Trading LAB</span>
            ) : (
              <span>Sign In</span>
            )}
              <ArrowRight className="h-5 w-5" />
            </>
          )}
        </button>
        {isLabMode && (
          <div className="text-center">
            <p className="text-royal-light text-sm">
              Access to Crypto • FOREX • Stocks • Arbitrage
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default LoginForm;