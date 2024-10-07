// api/tasks.js
const express = require('express');
const router = express.Router();
const db = require('../database/db'); // Ensure the path is correct

// GET all tasks
router.get('/tasks', (req, res) => {
  db.query('SELECT * FROM tasks', (err, results) => {
    if (err) {
      console.error('Error fetching tasks:', err.message);
      return res.status(500).json({ error: err.message });
    }
    console.log('Fetched tasks:', results); // Log fetched tasks
    res.json(results); // Send the results as a JSON response
  });
});

module.exports = router;
