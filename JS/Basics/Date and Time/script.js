const currDate = new Date();

const hours = currDate.getHours();
const minutes = currDate.getMinutes();
const day = currDate.getDay();
const month = currDate.getMonth();
const date = currDate.getDate();
const year = currDate.getFullYear();
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday ",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

console.log(`The Current Date is : ${days[day]}, ${date} ${months[month]}' ${year}`);
console.log(`The Current Time is : ${hours}:${minutes}`);
