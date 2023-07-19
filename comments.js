// Create web server with express
// Create a route to handle GET requests on the /comments URL
// The route will read the comments.json file and send its content back to the client
// Start the server and test it in a browser

// Import modules
const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

// Define port
const port = process.env.PORT || 3000;

// Define path
const publicPath = path.join(__dirname, '../public');

// Define static path
app.use(express.static(publicPath));

// Define route
app.get('/comments', (req, res) => {
    fs.readFile('./comments.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send('An error occurred: cannot read comments file.');
        } else {
            res.send(data);
        }
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server is up on port ${port}.`);
});