import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Compass, Zap, Users, CalendarDays, MousePointerClick, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import EventCard from '../components/EventCard';
import logo from '../assets/notion_logo.png';

import { useState, useEffect } from 'react';
import axios from 'axios';


const HeroVisual = () => (
  <div className="relative w-full h-[300px] lg:h-[500px] flex items-center justify-center p-4">
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
    >
      <img 
        src="/hackathon_event.avif" 
        alt="Students collaborating at a hackathon" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent"></div>
    </motion.div>
  </div>
);

const Home = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get('/api/events');
        setEvents(res.data.slice(0, 3)); // Only get top 3
      } catch (error) {
        console.error('Failed to fetch events for home page');
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-hidden">
      
      <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 border-b border-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-sm font-medium text-gray-800 mb-6">
                <CalendarDays className="w-4 h-4 text-gray-500" />
                Event Registration Portal
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
                Discover Events.<br/>
                Build Skills.<br/>
                <span className="text-gray-400">Connect.</span>
              </h1>
              <p className="text-lg lg:text-xl text-gray-500 mb-8 leading-relaxed">
                A modern platform to explore workshops, hackathons, and community opportunities for the students of VIT Bhopal University.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/events">
                  <Button variant="primary" size="lg" className="w-full sm:w-auto group h-12 px-8">
                    Explore Events
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto h-12 px-8">
                    Learn More
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right Visual */}
            <div className="relative lg:h-full">
               <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-gray-900 text-white relative overflow-hidden">
        {/* Animated Background Gradients */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none"
        ></motion.div>
        
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
            
            {/* Floating Logo */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative mb-10"
            >
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="w-24 h-24 bg-white rounded-3xl shadow-[0_0_50px_rgba(255,255,255,0.3)] flex items-center justify-center p-5 relative z-10"
              >
                <img src={logo} alt="Notion Logo" className="w-full h-full object-contain" />
              </motion.div>
            </motion.div>

            {/* Staggered Text */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400"
            >
              Notion Community <br/> @ VIT Bhopal
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-400 font-medium tracking-wide"
            >
              Bringing Notion closer to you
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Everything you need to grow</h2>
            <p className="text-lg text-gray-500">We've built a streamlined experience so you can focus on what matters: learning and connecting.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Compass className="w-6 h-6 text-blue-600" />,
                title: 'Discover Events',
                desc: 'Find workshops, hackathons, and learning opportunities curated exclusively for students.'
              },
              {
                icon: <MousePointerClick className="w-6 h-6 text-purple-600" />,
                title: 'Register Effortlessly',
                desc: 'Register in seconds with a clean, streamlined experience. No clunky Google Forms.'
              },
              {
                icon: <Users className="w-6 h-6 text-green-600" />,
                title: 'Grow Your Network',
                desc: 'Connect with mentors, industry speakers, and like-minded peers at every event.'
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all group"
              >
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">What's Happening Next</h2>
              <p className="text-lg text-gray-500">Secure your spot before tickets run out.</p>
            </div>
            <Link to="/events">
              <Button variant="outline" className="hidden md:flex">
                View All Events
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              <div className="col-span-3 text-center py-12 text-gray-500">Loading events...</div>
            ) : events.length === 0 ? (
              <div className="col-span-3 text-center py-12 text-gray-500">More events coming soon!</div>
            ) : (
              events.map((event, index) => (
                <motion.div
                  key={event._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <EventCard event={event} />
                </motion.div>
              ))
            )}
          </div>
          
          <div className="mt-10 md:hidden">
            <Link to="/events">
              <Button variant="outline" className="w-full h-12">View All Events</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Ready to join your next opportunity?</h2>
            <p className="text-xl text-gray-500 mb-8">
              Join thousands of students building their careers through our community platform.
            </p>
            <Link to="/events">
              <Button variant="primary" size="lg" className="h-14 px-10 text-lg shadow-lg shadow-gray-900/20 hover:shadow-gray-900/30">
                Browse Events Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;
