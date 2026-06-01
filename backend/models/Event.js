const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add an event title'],
    trim: true,
  },
  tagline: {
    type: String,
    required: [true, 'Please add a tagline'],
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
  },
  speaker: {
    type: String,
    required: [true, 'Please add speaker details'],
  },
  date: {
    type: Date,
    required: [true, 'Please add a date'],
  },
  time: {
    type: String,
    required: [true, 'Please add a time (e.g., 10:00 AM)'],
  },
  venue: {
    type: String,
    required: [true, 'Please add a venue or platform link'],
  },
  banner: {
    type: String,
    required: [true, 'Please add a banner image URL'],
  }
}, {
  timestamps: true // Automatically creates createdAt and updatedAt fields
});

module.exports = mongoose.model('Event', eventSchema);
