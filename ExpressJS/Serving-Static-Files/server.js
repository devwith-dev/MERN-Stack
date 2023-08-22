const express = require("express");
const app = express();

//server static files from the public folder
app.use(express.static("public"));

//configure express to pass data from a form
app.use(express.urlencoded({extended:true}))

//home
app.get("/", (req, res) => {
  //display html page , __dirname returns the current working directory of the file
  console.log(req.body);
  res.sendFile(__dirname + "/public/pages/index.html");
});

//about page
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/public/pages/about.html");
});

//add post
app.post("/addPost", (req, res) => {
  //we have access to the data from the client
  console.log(req.body);
  res.send(req.body);
});

//get post form
app.get("/get-form", (req, res) => {
  //display html page
  res.sendFile(__dirname + "/public/pages/addPost.html");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
