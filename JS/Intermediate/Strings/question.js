const isPalindrome = (str) => {
    let str1 = str.split("");
    str1 = str1.reverse().join("");
    return str1==str ? true : false;
  };
  
  console.log(isPalindrome("aba"));
