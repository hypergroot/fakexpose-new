import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Trophy, Calendar, Clock, Award } from 'lucide-react';

const QuizHistoryPage = () => {
  const navigate = useNavigate();

  const quizHistory = [
    {
      id: 1,
      date: '2024-03-15',
      score: 90,
      totalQuestions: 10,
      timeSpent: '8:45',
      rank: 1,
    },
    {
      id: 2,
      date: '2024-03-14',
      score: 80,
      totalQuestions: 10,
      timeSpent: '9:30',
      rank: 3,
    },
    {
      id: 3,
      date: '2024-03-13',
      score: 70,
      totalQuestions: 10,
      timeSpent: '7:15',
      rank: 5,
    },
  ];

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={handleBack}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back
        </button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-8">
            <div className="text-center mb-8">
              <Trophy className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-gray-900">Quiz History</h1>
              <p className="mt-2 text-gray-600">Track your fact-checking progress</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="text-blue-600 mb-2">Average Score</div>
                <div className="text-3xl font-bold text-blue-900">80%</div>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <div className="text-green-600 mb-2">Quizzes Completed</div>
                <div className="text-3xl font-bold text-green-900">15</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-6">
                <div className="text-purple-600 mb-2">Best Rank</div>
                <div className="text-3xl font-bold text-purple-900">#1</div>
              </div>
            </div>

            <div className="space-y-6">
              {quizHistory.map((quiz) => (
                <div 
                  key={quiz.id}
                  className="bg-gray-50 rounded-lg p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-gray-500 mr-2" />
                      <span className="text-gray-600">{quiz.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-gray-500 mr-2" />
                      <span className="text-gray-600">{quiz.timeSpent}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xl font-bold text-gray-900">
                        Score: {quiz.score}%
                      </div>
                      <div className="text-sm text-gray-600">
                        {quiz.totalQuestions} questions
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Award className="h-6 w-6 text-yellow-500 mr-2" />
                      <span className="text-lg font-semibold text-gray-900">
                        Rank #{quiz.rank}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizHistoryPage;