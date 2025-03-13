import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Settings, 
  Moon, 
  Sun, 
  Bell, 
  Globe, 
  Shield,
  LogOut 
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

const SettingsPage = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [notifications, setNotifications] = React.useState(true);
  const [language, setLanguage] = React.useState('en');

  const handleBack = () => {
    navigate(-1);
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={handleBack}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back
        </button>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Settings</h1>
                <p className="mt-2 text-gray-600 dark:text-gray-300">Customize your FakeXpose experience</p>
              </div>
              <Settings className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>

            <div className="space-y-6">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Appearance</h2>
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center">
                    {isDarkMode ? (
                      <Moon className="h-5 w-5 text-gray-600 dark:text-gray-300 mr-3" />
                    ) : (
                      <Sun className="h-5 w-5 text-yellow-500 mr-3" />
                    )}
                    <span className="font-medium text-gray-900 dark:text-white">
                      {isDarkMode ? 'Dark Mode' : 'Light Mode'}
                    </span>
                  </div>
                  <button
                    onClick={toggleDarkMode}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                      isDarkMode ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                        isDarkMode ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>

              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Notifications</h2>
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center">
                    <Bell className="h-5 w-5 text-gray-600 dark:text-gray-300 mr-3" />
                    <span className="font-medium text-gray-900 dark:text-white">Push Notifications</span>
                  </div>
                  <button
                    onClick={() => setNotifications(!notifications)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                      notifications ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                        notifications ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>

              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Language</h2>
                <div className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <Globe className="h-5 w-5 text-gray-600 dark:text-gray-300 mr-3" />
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="flex-1 bg-transparent border-none focus:outline-none text-gray-900 dark:text-white"
                  >
                    <option value="en">English</option>
                    <option value="es">Español</option>
                    <option value="fr">Français</option>
                    <option value="de">Deutsch</option>
                  </select>
                </div>
              </div>

              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Privacy & Security</h2>
                <div className="space-y-4">
                  <button className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-gray-600 dark:text-gray-300 mr-3" />
                      <span className="font-medium text-gray-900 dark:text-white">Privacy Settings</span>
                    </div>
                    <ArrowLeft className="h-5 w-5 text-gray-400 transform rotate-180" />
                  </button>
                </div>
              </div>

              <div>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center px-4 py-3 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
                >
                  <LogOut className="h-5 w-5 mr-2" />
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;