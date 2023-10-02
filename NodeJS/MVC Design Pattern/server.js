const express = require("express");
const app = express();
require("./utils/dbConnect");
const EmployeeRoutes = require("./Routes/EmployeeRoutes");
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());

//routes

//Employee Routes
app.use("/employees", EmployeeRoutes);


app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
