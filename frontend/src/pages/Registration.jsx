import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Loader2 } from 'lucide-react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

const Registration = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loadingEvent, setLoadingEvent] = useState(true);
  
  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    branch: '',
    year: '',
    reason: ''
  });
  
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`/api/events/${id}`);
        setEvent(response.data);
      } catch (err) {
        setError('Failed to load event details.');
      } finally {
        setLoadingEvent(false);
      }
    };
    fetchEvent();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    
    try {
      await axios.post('/api/register', {
        eventId: id,
        ...formData
      });
      setSuccess(true);
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong during registration.');
    } finally {
      setSubmitting(false);
    }
  };

  if (loadingEvent) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <Loader2 className="w-10 h-10 text-gray-400 animate-spin" />
      </div>
    );
  }

  // --- SUCCESS STATE ---
  if (success) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4 py-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 max-w-lg w-full text-center"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-10 h-10 text-green-600" />
          </motion.div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">You're In!</h2>
          <p className="text-gray-500 mb-8">
            You have successfully registered for <span className="font-semibold text-gray-900">{event?.title}</span>. We've sent a confirmation to your email.
          </p>
          
          <Link to="/events">
            <Button variant="primary" className="w-full h-12">
              Browse More Events
            </Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  // --- REGISTRATION FORM ---
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link to={`/events/${id}`} className="inline-flex items-center text-gray-500 hover:text-gray-900 mb-8 text-sm font-medium transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Event Details
        </Link>
        
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          
          {/* Header */}
          <div className="bg-gray-900 p-8 text-white">
            <h1 className="text-2xl font-bold mb-2">Register for Event</h1>
            <p className="text-gray-400 text-sm">You are registering for: <span className="text-white font-medium">{event?.title}</span></p>
          </div>

          {/* Form */}
          <div className="p-8">
            {error && (
              <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-6 text-sm font-medium border border-red-100">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input 
                  label="Full Name" 
                  name="fullName" 
                  value={formData.fullName} 
                  onChange={handleChange} 
                  required 
                  placeholder="John Doe"
                />
                <Input 
                  label="Email Address" 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  placeholder="john@example.com"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input 
                  label="Contact Number" 
                  name="contactNumber" 
                  value={formData.contactNumber} 
                  onChange={handleChange} 
                  required 
                  placeholder="+1 234 567 8900"
                />
                <Input 
                  label="College / Branch" 
                  name="branch" 
                  value={formData.branch} 
                  onChange={handleChange} 
                  required 
                  placeholder="Computer Science"
                />
              </div>

              <Input 
                label="Year of Study" 
                name="year" 
                value={formData.year} 
                onChange={handleChange} 
                required 
                placeholder="e.g. 3rd Year"
              />

              <div className="flex flex-col">
                <label className="mb-1.5 text-sm font-medium text-gray-700">Why do you want to attend?</label>
                <textarea 
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-md text-sm transition-all outline-none hover:border-gray-300 focus:border-gray-900 focus:bg-white focus:ring-1 focus:ring-gray-900 resize-none"
                  placeholder="Tell us what you hope to learn..."
                ></textarea>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <Button 
                  type="submit" 
                  variant="primary" 
                  size="lg" 
                  className="w-full h-14 text-lg"
                  disabled={submitting}
                >
                  {submitting ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Confirm Registration'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
