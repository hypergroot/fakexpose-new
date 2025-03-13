import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { articles } from '../data/articles';

const LatestArticle = ({ id, title, image, rating, author, excerpt }) => {
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
    <article className="flex flex-col md:flex-row gap-6 py-6 border-b border-gray-200 last:border-0">
      <div className="md:w-1/4">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 md:h-32 object-cover rounded-lg"
        />
      </div>
      <div className="md:w-3/4">
        <div className="flex items-center gap-4 mb-2">
          {getRatingIcon()}
          <span className="text-sm text-gray-600">By {author}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <Link 
          to={`/article/${id}`}
          className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
          Read Full Analysis →
        </Link>
      </div>
    </article>
  );
};

const LatestSection = () => {
  const latestArticles = articles.slice(0, 3);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Latest</h2>
          <Link 
            to="/latest"
            className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            View All →
          </Link>
        </div>
        <div className="divide-y divide-gray-200">
          {latestArticles.map((article) => (
            <LatestArticle key={article.id} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestSection;