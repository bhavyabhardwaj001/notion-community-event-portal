import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Search, Loader2 } from 'lucide-react';
import EventCard from '../components/EventCard';
import Input from '../components/ui/Input';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        // Uses the Vite proxy to hit http://localhost:5000/api/events
        const response = await axios.get('/api/events');
        setEvents(response.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching events:', err);
        setError('Failed to load events. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const filteredEvents = events.filter(event => 
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (event.description && event.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (event.tagline && event.tagline.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header & Search */}
        <div className="mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 mb-4 tracking-tight"
          >
            Explore Events
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-500 mb-8 max-w-2xl"
          >
            Find the perfect workshop, hackathon, or session to accelerate your journey.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative max-w-xl"
          >
            {/* We position the search icon manually over the Input component */}
            <div className="absolute top-1/2 -translate-y-1/2 left-3 flex items-center pointer-events-none z-10">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <Input 
              type="text"
              placeholder="Search by event name or description..."
              className="[&>input]:pl-10 [&>input]:h-12 [&>input]:text-base"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </motion.div>
        </div>

        {/* Content Area */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-24">
            <Loader2 className="w-10 h-10 text-gray-400 animate-spin mb-4" />
            <p className="text-gray-500 font-medium">Loading events...</p>
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-100 text-red-600 p-6 rounded-xl text-center max-w-2xl mx-auto">
            <p className="font-medium">{error}</p>
            <p className="text-sm mt-2">Make sure your backend server is running.</p>
          </div>
        ) : filteredEvents.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <p className="text-gray-500 text-lg">No events found matching "{searchQuery}"</p>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <EventCard event={event} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Events;
