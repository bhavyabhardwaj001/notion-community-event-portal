import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white selection:bg-gray-200">
        <Navbar />
        
        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<div className="container mx-auto px-4 py-12 text-center text-gray-500">Events Page Coming Soon</div>} />
            <Route path="/events/:id" element={<div className="container mx-auto px-4 py-12 text-center text-gray-500">Event Details Coming Soon</div>} />
            <Route path="/register/:id" element={<div className="container mx-auto px-4 py-12 text-center text-gray-500">Registration Coming Soon</div>} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
