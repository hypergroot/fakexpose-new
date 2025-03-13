import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center">
              <Scale className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-2xl font-bold">FakeXpose</span>
            </div>
            <p className="mt-4 text-gray-400">
              Dedicated to uncovering the truth and fighting misinformation in the digital age.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Our Process</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Submit a Claim</a></li>
              <li>
                <Link 
                  to="/faqs" 
                  className="text-gray-400 hover:text-white"
                  onClick={() => {
                    sessionStorage.setItem('scrollPosition', window.scrollY.toString());
                  }}
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link 
                  to="/feedback" 
                  className="text-gray-400 hover:text-white"
                >
                  Feedback
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">DMCA Notice</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Connect With Us</h3>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Mail className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-semibold">Subscribe to our newsletter</h4>
              <div className="mt-2 flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-l-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-4 py-2 bg-blue-600 rounded-r-md hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} FakeXpose. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;