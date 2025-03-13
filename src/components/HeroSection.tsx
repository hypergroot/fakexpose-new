import React from 'react';
import { AlertTriangle } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative bg-blue-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 mb-4">
              <AlertTriangle className="h-4 w-4 mr-1" />
              Breaking Fact Check
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Separating</span>
              <span className="block text-blue-600">Fact from Fiction</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Latest: AI-Generated Images in Political Campaigns - What's Real and What's Not?
              Our comprehensive analysis reveals the truth behind viral campaign photos.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left">
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                Read Full Analysis
              </button>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <img
                className="w-full rounded-lg"
                src="https://images.unsplash.com/photo-1633259584604-afdc243122ea?auto=format&fit=crop&q=80"
                alt="AI generated imagery concept"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;