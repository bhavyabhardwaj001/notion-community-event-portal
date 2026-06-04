const Registration = require('../models/Registration');
const Event = require('../models/Event');

const registerForEvent = async (req, res) => {
  try {
    const { eventId, fullName, email, contactNumber, branch, year, reason } = req.body;

    // Check if the event exists
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    // Check if user has already registered for THIS event
    const existingRegistration = await Registration.findOne({ eventId, email });
    if (existingRegistration) {
      return res.status(400).json({ message: 'You have already registered for this event with this email.' });
    }

    // Create the registration
    const registration = await Registration.create({
      eventId,
      fullName,
      email,
      contactNumber,
      branch,
      year,
      reason
    });

    res.status(201).json({
      message: 'Registration successful',
      registration
    });

  } catch (error) {
    res.status(400).json({ message: 'Registration failed. Please check your inputs.', error: error.message });
  }
};

const getRegistrations = async (req, res) => {
  try {
    // Populate eventId to get event details along with registrations
    const registrations = await Registration.find().populate('eventId', 'title date');
    res.status(200).json(registrations);
  } catch (error) {
    res.status(500).json({ message: 'Server Error: Unable to fetch registrations' });
  }
};

module.exports = {
  registerForEvent,
  getRegistrations
};
