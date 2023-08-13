// importing express
const express = require("express");

//creating an instance of express
const app = express();

//routing
//? All the routing methods include 2 parameters request url(the utl through which the method is invoked) and callback function

// home route
app.get("/", (req, res) => {
  res.send("Home Route");
});

// 1. GET method to fetch all posts
app.get("/posts", (req, res) => {
  res.send("Fetch all posts route");
});

// GET method to fetch a single post

app.get("/posts/:id", (req, res) => {
  res.send("single post route");
});

// 2. POST method to crete a post
app.post("/posts", (req, res) => {
  res.send("Create post route");
});

// 3. PUT method to update a post
app.put("/posts/:id", (req, res) => {
  // get the dynamic === params
  const id = req.params.id;
  console.log(id);
  res.send("update post route");
});

// 4. DELETE method to delete a post
app.delete("/posts/:id", (req, res) => {
  // get the dynamic === params
  const id = req.params.id;
  console.log(id);
  res.send("delete post route");
});

//creating a server

app.listen(9000, () => {
  console.log("Server is up and running");
});

// creating a server in express in much easier than creating a direct server in node.
