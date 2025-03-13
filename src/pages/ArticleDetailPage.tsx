import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { CheckCircle, XCircle, AlertCircle, ArrowLeft, Share2 } from 'lucide-react';
import { getArticleById } from '../data/articles';
import { getFeaturedArticleById } from '../data/featured';
import { getTrendingArticleById } from '../data/trending';
import { getMostSearchedArticleById } from '../data/mostSearched';
import { getPoliticsArticleById } from '../data/politics';

const ArticleDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  
  const article = getArticleById(Number(id)) || 
                 getFeaturedArticleById(Number(id)) || 
                 getTrendingArticleById(Number(id)) ||
                 getMostSearchedArticleById(Number(id)) ||
                 getPoliticsArticleById(Number(id));

  useEffect(() => {
    // Store current scroll position
    const position = window.scrollY;
    setLastScrollPosition(position);
    
    // Scroll to top when article loads
    window.scrollTo(0, 0);
    
    return () => {
      // When component unmounts, restore scroll position if returning home
      const storedPosition = sessionStorage.getItem('scrollPosition');
      if (storedPosition) {
        window.scrollTo(0, parseInt(storedPosition));
        sessionStorage.removeItem('scrollPosition');
      }
    };
  }, [id]);

  if (!article) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Article not found</h2>
          <p className="mt-2 text-gray-600">The article you're looking for doesn't exist.</p>
          <Link to="/" className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const getRatingBadge = () => {
    switch (article.rating) {
      case 'true':
        return (
          <span className="flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
            <CheckCircle className="h-5 w-5 mr-2" />
            True
          </span>
        );
      case 'false':
        return (
          <span className="flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium">
            <XCircle className="h-5 w-5 mr-2" />
            False
          </span>
        );
      default:
        return (
          <span className="flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
            <AlertCircle className="h-5 w-5 mr-2" />
            Mixed
          </span>
        );
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={handleBack}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back
        </button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-96 object-cover"
          />
          
          <div className="p-8">
            <div className="flex flex-wrap gap-4 items-center mb-6">
              {getRatingBadge()}
              <span className="text-sm text-gray-500">{article.category}</span>
              <span className="text-sm text-gray-500">{article.date}</span>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {article.title}
            </h1>

            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <div className="mr-4">
                  <p className="text-sm font-medium text-gray-900">By {article.author}</p>
                  <p className="text-sm text-gray-500">{article.date}</p>
                </div>
              </div>
              <button className="inline-flex items-center text-gray-500 hover:text-gray-700">
                <Share2 className="h-5 w-5 mr-2" />
                Share
              </button>
            </div>

            <div className="prose max-w-none">
              {article.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {article.sources && (
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Sources</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {article.sources.map((source, index) => (
                    <li key={index}>{source}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </article>
    </div>
  );
};

export default ArticleDetailPage;