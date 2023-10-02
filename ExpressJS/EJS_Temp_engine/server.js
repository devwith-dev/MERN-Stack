const express = require("express");
const app = express();

//set the view engine
app.set("view engine", "ejs");

//Home Route
app.get("/", (req, res) => {
  //rendering a ejs template
  res.render("home");
});

//contact route
app.get("/contact", (req, res) => {
  //rendering a ejs template
  res.render("contact");
});

//about route
app.get("/about", (req, res) => {
  //rendering a ejs template
  res.render("about");
});

//profile
app.get("/profile", (req, res) => {
  let user = {
    name: "Dev",
    age: 21,
    city: "Jaipur",
  };
  //we can also attach an extra payload when rendering a file.
  res.render("profile", {
    user,
  });
});

app.listen(3000, () => {
  console.log("Server is up and running on port 3000");
});
