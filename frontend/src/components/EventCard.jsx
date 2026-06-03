import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './ui/Button';

const EventCard = ({ event }) => {
  const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="flex flex-col bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      {/* Banner */}
      <div className="h-48 w-full bg-gray-100 overflow-hidden relative">
        <img 
          src={event.banner || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800'} 
          alt={event.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex-grow">
          <h3 className="text-xl font-semibold text-gray-900 mb-1 leading-tight">
            {event.title}
          </h3>
          <p className="text-gray-500 text-sm mb-4 line-clamp-2">
            {event.tagline || event.description}
          </p>

          <div className="space-y-2 mb-6">
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="w-4 h-4 mr-2 text-gray-400" />
              <span>{formattedDate} • {event.time}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="w-4 h-4 mr-2 text-gray-400" />
              <span className="truncate">{event.venue}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <User className="w-4 h-4 mr-2 text-gray-400" />
              <span className="truncate">{event.speaker}</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-50">
          <Link to={`/events/${event._id}`} className="flex-1">
            <Button variant="outline" className="w-full">Details</Button>
          </Link>
          <Link to={`/register/${event._id}`} className="flex-1">
            <Button variant="primary" className="w-full">Register</Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;
