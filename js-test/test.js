"use strict";

// var result = 0;

// function multiply(a, b) {
//   return a * b;
// }

// document.querySelector("#btn").addEventListener("click", function () {
//   result = multiply(
//     document.querySelector("#input1").innerText,
//     document.querySelector("#input2").innerText
//   );
//   alert(result);
//   document.querySelector("#result").innerHTML = result;
// });

// class Course {
//   constructor(name, price, units) {
//     this.name = name;
//     this.price = price;
//     this.units = units;
//   }

//   getName() {
//     console.log(this.name);
//     return this.name;
//   }
// }

// Course.prototype.toString = function () {
//   console.log(
//     "name: " + this.name + "\nprice: " + this.price + "\nunits: " + this.units
//   );
// };

// let course = new Course("fullstack", 4000, 4);
// course.toString();
// console.log(course.getName());

const http = require('http');
const fs = require('fs');

const homePage = fs.readFileSync("./index.html");

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.write('hello');
  res.end();
});

server.listen(8080);
