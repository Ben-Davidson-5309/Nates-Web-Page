const express = require('express');
const path = require('path');

const app = express();
const PORT = 5000;

// Set EJS as the templating engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views")); // Correctly set the views directory

// Route to render the EJS template
app.get('/ejs-sample', (req, res) => {
  res.render('index', { 
    title: "Welcome to Nate's Web Page", 
    message: "This is a sample EJS page!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});