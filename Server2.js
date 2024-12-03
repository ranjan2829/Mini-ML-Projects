const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));

// Basic route with simulated delay
app.get("/", (req, res) => {
  let sum = 0;
  for (let i = 0; i < 1000; i++) {
    
  }
  res.send("Hi from server 2.0!");
});

app.listen(3001, () => {
  console.log("Server running on port 3001!");
});
