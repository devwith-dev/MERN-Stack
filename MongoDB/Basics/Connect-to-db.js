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

    //create document(student)
    const student1 = await students.insertOne({
      name: "Dev",
      email: "xyz@gmail.com",
      class: "12th A",
    });

    //create multiple documents
    await students.insertMany([
      {
        name: "Dev",
        email: "xyz@gmail.com",
        class: "12th A",
      },
      {
        name: "Ronit",
        email: "xyz@gmail.com",
        class: "12th B",
      },
      {
        name: "Garvit",
        email: "xyz@gmail.com",
        class: "12th C",
      },
    ]);
  } catch (error) {
    console.log(error);
  }
};

dbConnect();
