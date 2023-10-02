const mongoose = require("mongoose");

//schema
const employeesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    isMarried: {
      type: Boolean,
      required: false,
    },
    salary: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Employee = mongoose.model("employees", employeesSchema);

module.exports = Employee;
