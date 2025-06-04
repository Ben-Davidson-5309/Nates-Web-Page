require('dotenv').config(); // Loads variables from .env

const express = require('express');
const path = require('path');
const connectDB = require('./src/config/db'); // Import your DB connection

const app = express();
const PORT = process.env.PORT || 5000;

const bookingRoutes = require("./src/routes/bookingRoutes");


// Connect to MongoDB Atlas
connectDB();

// Middleware to parse JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", bookingRoutes)

// Set EJS as the templating engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

// Route to render the EJS template
app.get('/ejs-sample', (req, res) => {
  res.render('index', { 
    title: "Welcome to Nate's Web Page", 
    message: "This is a sample EJS page!"
  });
});

// TODO: Add API routes here when controllers are ready

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
