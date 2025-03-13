import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, 
  Upload, 
  Mic, 
  X, 
  Image as ImageIcon,
  Link as LinkIcon,
  Hash,
  ArrowRight,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Camera
} from 'lucide-react';
import { searchFactChecks, FactCheckResult } from '../services/factCheck';
import { analyzeImage, VisionAnalysisResult } from '../services/visionApi';
import SearchResults from '../components/SearchResults';

interface Tag {
  id: string;
  name: string;
  category: string;
}

const popularTags: Tag[] = [
  { id: '1', name: 'Politics', category: 'category' },
  { id: '2', name: 'Health', category: 'category' },
  { id: '3', name: 'Technology', category: 'category' },
  { id: '4', name: 'Climate', category: 'category' },
  { id: '5', name: 'COVID-19', category: 'topic' },
  { id: '6', name: 'Elections', category: 'topic' },
  { id: '7', name: 'AI', category: 'topic' },
  { id: '8', name: 'Vaccines', category: 'topic' },
  { id: '9', name: 'Social Media', category: 'source' },
  { id: '10', name: 'News', category: 'source' },
];

const FactCheckPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [urlInput, setUrlInput] = useState('');
  const [showUrlInput, setShowUrlInput] = useState(false);
  const [searchResults, setSearchResults] = useState<FactCheckResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [urlVerificationResult, setUrlVerificationResult] = useState<{
    status: 'verified' | 'unverified' | 'suspicious' | null;
    message: string;
  } | null>(null);
  const [imageAnalysis, setImageAnalysis] = useState<VisionAnalysisResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await searchFactChecks(searchQuery);
      setSearchResults(response.claims || []);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to fetch fact check results');
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleTag = (tagId: string) => {
    setSelectedTags(prev => 
      prev.includes(tagId) 
        ? prev.filter(id => id !== tagId)
        : [...prev, tagId]
    );
  };

  const handleVoiceSearch = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new (window as any).webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onstart = () => {
        setIsRecording(true);
      };

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setSearchQuery(transcript);
        setIsRecording(false);
      };

      recognition.onerror = () => {
        setIsRecording(false);
      };

      recognition.onend = () => {
        setIsRecording(false);
      };

      recognition.start();
    } else {
      alert('Voice recognition is not supported in your browser.');
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const imageDataUrl = reader.result as string;
        setUploadedImage(imageDataUrl);
        
        // Start image analysis
        setIsAnalyzing(true);
        try {
          const result = await analyzeImage(imageDataUrl);
          setImageAnalysis(result);
        } catch (error) {
          setError('Failed to analyze image');
        } finally {
          setIsAnalyzing(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const extractDomain = (url: string): string => {
    try {
      const urlObj = new URL(url);
      return urlObj.hostname;
    } catch {
      return url;
    }
  };

  const handleUrlSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!urlInput.trim()) return;

    setIsLoading(true);
    setError(null);
    setUrlVerificationResult(null);

    try {
      // Extract domain and search for fact checks about this domain
      const domain = extractDomain(urlInput);
      const response = await searchFactChecks(domain);

      if (response.claims && response.claims.length > 0) {
        // Count the ratings to determine overall trustworthiness
        const ratings = response.claims.map(claim => 
          claim.claimReview[0]?.textualRating.toLowerCase() || ''
        );

        const falseCount = ratings.filter(r => 
          r.includes('false') || r.includes('fake') || r.includes('incorrect')
        ).length;

        const trueCount = ratings.filter(r => 
          r.includes('true') || r.includes('correct') || r.includes('accurate')
        ).length;

        if (falseCount > trueCount) {
          setUrlVerificationResult({
            status: 'suspicious',
            message: 'This website has been associated with multiple false claims. Exercise caution when using information from this source.'
          });
        } else if (trueCount > falseCount) {
          setUrlVerificationResult({
            status: 'verified',
            message: 'This appears to be a reliable source with a history of accurate reporting.'
          });
        } else {
          setUrlVerificationResult({
            status: 'unverified',
            message: 'We have mixed findings about this source. Please verify information from multiple reliable sources.'
          });
        }

        setSearchResults(response.claims);
      } else {
        setUrlVerificationResult({
          status: 'unverified',
          message: 'No fact checks found for this website. This doesn\'t necessarily mean it\'s unreliable, but exercise caution and verify information from multiple sources.'
        });
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to verify URL');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Fact Check</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Search our database or submit content for verification
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <form onSubmit={handleSearch} className="space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for news, claims, or topics to verify..."
                className="block w-full pl-10 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                <button
                  type="button"
                  onClick={handleVoiceSearch}
                  className={`p-2 rounded-full ${
                    isRecording ? 'bg-red-100 text-red-600' : 'hover:bg-gray-100 dark:hover:bg-gray-600'
                  }`}
                >
                  <Mic className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {popularTags.map(tag => (
                <button
                  key={tag.id}
                  type="button"
                  onClick={() => toggleTag(tag.id)}
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    selectedTags.includes(tag.id)
                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                      : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  <Hash className="h-4 w-4 mr-1" />
                  {tag.name}
                </button>
              ))}
            </div>

            <div className="flex justify-center space-x-4">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
              >
                <Search className="h-5 w-5 mr-2" />
                Search
              </button>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center"
              >
                <ImageIcon className="h-5 w-5 mr-2" />
                Upload Image
              </button>
              <button
                type="button"
                onClick={() => setShowUrlInput(true)}
                className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center"
              >
                <LinkIcon className="h-5 w-5 mr-2" />
                Submit URL
              </button>
            </div>
          </form>
        </div>

        {showUrlInput && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
            <form onSubmit={handleUrlSubmit}>
              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <input
                    type="url"
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                    placeholder="Enter URL to verify..."
                    className="block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`px-6 py-3 rounded-lg text-white font-medium ${
                    isLoading
                      ? 'bg-blue-400 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700'
                  } transition-colors flex items-center`}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Verifying...
                    </>
                  ) : (
                    'Verify'
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowUrlInput(false);
                    setUrlVerificationResult(null);
                  }}
                  className="p-2 text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </form>

            {urlVerificationResult && (
              <div className={`mt-4 p-4 rounded-lg flex items-start ${
                urlVerificationResult.status === 'verified'
                  ? 'bg-green-50 dark:bg-green-900/20'
                  : urlVerificationResult.status === 'suspicious'
                    ? 'bg-red-50 dark:bg-red-900/20'
                    : 'bg-yellow-50 dark:bg-yellow-900/20'
              }`}>
                {urlVerificationResult.status === 'verified' && (
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                )}
                {urlVerificationResult.status === 'suspicious' && (
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                )}
                {urlVerificationResult.status === 'unverified' && (
                  <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                )}
                <div>
                  <p className={`text-sm font-medium ${
                    urlVerificationResult.status === 'verified'
                      ? 'text-green-800 dark:text-green-300'
                      : urlVerificationResult.status === 'suspicious'
                        ? 'text-red-800 dark:text-red-300'
                        : 'text-yellow-800 dark:text-yellow-300'
                  }`}>
                    {urlVerificationResult.message}
                  </p>
                  {searchResults.length > 0 && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      Scroll down to see related fact checks for this source.
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {uploadedImage && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Uploaded Image</h2>
              <button
                onClick={() => {
                  setUploadedImage(null);
                  setImageAnalysis(null);
                }}
                className="text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <img
              src={uploadedImage}
              alt="Uploaded content"
              className="w-full max-h-96 object-contain rounded-lg"
            />
            
            {isAnalyzing ? (
              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 text-blue-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Analyzing image...
              </div>
            ) : imageAnalysis ? (
              <div className="mt-4 space-y-4">
                <div className={`p-4 rounded-lg flex items-start ${
                  imageAnalysis.isManipulated
                    ? 'bg-red-50 dark:bg-red-900/20'
                    : 'bg-green-50 dark:bg-green-900/20'
                }`}>
                  {imageAnalysis.isManipulated ? (
                    <AlertTriangle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  ) : (
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  )}
                  <div>
                    <p className={`text-sm font-medium ${
                      imageAnalysis.isManipulated
                        ? 'text-red-800 dark:text-red-300'
                        : 'text-green-800 dark:text-green-300'
                    }`}>
                      {imageAnalysis.manipulationDetails}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Confidence: {Math.round(imageAnalysis.confidence * 100)}%
                    </p>
                  </div>
                </div>

                {imageAnalysis.webMatches.length > 0 && (
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                      Similar Images Found Online
                    </h3>
                    <div className="space-y-3">
                      {imageAnalysis.webMatches.map((match, index) => (
                        <a
                          key={index}
                          href={match.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Camera className="h-4 w-4 text-gray-500 mr-2" />
                              <span className="text-sm text-gray-900 dark:text-white">
                                {match.title || 'Similar image'}
                              </span>
                            </div>
                            <span className="text-sm text-gray-500">
                              {Math.round(match.score * 100)}% match
                            </span>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg flex items-start">
                <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-500 mr-2 mt-0.5" />
                <p className="text-sm text-yellow-700 dark:text-yellow-400">
                  Failed to analyze image. Please try again or contact support if the issue persists.
                </p>
              </div>
            )}
          </div>
        )}

        <SearchResults 
          results={searchResults}
          isLoading={isLoading}
          error={error}
        />

        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept="image/*"
          onChange={handleFileUpload}
        />

        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mt-8">
          <h2 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-4">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Search className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-blue-900 dark:text-blue-100">Search</h3>
                <p className="mt-2 text-blue-700 dark:text-blue-300">
                  Enter keywords, phrases, or topics to find existing fact-checks
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Upload className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-blue-900 dark:text-blue-100">Submit</h3>
                <p className="mt-2 text-blue-700 dark:text-blue-300">
                  Upload images or submit URLs for verification by our team
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <ArrowRight className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-blue-900 dark:text-blue-100">Verify</h3>
                <p className="mt-2 text-blue-700 dark:text-blue-300">
                  Get accurate, research-based verification results
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactCheckPage;