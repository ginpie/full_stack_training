"use strict";

let previous = "0";
let current = "0";
let op = "";
const ops = ["plus", "minus", "multiply", "divide"];
let operationClicked = false;
let operator;

function display(option = "") {
  if (option !== "") {
    current = option;
  } else {
    if (current.length > 1 && current.charAt(0) === "0") {
      current = current.slice(1);
    }
  }

  document.querySelector("#result").innerHTML = current;
}
display();

function clear() {
  current = "0";
  display();
}

function sign() {
  if (current !== "0") {
    current = current.charAt(0) == "-" ? current.slice(1) : `-${current}`;
  }
  display();
}

function append(digit) {
  if (current.length < 13) {
    current = `${current}${digit}`;
  }

  display();
}

function percent() {
  current = `${parseFloat(current) / 10}`;
  display();
}

function dot() {
  if (current.indexOf(".") === -1) {
    current = `${current}.`;
  }
  display();
}

function setPrevious(num) {
  previous = num;
}

function plus() {
  operator = (a, b) => a + b;
}

function minus() {
  operator = (a, b) => a - b;
}

function multiply() {
  operator = (a, b) => a * b;
}

function divide() {
  operator = (a, b) => a / b;
}

function equal() {
  if (!op) {
    return;
  }
  console.log(previous, current);
  current = `${operator(parseFloat(previous), parseFloat(current))}`;
  console.log(previous, current);
  display();

  op = "";
  setPrevious("0");
}

let keys = document.querySelectorAll(".calc__key");

keys.forEach(function (i) {
  i.addEventListener("click", function () {
    let classes = i.classList;
    let id = i.id;

    if (classes.contains("number")) {
      if (classes.contains("dot")) {
        dot();
      } else {
        append(i.textContent);
      }
    } else if (classes.contains("modify")) {
      switch (id) {
        case "clear":
          clear();
          break;
        case "sign":
          sign();
          break;
        case "percent":
          percent();
      }
    } else if (classes.contains("operation")) {
      if (operationClicked) {
        let opKeys = document.querySelectorAll(".operation");
        opKeys.forEach(function (i) {
          i.style.borderWidth = "1px";
        });
      }
      operationClicked = true;

      if (id === "equal") {
        equal();
      } else {
        document.getElementById(id).style.borderWidth = "3px";
        setPrevious(current);
        current = "0";
        switch (id) {
          case ops[0]:
            op = ops[0];
            plus();
            break;
          case ops[1]:
            op = ops[1];
            minus();
            break;
          case ops[2]:
            op = ops[2];
            multiply();
            break;
          case ops[3]:
            op = ops[3];
            divide();
        }
        console.log(op);
      }
    }
  });
});
