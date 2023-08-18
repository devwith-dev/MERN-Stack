const express = require("express");
const app = express();
//third-party middleware
const morgan = require("morgan");

//create middleware
const logger = (req, res, next) => {
  //any logic
  const msg = `A request was initiated  
  ${req.method} 
  ${req.url} 
  ${new Date().toISOString()}`;
  console.log(msg);
  next();
};

//using middleware
app.use(logger);

//counting the number of requests
let requestCount = 0;
const countRequest = (req, res, next) => {
  requestCount++;
  if (requestCount > 10) {
    return res.status(429).json("ERROR CODE : 429 ! To Many Requests");
  } else {
    next();
  }
};

app.use(countRequest);

//chaining Middlewares (the order of middlewares matter a lot)
// app
//   .use((req, res, next) => {
//     console.log("First Middleware");
//     next();
//   })
//   .use((req, res, next) => {
//     console.log("Second Middleware");
//     next();
//   })
//   .use((req, res, next) => {
//     console.log("Third Middleware");
//     next();
//   });

//using Morgan middleware
app.use(morgan("dev"));

//protect route middleware

const protected = (req, res, next) => {
  let userLoginDeatils = {
    isLogin: false,
    username: "John",
  };
  if (userLoginDeatils.isLogin) {
    next();
  } else {
    return res.json("You Must Login First");
  }
};

//isAdmin Middleware

const isAdmin = (req, res, next) => {
  let userLoginDeatils = {
    isLogin: false,
    username: "John",
    isAdmin: false,
  };
  if (userLoginDeatils.isAdmin) {
    next();
  } else {
    return res.json("Access Denied!! You are not an admin");
  }
};

//app.use() applies the middleware to all the available routes
// app.use(protected);

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
app.post("/create-post", protected, (req, res) => {
  //to apply middleware to a specefic route we add the middleware name into the parameters of the route request
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
app.delete("/posts/:id", protected, isAdmin, (req, res) => {
  res.json({
    message: "Post Deleted",
  });
});

//start the server
app.listen(9000, () => {
  console.log("Server is up and running on port 9000");
});
