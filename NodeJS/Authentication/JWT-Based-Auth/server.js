const express = require("express");
const bcrypt = require("bcryptjs");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const getTokenFromHeader = require("./Utils/getTokenFromHeader");
const verifyToken = require("./Utils/verifyToken");
const isLoggedIn = require("./Middleware/isLoggedin");

//view engine setup ejs
app.set("view engine", "ejs");

//parse static files
app.use(express.static(__dirname, +"/public"));
app.use(express.static("public"));

//pass json data
app.use(express.json());

//pass form data
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(
    "mongodb+srv://sampleuser:sampleuser123@sample-cluster.7zesgoj.mongodb.net/Authentication"
  )
  .then(() => console.log("Db connected"))
  .catch((err) => console.log(err.message));

const userSchema = new mongoose.Schema({
  username: String,
  fullName: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

//---
//JWT
//---

//1.Generate Token

const generateToken = (id) => {
  return jwt.sign({ id }, "anykey", { expiresIn: "1h" });
};

//home
app.get("/", (req, res) => {
  res.render("index");
});

//login form
app.get("/login", (req, res) => {
  res.render("login");
});

//logout
app.get("/logout", (req, res) => {});

//protected
app.get("/protected", (req, res) => {
  res.render("protected");
});

//login auth
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  //check if user exists
  const userFound = await User.findOne({ username });
  if (!userFound) {
    return res.json({
      message: "User Not Found!",
    });
  }
  //checking if password is valid
  const isPasswordValid = await bcrypt.compare(password, userFound.password);
  if (!isPasswordValid) {
    return res.json({
      message: "Invalid Password",
    });
  }
  res.json({
    status: "success",
    username: userFound.username,
    fullName: userFound.fullName,
    token: generateToken(userFound._id),
  });
  //login successful
  // res.redirect(`/profile/${userFound._id}`);
});

//Register
app.get("/register", (req, res) => {
  res.render("register");
});

//new user register request
app.post("/register", async (req, res) => {
  const { fullName, username, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashPass = await bcrypt.hash(password, salt);
  const user = await User.create({
    fullName,
    username,
    password: hashPass,
  });
  res.redirect("/login");
});

//profile
app.get("/profile", isLoggedIn, async (req, res) => {
  //1.Get the token from header
  const token = getTokenFromHeader(req);
  //2.verify the token
  const decodedUser = verifyToken(token);
  //3.Make request to fetch the decoded user
  const userDetails = await User.findById(decodedUser.id);
  res.json({
    msg: "Welcome to your Profle",
    status: "success",
    user: userDetails,
  });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
