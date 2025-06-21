const express = require('express');
const app = express();

// Middleware to allow CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000/');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Your route handlers
app.post('/api/submit-form', (req, res) => {
  // Handle the request
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
