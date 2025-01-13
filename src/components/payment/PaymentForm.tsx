import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Loader2, CreditCard, Key, X, Bitcoin, Building, DollarSign, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { PaymentTransaction } from '../../types/user';

interface PaymentFormProps {
  amount: number;
  planName: string;
  onSuccess: (transaction: any) => void;
  onCancel: () => void;
}

interface BioData {
  firstName: string;
  lastName: string;
  email: string;
  whatsapp: string;
}

const PaymentForm: React.FC<PaymentFormProps> = ({
  amount,
  planName,
  onSuccess,
  onCancel
}) => {
  const { isDarkMode } = useTheme();
  const [loading, setLoading] = useState(false);
  const [showAccessCode, setShowAccessCode] = useState(false);
  const [accessCode, setAccessCode] = useState('');
  const [subscribeUpdates, setSubscribeUpdates] = useState(false);
  const [bioData, setBioData] = useState<BioData>({
    firstName: '',
    lastName: '',
    email: '',
    whatsapp: ''
  });
  const [showLegalDocs, setShowLegalDocs] = useState<'privacy' | 'terms' | 'gdpr' | null>(null);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  const [acceptedGDPR, setAcceptedGDPR] = useState(false);
  const [bioDataSaved, setBioDataSaved] = useState(false);
  const [showBioForm, setShowBioForm] = useState(true);

  const [paymentMethod, setPaymentMethod] = useState<PaymentTransaction['paymentMethod']>('CARD');
  const navigate = useNavigate();

  const paymentMethods = [
    { id: 'CARD', label: 'Credit/Debit Card', icon: <CreditCard className="h-5 w-5" /> },
    { id: 'CRYPTO', label: 'Cryptocurrency', icon: <Bitcoin className="h-5 w-5" /> },
    { id: 'MMG', label: 'MMG One Com. (Mobile Money)', icon: <Building className="h-5 w-5" /> },
    { id: 'COD', label: 'Western Union', icon: <DollarSign className="h-5 w-5" /> }
  ];

  const handleAccessCodeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      if (accessCode === 'LNX-CLIENT') {
        toast.success('Access granted! Welcome to the Client Dashboard');
        navigate('/dashboard');
      } else if (accessCode === 'LNX-WFH') {
        toast.success('Access granted! Welcome to the Admin Portal');
        navigate('/admin/dashboard');
      } else {
        toast.error('Invalid access code');
      }
    } finally {
      setLoading(false);
    }
  };

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Mock payment processing
    setTimeout(() => {
      setLoading(false);
      toast.success('Payment processed successfully!');
      onSuccess({ id: 'mock-transaction', status: 'completed' });
    }, 2000);
  };

  const handleBioSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptedTerms || !acceptedPrivacy || !acceptedGDPR) {
      toast.error('Please accept all required agreements');
      return;
    }
    // Save bio data
    setBioDataSaved(true);
    setShowBioForm(false);
    toast.success('Personal information saved successfully');
  };

  const renderLegalDocument = () => {
    return (
      <div className={`p-6 rounded-xl ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      } border border-gray-200 dark:border-gray-700`}>
        <div className="flex items-center space-x-4 mb-6">
          <button
            onClick={() => setShowLegalDocs(null)}
            className="text-gold hover:text-gold-light transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <h2 className={`text-xl font-bold ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {showLegalDocs === 'privacy' ? 'Privacy Policy' :
             showLegalDocs === 'terms' ? 'Terms of Use' :
             'GDPR Compliance'}
          </h2>
        </div>
        <div className={`prose max-w-none ${
          isDarkMode ? 'prose-invert' : ''
        }`}>
          {/* Add legal document content here */}
          <p>Document content goes here...</p>
        </div>
      </div>
    );
  };

  if (showLegalDocs) {
    return renderLegalDocument();
  }

  if (showBioForm) {
    return (
      <div className={`p-6 rounded-xl ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      } border border-gray-200 dark:border-gray-700`}>
        <h2 className={`text-xl font-bold mb-6 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Personal Information
        </h2>
        
        <form onSubmit={handleBioSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={`block text-sm font-medium mb-1 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                First Name
              </label>
              <input
                type="text"
                value={bioData.firstName}
                onChange={(e) => setBioData({ ...bioData, firstName: e.target.value })}
                className={`w-full px-4 py-2 rounded-lg ${
                  isDarkMode
                    ? 'bg-gray-700 text-white border-gray-600'
                    : 'bg-gray-100 text-gray-900 border-gray-200'
                } border focus:outline-none focus:ring-2 focus:ring-gold`}
                required
              />
            </div>
            <div>
              <label className={`block text-sm font-medium mb-1 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Last Name
              </label>
              <input
                type="text"
                value={bioData.lastName}
                onChange={(e) => setBioData({ ...bioData, lastName: e.target.value })}
                className={`w-full px-4 py-2 rounded-lg ${
                  isDarkMode
                    ? 'bg-gray-700 text-white border-gray-600'
                    : 'bg-gray-100 text-gray-900 border-gray-200'
                } border focus:outline-none focus:ring-2 focus:ring-gold`}
                required
              />
            </div>
          </div>

          <div>
            <label className={`block text-sm font-medium mb-1 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Email Address
            </label>
            <input
              type="email"
              value={bioData.email}
              onChange={(e) => setBioData({ ...bioData, email: e.target.value })}
              className={`w-full px-4 py-2 rounded-lg ${
                isDarkMode
                  ? 'bg-gray-700 text-white border-gray-600'
                  : 'bg-gray-100 text-gray-900 border-gray-200'
              } border focus:outline-none focus:ring-2 focus:ring-gold`}
              required
            />
          </div>

          <div>
            <label className={`block text-sm font-medium mb-1 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              WhatsApp Number
            </label>
            <input
              type="tel"
              value={bioData.whatsapp}
              onChange={(e) => setBioData({ ...bioData, whatsapp: e.target.value })}
              placeholder="+1234567890"
              className={`w-full px-4 py-2 rounded-lg ${
                isDarkMode
                  ? 'bg-gray-700 text-white border-gray-600'
                  : 'bg-gray-100 text-gray-900 border-gray-200'
              } border focus:outline-none focus:ring-2 focus:ring-gold`}
              required
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
                className="w-4 h-4 text-gold border-gray-300 rounded focus:ring-gold"
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                I accept the{' '}
                <button
                  type="button"
                  onClick={() => setShowLegalDocs('terms')}
                  className="text-gold hover:text-gold-light"
                >
                  Terms of Use
                </button>
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="privacy"
                checked={acceptedPrivacy}
                onChange={(e) => setAcceptedPrivacy(e.target.checked)}
                className="w-4 h-4 text-gold border-gray-300 rounded focus:ring-gold"
              />
              <label htmlFor="privacy" className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                I accept the{' '}
                <button
                  type="button"
                  onClick={() => setShowLegalDocs('privacy')}
                  className="text-gold hover:text-gold-light"
                >
                  Privacy Policy
                </button>
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="gdpr"
                checked={acceptedGDPR}
                onChange={(e) => setAcceptedGDPR(e.target.checked)}
                className="w-4 h-4 text-gold border-gray-300 rounded focus:ring-gold"
              />
              <label htmlFor="gdpr" className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                I accept the{' '}
                <button
                  type="button"
                  onClick={() => setShowLegalDocs('gdpr')}
                  className="text-gold hover:text-gold-light"
                >
                  GDPR Policy
                </button>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gold hover:bg-gold-light text-royal-dark py-3 rounded-lg transition-colors flex items-center justify-center space-x-2"
          >
            <span>Continue to Payment</span>
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className={`p-6 rounded-xl ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    } border border-gray-200 dark:border-gray-700`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className={`text-xl font-bold ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          {showAccessCode ? 'Enter Access Code' : 'Payment Details'}
        </h2>
        <button
          onClick={onCancel}
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {!showAccessCode && (
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button
            onClick={() => setShowAccessCode(true)}
            className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-all ${
              showAccessCode
                ? 'border-gold bg-gold/10 text-gold'
                : 'border-gold/20 hover:border-gold text-gold hover:bg-gold/10'
            }`}
          >
            <Key className="h-6 w-6 mb-2" />
            <span>Access Code</span>
          </button>
          <button
            onClick={() => setShowAccessCode(false)}
            className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-all ${
              !showAccessCode
                ? 'border-gold bg-gold text-royal-dark'
                : 'border-gold/20 hover:border-gold text-gold hover:bg-gold/10'
            }`}
          >
            <CreditCard className="h-6 w-6 mb-2" />
            <span>Pay with Card</span>
          </button>
        </div>
      )}

      {showAccessCode ? (
        <form onSubmit={handleAccessCodeSubmit} className="space-y-6">
          <div className="relative">
            <Key className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={accessCode}
              onChange={(e) => setAccessCode(e.target.value.toUpperCase())}
              placeholder="Enter your access code"
              className={`w-full pl-10 pr-4 py-3 rounded-lg ${
                isDarkMode
                  ? 'bg-gray-700 text-white border-gray-600'
                  : 'bg-gray-100 text-gray-900 border-gray-200'
              } border focus:outline-none focus:ring-2 focus:ring-gold`}
              required
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="subscribe-updates-code"
              checked={subscribeUpdates}
              onChange={(e) => setSubscribeUpdates(e.target.checked)}
              className="w-4 h-4 text-gold border-gray-300 rounded focus:ring-gold"
            />
            <label
              htmlFor="subscribe-updates-code"
              className={`ml-2 text-sm ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Subscribe to value updates and trading insights
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gold hover:bg-gold-light text-royal-dark rounded-lg transition-colors disabled:opacity-50 mt-6"
          >
            {loading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Verifying...</span>
              </>
            ) : (
              <span>Access Platform</span>
            )}
          </button>
        </form>
      ) : (
        <form onSubmit={handlePaymentSubmit} className="space-y-6">
          {/* Plan Details */}
          <div className={`p-4 rounded-lg ${
            isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
          }`}>
            <div className="flex justify-between mb-2">
              <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                Plan
              </span>
              <span className={`font-medium ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {planName}
              </span>
            </div>
            <div className="flex justify-between">
              <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                Amount
              </span>
              <span className="text-xl font-bold text-gold">
                ${amount}
              </span>
            </div>
          </div>

          {/* Payment Method Selection */}
          <div>
            <label className={`block mb-2 font-medium ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Select Payment Method
            </label>
            <div className="grid grid-cols-2 gap-4">
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  type="button"
                  onClick={() => setPaymentMethod(method.id as PaymentTransaction['paymentMethod'])}
                  className={`flex items-center space-x-2 p-3 rounded-lg border-2 transition-colors ${
                    paymentMethod === method.id
                      ? 'border-gold bg-gold/10 text-gold'
                      : `border-gray-200 dark:border-gray-700 ${
                          isDarkMode 
                            ? 'text-gray-300 hover:border-gray-600' 
                            : 'text-gray-600 hover:border-gray-300'
                        }`
                  }`}
                >
                  {method.icon}
                  <span>{method.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Payment Details */}
          <div className="space-y-4">
            {paymentMethod === 'CARD' && (
              <>
                <div className="relative">
                  <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Card Number"
                    className={`w-full pl-10 pr-4 py-3 rounded-lg ${
                      isDarkMode
                        ? 'bg-gray-700 text-white border-gray-600'
                        : 'bg-gray-100 text-gray-900 border-gray-200'
                    } border focus:outline-none focus:ring-2 focus:ring-gold`}
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className={`pl-4 pr-4 py-3 rounded-lg ${
                      isDarkMode
                        ? 'bg-gray-700 text-white border-gray-600'
                        : 'bg-gray-100 text-gray-900 border-gray-200'
                    } border focus:outline-none focus:ring-2 focus:ring-gold`}
                    required
                  />
                  <input
                    type="text"
                    placeholder="CVC"
                    className={`pl-4 pr-4 py-3 rounded-lg ${
                      isDarkMode
                        ? 'bg-gray-700 text-white border-gray-600'
                        : 'bg-gray-100 text-gray-900 border-gray-200'
                    } border focus:outline-none focus:ring-2 focus:ring-gold`}
                    required
                  />
                </div>
              </>
            )}
            {paymentMethod === 'CRYPTO' && (
              <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <p className="text-gold font-medium mb-2">Send payment to:</p>
                <code className="block p-2 bg-gray-800 rounded text-gray-300 break-all">
                  bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh
                </code>
              </div>
            )}
            {(paymentMethod === 'MMG' || paymentMethod === 'COD') && (
              <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <p className="text-gold font-medium mb-2">Send to:</p>
                {paymentMethod === 'MMG' ? (
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                    Pay to: Joel Warner, Mobile<br />
                    Phone: +(592)-618-3620<br />
                    Reference: LNX-{planName.replace(/\s+/g, '').toUpperCase()}
                  </p>
                ) : (
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                    Name: John Smith<br />
                    Location: London, UK<br />
                    Reference: LNX-{planName.replace(/\s+/g, '').toUpperCase()}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Subscribe Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="subscribe-updates-payment"
              checked={subscribeUpdates}
              onChange={(e) => setSubscribeUpdates(e.target.checked)}
              className="w-4 h-4 text-gold border-gray-300 rounded focus:ring-gold"
            />
            <label
              htmlFor="subscribe-updates-payment"
              className={`ml-2 text-sm ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Subscribe to value updates and trading insights
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gold hover:bg-gold-light text-royal-dark rounded-lg transition-colors disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Processing...</span>
              </>
            ) : (
              <span>
                {paymentMethod === 'CRYPTO' ? 'Confirm Payment' :
                 paymentMethod === 'MMG' || paymentMethod === 'COD' ? 'Submit Order' :
                 `Pay $${amount}`}
              </span>
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default PaymentForm;