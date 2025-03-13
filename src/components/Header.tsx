import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Menu, X, Scale, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import UserMenu from './UserMenu';
import ProfilePanel from './ProfilePanel';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Latest', href: '/latest' },
    { name: 'Trending', href: '/trending' },
    { name: 'News & Politics', href: '/news-politics' },
    { name: 'Fact Check', href: '/fact-check' },
    { name: 'Quiz', href: '/quiz' },
    { name: 'Feedback', href: '/feedback' },
  ];

  const handleSignInClick = () => {
    navigate('/signin');
  };

  const handleLogoClick = () => {
    if (currentUser) {
      setIsProfileOpen(true);
    }
  };

  return (
    <>
      <header className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <button 
                onClick={handleLogoClick} 
                className="flex-shrink-0 flex items-center hover:opacity-80 transition-opacity"
              >
                <Scale className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-2xl font-bold text-gray-900">FakeXpose</span>
              </button>
              <nav className="hidden md:ml-6 md:flex md:space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      location.pathname === item.href ? 'text-blue-600' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="flex items-center">
              <div className="hidden md:block">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search fact checks..."
                    className="w-64 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>

              {currentUser ? (
                <div className="ml-4">
                  <UserMenu />
                </div>
              ) : (
                <button 
                  onClick={handleSignInClick}
                  className="ml-4 px-4 py-2 rounded-lg bg-blue-600 text-white flex items-center hover:bg-blue-700 transition-colors"
                >
                  <User className="h-5 w-5 mr-2" />
                  <span>Sign In</span>
                </button>
              )}

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="ml-4 md:hidden"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-gray-600" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-600" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 ${
                    location.pathname === item.href ? 'text-blue-600 bg-gray-50' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="px-2 pb-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search fact checks..."
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        )}
      </header>

      <ProfilePanel 
        isOpen={isProfileOpen} 
        onClose={() => setIsProfileOpen(false)} 
      />
    </>
  );
};

export default Header;