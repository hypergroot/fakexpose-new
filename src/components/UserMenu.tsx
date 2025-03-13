import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogOut, User, Settings, Award, BookOpen } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    try {
      await logout();
      setIsOpen(false);
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Get user's initials for avatar fallback
  const getUserInitials = () => {
    if (currentUser?.displayName) {
      return currentUser.displayName
        .split(' ')
        .map(name => name[0])
        .join('')
        .toUpperCase()
        .substring(0, 2);
    }
    return 'U';
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={toggleMenu}
        className="flex items-center focus:outline-none"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {currentUser?.photoURL ? (
          <img
            src={currentUser.photoURL}
            alt="User profile"
            className="h-8 w-8 rounded-full object-cover border-2 border-white"
          />
        ) : (
          <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-medium">
            {getUserInitials()}
          </div>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1" role="menu" aria-orientation="vertical">
            <div className="px-4 py-3 border-b border-gray-100">
              <p className="text-sm font-medium text-gray-900 truncate">
                {currentUser?.displayName || 'User'}
              </p>
              <p className="text-xs text-gray-500 truncate mt-1">
                {currentUser?.email}
              </p>
            </div>

            <button
              onClick={() => handleNavigation('/profile')}
              className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              <User className="mr-3 h-4 w-4 text-gray-500" />
              Your Profile
            </button>

            <button
              onClick={() => handleNavigation('/quiz-history')}
              className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              <Award className="mr-3 h-4 w-4 text-gray-500" />
              Quiz History
            </button>

            <button
              onClick={() => handleNavigation('/saved-articles')}
              className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              <BookOpen className="mr-3 h-4 w-4 text-gray-500" />
              Saved Articles
            </button>

            <button
              onClick={() => handleNavigation('/settings')}
              className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              <Settings className="mr-3 h-4 w-4 text-gray-500" />
              Settings
            </button>

            <div className="border-t border-gray-100">
              <button
                onClick={handleLogout}
                className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                <LogOut className="mr-3 h-4 w-4 text-gray-500" />
                Sign Out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;