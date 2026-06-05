const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();

connectDB().then(async () => {
  const Admin = require('./models/Admin');
  const adminExists = await Admin.findOne({ email: 'admin@notion.com' });
  if (!adminExists) {
    await Admin.create({
      email: 'admin@notion.com',
      password: 'admin'
    });
    console.log('Admin account created');
  }
});

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Notion Community Event Portal API is running...');
});

app.use('/api/events', require('./routes/eventRoutes'));
app.use('/api/register', require('./routes/registrationRoutes'));
app.use('/api/registrations', require('./routes/adminRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
