var x = 11;

const obj = {
  x: 22,
  fn: () => {
    console.log(this.x);
  },
};
obj.fn();

var fn = obj.fn;
fn();
