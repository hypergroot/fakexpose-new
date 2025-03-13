import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { mostSearchedArticles } from '../data/mostSearched';

const SearchedArticle = ({ id, title, image, rating }) => {
  const getRatingIcon = () => {
    switch (rating.toLowerCase()) {
      case 'true':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'false':
        return <XCircle className="h-5 w-5 text-red-600" />;
      default:
        return <AlertCircle className="h-5 w-5 text-yellow-600" />;
    }
  };

  return (
    <Link 
      to={`/article/${id}`}
      className="group cursor-pointer"
      onClick={() => {
        // Store the current scroll position before navigation
        sessionStorage.setItem('scrollPosition', window.scrollY.toString());
      }}
    >
      <div className="relative overflow-hidden rounded-lg">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-white rounded-full p-1">
          {getRatingIcon()}
        </div>
      </div>
      <h3 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-blue-600 line-clamp-2">
        {title}
      </h3>
    </Link>
  );
};

const MostSearchedSection = () => {
  return (
    <section className="py-12 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Most Searched</h2>
          <Link 
            to="/most-searched" 
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mostSearchedArticles.map((article) => (
            <SearchedArticle key={article.id} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MostSearchedSection;