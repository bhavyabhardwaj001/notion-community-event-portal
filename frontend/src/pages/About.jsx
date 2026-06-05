import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gray-50 py-24 border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">About Notion Community</h1>
            <p className="text-xl text-gray-500 leading-relaxed">
              We are a passionate group of students at VIT Bhopal University dedicated to learning, building, and sharing knowledge about modern tools and technologies.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-24 container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Community First</h3>
            <p className="text-gray-500">We believe in growing together. Our events are designed to foster collaboration and networking among VIT Bhopal students.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Goal Oriented</h3>
            <p className="text-gray-500">Every workshop and hackathon we organize is focused on providing practical, actionable skills that you can use immediately.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Continuous Learning</h3>
            <p className="text-gray-500">The tech landscape moves fast. We bring industry experts and experienced seniors to help you stay ahead of the curve.</p>
          </motion.div>

        </div>
      </div>

    </div>
  );
};

export default About;
