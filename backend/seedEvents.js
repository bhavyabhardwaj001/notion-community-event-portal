const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Event = require('./models/Event');

// Load env vars
dotenv.config();

const seedEvents = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected for Seeding...');

    // Clear existing events
    await Event.deleteMany();
    console.log('Cleared existing events.');

    const mockEvents = [
      {
        title: 'React & Tailwind Masterclass',
        tagline: 'Build stunning, responsive interfaces from scratch in 3 hours.',
        description: 'Join us for an intensive, hands-on workshop where we will build a complete web application from the ground up using React and Tailwind CSS v4. You will learn modern layout techniques, component architecture, and advanced styling tricks.\n\nBring your laptop and be ready to code!',
        date: new Date(Date.now() + 86400000 * 5).toISOString().split('T')[0], // 5 days from now
        time: '04:00 PM',
        venue: 'Block 4 Auditorium',
        speaker: 'Aditi Sharma',
        banner: '/react_event.avif'
      },
      {
        title: 'Notion UI/UX Design Sprint',
        tagline: 'Master the art of designing minimalist, premium digital products.',
        description: 'Ever wondered how companies like Notion achieve such clean and premium design systems? In this sprint, we will tear down popular SaaS interfaces and rebuild them in Figma.\n\nTopics covered:\n- Typography scales\n- White space architecture\n- Glassmorphism techniques',
        date: new Date(Date.now() + 86400000 * 12).toISOString().split('T')[0],
        time: '01:30 PM',
        venue: 'Computer Lab 2, CS Dept',
        speaker: 'Rohan Desai',
        banner: '/design_event.avif'
      },
      {
        title: 'Annual College Hackathon 2026',
        tagline: '48 hours of intense coding, caffeine, and innovation.',
        description: 'The biggest event of the year is here. Form teams of up to 4 people, pitch an idea, and build a working prototype in 48 hours. Mentors from top tech companies will be available to help you debug and scale your ideas.\n\nPrizes include cash rewards, internships, and exclusive merch.',
        date: new Date(Date.now() + 86400000 * 20).toISOString().split('T')[0],
        time: '09:00 AM',
        venue: 'Main Library & Seminar Hall',
        speaker: 'GDSC Leads (Ravi & Sneha)',
        banner: '/hackathon_event.avif'
      }
    ];

    await Event.insertMany(mockEvents);
    console.log('Successfully seeded 3 premium events!');

    process.exit(0);
  } catch (error) {
    console.error(`Error seeding events: ${error.message}`);
    process.exit(1);
  }
};

seedEvents();
