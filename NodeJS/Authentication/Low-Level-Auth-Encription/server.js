const express = require("express");
const bcrypt = require("bcryptjs");
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
  //1.creating salt
  const salt = await bcrypt.genSalt(10);
  //2.hash the user password
  const hashedPassword = await bcrypt.hash(password, salt);
  await User.create({
    fullName,
    username,
    password: hashedPassword,
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
