// Server/main.js

const express = require('express');
const path = require('path');
const app = express();

// Load environment variables
require('dotenv').config();

// Middleware
app.use(express.json());
/*
// Static frontend (React build)
app.use(express.static(path.join(__dirname, '../Client/build')));

// API routes
app.use('/api/equipment', require('./src/routes/equipment')); // example route

// Fallback to React index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../Client/build/index.html'));
});
*/
// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});