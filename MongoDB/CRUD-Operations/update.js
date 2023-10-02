const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://sampleuser:sampleuser123@sample-cluster.7zesgoj.mongodb.net/";

//creating a new client
const client = new MongoClient(uri);

const dbConnect = async () => {
  try {
    //connect to db
    await client.connect();
    console.log("Connected to Database");

    //create a new db
    const db = client.db("school");
    //create a collection
    const students = db.collection("students");

    //update record
    await students.updateOne(
      { name: "Garvit" },
      {
        $set: { name: "John", email: "asf@gmail.com" },
      }
    );

    const singleStudents = await students.findOne({ name: "Garvit" });
    console.log(singleStudents);
    
  } catch (error) {
    console.log(error);
  }
};

dbConnect();
