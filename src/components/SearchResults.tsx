import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, AlertCircle, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import { FactCheckResult } from '../services/factCheck';

interface SearchResultsProps {
  results: FactCheckResult[];
  isLoading: boolean;
  error: string | null;
}

const SearchResults: React.FC<SearchResultsProps> = ({ results, isLoading, error }) => {
  const getRatingBadge = (rating: string) => {
    const normalizedRating = rating.toLowerCase();
    
    if (normalizedRating.includes('true') || normalizedRating.includes('correct')) {
      return (
        <span className="flex items-center bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-sm">
          <CheckCircle className="h-4 w-4 mr-1" />
          True
        </span>
      );
    } else if (normalizedRating.includes('false') || normalizedRating.includes('incorrect')) {
      return (
        <span className="flex items-center bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-300 px-3 py-1 rounded-full text-sm">
          <XCircle className="h-4 w-4 mr-1" />
          False
        </span>
      );
    } else if (normalizedRating.includes('misleading') || normalizedRating.includes('partly')) {
      return (
        <span className="flex items-center bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-300 px-3 py-1 rounded-full text-sm">
          <AlertTriangle className="h-4 w-4 mr-1" />
          Misleading
        </span>
      );
    } else {
      return (
        <span className="flex items-center bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
          <AlertCircle className="h-4 w-4 mr-1" />
          {rating}
        </span>
      );
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 mt-4">
        <div className="flex">
          <AlertCircle className="h-5 w-5 text-red-400 mt-0.5" />
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800 dark:text-red-300">Error</h3>
            <p className="mt-1 text-sm text-red-700 dark:text-red-200">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="text-center py-12">
        <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">No results found</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Try adjusting your search terms or check back later for more fact checks.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6 mt-6">
      {results.map((result, index) => (
        <div 
          key={index}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg"
        >
          <div className="p-6">
            <div className="flex flex-wrap gap-3 items-center mb-3">
              {result.claimReview.map((review, idx) => (
                getRatingBadge(review.textualRating)
              ))}
            </div>
            
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              {result.text}
            </h2>
            
            {result.claimant && (
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Claimed by: <span className="font-medium">{result.claimant}</span>
                {result.claimDate && ` on ${new Date(result.claimDate).toLocaleDateString()}`}
              </p>
            )}
            
            <div className="space-y-4">
              {result.claimReview.map((review, idx) => (
                <div key={idx} className="border-t dark:border-gray-700 pt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900 dark:text-white">
                      {review.publisher.name}
                    </span>
                    <a
                      href={review.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                    >
                      Read Full Report
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">{review.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;