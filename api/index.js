const path = require("path");
const port = process.env.PORT || 9000;
const express = require("express");
const app = express();

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

if (process.env.NODE_ENV === "production") {
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/../" + "dist/index.html"));
  });
}

// create a GET route
app.get("/api", (req, res) => {
  // res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
  res.json([
    {
      id: 1,
      username: "coolUser"
    }
  ]);
});

app.use(express.static(__dirname + "/../" + "dist"));
