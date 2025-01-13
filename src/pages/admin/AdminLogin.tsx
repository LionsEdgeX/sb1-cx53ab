import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Mail, Lock, Shield, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const AdminLogin = () => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mfaCode, setMfaCode] = useState('');
  const [showMfa, setShowMfa] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!showMfa) {
        // Simulate first-factor authentication
        await new Promise(resolve => setTimeout(resolve, 1000));
        setShowMfa(true);
        toast.success('Please enter your 2FA code');
      } else {
        // Simulate MFA verification
        await new Promise(resolve => setTimeout(resolve, 1000));
        if (mfaCode === '123456') {
          toast.success('Successfully logged in');
          navigate('/admin/dashboard');
        } else {
          toast.error('Invalid 2FA code');
        }
      }
    } catch (error) {
      toast.error('Authentication failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-royal-dark to-royal">
      <div className={`w-full max-w-md p-8 rounded-2xl ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      } shadow-2xl border border-gray-200 dark:border-gray-700`}>
        <div className="flex justify-center mb-8">
          <div className="p-3 bg-gold/20 rounded-xl">
            <Shield className="h-8 w-8 text-gold" />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-center text-gold mb-2">
          Admin Portal
        </h1>
        <p className="text-center text-gray-400 mb-8">
          Secure access to system management
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {!showMfa ? (
            <>
              <div className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Admin Email"
                    className={`w-full pl-10 pr-4 py-3 rounded-lg ${
                      isDarkMode
                        ? 'bg-gray-700 text-white border-gray-600'
                        : 'bg-gray-100 text-gray-900 border-gray-200'
                    } border focus:outline-none focus:ring-2 focus:ring-gold`}
                    required
                  />
                </div>

                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className={`w-full pl-10 pr-4 py-3 rounded-lg ${
                      isDarkMode
                        ? 'bg-gray-700 text-white border-gray-600'
                        : 'bg-gray-100 text-gray-900 border-gray-200'
                    } border focus:outline-none focus:ring-2 focus:ring-gold`}
                    required
                  />
                </div>
              </div>
            </>
          ) : (
            <div className="relative">
              <Shield className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={mfaCode}
                onChange={(e) => setMfaCode(e.target.value)}
                placeholder="Enter 2FA Code"
                className={`w-full pl-10 pr-4 py-3 rounded-lg ${
                  isDarkMode
                    ? 'bg-gray-700 text-white border-gray-600'
                    : 'bg-gray-100 text-gray-900 border-gray-200'
                } border focus:outline-none focus:ring-2 focus:ring-gold`}
                required
              />
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gold hover:bg-gold-light text-royal-dark py-3 rounded-lg transition-colors flex items-center justify-center space-x-2 disabled:opacity-70"
          >
            {loading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <>
                <span>{showMfa ? 'Verify' : 'Sign In'}</span>
                <Shield className="h-5 w-5" />
              </>
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
            Protected by advanced security protocols
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;