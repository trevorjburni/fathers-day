// Require in necessary NPM packages.
const express = require("express");
const path = require("path");
const routes = require("./routes");

// Set the port.
const PORT = process.env.PORT || 3001;

// Assign express() to app variable.
const app = express();

// Parse request body as JSON.
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Make a static folder.
const root = require('path').join(__dirname, 'client', 'build');
app.use(express.static(root));
app.use(express.static(path.join(__dirname, 'client/public')));

// Use the routes folder.
app.use(routes);

// Start the server.
app.listen(PORT, function () {
    console.log("App running on port " + PORT + "!");
});
