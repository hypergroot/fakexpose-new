import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';
import { getCurrentQuiz } from '../data/quizzes';

const QuizPromo = () => {
  const currentQuiz = getCurrentQuiz();
  const firstQuestion = currentQuiz.questions[0];

  return (
    <section className="py-12 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Test Your Fact-Checking Skills</h2>
          <p className="mt-2 text-lg text-gray-600">
            Can you tell what's fact and what's fake? Take our daily quiz to find out!
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src={firstQuestion.image} 
                alt="Quiz preview" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:w-1/2">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2" />
                <p className="text-sm text-gray-600">For {currentQuiz.date}... there's a new quiz daily!</p>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                What's Fact and What's Fake?
              </h3>
              
              <div className="mb-6">
                <p className="text-xl font-semibold text-gray-800 mb-6">
                  {firstQuestion.question}
                </p>
                
                <div className="space-y-2">
                  {firstQuestion.options.map((option, index) => (
                    <div 
                      key={index}
                      className="p-3 border border-gray-200 rounded-lg text-gray-700 cursor-pointer hover:bg-gray-50"
                    >
                      {option}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Today's leaders</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>1. FactChecker88</span>
                      <span>88</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>2. RickyRick</span>
                      <span>56</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>3. clhc</span>
                      <span>44</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>4. Cathie</span>
                      <span>40</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>5. tanjinaanis</span>
                      <span>20</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>6. —</span>
                      <span>—</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>7. —</span>
                      <span>—</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>8. —</span>
                      <span>—</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>9. —</span>
                      <span>—</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>10. —</span>
                      <span>—</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <Link 
                to="/quiz"
                className="block w-full py-3 bg-yellow-500 text-center text-white font-bold rounded-lg hover:bg-yellow-600 transition-colors"
              >
                Start Quiz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizPromo;