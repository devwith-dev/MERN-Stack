const fs = require("fs");

// create folder

const createFolder = (folderName) => {
  //check if folder exists
  if (!fs.existsSync(folderName)) {
    //create the folder
    fs.mkdirSync(folderName);
  }
};

const defaultPost =
  '[{"id":"2020","title":"HTML","url":"http://someurl.com","desc":"The Best"}]';

//create file

const createFile = (file, content) => {
  //check if file exists
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, defaultPost);
  }
};

module.exports = {
  createFolder,
  createFile,
};
