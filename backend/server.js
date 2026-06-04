const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to Database
connectDB().then(async () => {
  // Seed default admin if missing (useful for in-memory DB)
  const Admin = require('./models/Admin');
  const adminExists = await Admin.findOne({ email: 'admin@notion.com' });
  if (!adminExists) {
    await Admin.create({
      email: 'admin@notion.com',
      password: 'admin' // In a real app this is hashed by the model pre-save hook
    });
    console.log('Default Admin seeded (admin@notion.com / admin)');
  }
});

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Basic test route
app.get('/', (req, res) => {
  res.send('Notion Community Event Portal API is running...');
});

// API Routes
app.use('/api/events', require('./routes/eventRoutes'));
app.use('/api/register', require('./routes/registrationRoutes'));
app.use('/api/registrations', require('./routes/adminRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
