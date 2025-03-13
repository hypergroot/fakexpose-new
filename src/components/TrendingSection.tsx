import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { trendingArticles } from '../data/trending';

const FactCard = ({ id, title, rating, category, image }) => {
  const getRatingBadge = () => {
    switch (rating.toLowerCase()) {
      case 'true':
        return (
          <span className="flex items-center text-green-600">
            <CheckCircle className="h-5 w-5 mr-1" />
            True
          </span>
        );
      case 'false':
        return (
          <span className="flex items-center text-red-600">
            <XCircle className="h-5 w-5 mr-1" />
            False
          </span>
        );
      default:
        return (
          <span className="flex items-center text-yellow-600">
            <AlertCircle className="h-5 w-5 mr-1" />
            Mixed
          </span>
        );
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img className="h-48 w-full object-cover" src={image} alt={title} />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <span className="text-sm font-medium text-blue-600">{category}</span>
          {getRatingBadge()}
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <Link 
          to={`/article/${id}`}
          className="text-blue-600 hover:text-blue-800 font-medium"
          onClick={() => {
            sessionStorage.setItem('scrollPosition', window.scrollY.toString());
          }}
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

const TrendingSection = () => {
  const displayedArticles = trendingArticles.slice(0, 3);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Trending Fact Checks</h2>
          <Link 
            to="/trending"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedArticles.map((fact) => (
            <FactCard key={fact.id} {...fact} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;