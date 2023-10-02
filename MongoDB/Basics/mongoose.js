const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uri =
  "mongodb+srv://sampleuser:sampleuser123@sample-cluster.7zesgoj.mongodb.net/school";

//connect to db

mongoose
  .connect(uri)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err);
  });

//creating a schema

const studentSchema = new Schema({
  name: String,
  email: String,
  class: String,
  courses: Array,
});

const student = mongoose.model("students", studentSchema);

//create student

// student
//   .create({
//     name: "Von",
//     email: "nmef@gmail.com",
//     class: "12th D",
//     courses: ["CS", "English", "Maths"],
//   })
//   .then((student) => {
//     console.log(student);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//fetch all students
// student
//   .find({})
//   .then((students) => {
//     console.log(students);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//find single record by id
// student
//   .findById("64fa014e337ae00d9ae50e47")
// .then((students) => {
//   console.log(students);
// })
// .catch((err) => {
//   console.log(err);
// });

//update any record

student
  .findOneAndUpdate(
    { name: "John" },
    { email: "abc@yahoo.com", class: "12th A" },
    { new: true }
  )
  .then((students) => {
    console.log(students);
  })
  .catch((err) => {
    console.log(err);
  });
