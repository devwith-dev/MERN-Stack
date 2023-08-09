//importing the http module
const http = require("http");

//importing fs module to create files
const fs = require("fs");

//create sever

const server = http.createServer(function (request, response) {
  //   //response header
  //   response.writeHead(200, { "Content-type": "text/html" });
  //   //send data to the user
  //   response.write("Hi! This is my first web server");
  //   //end the response
  //   response.end();
});

// console.log(server);

//Listen to the server

server.listen(9000, () => {
  console.log("Server is up and running on port 9000");
});

//http://localhost:9000

//listen to event

server.on("request", (req, res) => {
  //get the url
  const url = req.url;

  //call login page
  if (url === "/login") {
    //read contents on login page
    fs.readFile("login.html", (err, data) => {
      //check error
      if (err) {
        console.log(err);
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  }

  //call home page
  if (url === "/") {
    //read contents on login page
    fs.readFile("home.html", (err, data) => {
      //check error
      if (err) {
        console.log(err);
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  }

  //call register page
  if (url === "/register") {
    //read contents on login page
    fs.readFile("register.html", (err, data) => {
      //check error
      if (err) {
        console.log(err);
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  }

  //! parse incoming data (payload) making a POST request
  if (url === "/create-post" && req.method === "POST") {
    const post = [];
    req
      .on("data", (chunk) => {
        post.push(chunk);
      })
      .on("end", () => {
        //pass the buffer data into string
        const parsedData = Buffer.concat(post).toString();
        res.writeHead(200, { "Content-Type": "text/json" });
        console.log(parsedData);
        res.write("Post Created");
        res.end();
      });
  }
});
