const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the React app's build folder
app.use(express.static(path.join(__dirname, '../509-junk-hauling/build')));

// Catch-all route to serve the React app's index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../509-junk-hauling/build/index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});