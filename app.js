// Import required modules
const express = require('express');

// Create an Express application
const app = express();

// Define a route to handle GET requests with a query parameter
app.get('/calculateResult', (req, res) => {
  // Check if the query parameter 'input' is provided in the URL
  const inputValue = req.query.input;

  if (inputValue) {
    // Send the value of the 'input' parameter as JSON in the response
    res.json({ result: inputValue });
  } else {
    // If 'input' query parameter is not provided, return an error message
    res.status(400).json({ error: 'Missing input parameter in the URL' });
  }
});

// Set up the server to listen on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
