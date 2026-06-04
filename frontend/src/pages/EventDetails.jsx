import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Calendar, MapPin, User, ArrowLeft, Loader2 } from 'lucide-react';
import Button from '../components/ui/Button';

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/events/${id}`);
        setEvent(response.data);
        setError(null);
      } catch (err) {
        setError('Failed to load event details.');
      } finally {
        setLoading(false);
      }
    };
    fetchEvent();
  }, [id]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <Loader2 className="w-10 h-10 text-gray-400 animate-spin mb-4" />
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="text-center py-24">
        <p className="text-red-500 mb-4">{error}</p>
        <Link to="/events"><Button variant="outline">Back to Events</Button></Link>
      </div>
    );
  }

  const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
    weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'
  });

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Banner */}
      <div className="w-full h-[40vh] md:h-[50vh] bg-gray-100 relative overflow-hidden">
        <img 
          src={event.banner || '/fallback.avif'} 
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 lg:px-16 container mx-auto">
          <Link to="/events" className="inline-flex items-center text-white/80 hover:text-white mb-6 text-sm font-medium transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Events
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="bg-blue-500 text-white px-3 py-1 text-xs font-semibold rounded-full uppercase tracking-wider mb-4 inline-block">Upcoming</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">{event.title}</h1>
            <p className="text-xl text-white/90 max-w-2xl">{event.tagline}</p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-16 mt-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Main Content */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">About This Event</h2>
            <div className="prose prose-lg text-gray-600 max-w-none">
              <p className="whitespace-pre-line">{event.description}</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-24 bg-gray-50 border border-gray-100 rounded-3xl p-8 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Event Details</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center mr-4 shrink-0">
                    <Calendar className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Date & Time</p>
                    <p className="text-gray-900 font-medium">{formattedDate}</p>
                    <p className="text-gray-600">{event.time}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center mr-4 shrink-0">
                    <MapPin className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Venue</p>
                    <p className="text-gray-900 font-medium">{event.venue}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center mr-4 shrink-0">
                    <User className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Speaker / Mentor</p>
                    <p className="text-gray-900 font-medium">{event.speaker}</p>
                  </div>
                </div>
              </div>

              <Link to={`/register/${event._id}`}>
                <Button variant="primary" size="lg" className="w-full h-14 text-lg shadow-lg shadow-gray-900/10">
                  Register Now
                </Button>
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
