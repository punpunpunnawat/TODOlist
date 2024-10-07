const express = require('express');
const db = require('./database/db'); // Update this line to match your db.js file

const app = express();
const port = 5000;

// Middleware to parse JSON requests
app.use(express.json());

// Example route to get all tasks
app.get('/tasks', (req, res) => {
  db.query('SELECT * FROM tasks', (err, results) => {
    if (err) {
      console.error('Error fetching tasks: ' + err.stack);
      return res.status(500).send('Error fetching tasks');
    }
    console.log('Fetched tasks:', results); // Log fetched tasks
    res.json(results); // Send fetched tasks as JSON
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
