const express = require("express");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const MongoStore = require('connect-mongo');

//view engine setup ejs
app.set("view engine", "ejs");

//parse static files
app.use(express.static(__dirname, +"/public"));
app.use(express.static("public"));
// const path = require("path");
// app.use("/static", express.static(path.join(__dirname, "public")));

//configure session
app.use(
  session({
    secret: "oiwnfunwofnwommciomiong",
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
    //to store the session in the database
    store: new MongoStore({
      mongoUrl: "mongodb+srv://sampleuser:sampleuser123@sample-cluster.7zesgoj.mongodb.net/Authentication",
      ttl: 24 * 60 * 60 //1 day
    }) 
  })
);

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
//Cookies
//----

//send cookie to the client
app.get("/send-cookies", (req, res) => {
  //send cookie
  res.cookie("name", "Dev", {
    httpOnly: true, //the httpOnly option only allowas the server side to view the cookie not the client
    secure: true, //add security to the cookie
    maxAge: 1000 * 60 * 24 * 7, //7days in ms for cookie expiry
  });
  res.send("Cookie Sent");
});

//auth middleware
const protected = (req, res, next) => {
  if (!req.session.loginUser) {
    return res.render("notAllowed");
  }
  next();
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
app.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/login");
});

//protected
app.get("/protected", protected, (req, res) => {
  const user = req.cookies.username;
  res.render("protected", { user });
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
  //save the user into session
  req.session.loginUser = userFound;
  //login successful
  res.redirect(`/profile/${userFound._id}`);
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
app.get("/profile/:id", protected, async (req, res) => {
  let id = req.params.id;
  const filteredUser = await User.findById(id);
  res.render("profile", { filteredUser });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
