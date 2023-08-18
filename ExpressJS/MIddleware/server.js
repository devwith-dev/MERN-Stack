const express = require("express");
const app = express();

//create middleware
const logger = (req, res, next) => {
  //any logic
  console.log("I am a logger Middleware");
  next();
};

//using middleware
app.use(logger);

//chaining Middlewares (the order of middlewares matter a lot)
app
  .use((req, res, next) => {
    console.log("First Middleware");
    next();
  })
  .use((req, res, next) => {
    console.log("Second Middleware");
    next();
  })
  .use((req, res, next) => {
    console.log("Third Middleware");
    next();
  });

//Home Route
app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

//Login Route
app.post("/login", (req, res) => {
  res.send("Login Successful");
});

//?@Role:Authenticated User
//create post request
app.post("/create-post", (req, res) => {
  res.json({
    message: "Post Created",
  });
});

//?@Role:Public User
//Fetch all posts
app.get("/posts", (req, res) => {
  res.json({
    message: "Posts Fetched",
  });
});

//?@Role:Admin
//delete post
app.delete("/posts/:id", (req, res) => {
  res.json({
    message: "Post Deleted",
  });
});

//start the server
app.listen(9000, () => {
  console.log("Server is up and running on post 9000");
});
