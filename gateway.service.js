const express = require("express");
const app = express();
const proxy = require("express-http-proxy");

// Route proxying to the respective microservices
app.use("/stress-test", proxy("http://localhost:3002/"));
app.use("/", proxy("http://localhost:3001/"));

app.listen(3000, () => {
  console.log("Gateway server running at port 3000!");
});
