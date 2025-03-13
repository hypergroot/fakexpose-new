import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { featuredArticles, FeaturedArticle } from '../data/featured';

const FeaturedPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 5;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const getRatingBadge = (rating: FeaturedArticle['rating']) => {
    switch (rating) {
      case 'true':
        return (
          <span className="flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
            <CheckCircle className="h-4 w-4 mr-1" />
            True
          </span>
        );
      case 'false':
        return (
          <span className="flex items-center bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
            <XCircle className="h-4 w-4 mr-1" />
            False
          </span>
        );
      default:
        return (
          <span className="flex items-center bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
            <AlertCircle className="h-4 w-4 mr-1" />
            Mixed
          </span>
        );
    }
  };

  const totalPages = Math.ceil(featuredArticles.length / articlesPerPage);
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = featuredArticles.slice(indexOfFirstArticle, indexOfLastArticle);

  return (
    <div className="py-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Featured Stories</h1>
          <p className="mt-2 text-lg text-gray-600">
            Our most important and impactful fact-checking investigations
          </p>
        </div>

        <div className="space-y-6">
          {currentArticles.map((article) => (
            <article 
              key={article.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg"
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img
                    className="h-48 w-full md:w-64 object-cover"
                    src={article.image}
                    alt={article.title}
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-3 items-center mb-2">
                    {getRatingBadge(article.rating)}
                    <span className="text-sm text-gray-500">{article.category}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-gray-600">By {article.author}</span>
                      <span className="text-sm text-gray-500 block">{article.date}</span>
                    </div>
                    <Link 
                      to={`/article/${article.id}`}
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Read Full Analysis
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`flex items-center px-4 py-2 rounded-md transition-colors ${
              currentPage === 1
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            Previous
          </button>
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 rounded-md transition-colors ${
                  currentPage === page
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`flex items-center px-4 py-2 rounded-md transition-colors ${
              currentPage === totalPages
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            Next
            <ChevronRight className="h-5 w-5 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPage;