// 2. create a function to check if a string is longer than a certain number of characters
//The function should take two arguments: the first argument is the string, and the second argument isthe number of characters.
//The function should return true if the string is longer than the number of characters, and false if it is not.

const checkString = (str, length) => {
  return str.length < length ? false : true;
};

console.log(checkString("Hello There", 5));
