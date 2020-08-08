/* 1 */
// var window = { text: "window" };
var o1 = {
  text: "o1",
  fn: function () {
    return this.text;
  },
};

var o2 = {
  text: "o2",
  fn: function () {
    return o1.fn();
  },
};

var o3 = {
  text: "o3",
  fn: function () {
    // o2.fn = o1.fn;
    // o2.fn = o3.fn;
    return o2.fn();
  },
};

console.log(o1.fn());
console.log(o2.fn());
console.log(o3.fn());
// console.log(Window.text);

/* 2 */
let alice = {
  name: "alice",
  brother: {
    name: "bob",
    getName: function () {
      return this.name;
    },
  },
};

alice.getName = alice.brother.getName;
console.log(alice.brother.getName()); // bob
console.log(alice.getName()); // alice

const brother = alice.brother;
console.log(brother.getName()); // bob

const sister = {
  name: "Tifa",
  getName: alice.brother.getName(),
  getMyBrotherName: () => alice.brother.getName(),
  getSomebodyName: () => {
    const getName = alice.brother.getName;
    return getName();
  },
};

console.log(sister.getName); // Tifa
console.log(sister.getMyBrotherName()); //bob
console.log(sister.getSomebodyName()); // undefined
// 看谁是caller，谁用（）谁就是caller；没有写caller的话，caller默认是Window

/* 3 */
console.log("------- 3 --------");

const x = 11;
// 箭头函数的 this 始终指向定义所在的父作用域中的 this
// Object 不提供作用域，function提供，所以iife里有this，箭头函数里this指向父级
function parent() {
  const x = "parent";
  const obj = {
    x: 22,
    fn: () => {
      console.log("function ", this.x);
    },
  };
  obj.fn();
}
parent();
console.log(global.x);

const x22 = {
  x: 22,
  fn: function () {
    console.log("iife ", this.x);
  },
};
x22.fn(); //  22
const f = x22.fn;
f();

const x33 = {
  x: 33,
  fn: () => {
    console.log("arrow ", this.x);
  },
};
x33.fn();
