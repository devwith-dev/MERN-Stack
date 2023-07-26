//! Ways to write Async Code

//? 1. setTimeout()

// setTimeout(CallBack Function, time in ms)

setTimeout(() => {
  //console.log("After Time Out");
}, 3000);

//OR

const msg = () => {
  console.log("Hello after timeout");
};

//setTimeout(msg, 3000);

console.log("Go to the park");
setTimeout(msg, 3000);
console.log("Go to the bank");

//? 2. callback - it is a function that is passed toanother function as
//               an argument. This function is then executed after the function
//               that is passed to is executed

// i. create a post
// ii. fetch all posts

const postsData = [
  { title: "Title 1", desc: "Desc 1" },
  { title: "Title 2", desc: "Desc 2" },
  { title: "Title 3", desc: "Desc 3" },
];

// fetch all posts

function fetchPosts() {
  console.log("post is fetching...");
  console.log(postsData);
}

// create a post

const newPost = (post, cb) => {
  //push the new post into the array
  setTimeout(() => {
    postsData.push(post);
    // invoke callback
    cb();
  }, 5000);
};

//invoke

newPost(
  {
    title: "Title 4",
    desc: "Desc 4",
  },
  fetchPosts
);

//? 3. Promise
// Promise represents an object that may produce a value sometime in the future
// The Values can be :-
//  -pending
//  -success (fulfilled)
//  -failure

// When a promise is created, it is in pending state
// When a promise is resolved, it is in fulfilled state
// When a promise is rejected, it is in rejected state

// When returning a promise from a function, the function will return a promise
// but not the value of the promise. And the value of the promise will be returned
// when the promise is resolved

// Syntax :-
//* const promise = new Promise((resolve, reject) => {
//code
//if promise is resolved
//*  resolve("Yes it is resolved");
//if the promise is rejected
//*  reject("It is rejected");
//* });

const userPromise = new Promise((resolve, reject) => {
  let user = {
    name: "Dev",
    city: "Jaipur",
  };
  let isFetched = false;

  isFetched ? resolve(user) : reject("Error fetching user, Try again");
});

// Resolving a promise

userPromise
  .then((resolveVal) => {
    //.then() is used to get the value from resolve function
    console.log(resolveVal);
  })
  .catch((error) => {
    console.log(error);
  });

// function returning a Promise

const getUser = () => {
  return new Promise((resolve, reject) => {
    //logic goes here
    let user = {
      name: "Radhe Mohan",
      city: "Agra",
    };
    let isFetched = false;
    isFetched ? resolve(user) : reject("Error! User Not Found");
  });
};

getUser()
  .then((resolveVal) => {
    console.log(resolveVal);
  })
  .catch((error) => {
    console.log(error);
  });

// Consuming multiple promises

// promise.all() - used to reslove promise at a go

// first post
const postPromise = new Promise((resolve, reject) => {
  let isPostFetched = true;
  let post = {
    title: "Title 1",
    desc: "Description 1",
  };
  isPostFetched ? resolve(post) : reject("Error Fetching Post");
});

// fetch comment
const postComment = new Promise((resolve, reject) => {
  let isCommentFetched = true;
  let comment = {
    user: "Dace",
    comment: "Excellent",
  };
  isCommentFetched ? resolve(comment) : reject("Error Fetching Comment");
});

// now resolving multiple promises

Promise.all([postPromise, postComment])
  .then((allPromises) => {
    //returns an array of fetched promise data
    console.log(allPromises);
  })
  .catch((error) => {
    console.log(error);
  });
// if one promise fails then all other fail too

// promise.race() - fisrt promise that is execurted first is returned

// now resolving multiple promises with .race()

Promise.race([postPromise, postComment])
  .then((allPromises) => {
    //returns an array of fetched promise data
    console.log(allPromises);
  })
  .catch((error) => {
    console.log(error);
  });

//? 4. Async/Await (commonly used)

// async function fetchPosts(){
//   const response = await makeAPIRequest(); 
// }

// it is a syntactic sugar for promises
// the await keyword is only valid inside async functions
// Async functions must start with async function
// await is put in front of any promise based API call or function that will take some tome to complete
// Async function return a promise
// we use try/catch to handle success and errors in async/await
// use await to wait for the promise to resolve

function makeAPIRequest(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //resolve the promise
      let isFetched = true;
      let user = {
        name: "Bob",
        city: "Johnpur",
      };
      isFetched ? resolve(user) : reject("Error Fetching User!");
    }, 5000);
  });
}

async function getUsers(){
  // make api call to fetch user
  try{
    const res = await makeAPIRequest();
    console.log(res);
  }catch(err){
    console.log(err);
  }
}

getUsers();