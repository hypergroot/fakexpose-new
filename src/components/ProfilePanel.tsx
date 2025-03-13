import React, { Fragment, useState, useRef } from 'react';
import { Dialog, Transition, Tab } from '@headlessui/react';
import { 
  X, 
  Camera, 
  Moon, 
  Sun, 
  LogOut, 
  Trophy,
  Settings,
  User,
  Mail,
  Lock,
  Save,
  AlertCircle,
  CheckCircle
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { updateProfile, updateEmail, updatePassword } from 'firebase/auth';

interface ProfilePanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProfilePanel: React.FC<ProfilePanelProps> = ({ isOpen, onClose }) => {
  const { currentUser, logout } = useAuth();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    displayName: currentUser?.displayName || '',
    email: currentUser?.email || '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && currentUser) {
      try {
        // Here you would typically:
        // 1. Upload the file to Firebase Storage
        // 2. Get the download URL
        // 3. Update the user's profile with the new photo URL
        setError(null);
        setSuccess('Profile photo updated successfully');
      } catch (error) {
        setError('Failed to update profile photo');
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveProfile = async () => {
    if (!currentUser) return;
    
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      if (formData.displayName !== currentUser.displayName) {
        await updateProfile(currentUser, {
          displayName: formData.displayName
        });
      }

      if (formData.email !== currentUser.email) {
        await updateEmail(currentUser, formData.email);
      }

      if (formData.newPassword) {
        if (formData.newPassword !== formData.confirmPassword) {
          throw new Error('New passwords do not match');
        }
        await updatePassword(currentUser, formData.newPassword);
      }

      setSuccess('Profile updated successfully');
      setIsEditing(false);
      
      // Reset password fields
      setFormData(prev => ({
        ...prev,
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      }));
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      onClose();
    } catch (error) {
      setError('Failed to log out');
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Here you would implement the actual dark mode logic
  };

  const mockQuizHistory = [
    { date: '2024-03-15', score: 90, rank: 1 },
    { date: '2024-03-14', score: 80, rank: 3 },
    { date: '2024-03-13', score: 70, rank: 5 },
  ];

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="px-4 py-6 sm:px-6">
                      <div className="flex items-center justify-between">
                        <Dialog.Title className="text-xl font-semibold text-gray-900">
                          Profile
                        </Dialog.Title>
                        <button
                          type="button"
                          className="rounded-md text-gray-400 hover:text-gray-500"
                          onClick={onClose}
                        >
                          <X className="h-6 w-6" />
                        </button>
                      </div>
                    </div>

                    <Tab.Group>
                      <Tab.List className="flex space-x-1 border-b border-gray-200 px-4">
                        <Tab className={({ selected }) =>
                          `w-full py-2.5 text-sm font-medium leading-5 
                          ${selected 
                            ? 'text-blue-600 border-b-2 border-blue-600' 
                            : 'text-gray-500 hover:text-gray-700'}`
                        }>
                          Profile
                        </Tab>
                        <Tab className={({ selected }) =>
                          `w-full py-2.5 text-sm font-medium leading-5 
                          ${selected 
                            ? 'text-blue-600 border-b-2 border-blue-600' 
                            : 'text-gray-500 hover:text-gray-700'}`
                        }>
                          Quiz History
                        </Tab>
                        <Tab className={({ selected }) =>
                          `w-full py-2.5 text-sm font-medium leading-5 
                          ${selected 
                            ? 'text-blue-600 border-b-2 border-blue-600' 
                            : 'text-gray-500 hover:text-gray-700'}`
                        }>
                          Settings
                        </Tab>
                      </Tab.List>

                      <Tab.Panels className="flex-1 overflow-y-auto">
                        {/* Profile Tab */}
                        <Tab.Panel className="p-4">
                          <div className="space-y-6">
                            {/* Profile Photo */}
                            <div className="text-center">
                              <div className="relative inline-block">
                                {currentUser?.photoURL ? (
                                  <img
                                    src={currentUser.photoURL}
                                    alt="Profile"
                                    className="h-24 w-24 rounded-full object-cover"
                                  />
                                ) : (
                                  <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center">
                                    <User className="h-12 w-12 text-gray-400" />
                                  </div>
                                )}
                                <button
                                  onClick={() => fileInputRef.current?.click()}
                                  className="absolute bottom-0 right-0 bg-blue-600 rounded-full p-2 text-white hover:bg-blue-700"
                                >
                                  <Camera className="h-4 w-4" />
                                </button>
                                <input
                                  type="file"
                                  ref={fileInputRef}
                                  className="hidden"
                                  accept="image/*"
                                  onChange={handleFileSelect}
                                />
                              </div>
                            </div>

                            {/* Status Messages */}
                            {error && (
                              <div className="p-4 bg-red-50 rounded-lg flex items-start">
                                <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                                <p className="text-sm text-red-700">{error}</p>
                              </div>
                            )}

                            {success && (
                              <div className="p-4 bg-green-50 rounded-lg flex items-start">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                <p className="text-sm text-green-700">{success}</p>
                              </div>
                            )}

                            {/* Profile Form */}
                            <div className="space-y-4">
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                  Display Name
                                </label>
                                <div className="relative">
                                  <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                                  <input
                                    type="text"
                                    name="displayName"
                                    value={formData.displayName}
                                    onChange={handleInputChange}
                                    className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Your name"
                                  />
                                </div>
                              </div>

                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                  Email
                                </label>
                                <div className="relative">
                                  <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                                  <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="your@email.com"
                                  />
                                </div>
                              </div>

                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                  New Password
                                </label>
                                <div className="relative">
                                  <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                                  <input
                                    type="password"
                                    name="newPassword"
                                    value={formData.newPassword}
                                    onChange={handleInputChange}
                                    className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="New password"
                                  />
                                </div>
                              </div>

                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                  Confirm New Password
                                </label>
                                <div className="relative">
                                  <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                                  <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Confirm new password"
                                  />
                                </div>
                              </div>

                              <button
                                onClick={handleSaveProfile}
                                disabled={loading}
                                className={`w-full py-2 px-4 rounded-lg text-white font-medium ${
                                  loading
                                    ? 'bg-blue-400 cursor-not-allowed'
                                    : 'bg-blue-600 hover:bg-blue-700'
                                } transition-colors`}
                              >
                                {loading ? (
                                  <div className="flex items-center justify-center">
                                    <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                    Saving...
                                  </div>
                                ) : (
                                  'Save Changes'
                                )}
                              </button>
                            </div>
                          </div>
                        </Tab.Panel>

                        {/* Quiz History Tab */}
                        <Tab.Panel className="p-4">
                          <div className="space-y-6">
                            <div className="flex items-center justify-between">
                              <h3 className="text-lg font-semibold text-gray-900">Recent Quiz Results</h3>
                              <Trophy className="h-6 w-6 text-yellow-500" />
                            </div>

                            <div className="space-y-4">
                              {mockQuizHistory.map((quiz, index) => (
                                <div
                                  key={index}
                                  className="bg-gray-50 rounded-lg p-4 flex items-center justify-between"
                                >
                                  <div>
                                    <p className="text-sm text-gray-600">{quiz.date}</p>
                                    <p className="font-medium text-gray-900">Score: {quiz.score}%</p>
                                  </div>
                                  <div className="flex items-center">
                                    <Trophy className="h-5 w-5 text-yellow-500 mr-1" />
                                    <span className="text-sm font-medium text-gray-700">
                                      Rank #{quiz.rank}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>

                            <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                              View All Quiz Results
                            </button>
                          </div>
                        </Tab.Panel>

                        {/* Settings Tab */}
                        <Tab.Panel className="p-4">
                          <div className="space-y-6">
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900 mb-4">Appearance</h3>
                              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                <div className="flex items-center">
                                  {isDarkMode ? (
                                    <Moon className="h-5 w-5 text-gray-600 mr-2" />
                                  ) : (
                                    <Sun className="h-5 w-5 text-yellow-500 mr-2" />
                                  )}
                                  <span className="font-medium text-gray-900">
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

                            <div>
                              <h3 className="text-lg font-semibold text-gray-900 mb-4">Account</h3>
                              <div className="space-y-4">
                                <button className="w-full text-left px-4 py-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors flex items-center">
                                  <Settings className="h-5 w-5 text-gray-500 mr-2" />
                                  Account Settings
                                </button>
                                <button
                                  onClick={handleLogout}
                                  className="w-full text-left px-4 py-2 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors flex items-center"
                                >
                                  <LogOut className="h-5 w-5 mr-2" />
                                  Sign Out
                                </button>
                              </div>
                            </div>
                          </div>
                        </Tab.Panel>
                      </Tab.Panels>
                    </Tab.Group>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ProfilePanel;