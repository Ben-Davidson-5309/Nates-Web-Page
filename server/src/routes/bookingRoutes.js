const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

router.get('/booking', bookingController.getBookingForm);
router.post('/booking', bookingController.submitBooking);
router.get('/api/booked-dates/:type', bookingController.getBookedDates);


module.exports = router;
