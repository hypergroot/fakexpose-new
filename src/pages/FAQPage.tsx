import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { faqs, getAllCategories } from '../data/faqs';

const FAQPage = () => {
  const [openFaqs, setOpenFaqs] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const navigate = useNavigate();
  const categories = ['All', ...getAllCategories()];

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Check if there's a specific FAQ to open from sessionStorage
    const openFaqId = sessionStorage.getItem('openFaqId');
    if (openFaqId) {
      const faqId = parseInt(openFaqId);
      setOpenFaqs([faqId]);
      
      // Scroll to the FAQ after a short delay to ensure rendering
      setTimeout(() => {
        const element = document.getElementById(`faq-${faqId}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 300);
      
      // Clear the stored ID
      sessionStorage.removeItem('openFaqId');
    }
  }, []);

  const toggleFaq = (id: number) => {
    setOpenFaqs(prev => 
      prev.includes(id) ? prev.filter(faqId => faqId !== id) : [...prev, id]
    );
  };

  const handleBack = () => {
    const position = sessionStorage.getItem('scrollPosition');
    if (position) {
      sessionStorage.removeItem('scrollPosition');
    }
    navigate(-1);
  };

  const filteredFaqs = activeCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

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

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about FakeXpose, our methodology, and how we work to separate fact from fiction.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filteredFaqs.map((faq) => (
            <div 
              key={faq.id} 
              id={`faq-${faq.id}`}
              className={`bg-white rounded-lg shadow-md overflow-hidden transition-all ${
                openFaqs.includes(faq.id) ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                {openFaqs.includes(faq.id) ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              
              {openFaqs.includes(faq.id) && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  <div className="mt-3 flex justify-between items-center">
                    <span className="text-sm text-gray-500">Category: {faq.category}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;