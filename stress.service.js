const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));

// Stress test endpoint
app.get("/stress-test", (req, res) => {
  let sum = 0;
  for (let i = 0; i < 1000; i++) {
    
  }
  res.send("Hi from the stress-test service!");
});

app.listen(3002, () => {
  console.log("Stress service running on port 3002!");
});
