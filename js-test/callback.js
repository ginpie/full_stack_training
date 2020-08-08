// function sum(a, b, callback) {
//   callback(a + b);
// }

// const cb = function (total) {
//   console.log(total);
// };

// // sum(1,2,cb)

// let arr = [1, 2, 3];

// arr.forEach((value) => {
//   console.log(value);
// });

// for (let i = 0; i < arr.length; i++) {
//   const element = arr[i];
//   cb(element);
// }

// map, filter, find, findIndex (indexOf), some, reduce
const array = [1, 2, 3];
console.log(`${array}`);

const map = array.map((i) => i * 2);
console.log(`map: ${map}`);
const filter = array.filter((i) => i > 2);
console.log(`filter: ${filter}`);
const reduce = array.reduce((pre, cur) => pre + cur);
console.log(`reduce: ${reduce}`);
const map2 = array.map((i) => {
  return i * 2;
});
console.log(`map2: ${map2}`);
