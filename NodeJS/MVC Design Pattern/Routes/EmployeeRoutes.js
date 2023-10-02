const express = require("express");
const { createEmployeeController, fetchEmployeesController, updateEmployeesController, fetchSingleEmployeeController, deleteEmployeeController } = require("../controller/EmployeeController");
const router = express.Router();


//@POST
//create an exmployee
router.post("/", createEmployeeController);

//@GET
//fetch all exmployees
router.get("/", fetchEmployeesController);

//@PUT
//update an employee
router.put("/:id", updateEmployeesController);

//@GET
//Fetch a single employee
router.get("/:id", fetchSingleEmployeeController);

//@DELETE
//delete an employee
router.delete("/:id", deleteEmployeeController);

module.exports = router;
