import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Users, PlusCircle, LogOut, LayoutDashboard, Search, CalendarPlus } from 'lucide-react';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('registrations'); // 'registrations' or 'create'
  
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [eventData, setEventData] = useState({
    title: '', tagline: '', description: '', date: '', time: '', venue: '', speaker: '', banner: ''
  });
  const [creating, setCreating] = useState(false);
  const [createMsg, setCreateMsg] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin');
      return;
    }

    const fetchRegistrations = async () => {
      try {
        setLoading(true);
        const res = await axios.get('/api/registrations', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setRegistrations(res.data);
      } catch (err) {
        setError('Failed to fetch data. Your session may have expired.');
        if (err.response?.status === 401) {
          handleLogout();
        }
      } finally {
        setLoading(false);
      }
    };

    fetchRegistrations();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin');
  };

  const handleEventSubmit = async (e) => {
    e.preventDefault();
    setCreating(true);
    setCreateMsg('');
    const token = localStorage.getItem('adminToken');

    try {
      await axios.post('/api/events', eventData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setCreateMsg('Event successfully created!');
      setEventData({ title: '', tagline: '', description: '', date: '', time: '', venue: '', speaker: '', banner: '' });
    } catch (err) {
      setCreateMsg('Error creating event: ' + (err.response?.data?.message || err.message));
    } finally {
      setCreating(false);
    }
  };

  const handleEventChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-gray-900 text-white p-6 flex flex-col">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <LayoutDashboard className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight">Admin Panel</span>
        </div>

        <nav className="flex-1 space-y-2">
          <button 
            onClick={() => setActiveTab('registrations')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium ${activeTab === 'registrations' ? 'bg-white/10 text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
          >
            <Users className="w-4 h-4" /> Registrations
          </button>
          <button 
            onClick={() => setActiveTab('create')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium ${activeTab === 'create' ? 'bg-white/10 text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
          >
            <PlusCircle className="w-4 h-4" /> Create Event
          </button>
        </nav>

        <button 
          onClick={handleLogout}
          className="mt-auto flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-400/10 rounded-xl transition-all text-sm font-medium"
        >
          <LogOut className="w-4 h-4" /> Logout
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8 lg:p-12 overflow-y-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          {activeTab === 'registrations' ? 'Registration Data' : 'Launch New Event'}
        </h1>

        {activeTab === 'registrations' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
              <h2 className="text-lg font-semibold text-gray-900">Recent Registrations</h2>
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type="text" placeholder="Search data..." className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-blue-500" />
              </div>
            </div>
            
            {loading ? (
              <div className="p-12 text-center text-gray-500">Loading data...</div>
            ) : error ? (
              <div className="p-12 text-center text-red-500">{error}</div>
            ) : registrations.length === 0 ? (
              <div className="p-12 text-center text-gray-500 flex flex-col items-center">
                <Users className="w-12 h-12 text-gray-300 mb-4" />
                <p>No registrations found yet.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-50 text-gray-500 font-medium border-b border-gray-100">
                    <tr>
                      <th className="px-6 py-4">Name</th>
                      <th className="px-6 py-4">Email</th>
                      <th className="px-6 py-4">Contact</th>
                      <th className="px-6 py-4">Branch/Year</th>
                      <th className="px-6 py-4">Event ID</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {registrations.map((reg) => (
                      <tr key={reg._id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 font-medium text-gray-900">{reg.fullName}</td>
                        <td className="px-6 py-4 text-gray-500">{reg.email}</td>
                        <td className="px-6 py-4 text-gray-500">{reg.contactNumber}</td>
                        <td className="px-6 py-4 text-gray-500">{reg.branch} - {reg.year}</td>
                        <td className="px-6 py-4 text-gray-400 font-mono text-xs">{reg.eventId?.title || reg.eventId}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </motion.div>
        )}

        {activeTab === 'create' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 max-w-3xl">
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-100">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                <CalendarPlus className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Event Details</h2>
                <p className="text-gray-500 text-sm">Publish a new event to the main portal.</p>
              </div>
            </div>

            {createMsg && (
              <div className={`p-4 rounded-xl mb-8 font-medium text-sm ${createMsg.includes('Error') ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                {createMsg}
              </div>
            )}

            <form onSubmit={handleEventSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="Event Title" name="title" value={eventData.title} onChange={handleEventChange} required placeholder="e.g. React Bootcamp" />
                <Input label="Short Tagline" name="tagline" value={eventData.tagline} onChange={handleEventChange} required placeholder="Learn React in 2 hours" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Input label="Date (YYYY-MM-DD)" type="date" name="date" value={eventData.date} onChange={handleEventChange} required />
                <Input label="Time" name="time" value={eventData.time} onChange={handleEventChange} required placeholder="05:00 PM" />
                <Input label="Venue" name="venue" value={eventData.venue} onChange={handleEventChange} required placeholder="Main Hall" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="Speaker Name" name="speaker" value={eventData.speaker} onChange={handleEventChange} required placeholder="John Doe" />
                <Input label="Banner Image URL" name="banner" value={eventData.banner} onChange={handleEventChange} placeholder="/event.avif" />
              </div>

              <div className="flex flex-col">
                <label className="mb-1.5 text-sm font-medium text-gray-700">Detailed Description</label>
                <textarea 
                  name="description" value={eventData.description} onChange={handleEventChange} required rows="5"
                  className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-md text-sm transition-all outline-none focus:border-gray-900 focus:bg-white resize-y"
                  placeholder="What will students learn?"
                ></textarea>
              </div>

              <div className="pt-4 flex justify-end">
                <Button type="submit" variant="primary" size="lg" disabled={creating} className="px-8">
                  {creating ? 'Publishing...' : 'Publish Event'}
                </Button>
              </div>
            </form>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
