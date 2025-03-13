import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Trophy, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import { getCurrentQuiz, leaderboard, LeaderboardEntry } from '../data/quizzes';

const QuizPage = () => {
  const navigate = useNavigate();
  const quiz = getCurrentQuiz();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(Array(quiz.questions.length).fill(-1));
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [username, setUsername] = useState('');
  const [showUsernameInput, setShowUsernameInput] = useState(false);
  const [leaderboardEntries, setLeaderboardEntries] = useState<LeaderboardEntry[]>(leaderboard);
  const [userRank, setUserRank] = useState<LeaderboardEntry | null>(null);

  const currentQuestion = quiz.questions[currentQuestionIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentQuestionIndex]);

  const handleAnswerSelect = (answerIndex: number) => {
    if (showExplanation) return; // Prevent changing answer after seeing explanation

    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestionIndex] = answerIndex;
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleNextQuestion = () => {
    setShowExplanation(false);
    
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Calculate final score
      const finalScore = selectedAnswers.reduce((total, answer, index) => {
        return total + (answer === quiz.questions[index].correctAnswer ? 10 : 0);
      }, 0);
      
      setScore(finalScore);
      setQuizCompleted(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setShowExplanation(false);
    }
  };

  const handleCheckAnswer = () => {
    if (selectedAnswers[currentQuestionIndex] !== -1) {
      setShowExplanation(true);
      
      // Update score if answer is correct
      if (selectedAnswers[currentQuestionIndex] === currentQuestion.correctAnswer) {
        setScore(prevScore => prevScore + 10);
      }
    }
  };

  const handleSubmitUsername = () => {
    if (username.trim()) {
      // Create a copy of the leaderboard
      const updatedLeaderboard = [...leaderboardEntries];
      
      // Add user's score
      const userEntry: LeaderboardEntry = {
        position: 0, // Will be updated after sorting
        username: username,
        score: score
      };
      
      // Add to leaderboard and sort
      updatedLeaderboard.push(userEntry);
      updatedLeaderboard.sort((a, b) => b.score - a.score);
      
      // Update positions
      updatedLeaderboard.forEach((entry, index) => {
        entry.position = index + 1;
      });
      
      // Find user's rank
      const userRankEntry = updatedLeaderboard.find(entry => entry.username === username);
      
      // Update state
      setLeaderboardEntries(updatedLeaderboard.slice(0, 10)); // Keep only top 10
      setUserRank(userRankEntry || null);
      setShowUsernameInput(false);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers(Array(quiz.questions.length).fill(-1));
    setScore(0);
    setQuizCompleted(false);
    setShowExplanation(false);
    setUserRank(null);
  };

  const handleBack = () => {
    navigate(-1);
  };

  const renderQuizContent = () => {
    if (quizCompleted) {
      return (
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <Trophy className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Quiz Completed!</h2>
            <p className="text-xl text-gray-700">
              Your score: <span className="font-bold text-blue-600">{score}</span> out of {quiz.questions.length * 10}
            </p>
            <p className="text-gray-600 mt-2">
              You answered {score / 10} out of {quiz.questions.length} questions correctly.
            </p>
          </div>

          {!userRank && !showUsernameInput ? (
            <div className="text-center mb-8">
              <button
                onClick={() => setShowUsernameInput(true)}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Add Your Score to Leaderboard
              </button>
            </div>
          ) : null}

          {showUsernameInput && (
            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Enter Your Username</h3>
              <div className="flex">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Your username"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  maxLength={20}
                />
                <button
                  onClick={handleSubmitUsername}
                  className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors"
                  disabled={!username.trim()}
                >
                  Submit
                </button>
              </div>
            </div>
          )}

          {userRank && (
            <div className="mb-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Your Ranking</h3>
              <p className="text-blue-700">
                Congratulations! You ranked <span className="font-bold">#{userRank.position}</span> with a score of <span className="font-bold">{userRank.score}</span>.
              </p>
            </div>
          )}

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Leaderboard</h3>
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Rank</th>
                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Username</th>
                    <th className="py-3 px-4 text-right text-sm font-semibold text-gray-700">Score</th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboardEntries.map((entry) => (
                    <tr 
                      key={entry.position} 
                      className={`border-t border-gray-200 ${entry.username === username ? 'bg-blue-50' : ''}`}
                    >
                      <td className="py-3 px-4 text-sm text-gray-900">
                        {entry.position <= 3 ? (
                          <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${
                            entry.position === 1 ? 'bg-yellow-100 text-yellow-800' :
                            entry.position === 2 ? 'bg-gray-100 text-gray-800' :
                            'bg-orange-100 text-orange-800'
                          }`}>
                            {entry.position}
                          </span>
                        ) : entry.position}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-900 font-medium">
                        {entry.username}
                        {entry.username === username && " (You)"}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-900 text-right font-semibold">
                        {entry.score}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleRestartQuiz}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Take Quiz Again
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative">
          <img
            src={currentQuestion.image}
            alt={`Question ${currentQuestionIndex + 1}`}
            className="w-full h-64 object-cover"
          />
          <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium">
            Question {currentQuestionIndex + 1} of {quiz.questions.length}
          </div>
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{currentQuestion.question}</h2>

          <div className="space-y-3 mb-8">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full text-left p-4 rounded-lg border transition-colors ${
                  selectedAnswers[currentQuestionIndex] === index
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                } ${
                  showExplanation && index === currentQuestion.correctAnswer
                    ? 'border-green-500 bg-green-50'
                    : showExplanation && selectedAnswers[currentQuestionIndex] === index && index !== currentQuestion.correctAnswer
                    ? 'border-red-500 bg-red-50'
                    : ''
                }`}
                disabled={showExplanation}
              >
                <div className="flex items-center">
                  {showExplanation && index === currentQuestion.correctAnswer ? (
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  ) : showExplanation && selectedAnswers[currentQuestionIndex] === index && index !== currentQuestion.correctAnswer ? (
                    <XCircle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0" />
                  ) : (
                    <div className={`h-5 w-5 rounded-full border ${
                      selectedAnswers[currentQuestionIndex] === index
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-gray-300'
                    } mr-3 flex-shrink-0`}>
                      {selectedAnswers[currentQuestionIndex] === index && (
                        <div className="h-3 w-3 rounded-full bg-white m-0.5"></div>
                      )}
                    </div>
                  )}
                  <span>{option}</span>
                </div>
              </button>
            ))}
          </div>

          {showExplanation && (
            <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Explanation</h3>
              <p className="text-blue-700">{currentQuestion.explanation}</p>
            </div>
          )}

          <div className="flex justify-between">
            <button
              onClick={handlePreviousQuestion}
              className={`px-4 py-2 rounded-md flex items-center ${
                currentQuestionIndex === 0
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-blue-600 hover:text-blue-800'
              }`}
              disabled={currentQuestionIndex === 0}
            >
              <ArrowLeft className="h-5 w-5 mr-1" />
              Previous
            </button>

            {!showExplanation ? (
              <button
                onClick={handleCheckAnswer}
                className={`px-6 py-2 rounded-md ${
                  selectedAnswers[currentQuestionIndex] === -1
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
                disabled={selectedAnswers[currentQuestionIndex] === -1}
              >
                Check Answer
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center"
              >
                {currentQuestionIndex === quiz.questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                <ArrowRight className="h-5 w-5 ml-1" />
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={handleBack}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back
        </button>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{quiz.title}</h1>
          <p className="text-lg text-gray-600">{quiz.description}</p>
          <div className="flex items-center mt-2">
            <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2" />
            <p className="text-sm text-gray-600">For {quiz.date}... there's a new quiz daily!</p>
          </div>
        </div>

        {renderQuizContent()}
      </div>
    </div>
  );
};

export default QuizPage;