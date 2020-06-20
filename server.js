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
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
// Use the routes folder.
app.use(routes);

// Start the server.
app.listen(PORT, function () {
    console.log(`Server now listening on PORT ${PORT}!`);
});
