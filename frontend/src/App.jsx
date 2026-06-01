import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white">
        {/* Basic Navbar Skeleton */}
        <header className="py-6 border-b border-gray-100">
          <div className="container mx-auto px-4 font-semibold text-xl tracking-tight">
            Notion Community Events
          </div>
        </header>
        
        {/* Main Content Area */}
        <main className="flex-grow container mx-auto px-4 py-12">
          <Routes>
            <Route path="/" element={<div className="text-center text-gray-500">Home Page Content Coming Soon</div>} />
          </Routes>
        </main>
        
        {/* Basic Footer Skeleton */}
        <footer className="py-8 border-t border-gray-100 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Notion Community Events. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
