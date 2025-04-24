import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-6 sm:mb-0">
            <h2 className="text-2xl font-semibold text-gray-900">Linkkeeper</h2>
            <p className="text-sm text-gray-500 mt-2">
              Organize, save, and share your links effortlessly.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 justify-center sm:justify-end">
            <a href="#" className="text-gray-500 hover:text-gray-900 transition">Home</a>
            <a href="#" className="text-gray-500 hover:text-gray-900 transition">Features</a>
            <a href="#" className="text-gray-500 hover:text-gray-900 transition">Pricing</a>
            <a href="#" className="text-gray-500 hover:text-gray-900 transition">About</a>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-200 pt-4">
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Linkkeeper. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
