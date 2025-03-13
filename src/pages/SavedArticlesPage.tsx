import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Bookmark, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

interface SavedArticle {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  rating: 'true' | 'false' | 'mixed';
  date: string;
  category: string;
}

const mockSavedArticles: SavedArticle[] = [
  {
    id: 1,
    title: "Fact Check: Did Scientists Really Create a 'Time Machine'?",
    excerpt: "Recent claims about a breakthrough in time travel technology have been circulating on social media...",
    image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&q=80",
    rating: "false",
    date: "2024-03-15",
    category: "Science"
  },
  {
    id: 2,
    title: "Examining AI-Generated Celebrity Endorsements",
    excerpt: "Investigation into the rise of deepfake videos featuring celebrities promoting various products...",
    image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&q=80",
    rating: "true",
    date: "2024-03-14",
    category: "Technology"
  },
  {
    id: 3,
    title: "Climate Change Impact on Global Weather Patterns",
    excerpt: "Analysis of recent extreme weather events and their connection to climate change...",
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&q=80",
    rating: "mixed",
    date: "2024-03-13",
    category: "Environment"
  }
];

const SavedArticlesPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const getRatingBadge = (rating: SavedArticle['rating']) => {
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

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={handleBack}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back
        </button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Saved Articles</h1>
                <p className="mt-2 text-gray-600">Your personal fact-check library</p>
              </div>
              <Bookmark className="h-8 w-8 text-blue-600" />
            </div>

            <div className="space-y-6">
              {mockSavedArticles.map((article) => (
                <div
                  key={article.id}
                  className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="md:w-1/3">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <div className="flex flex-wrap gap-3 mb-2">
                      {getRatingBadge(article.rating)}
                      <span className="text-sm text-gray-500">{article.category}</span>
                      <span className="text-sm text-gray-500">{article.date}</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <Link
                        to={`/article/${article.id}`}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Read Full Analysis →
                      </Link>
                      <button className="text-gray-400 hover:text-gray-600">
                        <Bookmark className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {mockSavedArticles.length === 0 && (
              <div className="text-center py-12">
                <Bookmark className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900">No saved articles yet</h3>
                <p className="text-gray-600 mt-2">
                  Start saving fact-checks to build your personal library
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedArticlesPage;