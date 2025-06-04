const Booking = require('../models/Booking');
const sendEmail = require('../utils/sendEmail');

exports.getBookingForm = (req, res) => {
  res.render('booking', { selectedDate: null, errors: [], formData: {} });
};

exports.getBookedDates = async (req, res) => {
  const type = req.params.type;
  const bookings = await Booking.find({ type }, 'date');
  res.json(bookings.map(b => b.date));
};


exports.submitBooking = async (req, res) => {
  const { name, email, phone, address, date, type } = req.body;
  const errors = [];

  if (!name || !email || !phone || !address || !date || !type) {
    errors.push('All fields are required.');
  }

  const formData = req.body;

  try {
    const existing = await Booking.findOne({ date, type });
    if (existing) {
      errors.push('Date already booked.');
      return res.render('booking', { errors, formData, selectedDate: date });
    }

    const booking = new Booking(formData);
    await booking.save();

    // Send confirmation to user
    await sendEmail({
      to: email,
      subject: 'Your Booking is Confirmed',
      html: `<p>Hi ${name}, your booking for ${type} on ${date} is confirmed!</p>`,
    });

    // Notify admin
    await sendEmail({
      to: process.env.ADMIN_EMAIL,
      subject: 'New Booking',
      html: `<p>${name} booked a ${type} on ${date}</p>`,
    });

    res.redirect(`/confirmation?date=${date}`);
  } catch (err) {
    console.error(err);
    errors.push('An unexpected error occurred.');
    res.render('booking', { errors, formData, selectedDate: date });
  }
};
