const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || "8080";

// Serve static files from the 'static' directory
app.use(express.static(path.join(__dirname, 'static')));

// Serve index.html at root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});