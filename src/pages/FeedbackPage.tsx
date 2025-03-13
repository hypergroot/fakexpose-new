import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Send, CheckCircle, AlertTriangle, MessageSquare, ThumbsUp, ThumbsDown, HelpCircle } from 'lucide-react';

const FeedbackPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedbackType: '',
    subject: '',
    message: '',
    rating: 0
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const feedbackTypes = [
    { id: 'suggestion', label: 'Suggestion', icon: <ThumbsUp className="h-5 w-5 text-blue-500" /> },
    { id: 'issue', label: 'Report an Issue', icon: <ThumbsDown className="h-5 w-5 text-red-500" /> },
    { id: 'factcheck', label: 'Request a Fact Check', icon: <CheckCircle className="h-5 w-5 text-green-500" /> },
    { id: 'question', label: 'General Question', icon: <HelpCircle className="h-5 w-5 text-purple-500" /> },
    { id: 'other', label: 'Other', icon: <MessageSquare className="h-5 w-5 text-gray-500" /> }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleRatingChange = (rating: number) => {
    setFormData(prev => ({ ...prev, rating }));
  };

  const handleFeedbackTypeSelect = (type: string) => {
    setFormData(prev => ({ ...prev, feedbackType: type }));
    
    // Clear error when field is edited
    if (errors.feedbackType) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.feedbackType;
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.feedbackType) {
      newErrors.feedbackType = 'Please select a feedback type';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          feedbackType: '',
          subject: '',
          message: '',
          rating: 0
        });
      }, 1500);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={handleBack}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back
        </button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-blue-600 px-6 py-4">
            <h1 className="text-2xl font-bold text-white">Share Your Feedback</h1>
            <p className="text-blue-100 mt-1">
              Help us improve FakeXpose with your valuable input
            </p>
          </div>

          {isSubmitted ? (
            <div className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You for Your Feedback!</h2>
              <p className="text-gray-600 mb-6">
                We appreciate you taking the time to share your thoughts with us. 
                Your feedback helps us improve FakeXpose for everyone.
              </p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Submit Another Response
                </button>
                <button
                  onClick={handleBack}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
                >
                  Return to Previous Page
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6">
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">What type of feedback would you like to share?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {feedbackTypes.map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => handleFeedbackTypeSelect(type.id)}
                      className={`flex items-center p-4 border rounded-lg transition-colors ${
                        formData.feedbackType === type.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {type.icon}
                      <span className="ml-2">{type.label}</span>
                    </button>
                  ))}
                </div>
                {errors.feedbackType && (
                  <p className="mt-1 text-sm text-red-600">{errors.feedbackType}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.subject ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Brief description of your feedback"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
                )}
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Please provide details about your feedback, suggestion, or issue..."
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                )}
              </div>

              <div className="mb-8">
                <h3 className="block text-sm font-medium text-gray-700 mb-2">
                  How would you rate your experience with FakeXpose?
                </h3>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      type="button"
                      onClick={() => handleRatingChange(rating)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                        formData.rating >= rating
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                      }`}
                    >
                      {rating}
                    </button>
                  ))}
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  {formData.rating > 0 ? (
                    formData.rating >= 4 
                      ? "Great! We're glad you're enjoying FakeXpose." 
                      : formData.rating >= 3 
                        ? "Thank you for your feedback." 
                        : "We're sorry to hear that. We'll work to improve."
                  ) : 'Optional: Rate your experience from 1-5'}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  <AlertTriangle className="h-4 w-4 inline mr-1" />
                  All fields marked are required unless noted
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Submit Feedback
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900">What happens to my feedback?</h3>
              <p className="text-gray-600">
                Your feedback is reviewed by our team and used to improve FakeXpose. We take all suggestions and reports seriously and work to address issues promptly.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900">How do I request a specific fact check?</h3>
              <p className="text-gray-600">
                Select "Request a Fact Check" as your feedback type and provide details about the claim you'd like us to investigate. Include sources if available.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900">Will I receive a response to my feedback?</h3>
              <p className="text-gray-600">
                While we review all feedback, we may not be able to respond individually to every submission. For fact check requests, we'll notify you if we publish an article based on your suggestion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;