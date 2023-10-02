const { default: mongoose } = require("mongoose");
module.exports = mongoose
  .connect(
    "mongodb+srv://sampleuser:sampleuser123@sample-cluster.7zesgoj.mongodb.net/MVC"
  )
  .then(() => console.log("Db connected"))
  .catch((err) => console.log(err.message));
