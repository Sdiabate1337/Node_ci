// Import the express module
const express = require('express');

// Create an instance of the express application
const app = express();

// Define the port the server will listen on
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Basic route handling for the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Another route for handling a different path
app.get('/about', (req, res) => {
  res.send('This is a basic Node.js application using Express.');
});

// A route for handling POST requests
app.post('/data', (req, res) => {
  const data = req.body;
  res.send(`You sent: ${JSON.stringify(data)}`);
});

// Start the server and listen on the specified port
module.exports = app;