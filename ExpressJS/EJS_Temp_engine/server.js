const express = require("express");
const app = express();

//set the view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  //rendering a ejs template
  res.render("index.ejs");
});

app.listen(3000, () => {
  console.log("Server is up and running on port 3000");
});
