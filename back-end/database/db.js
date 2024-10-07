// database/db.js
const mysql = require('mysql2'); // Use mysql2

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'todo_list'
});

// Connect to the MySQL database
connection.connect(err => {
  if (err) {
    console.error('Error connecting to the database: ' + err.stack);
    return;
  }
  console.log('Connected to the database as id ' + connection.threadId);
});

// Export the connection
module.exports = connection;
