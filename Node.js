const express = require('express');
const mysql = require('mysql');

const app = express();
const PORT = process.env.PORT || 3000;

// Create MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'yourpassword',
    database: 'mydatabase'
});

// Connect to MySQL database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Middleware to parse JSON requests
app.use(express.json());

// User Registration Endpoint
app.post('/api/users/register', (req, res) => {
    const { name, email, password } = req.body;

    // Insert user into 'users' table
    connection.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password], (err, result) => {
        if (err) {
            console.error('Error registering user:', err);
            res.status(500).json({ message: 'Error registering user' });
            return;
        }
        res.status(201).json({ message: 'User registered successfully' });
    });
});

// User Login Endpoint
app.post('/api/users/login', (req, res) => {
    const { email, password } = req.body;

    // Check if user exists in 'users' table
    connection.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (err, result) => {
        if (err) {
            console.error('Error logging in user:', err);
            res.status(500).json({ message: 'Error logging in user' });
            return;
        }
        if (result.length === 0) {
            res.status(401).json({ message: 'Invalid email or password' });
            return;
        }
        res.json({ message: 'Login successful' });
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
