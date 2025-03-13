import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, CheckCircle, XCircle } from 'lucide-react';
import { featuredArticles } from '../data/featured';

const FeaturedArticle = ({ title, image, rating, author }) => {
  const getRatingBadge = () => {
    switch (rating.toLowerCase()) {
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

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          {getRatingBadge()}
          <span className="text-sm text-gray-600">By {author}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <Link 
          to={`/article/${featuredArticles[0].id}`}
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          Read Full Analysis →
        </Link>
      </div>
    </div>
  );
};

const FeaturedSection = () => {
  const featuredArticle = featuredArticles[0];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured</h2>
          <Link to="/featured" className="text-blue-600 hover:text-blue-800 font-medium">
            View All →
          </Link>
        </div>
        <FeaturedArticle {...featuredArticle} />
      </div>
    </section>
  );
};

export default FeaturedSection;