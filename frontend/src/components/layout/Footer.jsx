import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/notion_logo.png';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Notion Logo" className="w-6 h-6" />
            <span className="font-medium text-gray-900">Notion Community</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <span>&copy; {new Date().getFullYear()} Notion Community Events.</span>
            <Link to="/admin" className="hover:text-gray-900 transition-colors">Admin Login</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
