// scope 作用域
// closure 闭包

const calendar = {
  currentDay: 6,
  nextDay: function () {
    setTimeout(function () {
      this.currentDay += 1;
      console.log(1, this.currentDay); // NaN
    });
  },
  nextDay2: function () {
    setTimeout(() => {
      this.currentDay += 1;
      console.log(2, this.currentDay); // 7
    });
  },
};

calendar.nextDay();
calendar.nextDay2();

const mod = {
  x: 42,
  getX: function () {
    return this.x;
  },
};

const mod2 = {
  x: 66,
  getX: function () {
    return this.x;
  },
};

const unboundGetX = mod.getX;
console.log(3, unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

const boundGetX = unboundGetX.bind(mod);
console.log(4, boundGetX());
// expected output: 42

const newGetX = mod.getX.apply(mod2);
console.log(5, newGetX);
