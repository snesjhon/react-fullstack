/**
 * SERVER
 * ---
 * We are starting a simple Node Express server and dividing it into two routes in the API.
 * When we're in production mode, we are able to load the appropriate `index.html` file.
 * If we're in a development mode, we rely on `webpack-dev-server` to create the express the server.
 * In the `npm run build` we pass the `NODE_ENV` to decide what is a "production" vs "dev" environment.
 */
const path = require("path");
const port = process.env.PORT || 9000;
const express = require("express");
const app = express();

app.listen(port, () => console.log(`Listening on port ${port}`));

if (process.env.NODE_ENV === "production") {
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/../" + "dist/index.html"));
  });
}

// create a GET route
app.get("/api", (req, res) => {
  res.json([
    {
      id: 1,
      username: "coolUser"
    }
  ]);
});

app.use(express.static(__dirname + "/../" + "dist"));
