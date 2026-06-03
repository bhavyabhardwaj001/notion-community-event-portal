import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gray-200 rounded-md"></div>
            <span className="font-medium text-gray-900">Notion Community</span>
          </div>
          
          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Notion Community Events. Built with React & Node.js.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
