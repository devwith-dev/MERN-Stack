// importing express
const express = require("express");

const fs = require("fs");

//importing custom module
const { createFile, createFolder } = require("./utils");

//importing posts data file

const postData = require("./data/posts.json");

//create folder
//createFolder("data");

//create a file
createFile("data/posts.json", "content");

//creating an instance of express
const app = express();

//pass incoming data
app.use(express.json());

//routing
//? All the routing methods include 2 parameters request url(the utl through which the method is invoked) and callback function

// home route
app.get("/", (req, res) => {
  res.send("Home Route");
});

// 1. GET method to fetch all posts
app.get("/posts", (req, res) => {
  // res.send("Fetch all posts route");
  res.json({
    message: "Posts Fetched Successfully",
    postData,
  });
});

// GET method to fetch a single post

app.get("/posts/:id", (req, res) => {
  // res.send("single post route");
  const id = req.params.id;
  const fetchedPost = postData.find((post) => {
    return post.id === id;
  });

  //if post does not exist
  if (!fetchedPost) {
    res.json({ message: "Error! Post Not Found" });
  }

  res.json({
    message: "Single Post Feteched Successfully",
    fetchedPost,
  });
});

// 2. POST method to crete a post
app.post("/posts", (req, res) => {
  // res.send("Create post route");
  //getting data from the request
  const newPost = req.body;

  //push the new post into the existing data
  postData.unshift({
    ...newPost,
    id: postData.length.toString(),
  });
  //write into the file
  fs.writeFile("./data/posts.json", JSON.stringify(postData), (err) => {
    if (err) {
      console.log(err);
    }
    //send message to the user
    res.json({ message: "Post Created Successfully" });
  });
});

// 3. PUT method to update a post
app.put("/posts/:id", (req, res) => {
  // get the dynamic id === params
  const id = req.params.id;
  const { url, title, desc } = req.body;

  //find the post to update
  const foundPost = postData.find((post) => {
    return post.id === id;
  });

  if (!foundPost) {
    res.json({ message: "Error! Post Not Found" });
  }

  //filter out the rest of the posts
  const filteredPosts = postData.filter((post) => {
    return post.id !== id;
  });

  //update the post
  foundPost.title = title;
  foundPost.desc = desc;
  foundPost.url = url;

  //push the updated post into the rest filterd posts
  filteredPosts.unshift(foundPost);

  //write the update into the file
  fs.writeFile("./data/posts.json", JSON.stringify(filteredPosts), (err) => {
    if (err) {
      console.log(err);
    }
    //send message to the user
    res.json({ message: "Post Updated Successfully" });
  });
  // res.send("update post route");
});

// 4. DELETE method to delete a post
app.delete("/posts/:id", (req, res) => {
  // get the dynamic id === params
  const id = req.params.id;
  //get all the posts except the one to be deleted
  const filteredPost = postData.filter((post) => {
    return post.id !== id;
  });

  //write into the file
  fs.writeFile("./data/posts.json", JSON.stringify(filteredPost), (err) => {
    if (err) {
      console.log(err);
    }
    //send message to the user
    res.json({ message: "Post Deleted Successfully" });
  });
  // res.send("delete post route");
});

//creating a server

app.listen(9000, () => {
  console.log("Server is up and running");
});

// creating a server in express in much easier than creating a direct server in node.
