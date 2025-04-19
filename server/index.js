const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, '../public')));

// Example API route
app.get('/', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// Catch-all route to serve the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});