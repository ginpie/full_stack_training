function taxCalculation(income, table) {
  let total = 0;
  for (let i = 1; i < table.length; i++) {
    if (income < table[i][0]) {
      total += (income - table[i - 1][0]) * table[i - 1][1];
      return total;
    } else {
      total += table[i - 1][0] * table[i - 1][1];
      if (i === table.length - 1) {
        total += (income - table[i][0]) * table[i][1];
        return total;
      }
    }
  }
}

let taxTable = [
  [0, 0],
  [18201, 0.19],
  [37001, 0.325],
  [90001, 0.37],
  [180001, 0.45],
];

const income = 18000;

console.log("income: ", income, ", tax: ", taxCalculation(income, taxTable));
