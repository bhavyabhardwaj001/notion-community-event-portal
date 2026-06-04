import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Compass, Zap, Users, CalendarDays, MousePointerClick, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import EventCard from '../components/EventCard';

const MOCK_EVENTS = [
  {
    _id: '1',
    title: 'Intro to React & Tailwind',
    tagline: 'Learn how to build modern web interfaces from scratch.',
    date: new Date(Date.now() + 86400000 * 3).toISOString(),
    time: '05:00 PM',
    venue: 'Main Auditorium',
    speaker: 'Sarah Drasner',
    banner: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800'
  },
  {
    _id: '2',
    title: 'UI/UX Design Masterclass',
    tagline: 'Master the art of designing intuitive digital products.',
    date: new Date(Date.now() + 86400000 * 7).toISOString(),
    time: '02:00 PM',
    venue: 'Design Lab',
    speaker: 'Gary Hustwit',
    banner: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800'
  },
  {
    _id: '3',
    title: 'Hackathon Info Session',
    tagline: 'Everything you need to know about the annual hackathon.',
    date: new Date(Date.now() + 86400000 * 10).toISOString(),
    time: '06:30 PM',
    venue: 'Online (Discord)',
    speaker: 'Community Leads',
    banner: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800'
  }
];

// --- Subcomponents for Clean Architecture ---

const HeroVisual = () => (
  <div className="relative w-full h-[400px] lg:h-[550px] flex items-center justify-center">
    {/* Decorative background gradients */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-100 rounded-full blur-[80px] opacity-60"></div>
    <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-purple-100 rounded-full blur-[60px] opacity-60"></div>

    {/* Center Main Card */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="absolute z-20 w-80 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/40 p-5"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-gray-900 text-white flex items-center justify-center shadow-lg">
          <CalendarDays className="w-6 h-6" />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 text-lg">Hackathon 2026</h4>
          <p className="text-sm text-gray-500">Dec 15 • 48 Hours</p>
        </div>
      </div>
      <div className="space-y-3 mb-5">
        <div className="h-2 bg-gray-100 rounded w-full"></div>
        <div className="h-2 bg-gray-100 rounded w-5/6"></div>
        <div className="h-2 bg-gray-100 rounded w-4/6"></div>
      </div>
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
        <div className="flex -space-x-2">
          {[1,2,3].map(i => (
            <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200"></div>
          ))}
        </div>
        <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-md">150+ Registered</span>
      </div>
    </motion.div>

    {/* Floating Card Left */}
    <motion.div
      animate={{ y: [0, -20, 0] }}
      transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      className="absolute z-10 top-[15%] left-[5%] w-64 bg-white/60 backdrop-blur-md rounded-2xl shadow-xl border border-white/40 p-4 hidden md:block"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
          <Zap className="text-green-600 w-5 h-5"/>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-900">Registration Confirmed</p>
          <p className="text-[10px] text-gray-500">Just now</p>
        </div>
      </div>
    </motion.div>

    {/* Floating Card Right */}
    <motion.div
      animate={{ y: [0, 15, 0] }}
      transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
      className="absolute z-10 bottom-[20%] right-[5%] w-56 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/40 p-4 hidden md:block"
    >
      <div className="space-y-2">
        <div className="h-20 bg-gray-100 rounded-lg w-full mb-3"></div>
        <div className="h-3 bg-gray-200 rounded w-3/4"></div>
        <div className="h-3 bg-gray-100 rounded w-1/2"></div>
      </div>
    </motion.div>
  </div>
);

const Home = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 border-b border-gray-100 overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-sm font-medium text-gray-900 mb-6">
                <span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
                Platform v2.0 is live
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
                Discover Events.<br/>
                Build Skills.<br/>
                <span className="text-gray-400">Connect.</span>
              </h1>
              <p className="text-lg lg:text-xl text-gray-500 mb-8 leading-relaxed">
                A modern platform to explore workshops, hackathons, speaker sessions, and community opportunities. Built for students who want to ship fast and grow.
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

      {/* 2. COMMUNITY TRUST SECTION */}
      <section className="py-8 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-24 text-center">
            {[
              { label: 'Students', value: '2000+' },
              { label: 'Workshops', value: '50+' },
              { label: 'Hackathons', value: '15+' },
              { label: 'Speakers', value: '100+' },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col"
              >
                <span className="text-3xl font-bold text-gray-900">{stat.value}</span>
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wider mt-1">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY USE THE PLATFORM */}
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

      {/* 4. PLATFORM SHOWCASE SECTION */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">
                Built for a flawless <br/> student experience.
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-md">
                Browse detailed event pages, track your registrations, and get all the information you need in a single, beautiful dashboard.
              </p>
              <ul className="space-y-4">
                {['Real-time event tracking', 'Beautiful typography and layouts', '1-click registration flow'].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Browser Mockup */}
            <motion.div 
              style={{ y }}
              className="relative rounded-xl overflow-hidden bg-white/5 border border-white/10 shadow-2xl backdrop-blur-sm"
            >
              {/* Browser Header */}
              <div className="h-10 bg-white/10 flex items-center px-4 gap-2 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <div className="mx-auto h-5 w-48 bg-white/5 rounded text-center"></div>
              </div>
              {/* Mockup Body */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <div className="w-32 h-6 bg-white/10 rounded"></div>
                  <div className="w-10 h-10 bg-white/10 rounded-full"></div>
                </div>
                <div className="w-full h-48 bg-white/5 rounded-lg mb-6"></div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-24 bg-white/5 rounded-lg"></div>
                  <div className="h-24 bg-white/5 rounded-lg"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. UPCOMING OPPORTUNITIES */}
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
            {MOCK_EVENTS.map((event, index) => (
              <motion.div
                key={event._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <EventCard event={event} />
              </motion.div>
            ))}
          </div>
          
          <div className="mt-10 md:hidden">
            <Link to="/events">
              <Button variant="outline" className="w-full h-12">View All Events</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA SECTION */}
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
