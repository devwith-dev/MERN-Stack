//? Create a file

// const fs = require("fs");

// fs.writeFile("index.txt", "Hello, Welcome", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File Created");
//   }
// });

//? Create a file using async await

// const fs = require("fs/promises");

// const createFile = async () => {
//   try {
//     await fs.writeFile("sample.txt", "Welcome to sample page");
//   } catch (error) {
//     console.log(error);
//   }
// };

// createFile();

//? Read from a file

const { ifError } = require("assert");
const { error } = require("console");
const fs = require("fs");

const content = fs.readFileSync("sample.txt");

console.log(content.toString());

fs.readFile("sample.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});

//? Rename a file

// fs.rename("rename.txt", "renamed.txt", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File Renamed");
//   }
// });

//? Copy contents of a file

// fs.copyFile("sample.txt", "renamed.txt", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File Copied");
//   }
// });

//? Append a file

// fs.appendFile("renamed.txt", "This is appended content", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File Appended");
//   }
// });

//? Truncate a file

fs.truncate("renamed.txt", 10, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File Truncated");
  }
});

//? Get stastics of a file

fs.stat("sample.txt", (err, stats) => {
  if (err) {
    console.log(err);
  } else {
    console.log(stats);
  }
});

//? Delete a file

fs.unlink("tobedeleted.pdf", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File Deleted");
  }
});

//? Working with folders

//creating a folder

fs.mkdir("src", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Folder Created Successfully");
  }
});

// creating a sub folder

fs.mkdir("src/images", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Folder Created Successfully");
  }
});
