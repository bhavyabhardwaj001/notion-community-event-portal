import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays } from 'lucide-react';
import Button from '../ui/Button';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-gray-900 text-white rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
            <CalendarDays className="w-5 h-5" />
          </div>
          <span className="font-semibold text-lg tracking-tight text-gray-900">
            Notion Community
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Home
          </Link>
          <Link to="/events" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Events
          </Link>
        </nav>

        {/* Call to Action */}
        <div className="flex items-center gap-4">
          <Link to="/events">
            <Button variant="primary">Explore Events</Button>
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
