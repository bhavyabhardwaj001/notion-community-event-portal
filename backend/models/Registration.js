const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
    required: true,
  },
  fullName: {
    type: String,
    required: [true, 'Please provide your full name'],
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email'
    ],
  },
  contactNumber: {
    type: String,
    required: [true, 'Please provide your contact number'],
  },
  branch: {
    type: String,
    required: [true, 'Please provide your college or branch'],
  },
  year: {
    type: String,
    required: [true, 'Please provide your current year of study'],
  },
  reason: {
    type: String,
    required: [true, 'Please let us know why you want to attend'],
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Registration', registrationSchema);
