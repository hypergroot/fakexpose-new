import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LatestPage from './pages/LatestPage';
import FeaturedPage from './pages/FeaturedPage';
import TrendingPage from './pages/TrendingPage';
import PoliticsPage from './pages/PoliticsPage';
import FAQPage from './pages/FAQPage';
import QuizPage from './pages/QuizPage';
import FeedbackPage from './pages/FeedbackPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import SignInPage from './pages/SignInPage';
import FactCheckPage from './pages/FactCheckPage';
import ProfilePage from './pages/ProfilePage';
import QuizHistoryPage from './pages/QuizHistoryPage';
import SavedArticlesPage from './pages/SavedArticlesPage';
import SettingsPage from './pages/SettingsPage';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <Header />
            <main className="pt-16">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/latest" element={<LatestPage />} />
                <Route path="/featured" element={<FeaturedPage />} />
                <Route path="/trending" element={<TrendingPage />} />
                <Route path="/news-politics" element={<PoliticsPage />} />
                <Route path="/fact-check" element={<FactCheckPage />} />
                <Route path="/faqs" element={<FAQPage />} />
                <Route path="/quiz" element={<QuizPage />} />
                <Route path="/feedback" element={<FeedbackPage />} />
                <Route path="/article/:id" element={<ArticleDetailPage />} />
                <Route path="/signin" element={<SignInPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/quiz-history" element={<QuizHistoryPage />} />
                <Route path="/saved-articles" element={<SavedArticlesPage />} />
                <Route path="/settings" element={<SettingsPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;