import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, Search, Compass, Send } from 'lucide-react';

const AboutSection = () => {
  const faqs = [
    {
      id: 1,
      question: "What does 'FakeXpose' mean?",
    },
    {
      id: 2,
      question: "What makes FakeXpose a reliable resource?",
    },
    {
      id: 3,
      question: "May I submit items for FakeXpose to fact-check?",
    },
    {
      id: 4,
      question: "What is FakeXpose's fact-checking process?",
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* What Is FakeXpose? */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-yellow-100 rounded-lg mb-6">
              <Scale className="h-6 w-6 text-yellow-700 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">What Is FakeXpose?</h2>
            </div>
            
            <div className="prose prose-lg">
              <p className="text-gray-600 mb-6">
                /feɪkˈspəʊz/ NOUN and sometimes VERB
              </p>
              <p className="text-gray-700 mb-8">
                We are the internet's trusted source for discerning what is true and what is total nonsense. 
                Before you dive deeper, here are a few tips on how to "FakeXpose":
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="flex items-center text-xl font-semibold mb-2">
                    <Search className="h-5 w-5 mr-2 text-blue-600" />
                    Search
                  </h3>
                  <p className="text-gray-700">
                    Thousands upon thousands of fact checks and investigations live in our archives. 
                    You might want to bookmark our search page.
                  </p>
                </div>

                <div>
                  <h3 className="flex items-center text-xl font-semibold mb-2">
                    <Compass className="h-5 w-5 mr-2 text-blue-600" />
                    Discover
                  </h3>
                  <p className="text-gray-700">
                    Browse the most popular or most recent content when you visit our Top Posts 
                    and What's New sections.
                  </p>
                </div>

                <div>
                  <h3 className="flex items-center text-xl font-semibold mb-2">
                    <Send className="h-5 w-5 mr-2 text-blue-600" />
                    Submit
                  </h3>
                  <p className="text-gray-700">
                    Can't find what you're looking for? Send us a note. Your tip could be 
                    our next investigation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-yellow-100 rounded-lg mb-6">
              <h2 className="text-2xl font-bold text-gray-900">FAQ's</h2>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq) => (
                <Link
                  key={faq.id}
                  to="/faqs"
                  className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  onClick={() => {
                    // Store the current scroll position
                    sessionStorage.setItem('scrollPosition', window.scrollY.toString());
                    // Store the FAQ ID to open
                    sessionStorage.setItem('openFaqId', faq.id.toString());
                  }}
                >
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                </Link>
              ))}
              <Link
                to="/faqs"
                className="inline-block text-blue-600 hover:text-blue-800 font-medium mt-4"
                onClick={() => {
                  sessionStorage.setItem('scrollPosition', window.scrollY.toString());
                }}
              >
                View All →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;