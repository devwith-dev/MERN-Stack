const Employee = require("../models/EmployeeModel");

const createEmployeeController = async (req, res) => {
  const { name, city, salary, isMarried } = req.body;
  try {
    const employee = await Employee.create({
      name,
      city,
      salary,
      isMarried,
    });
    res.json({
      status: "success",
      msg: "Employee Created Successfully",
      data: employee,
    });
  } catch (error) {
    res.json(error);
  }
};

const fetchEmployeesController = async (req, res) => {
  try {
    const employees = await Employee.find({});
    res.json({
      status: "success",
      msg: "All Employees Fetched Successfully",
      data: employees,
    });
  } catch (error) {
    res.json(error);
  }
};

const updateEmployeesController = async (req, res) => {
  const { name, city, salary, isMarried } = req.body;
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      {
        name,
        city,
        salary,
        isMarried,
      },
      {
        new: true,
        runValidators: true,
      }
    );
    res.json({
      status: "success",
      msg: "Employee Details Updated",
      data: updatedEmployee,
    });
  } catch (error) {
    res.json(error);
  }
};

const fetchSingleEmployeeController = async (req, res) => {
  try {
    const singleEmployee = await Employee.findOne({ _id: req.params.id });
    res.json({
      status: "success",
      msg: "Single Employee Details Fetched",
      data: singleEmployee,
    });
  } catch (error) {
    res.json(error);
  }
};

const deleteEmployeeController = async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({
      status: "success",
      msg: "Employee Deleted Successfully",
    });
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  createEmployeeController,
  fetchEmployeesController,
  fetchSingleEmployeeController,
  deleteEmployeeController,
  updateEmployeesController,
};
