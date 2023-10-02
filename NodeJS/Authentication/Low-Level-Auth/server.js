const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(express.json());

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

//home
app.get("/", (req, res) => {
  res.render("index");
});

//login form
app.get("/login", (req, res) => {
  res.render("login");
});

//login auth
app.post("/login", async (req, res) => {
  //getting the username and password
  let username = req.body.username;
  let password = req.body.password;
  //find if user exists
  const userFound = await User.findOne({ username });
  //if user not found
  if (!userFound) {
    return res.json({
      message: "Invalid Username!",
    });
  }
  //if user found but incorrect password
  if (password != userFound.password) {
    return res.json({
      message: "Invalid Password!",
    });
  }
  //login successful
  res.redirect(`/profile/${userFound._id}`);
});

//Register
app.get("/register", (req, res) => {
  res.render("register");
});

//new user register request
app.post("/register", (req, res) => {
  User.create({
    fullName: req.body.fullName,
    username: req.body.username,
    password: req.body.password,
  })
    .then((user) => {
      res.redirect("/login");
    })
    .catch((err) => {
      console.log(err);
    });
});

//profile
app.get("/profile/:id", async (req, res) => {
  let id = req.params.id;
  const filteredUser = await User.findById(id);
  res.render("profile", { filteredUser });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
