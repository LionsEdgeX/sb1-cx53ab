import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { Plus, FileText, ArrowRight, Cross, Users, Coins, Heart, Star } from 'lucide-react';
import { EvaluationAnswer } from './SelfEvaluationSection';

interface EvaluationHistoryProps {
  pastEvaluations: Array<{
    date: string;
    answers: EvaluationAnswer[];
  }>;
  onStartNew: () => void;
  onViewEvaluation: (evaluation: { date: string; answers: EvaluationAnswer[] }) => void;
}

const EvaluationHistory: React.FC<EvaluationHistoryProps> = ({
  pastEvaluations,
  onStartNew,
  onViewEvaluation
}) => {
  const { isDarkMode } = useTheme();

  const getPillarIcon = (pillar: string) => {
    switch (pillar) {
      case 'faith': return <Cross className="h-5 w-5 text-purple-500" />;
      case 'family': return <Users className="h-5 w-5 text-blue-500" />;
      case 'finance': return <Coins className="h-5 w-5 text-gold" />;
      case 'fitness': return <Heart className="h-5 w-5 text-red-500" />;
      case 'freedom': return <Star className="h-5 w-5 text-emerald-500" />;
      default: return null;
    }
  };

  const getAverageScore = (answers: EvaluationAnswer[]) => {
    const total = answers.reduce((sum, answer) => sum + answer.score, 0);
    return (total / answers.length).toFixed(1);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className={`text-3xl font-bold mb-4 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Your Evaluation History
        </h2>
        <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Track your progress and start new evaluations
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 mb-8">
        {pastEvaluations.map((evaluation, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl ${
              isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
            } hover:border-gold/50 transition-all border border-transparent`}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className={`text-xl font-bold mb-1 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Evaluation {index + 1}
                </h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {new Date(evaluation.date).toLocaleDateString()} • Average Score: {getAverageScore(evaluation.answers)}
                </p>
              </div>
              <button
                onClick={() => onViewEvaluation(evaluation)}
                className="flex items-center space-x-2 px-4 py-2 bg-gold hover:bg-gold-light text-royal-dark rounded-lg transition-colors"
              >
                <FileText className="h-4 w-4" />
                <span>View Details</span>
              </button>
            </div>

            <div className="grid grid-cols-5 gap-4">
              {evaluation.answers.map((answer) => (
                <div
                  key={answer.pillar}
                  className={`p-4 rounded-lg ${
                    isDarkMode ? 'bg-gray-600' : 'bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    {getPillarIcon(answer.pillar)}
                    <span className={`text-lg font-bold ${
                      answer.score >= 8 ? 'text-emerald-500' :
                      answer.score >= 6 ? 'text-gold' :
                      answer.score >= 4 ? 'text-yellow-500' :
                      'text-red-500'
                    }`}>
                      {answer.score.toFixed(1)}
                    </span>
                  </div>
                  <div className={`text-sm font-medium ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {answer.pillar.charAt(0).toUpperCase() + answer.pillar.slice(1)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button
          onClick={onStartNew}
          className="flex items-center space-x-2 px-8 py-4 bg-gold hover:bg-gold-light text-royal-dark rounded-lg transition-colors"
        >
          <Plus className="h-5 w-5" />
          <span>Start New Evaluation</span>
        </button>
      </div>
    </div>
  );
};

export default EvaluationHistory;