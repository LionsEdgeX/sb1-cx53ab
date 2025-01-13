import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { Cross, Users, Coins, Heart, Star, ArrowRight, Save } from 'lucide-react';
import { EvaluationAnswer } from './SelfEvaluationSection';

interface EvaluationResultsProps {
  answers: EvaluationAnswer[];
  onContinue: () => void;
  onSave: () => void;
}

const EvaluationResults: React.FC<EvaluationResultsProps> = ({
  answers,
  onContinue,
  onSave
}) => {
  const { isDarkMode } = useTheme();

  const getPillarIcon = (pillar: string) => {
    switch (pillar) {
      case 'faith': return <Cross className="h-6 w-6" />;
      case 'family': return <Users className="h-6 w-6" />;
      case 'finance': return <Coins className="h-6 w-6" />;
      case 'fitness': return <Heart className="h-6 w-6" />;
      case 'freedom': return <Star className="h-6 w-6" />;
      default: return null;
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 8) return 'text-emerald-500';
    if (score >= 6) return 'text-gold';
    if (score >= 4) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getRecommendation = (pillar: string, score: number) => {
    if (score >= 8) {
      return "You're excelling in this area. Focus on maintaining and sharing your success with others.";
    }
    if (score >= 6) {
      return "You're doing well but there's room for improvement. Consider setting more challenging goals.";
    }
    if (score >= 4) {
      return "This area needs attention. Start with small, achievable goals to build momentum.";
    }
    return "This is a priority area for improvement. Consider seeking guidance and support.";
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className={`text-3xl font-bold mb-4 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Your Life Balance Results
        </h2>
        <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Here's a comprehensive view of your current life balance across all pillars
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {answers.map((answer) => (
          <div
            key={answer.pillar}
            className={`p-6 rounded-xl ${
              isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${
                  isDarkMode ? 'bg-gray-600' : 'bg-white'
                }`}>
                  {getPillarIcon(answer.pillar)}
                </div>
                <h3 className={`text-xl font-bold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {answer.pillar.charAt(0).toUpperCase() + answer.pillar.slice(1)}
                </h3>
              </div>
              <div className={`text-2xl font-bold ${getScoreColor(answer.score)}`}>
                {answer.score.toFixed(1)}
              </div>
            </div>

            <div className="space-y-4">
              <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gold rounded-full transition-all duration-500"
                  style={{ width: `${(answer.score / 10) * 100}%` }}
                />
              </div>

              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {getRecommendation(answer.pillar, answer.score)}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center space-x-4">
        <button
          onClick={onSave}
          className="flex items-center space-x-2 px-6 py-3 border-2 border-gold text-gold hover:bg-gold/10 rounded-lg transition-colors"
        >
          <Save className="h-5 w-5" />
          <span>Save Results</span>
        </button>
        <button
          onClick={onContinue}
          className="flex items-center space-x-2 px-6 py-3 bg-gold hover:bg-gold-light text-royal-dark rounded-lg transition-colors"
        >
          <span>Set Your Goals</span>
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default EvaluationResults;