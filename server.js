// Initialize project
const express = require('express');
const app = express();

// Serve static files with Express
app.use(express.static('public'));

// Listen for requests
app.listen(3000);
